import { dataShowss } from "./dataShows.js";
import { dataBase } from "./database.js";
import { deletePageTable,employeeTableHeadCard } from "./dom-selectors.js";

export function deleteFeature() {
  document.querySelector("#delete-page button").addEventListener("click", () => {
      const deletePersonID = document.querySelector("#delete-page input").value;
      // dataBase.splice(deletePersonID-1,1);
      dataBase[deletePersonID - 1] = "";
      alert(`#${deletePersonID}-IDli insan sistemden silindi`);
      dataShowss(deletePageTable,dataBase,employeeTableHeadCard);
    });
}
