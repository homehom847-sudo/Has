/* ===================================================
   SHOW / HIDE PASSWORD TOGGLE
   ===================================================
   Wires up every <button class="toggle-password"> on the
   page. Each one must have a data-target matching the id
   of the password input it controls, and contain two SVG
   icons: .icon-eye (shown while hidden) and .icon-eye-off
   (shown while visible).
   =================================================== */

document.addEventListener("DOMContentLoaded", () => {

  document
    .querySelectorAll(".toggle-password")
    .forEach(btn => {

      const input = document.getElementById(
        btn.getAttribute("data-target")
      );

      if (!input) return;

      const eyeIcon = btn.querySelector(".icon-eye");
      const eyeOffIcon = btn.querySelector(".icon-eye-off");

      btn.addEventListener("click", () => {

        const nowVisible = input.type === "password";

        input.type = nowVisible ? "text" : "password";

        btn.setAttribute(
          "aria-label",
          nowVisible ? "Hide password" : "Show password"
        );

        if (eyeIcon) eyeIcon.style.display = nowVisible ? "none" : "";
        if (eyeOffIcon) eyeOffIcon.style.display = nowVisible ? "" : "none";

      });

    });

});
