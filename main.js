const sectionForm = document.querySelector(".form");
const sectionInvitation = document.querySelector(".invitation");
const form = document.querySelector("#event-form");
const backgroundOverlay = document.querySelector("#background-overlay");
const closeBtn = document.querySelector("#closeBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fields = form.querySelectorAll("input, textarea");

  let hasEmpty = false;
  fields.forEach((field) => {
    if (field.value.trim() === "") {
      hasEmpty = true;
    }
  });

  if (hasEmpty) {
    backgroundOverlay.classList.add("show");
  } else {
  }
});

closeBtn.addEventListener("click", () => {
  backgroundOverlay.classList.remove("show");
});

backgroundOverlay.addEventListener("click", (e) => {
  if (e.target === backgroundOverlay) {
    backgroundOverlay.classList.remove("show");
  }
});
