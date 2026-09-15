/* ===================================================
   SUSU JAMB PREP — shared app logic
   Firebase Auth + Firestore backed account/profile system
   (with a local cache so pages can still read data
   synchronously via SUSU.get(), same as before)
   =================================================== */

const SUSU = (() => {
  // Legacy key, kept only so the (currently unused/placeholder)
  // Google Sign-In path in loginWithGoogleProfile keeps working
  // exactly as it did before. Not used by the email/password flow.
  const ACCOUNTS_KEY = "susu_jamb_prep_accounts_v2";

  const SESSION_KEY = "susu_jamb_prep_session_v2"; // now stores the Firebase uid
  const CACHE_KEY = "susu_jamb_prep_cache_v3";       // local mirror of the Firestore doc
  const DEVICE_KEY = "susu_jamb_prep_device_id";
  const LEGACY_KEY = "susu_jamb_prep_state_v1";
  const MAX_DEVICES = 2;

  const defaults = {
    level: 1,
    streak: 0,
    xp: 0,

    // PROFILE
    name: "",
    email: "",
    photoURL: "",
    aimedScore: 320,
    currentScore: 0,
    whyText: "",
    course: "",
    institution: "",
    profileComplete: false,

    dailyChallengeDoneToday: false,
    lastStreakDate: null,

    weakAreas: [
      { subject: "Physics", pct: 0 },
      { subject: "Chemistry", pct: 0 },
      { subject: "Mathematics", pct: 0 },
      { subject: "English", pct: 0 }
    ],

    chat: [],
    testHistory: [],
    subjectResults: {}
  };

  /* ================================
     ACCOUNT STORAGE (legacy, Google-only)
     ================================ */

  function loadAccounts() {
    try {
      return JSON.parse(
        localStorage.getItem(ACCOUNTS_KEY) || "{}"
      );
    } catch (e) {
      return {};
    }
  }

  function saveAccounts(accounts) {
    localStorage.setItem(
      ACCOUNTS_KEY,
      JSON.stringify(accounts)
    );
  }

  function currentId() {
    return localStorage.getItem(SESSION_KEY);
  }

  /* ================================
     LOCAL CACHE (mirrors the Firestore
     doc for the signed-in user so
     SUSU.get() can stay synchronous)
     ================================ */

  function loadCache() {
    try {
      return JSON.parse(
        localStorage.getItem(CACHE_KEY) || "null"
      );
    } catch (e) {
      return null;
    }
  }

  function saveCache(uid, data) {
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ uid, data })
    );
  }

  function clearCache() {
    localStorage.removeItem(CACHE_KEY);
  }

  /* ================================
     DEVICE ID (per-browser, used for
     the 2-device sign-in limit)
     ================================ */

  function getDeviceId() {
    let id = localStorage.getItem(DEVICE_KEY);

    if (!id) {
      id =
        crypto.randomUUID
          ? crypto.randomUUID()
          : "dev_" +
            Date.now() +
            Math.random().toString(16).slice(2);

      localStorage.setItem(DEVICE_KEY, id);
    }

    return id;
  }

  /* ================================
     GET CURRENT USER
     ================================
     Firebase (email/password) accounts read from the
     local cache, which is kept in sync with Firestore.
     Legacy Google-only accounts (untouched) fall back
     to the old local accounts dict. */

  function get() {
    const id = currentId();

    if (!id) {
      return { ...defaults, loggedIn: false };
    }

    const cached = loadCache();

    if (cached && cached.uid === id) {
      return {
        ...defaults,
        ...cached.data,
        loggedIn: true
      };
    }

    const accounts = loadAccounts();
    const user = accounts[id];

    if (user) {
      return {
        ...defaults,
        ...user,
        loggedIn: true
      };
    }

    return { ...defaults, loggedIn: false };
  }

  /* ================================
     UPDATE CURRENT USER
     ================================
     Writes to the local cache immediately (so the UI
     stays fast/synchronous) and syncs the change to
     Firestore in the background. */

  function update(patch) {
    const id = currentId();

    if (!id) return get();

    const cached = loadCache();

    if (cached && cached.uid === id) {
      const merged = {
        ...defaults,
        ...cached.data,
        ...patch
      };

      saveCache(id, merged);

      if (db) {
        db.collection("users")
          .doc(id)
          .set(patch, { merge: true })
          .catch(() => {
            /* offline or blocked write — local cache still holds the change */
          });
      }

      return get();
    }

    // Legacy Google-only path (unchanged behavior)
    const accounts = loadAccounts();

    if (!accounts[id]) return get();

    accounts[id] = {
      ...defaults,
      ...accounts[id],
      ...patch
    };

    saveAccounts(accounts);

    return get();
  }

  /* ================================
     AUTH STATUS
     ================================ */

  function isLoggedIn() {
    return get().loggedIn;
  }

  function hasProfile() {
    return isLoggedIn() && !!get().profileComplete;
  }

  /* ================================
     DEVICE-LIMIT CHECK (runs on every
     guarded page load; if this device
     got bumped off by a 3rd sign-in,
     it gets logged out here)
     ================================ */

  function checkDeviceStillActive() {
    const id = currentId();
    const cached = loadCache();

    // Only applies to Firebase-backed (email/password) accounts
    if (!id || !cached || cached.uid !== id || !db) return;

    const deviceId = getDeviceId();

    db.collection("users")
      .doc(id)
      .get()
      .then(snap => {
        if (!snap.exists) return;

        const devices = snap.data().devices || [];
        const stillActive = devices.some(
          d => d.id === deviceId
        );

        if (!stillActive) {
          logout();

          window.location.replace(
            "login.html?bumped=1"
          );
        }
      })
      .catch(() => {
        /* offline — don't force a logout just because we couldn't check */
      });
  }

  /* ================================
     STREAK (DATE-BASED)
     ================================ */

  function todayKey() {
    const d = new Date();

    return (
      d.getFullYear() +
      "-" +
      String(d.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(d.getDate()).padStart(2, "0")
    );
  }

  function daysBetween(dateKeyA, dateKeyB) {
    const a = new Date(dateKeyA + "T00:00:00");
    const b = new Date(dateKeyB + "T00:00:00");

    return Math.round((b - a) / 86400000);
  }

  // Runs on every page load. If a new day has started since the
  // last completed challenge, clear the "done today" flag so the
  // user can extend their streak again. If more than one day was
  // skipped entirely, the streak is broken and resets to 0.
  function checkStreakReset() {
    if (!isLoggedIn()) return;

    const state = get();
    const today = todayKey();

    if (
      state.dailyChallengeDoneToday &&
      state.lastStreakDate !== today
    ) {
      update({ dailyChallengeDoneToday: false });
    }

    if (state.lastStreakDate && state.lastStreakDate !== today) {
      const gap = daysBetween(state.lastStreakDate, today);

      if (gap > 1 && state.streak > 0) {
        update({ streak: 0 });
      }
    }
  }

  // Called when the user finishes the Daily Challenge.
  // Increments the streak only once per calendar day.
  function completeDailyChallenge() {
    const state = get();
    const today = todayKey();

    if (
      state.dailyChallengeDoneToday &&
      state.lastStreakDate === today
    ) {
      return state; // already counted today
    }

    let newStreak = 1;

    if (state.lastStreakDate) {
      const gap = daysBetween(state.lastStreakDate, today);

      if (gap === 1) {
        newStreak = (state.streak || 0) + 1;
      }
    }

    return update({
      dailyChallengeDoneToday: true,
      lastStreakDate: today,
      streak: newStreak
    });
  }

  // Run the reset check immediately (not on DOMContentLoaded) so
  // any page's own script sees the corrected streak/flag as soon
  // as it reads SUSU.get().
  checkStreakReset();

  /* ================================
     SIGN UP
     ================================
     Creates a real Firebase Auth account (password is
     handled securely by Firebase, never stored by us) and
     a matching profile document in Firestore so the account
     is visible from any device/browser. */

  async function signup({
    name,
    email,
    password
  }) {
    const normalizedEmail =
      email.trim().toLowerCase();

    let cred;

    try {
      cred = await auth.createUserWithEmailAndPassword(
        normalizedEmail,
        password
      );
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        throw new Error(
          "An account with that email already exists."
        );
      }

      if (err.code === "auth/invalid-email") {
        throw new Error(
          "Please enter a valid email address."
        );
      }

      if (err.code === "auth/weak-password") {
        throw new Error(
          "Password must be at least 6 characters."
        );
      }

      throw new Error(
        err.message || "Could not create the account."
      );
    }

    const uid = cred.user.uid;

    const profile = {
      ...defaults,

      name: name.trim(),

      email: normalizedEmail,

      createdAt: Date.now(),

      devices: [
        { id: getDeviceId(), lastActive: Date.now() }
      ]
    };

    await db.collection("users").doc(uid).set(profile);

    saveCache(uid, profile);

    localStorage.setItem(SESSION_KEY, uid);

    return get();
  }

  /* ================================
     LOGIN
     ================================
     Verifies credentials with Firebase Auth, pulls the
     user's profile from Firestore, and enforces the
     2-device limit (oldest device gets bumped off). */

  async function login(
    email,
    password
  ) {
    const normalizedEmail =
      email.trim().toLowerCase();

    let cred;

    try {
      cred = await auth.signInWithEmailAndPassword(
        normalizedEmail,
        password
      );
    } catch (err) {
      if (
        err.code === "auth/user-not-found"
      ) {
        throw new Error(
          "No account was found with that email."
        );
      }

      if (
        err.code === "auth/wrong-password" ||
        err.code === "auth/invalid-credential"
      ) {
        throw new Error("Incorrect password.");
      }

      throw new Error(
        err.message || "Login failed."
      );
    }

    const uid = cred.user.uid;
    const docRef = db.collection("users").doc(uid);
    const snap = await docRef.get();

    const data = snap.exists
      ? snap.data()
      : { ...defaults };

    const deviceId = getDeviceId();

    const devices = Array.isArray(data.devices)
      ? data.devices.slice()
      : [];

    const existingDevice = devices.find(
      d => d.id === deviceId
    );

    if (existingDevice) {
      existingDevice.lastActive = Date.now();
    } else {
      if (devices.length >= MAX_DEVICES) {
        // Bump the least-recently-active device.
        devices.sort(
          (a, b) => a.lastActive - b.lastActive
        );
        devices.shift();
      }

      devices.push({
        id: deviceId,
        lastActive: Date.now()
      });
    }

    await docRef.set(
      { devices },
      { merge: true }
    );

    const merged = {
      ...defaults,
      ...data,
      devices
    };

    saveCache(uid, merged);

    localStorage.setItem(SESSION_KEY, uid);

    return get();
  }

  /* ================================
     GOOGLE SIGN-IN
     ================================
     Finds an existing account by email, or creates a new one
     (no password — the account is flagged provider: "google").
     Google has already verified the email, so no password
     check is needed either way. */

  function loginWithGoogleProfile({
    name,
    email,
    photoURL
  }) {
    const normalizedEmail =
      email.trim().toLowerCase();

    const accounts = loadAccounts();

    const existing =
      Object.entries(accounts)
        .find(
          ([, user]) =>
            user.email ===
            normalizedEmail
        );

    if (existing) {

      const [id] = existing;

      localStorage.setItem(
        SESSION_KEY,
        id
      );

      return get();
    }

    const id =
      crypto.randomUUID
        ? crypto.randomUUID()
        : "user_" +
          Date.now() +
          Math.random()
            .toString(16)
            .slice(2);

    accounts[id] = {
      ...defaults,

      name: (name || "").trim(),

      email: normalizedEmail,

      photoURL: photoURL || "",

      provider: "google",

      passwordHash: null,

      createdAt: Date.now()
    };

    saveAccounts(accounts);

    localStorage.setItem(
      SESSION_KEY,
      id
    );

    return get();
  }

  /* ================================
     LOGOUT
     ================================ */

  function logout() {
    const id = currentId();
    const cached = loadCache();

    // Free up this device's slot in Firestore (best effort).
    if (id && cached && cached.uid === id && db) {
      const deviceId = getDeviceId();

      db.collection("users")
        .doc(id)
        .get()
        .then(snap => {
          if (!snap.exists) return;

          const devices = (
            snap.data().devices || []
          ).filter(d => d.id !== deviceId);

          return db.collection("users")
            .doc(id)
            .set({ devices }, { merge: true });
        })
        .catch(() => {});
    }

    if (typeof auth !== "undefined" && auth) {
      auth.signOut().catch(() => {});
    }

    localStorage.removeItem(SESSION_KEY);
    clearCache();
  }

  /* ================================
     SAVE PROFILE
     ================================ */

  function saveProfile(profile) {
    return update({
      ...profile,
      profileComplete: true
    });
  }

  /* ================================
     SAVE TEST RESULT
     ================================ */

  function saveTestResult(result) {
    const state = get();

    if (!state.loggedIn) {
      return state;
    }

    const history =
      Array.isArray(state.testHistory)
        ? state.testHistory.slice()
        : [];

    history.push({
      ...result,
      savedAt: Date.now()
    });

    // Keep latest 20 tests
    while (history.length > 20) {
      history.shift();
    }

    return update({
      testHistory: history
    });
  }

  /* ================================
     SAVE JAMB MOCK SCORE
     ================================ */

  function setJambMockScore(
    score,
    meta = {}
  ) {
    const safeScore =
      Math.max(
        0,
        Math.min(
          400,
          Math.round(
            Number(score) || 0
          )
        )
      );

    return update({
      currentScore: safeScore,

      latestMock: {
        score: safeScore,
        ...meta,
        savedAt: Date.now()
      }
    });
  }

  /* ================================
     SAVE SUBJECT RESULT
     ================================ */

  function saveSubjectResult(
    subject,
    result
  ) {
    const state = get();

    const subjectResults = {
      ...(state.subjectResults || {})
    };

    subjectResults[subject] = {
      ...result,
      savedAt: Date.now()
    };

    return update({
      subjectResults
    });
  }

  /* ================================
     IMAGE UPLOAD
     ================================ */

  function readImageAsDataUrl(
    file,
    maxSize = 256
  ) {
    return new Promise(
      (resolve, reject) => {

        if (!file) {
          return resolve("");
        }

        if (
          !file.type.startsWith("image/")
        ) {
          return reject(
            new Error(
              "Please choose an image file."
            )
          );
        }

        const reader =
          new FileReader();

        reader.onerror = () =>
          reject(
            new Error(
              "Could not read the image."
            )
          );

        reader.onload = () => {

          const img =
            new Image();

          img.onload = () => {

            const scale =
              Math.min(
                1,
                maxSize /
                  Math.max(
                    img.width,
                    img.height
                  )
              );

            const canvas =
              document.createElement(
                "canvas"
              );

            canvas.width =
              Math.max(
                1,
                Math.round(
                  img.width * scale
                )
              );

            canvas.height =
              Math.max(
                1,
                Math.round(
                  img.height * scale
                )
              );

            const ctx =
              canvas.getContext(
                "2d"
              );

            ctx.drawImage(
              img,
              0,
              0,
              canvas.width,
              canvas.height
            );

            resolve(
              canvas.toDataURL(
                "image/jpeg",
                0.82
              )
            );
          };

          img.onerror = () =>
            reject(
              new Error(
                "That image could not be loaded."
              )
            );

          img.src = reader.result;
        };

        reader.readAsDataURL(file);
      }
    );
  }

  /* ================================
     TOAST
     ================================ */

  function toast(msg) {

    let el =
      document.querySelector(".toast");

    if (!el) {

      el =
        document.createElement("div");

      el.className = "toast";

      document.body.appendChild(el);
    }

    el.textContent = msg;

    el.classList.add("show");

    clearTimeout(el._t);

    el._t =
      setTimeout(
        () =>
          el.classList.remove("show"),
        2200
      );
  }

  /* ================================
     PAGE GUARD
     ================================ */

  function guardPage() {

    const page =
      document.body.getAttribute(
        "data-page"
      );

    const publicPages = [
      "login",
      "signup"
    ];

    if (
      publicPages.includes(page)
    ) {

      if (isLoggedIn()) {

        window.location.replace(
          hasProfile()
            ? "index.html"
            : "profile-setup.html"
        );
      }

      return;
    }

    if (
      page === "profile-setup"
    ) {

      if (!isLoggedIn()) {

        window.location.replace(
          "login.html"
        );

      } else if (hasProfile()) {

        window.location.replace(
          "profile.html"
        );
      }

      return;
    }

    if (!isLoggedIn()) {

      window.location.replace(
        "login.html"
      );

      return;
    }

    if (!hasProfile()) {

      window.location.replace(
        "profile-setup.html"
      );
    }
  }

  /* ================================
     NAVIGATION
     ================================ */

  function markNavActive() {

    const page =
      document.body.getAttribute(
        "data-page"
      );

    document
      .querySelectorAll(".nav-item")
      .forEach(a => {

        a.classList.toggle(
          "active",
          a.getAttribute(
            "data-nav"
          ) === page
        );

      });
  }

  /* ================================
     STREAK BADGE (any page)
     ================================ */

  function renderStreakBadge() {
    const el = document.getElementById("streakBadge");

    if (!el) return;

    const streak = get().streak || 0;

    el.textContent = streak + " Day Streak";
  }

  // New circular thunderbolt chip (home page topbar) —
  // shows just the number, no "Day Streak" label.
  function renderStreakChip() {
    const el = document.getElementById("streakCount");

    if (!el) return;

    el.textContent = get().streak || 0;
  }

  /* ================================
     START APP
     ================================ */

  document.addEventListener(
    "DOMContentLoaded",
    () => {

      guardPage();

      markNavActive();

      renderStreakBadge();

      renderStreakChip();

      // Non-blocking: if a 3rd device signed in and bumped
      // this one, this will catch it and log the user out.
      checkDeviceStillActive();

    }
  );

  /* ================================
     PUBLIC API
     ================================ */

  return {

    get,
    update,

    isLoggedIn,
    hasProfile,

    signup,
    login,
    loginWithGoogleProfile,
    logout,

    saveProfile,

    completeDailyChallenge,

    saveTestResult,
    setJambMockScore,
    saveSubjectResult,

    readImageAsDataUrl,

    toast
  };

})();