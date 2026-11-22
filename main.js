const sectionForm = document.querySelector(".form");
const sectionInvitation = document.querySelector(".invitation");
const form = document.querySelector("#event-form");
const backgroundOverlay = document.querySelector("#background-overlay");
const closeBtn = document.querySelector("#closeBtn");

function formatDate(dateString) {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-IN", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatTime(timeString) {
  let [hours, minutes] = timeString.split(":");
  let hour = Number(hours);
  let period = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  return hour + ":" + minutes + " " + period;
}

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
  inviteDate.textContent = formatDate(eventDate);
  inviteSchedule.textContent =
    formatTime(startTime) + " - " + formatTime(endTime);
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
