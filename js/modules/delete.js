import { dataShowss } from "./dataShows.js";
import { dataBase } from "./database.js";
import { deletePageTable, employeeTableHeadCard,deletePage } from "./dom-selectors.js";

export function deleteFeature() {
  document
    .querySelector("#delete-page button")
    .addEventListener("click", () => {
      const deleteModal = document.querySelector("#deleteModal");
      const deletePersonID = document.querySelector("#delete-page input").value;
      deletePageTable.classList.add("d-none");
      deleteModal.classList.remove("d-none");
      document.querySelector("#modalCloseBtn").addEventListener("click", () => {
        deleteModal.classList.add("d-none");
        deletePageTable.classList.remove("d-none");
      });
      document.querySelector("#modalSaveBtn").addEventListener("click", () => {
        dataBase[deletePersonID - 1] = "";
        alert(`#${deletePersonID}-IDli insan sistemden silindi`);
        dataShowss(deletePageTable, dataBase, employeeTableHeadCard);
        deleteModal.classList.add("d-none");
        deletePageTable.classList.remove("d-none");
      });
    });
}
