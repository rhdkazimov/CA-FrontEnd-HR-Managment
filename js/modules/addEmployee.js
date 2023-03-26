import { dataBase } from "./database.js";
import { mainArea,addArea,addBtn,employeeTable,addEmployee,employeeTableHeadCard } from "./dom-selectors.js";
import { dataShowss } from "./dataShows.js";

export function addEmployeeFeature() {
    addBtn.addEventListener("click", () => {
        const addEmployeeDuty = document.querySelector("#employeeDuty").value;
        if (addEmployee[0].value === "") {
          alert("Ad bos ola bilmez");
        } else if (addEmployee[1].value === "") {
          alert("Soyad bos ola bilmez");
        } else if (addEmployee[2].value === "") {
          alert("Maas bos ola bilmez");
        } else if (addEmployeeDuty === "none") {
          alert("Vezife bos ola bilmez");
        } else {
          dataBase.push({
            id: dataBase.length + 1,
            name: `${addEmployee[0].value}`,
            surname: `${addEmployee[1].value}`,
            salary: Number(addEmployee[2].value),
            duty: `${addEmployeeDuty}`,
          });
          alert("Isci Elave Olundu");
          dataShowss(employeeTable,dataBase,employeeTableHeadCard);
          addArea.style.display = "none";
          mainArea.style.display = "block";
        }
      });
}