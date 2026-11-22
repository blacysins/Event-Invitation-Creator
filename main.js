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
    return;
  }

  const eventName = form.querySelector("#event-name").value.trim();
  const eventDate = form.querySelector("#event-date").value;
  const startTime = form.querySelector("#start-time").value;
  const endTime = form.querySelector("#end-time").value;
  const eventDescription = form
    .querySelector("#event-description")
    .value.trim();
  const eventLocation = form.querySelector("#event-location").value.trim();

  const inviteName = document.querySelector("#invite-name");
  const inviteDate = document.querySelector("#invite-date");
  const inviteSchedule = document.querySelector("#invite-schedule");
  const inviteLocation = document.querySelector("#invite-location");
  const inviteDescription = document.querySelector("#invite-description");
  inviteName.textContent = eventName;
  inviteDate.textContent = eventDate;
  inviteSchedule.textContent = startTime + " - " + endTime;
  inviteLocation.textContent = `📍 ${eventLocation}`;
  inviteDescription.textContent = eventDescription;

  sectionForm.classList.add("hide");
  sectionInvitation.classList.remove("hide");
});

closeBtn.addEventListener("click", () => {
  backgroundOverlay.classList.remove("show");
});

backgroundOverlay.addEventListener("click", (e) => {
  if (e.target === backgroundOverlay) {
    backgroundOverlay.classList.remove("show");
  }
});
