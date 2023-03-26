import { loginArea,mainArea } from "./dom-selectors.js";

export function profileMenu() {
document.querySelector("#profile").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#profile img").classList.toggle("rotate");
    document.querySelector(".profile-area").classList.toggle("left");
  });
  
  document.querySelector(".menu-exit").addEventListener("click", () => {
    loginArea.style.display = "block";
    mainArea.style.display = "none";
    document.querySelector(".navbar").classList.add("d-none");
  });
}