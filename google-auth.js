/* ===================================================
   GOOGLE SIGN-IN — shared logic for login.html + signup.html
   ===================================================
   Uses Google Identity Services (the accounts.google.com/gsi/client
   script tag included on both pages) to render a "Sign in with
   Google" button and handle the result.

   NOTE: This is a client-side-only prototype (no backend server).
   The ID token Google returns is decoded here in the browser to
   read the name/email/photo — it is NOT cryptographically verified.
   That's fine for local-storage demo accounts, but a real production
   app should send the token to a server and verify it there before
   trusting it.
   =================================================== */

function decodeGoogleCredential(token) {
  const payload = token.split(".")[1];

  const json = decodeURIComponent(
    atob(
      payload
        .replace(/-/g, "+")
        .replace(/_/g, "/")
    )
      .split("")
      .map(
        c =>
          "%" +
          c
            .charCodeAt(0)
            .toString(16)
            .padStart(2, "0")
      )
      .join("")
  );

  return JSON.parse(json);
}

function handleGoogleCredential(response) {

  const errorEl =
    document.getElementById("loginError") ||
    document.getElementById("signupError");

  try {

    const profile =
      decodeGoogleCredential(response.credential);

    if (!profile.email) {
      throw new Error(
        "Google did not return an email address."
      );
    }

    const user =
      SUSU.loginWithGoogleProfile({
        name: profile.name || "",
        email: profile.email,
        photoURL: profile.picture || ""
      });

    if (user.profileComplete) {

      window.location.href = "index.html";

    } else {

      window.location.href = "profile-setup.html";
    }

  } catch (err) {

    if (errorEl) {
      errorEl.textContent =
        err.message ||
        "Google sign-in failed. Please try again.";
    }
  }
}

window.addEventListener("load", () => {

  if (
    typeof GOOGLE_CLIENT_ID === "undefined" ||
    GOOGLE_CLIENT_ID.indexOf("YOUR_GOOGLE_CLIENT_ID") === 0
  ) {
    const target =
      document.getElementById("googleSignInDiv");

    if (target) {
      target.innerHTML =
        '<div class="google-btn-placeholder">' +
        "Add your Google Client ID in google-config.js to enable this button." +
        "</div>";
    }

    return;
  }

  if (!window.google || !window.google.accounts) return;

  google.accounts.id.initialize({
    client_id: GOOGLE_CLIENT_ID,
    callback: handleGoogleCredential
  });

  const target =
    document.getElementById("googleSignInDiv");

  if (target) {
    google.accounts.id.renderButton(target, {
      theme: "outline",
      size: "large",
      width: 320,
      text: "continue_with"
    });
  }
});
