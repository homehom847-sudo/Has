if (
  new URLSearchParams(window.location.search).get(
    "bumped"
  ) === "1"
) {
  const notice =
    document.getElementById("loginError");

  if (notice) {
    notice.textContent =
      "You were signed out because your account reached its 2-device limit and this device was signed in elsewhere.";
  }
}

document
.getElementById("loginForm")
.addEventListener("submit", async e => {

e.preventDefault();

const email =
  document
    .getElementById("email")
    .value
    .trim();

const password =
  document
    .getElementById("password")
    .value;

const error =
  document.getElementById("loginError");

const btn =
  e.target.querySelector(
    "button[type=submit]"
  );

error.textContent = "";

/* ================================
   VALIDATION
   ================================ */

if (!email) {
  error.textContent =
    "Please enter your email address.";
  return;
}

if (password.length < 6) {
  error.textContent =
    "Password must be at least 6 characters.";
  return;
}

/* ================================
   LOGIN
   ================================ */

btn.disabled = true;
btn.textContent = "Logging in…";

try {

  const user =
    await SUSU.login(
      email,
      password
    );

  /*
   * If the student has already
   * completed their profile, go home.
   *
   * Otherwise, send them to
   * profile setup.
   */

  if (user.profileComplete) {

    window.location.href =
      "index.html";

  } else {

    window.location.href =
      "profile-setup.html";
  }

} catch (err) {

  error.textContent =
    err.message ||
    "Login failed.";

  btn.disabled = false;
  btn.textContent = "Log In";

}

});