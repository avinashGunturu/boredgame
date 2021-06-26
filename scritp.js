const url = "https://www.boredapi.com/api/activity";
const activity = document.querySelector(".activity");
const btn = document.getElementById("button");
const mainContainer = document.querySelector(".main-container");
var res = "";

btn.addEventListener("click", (e) => {
  e.preventDefault();
  getactivity();
  mainContainer.classList.remove("moving");
});
async function getactivity() {
  const res = await fetch(url);
  const data = await res.json();
  let suggestedActivity = data.activity;
  mainContainer.classList.add("moving");
  activity.innerText = suggestedActivity;
}
