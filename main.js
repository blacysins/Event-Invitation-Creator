const form = document.querySelector("#event-form button");
const backgroundOverlay = document.querySelector("#background-overlay");
const closeBtn = document.querySelector("#closeBtn");

form.addEventListener("click", (e) => {
  const fields = document.querySelectorAll("input, textarea");

  let hasEmpty = false;
  fields.forEach((field) => {
    if (field.value.trim() == "") {
      hasEmpty = true;
    }
  });

  if (hasEmpty) {
    e.preventDefault();
    backgroundOverlay.classList.add("show");
  }
});

closeBtn.addEventListener("click", (e) => {
  backgroundOverlay.classList.remove("show");
});

backgroundOverlay.addEventListener("click", (e) => {
  if (e.target == backgroundOverlay) {
    backgroundOverlay.classList.remove("show");
  }
});
