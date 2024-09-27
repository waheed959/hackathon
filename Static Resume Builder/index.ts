const work = document.querySelector("#work") as HTMLElement;
const workText = document.querySelector("#workText");
const education = document.querySelector("#education") as HTMLElement;
const educationText = document.querySelector(
  "#educationText"
) as HTMLTextAreaElement;
const skill = document.querySelector("#skill") as HTMLElement;
const skillText = document.querySelector("#skillText") as HTMLTextAreaElement;


skill.addEventListener("click", () => {
  skillText.classList.toggle("hidden");
});

education.addEventListener("click", () => {
  educationText.classList.toggle("hidden");
});
work.addEventListener("click", () => {
  workText?.classList.toggle("hidden");
});
