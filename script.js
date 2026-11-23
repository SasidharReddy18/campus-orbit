// Client-side feedback for the Campus Orbit interest form.

const activityForm = document.querySelector("#activityForm");
const feedbackLine = document.querySelector("#formFeedback");

activityForm.addEventListener("submit", (submission) => {
  submission.preventDefault();

  const details = new FormData(activityForm);
  const student = String(details.get("fullName") || "").trim();

  if (!student) {
    feedbackLine.textContent =
      "Please enter your name before sending the form.";
    return;
  }

  feedbackLine.textContent =
    `Thanks, ${student}! Your activity interest has been recorded on this page.`;

  activityForm.reset();
});