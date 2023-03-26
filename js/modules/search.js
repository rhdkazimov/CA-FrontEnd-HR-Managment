import { dataBase } from "./database.js";
import { searchBtn,employeeTable,deletePageTable,employeeTableHeadCard } from "./dom-selectors.js";
import { fieldsEdits } from "./fieldsEdit.js";

//search with btn
export function search() {
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert(
      "Xahis Olunur axtardiginiz iscininin adini ve ya soyadini tam ve duzgun daxil etdiyinizden emin olun"
    );
    employeeTable.innerHTML = employeeTableHeadCard;
    deletePageTable.innerHTML = employeeTableHeadCard;
    const searchInput = document.querySelector("#searchInput");
    dataBase.forEach(function (person) {
      if (
        person.name === searchInput.value ||
        person.surname === searchInput.value
      ) {
        let searchTableCard = `
        <tr>
                  <th scope="row">${person.id}</th>
                  <td>
                    <span class="name-input-items">${person.name}</span>
                    <span class="name-item-input d-none"
                      ><input type="text" class="" />
                      <button class="btn btn-info">Edit</button></span
                    >
                  </td>
                  <td><span class="surname-input-items">${person.surname}</span>
                  <span class="surname-item-input d-none"
                    ><input type="text" class="" />
                    <button class="btn btn-info">Edit</button></span
                  ></td>
                  <td><span class="salary-input-items">${person.salary}</span>
                  <span class="salary-item-input d-none"
                    ><input type="text" class="" />
                    <button class="btn btn-info">Edit</button></span
                  ></td>
                  <td><span class="duty-input-items">${person.duty}</span>
                  <span class="duty-item-input d-none"
                    ><select name="employeeDuty" id="addEmployeeDuty">
                    <option value="none" selected disabled>Please Select</option>
                    <option value="Developer">Developer</option>
                    <option value="Tester">Tester</option>
                    <option value="ProductOwner">ProductOwner</option>
                    <option value="Manager">Manager</option>
                    <option value="Designer">Designer</option>
                  </select>
                    <button class="btn btn-info">Edit</button></span
                  ></td>
                </tr>
        `;
        employeeTable.innerHTML += searchTableCard;
        deletePageTable.innerHTML += searchTableCard;
      }
    });
    fieldsEdits(dataBase);
  });
}
  //#region search v2
  
  // const searchInput = document.querySelector("#searchInput");
  // searchInput.addEventListener("keyup",function () {
  //   employeeTable.innerHTML = employeeTableHeadCard;
  //   searchInput.addEventListener("change",()=>{console.log("salam");})
  //       for (let i = 0; i < searchInput.value.length; i++) {
  //         if (
  //           searchInput.value[i] === dataBase[i].name[i] ||
  //           searchInput.value[i] === dataBase[i].surname[i]
  //         ) {
  //           employeeTable.innerHTML += `
  //          <tr>
  //                    <th scope="row">${dataBase[i].id}</th>
  //                    <td>
  //                      <span class="name-input-items">${dataBase[i].name}</span>
  //                      <span class="name-item-input d-none"
  //                        ><input type="text" class="" />
  //                        <button class="btn btn-info">Edit</button></span
  //                      >
  //                    </td>
  //                    <td><span class="surname-input-items">${dataBase[i].surname}</span>
  //                    <span class="surname-item-input d-none"
  //                      ><input type="text" class="" />
  //                      <button class="btn btn-info">Edit</button></span
  //                    ></td>
  //                    <td><span class="salary-input-items">${dataBase[i].salary}</span>
  //                    <span class="salary-item-input d-none"
  //                      ><input type="text" class="" />
  //                      <button class="btn btn-info">Edit</button></span
  //                    ></td>
  //                    <td><span class="duty-input-items">${dataBase[i].duty}</span>
  //                    <span class="duty-item-input d-none"
  //                      ><select name="employeeDuty" id="addEmployeeDuty">
  //                      <option value="none" selected disabled>Please Select</option>
  //                      <option value="Developer">Developer</option>
  //                      <option value="Tester">Tester</option>
  //                      <option value="ProductOwner">ProductOwner</option>
  //                      <option value="Manager">Manager</option>
  //                      <option value="Designer">Designer</option>
  //                    </select>
  //                      <button class="btn btn-info">Edit</button></span
  //                    ></td>
  //                  </tr>
  //          `;
  //         }
  //       }
  // });
  //#endregion