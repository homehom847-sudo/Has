const setupState =
  SUSU.get();

const nameInput =
  document.getElementById(
    "name"
  );

const scoreInput =
  document.getElementById(
    "aimedScore"
  );

const courseInput =
  document.getElementById(
    "course"
  );

const whyInput =
  document.getElementById(
    "whyText"
  );

const institutionInput =
  document.getElementById(
    "institution"
  );

const photoInput =
  document.getElementById(
    "photo"
  );

const avatar =
  document.getElementById(
    "setupAvatar"
  );

let photoURL =
  setupState.photoURL || "";


/* LOAD EXISTING DATA */

nameInput.value =
  setupState.name || "";

scoreInput.value =
  setupState.aimedScore || 320;

courseInput.value =
  setupState.course || "";

whyInput.value =
  setupState.whyText || "";

institutionInput.value =
  setupState.institution || "";


/* SHOW PROFILE PICTURE */

function renderAvatar() {

  avatar.innerHTML =
    photoURL
      ? `<img
           src="${photoURL}"
           alt="Profile preview"
         >`
      : "<span>+</span>";
}

renderAvatar();


/* SELECT PHOTO */

photoInput.addEventListener(
  "change",
  async () => {

    const file =
      photoInput.files?.[0];

    if (!file) return;

    try {

      photoURL =
        await SUSU.readImageAsDataUrl(
          file
        );

      renderAvatar();

    } catch (err) {

      document.getElementById(
        "profileSetupError"
      ).textContent =
        err.message;
    }

  }
);


/* SAVE PROFILE */

document
  .getElementById(
    "profileSetupForm"
  )
  .addEventListener(
    "submit",
    async e => {

      e.preventDefault();

      const error =
        document.getElementById(
          "profileSetupError"
        );

      const btn =
        document.getElementById(
          "saveProfileBtn"
        );

      const score =
        Number(
          scoreInput.value
        );

      error.textContent = "";


      /* VALIDATION */

      if (
        !nameInput.value.trim()
      ) {

        error.textContent =
          "Please enter your name.";

        return;
      }

      if (
        !Number.isInteger(score) ||
        score < 0 ||
        score > 400
      ) {

        error.textContent =
          "Your target score must be between 0 and 400.";

        return;
      }

      if (
        !whyInput.value.trim()
      ) {

        error.textContent =
          "Tell us why you want to score high.";

        return;
      }


      btn.disabled = true;

      btn.textContent =
        "Saving…";


      try {

        SUSU.saveProfile({

          name:
            nameInput.value.trim(),

          aimedScore:
            score,

          course:
            courseInput.value.trim(),

          whyText:
            whyInput.value.trim(),

          institution:
            institutionInput.value.trim(),

          photoURL

        });


        window.location.href =
          "index.html";

      } catch (err) {

        error.textContent =
          "Could not save your profile.";

        btn.disabled = false;

        btn.textContent =
          "Save Profile & Continue";
      }

    }
  );