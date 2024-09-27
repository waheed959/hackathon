var work = document.querySelector("#work");
var workText = document.querySelector("#workText");
var education = document.querySelector("#education");
var educationText = document.querySelector("#educationText");
var skill = document.querySelector("#skill");
var skillText = document.querySelector("#skillText");
// // Toggle visibility when the button is clicked
skill.addEventListener("click", function () {
    skillText.classList.toggle("hidden");
});
education.addEventListener("click", function () {
    educationText.classList.toggle("hidden");
});
work.addEventListener("click", function () {
    workText === null || workText === void 0 ? void 0 : workText.classList.toggle("hidden");
});
