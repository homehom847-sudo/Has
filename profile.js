function renderProfile() {

  const state =
    SUSU.get();


  /* NAME */

  document.getElementById(
    "profName"
  ).textContent =
    state.name || "Student";


  /* COURSE */

  document.getElementById(
    "profileSub"
  ).textContent =
    state.course
      ? `${state.course} · SUSU JAMB PREP Student`
      : "SUSU JAMB PREP Student";


  /* PROFILE PICTURE */

  const avatar =
    document.getElementById(
      "profileAvatar"
    );

  if (state.photoURL) {

    avatar.innerHTML =
      `<img
        src="${state.photoURL}"
        alt="Profile picture"
      >`;

  }


  /* TARGET SCORE */

  document.getElementById(
    "aimedScoreDisplay"
  ).textContent =
    state.aimedScore || 320;


  /* MOTIVATION */

  document.getElementById(
    "whyText"
  ).textContent =
    '"' +
    (state.whyText || "") +
    '"';


  /* =========================
     GOAL PROGRESS
     ========================= */

  const target =
    Math.max(
      1,
      Number(state.aimedScore) || 1
    );

  const current =
    Math.max(
      0,
      Number(state.currentScore) || 0
    );


  const pct =
    Math.min(
      100,
      Math.round(
        (current / target) * 100
      )
    );


  /* 247 / 320 */

  document.getElementById(
    "scoreFraction"
  ).textContent =
    current +
    " / " +
    target;


  /* 77% */

  document.getElementById(
    "scorePct"
  ).textContent =
    pct + "%";


  /* PROGRESS BAR */

  document.getElementById(
    "goalBar"
  ).style.width =
    pct + "%";


  /* PROGRESS MESSAGE */

  const help =
    document.getElementById(
      "progressHelp"
    );


  if (current <= 0) {

    help.textContent =
      "Take a JAMB mock to update your current score.";

  } else if (
    current >= target
  ) {

    help.textContent =
      "🎉 You have reached your target score!";

  } else {

    help.textContent =
      (
        target - current
      ) +
      " points to go to reach your target.";
  }
}


/* =========================
   EDIT PROFILE
   ========================= */

function populateEditForm() {

  const state =
    SUSU.get();

  document.getElementById(
    "editName"
  ).value =
    state.name || "";

  document.getElementById(
    "editScore"
  ).value =
    state.aimedScore || 320;

  document.getElementById(
    "editCourse"
  ).value =
    state.course || "";

  document.getElementById(
    "editWhy"
  ).value =
    state.whyText || "";

  document.getElementById(
    "editInstitution"
  ).value =
    state.institution || "";
}


/* FIRST RENDER */

renderProfile();


/* PRIVACY */

document
  .getElementById(
    "privacyLink"
  )
  .addEventListener(
    "click",
    () => {

      window.location.href =
        "privacy-policy.html";

    }
  );


/* =========================
   OPEN / CLOSE EDIT PROFILE
   (a full-screen "page" overlay,
   not an inline slide-down)
   ========================= */

function openEditProfile() {

  populateEditForm();

  document.getElementById(
    "editProfileCard"
  ).classList.add("open");

  document.body.classList.add(
    "edit-open"
  );
}

function closeEditProfile() {

  document.getElementById(
    "editProfileCard"
  ).classList.remove("open");

  document.body.classList.remove(
    "edit-open"
  );
}


/* EDIT BUTTON */

document
  .getElementById(
    "editProfileBtn"
  )
  .addEventListener(
    "click",
    () => {

      openEditProfile();

    }
  );


/* BACK ARROW (top of the Edit Profile screen) */

document
  .getElementById(
    "editBackBtn"
  )
  .addEventListener(
    "click",
    () => {

      closeEditProfile();

    }
  );


/* CANCEL EDIT */

document
  .getElementById(
    "cancelEditBtn"
  )
  .addEventListener(
    "click",
    () => {

      closeEditProfile();

    }
  );


/* SAVE EDITED PROFILE */

document
  .getElementById(
    "editProfileForm"
  )
  .addEventListener(
    "submit",
    async e => {

      e.preventDefault();

      const error =
        document.getElementById(
          "editError"
        );

      const score =
        Number(
          document.getElementById(
            "editScore"
          ).value
        );

      error.textContent = "";


      if (
        !Number.isInteger(score) ||
        score < 0 ||
        score > 400
      ) {

        error.textContent =
          "Target score must be between 0 and 400.";

        return;
      }


      let photoURL =
        SUSU.get().photoURL || "";

      const file =
        document.getElementById(
          "editPhoto"
        ).files?.[0];


      try {

        if (file) {

          photoURL =
            await SUSU.readImageAsDataUrl(
              file
            );
        }


        SUSU.update({

          name:
            document.getElementById(
              "editName"
            ).value.trim(),

          aimedScore:
            score,

          course:
            document.getElementById(
              "editCourse"
            ).value.trim(),

          whyText:
            document.getElementById(
              "editWhy"
            ).value.trim(),

          institution:
            document.getElementById(
              "editInstitution"
            ).value.trim(),

          photoURL,

          profileComplete: true

        });


        closeEditProfile();


        renderProfile();


        SUSU.toast(
          "Profile updated"
        );

      } catch (err) {

        error.textContent =
          err.message ||
          "Could not update the profile.";
      }

    }
  );


/* =========================
   LOGOUT
   ========================= */

document
  .getElementById(
    "logoutBtn"
  )
  .addEventListener(
    "click",
    () => {

      SUSU.logout();

      window.location.href =
        "login.html";

    }
  );