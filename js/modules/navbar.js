import { navLinks,mainArea,addArea,deletePage,deletePageTable,employeeTable,employeeTableHeadCard } from "./dom-selectors.js";
import { dataShowss } from "./dataShows.js";
import { dataBase } from "./database.js";

export function navbar() {
navLinks.forEach((navLink) => {
    navLink.addEventListener("click", (e) => {
      e.preventDefault();
      if (navLink.innerText === "Ana Sehife") {
        mainArea.style.display = "block";
        addArea.style.display = "none";
        deletePage.style.display = "none";
        dataShowss(employeeTable, dataBase, employeeTableHeadCard);
      } else if (navLink.innerText === "Elave et") {
        mainArea.style.display = "none";
        addArea.style.display = "block";
        deletePage.style.display = "none";
      } else if (navLink.innerText === "Sil") {
        deletePage.style.display = "block";
        mainArea.style.display = "none";
        addArea.style.display = "none";
        dataShowss(deletePageTable, dataBase, employeeTableHeadCard);
      }
    });
  });
}