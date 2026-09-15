document
.getElementById("signupForm")
.addEventListener("submit", async e => {

e.preventDefault();

const name =
  document
    .getElementById("name")
    .value
    .trim();

const email =
  document
    .getElementById("email")
    .value
    .trim();

const password =
  document
    .getElementById("password")
    .value;

const confirm =
  document
    .getElementById("confirmPassword")
    .value;

const error =
  document.getElementById("signupError");

const btn =
  e.target.querySelector(
    "button[type='submit']"
  );

error.textContent = "";

/* ================================
   VALIDATION
   ================================ */

if (name.length < 2) {
  error.textContent =
    "Please enter your full name.";
  return;
}

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

if (password !== confirm) {
  error.textContent =
    "The passwords do not match.";
  return;
}

/* ================================
   CREATE ACCOUNT
   ================================ */

btn.disabled = true;
btn.textContent = "Creating account…";

try {

  await SUSU.signup({
    name,
    email,
    password
  });

  /*
   * The account has now been created
   * and the student has automatically
   * been logged in by SUSU.signup().
   *
   * Temporary destination:
   * Home page.
   *
   * We can change this to
   * profile-setup.html later.
   */

  window.location.href = "index.html";

} catch (err) {

  error.textContent =
    err.message ||
    "Could not create the account.";

  btn.disabled = false;
  btn.textContent = "Create Account";

}

});