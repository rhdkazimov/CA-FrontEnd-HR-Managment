import { dataBase } from "./database.js";
import {
  showSalaryBtn,
  employeeTable,
  employeeTableHeadCard,
} from "./dom-selectors.js";
import { dataShowss } from "./dataShows.js";
import { fieldsEdits } from "./fieldsEdit.js";

export function salaryFilter() {
  showSalaryBtn.addEventListener("click", () => {
    const minSalaryFilter = document.querySelector("#minSalaryFilter").value;
    const maxSalaryFilter = document.querySelector("#maxSalaryFilter").value;
    console.log(typeof maxSalaryFilter);
    const tableHeadCard = employeeTableHeadCard;
    employeeTable.innerHTML = tableHeadCard;
    dataBase.forEach((info) => {
      console.log(info.name);
      console.log(info.salary === 10000);
      if (minSalaryFilter <= info.salary && info.salary <= maxSalaryFilter) {
        employeeTable.innerHTML += `
        <tr>
                  <th scope="row">${info.id}</th>
                  <td>
                    <span class="name-input-items">${info.name}</span>
                    <span class="name-item-input d-none"
                      ><input type="text" class="" />
                      <button class="btn btn-info">Edit</button></span
                    >
                  </td>
                  <td><span class="surname-input-items">${info.surname}</span>
                  <span class="surname-item-input d-none"
                    ><input type="text" class="" />
                    <button class="btn btn-info">Edit</button></span
                  ></td>
                  <td><span class="salary-input-items">${info.salary}</span>
                  <span class="salary-item-input d-none"
                    ><input type="text" class="" />
                    <button class="btn btn-info">Edit</button></span
                  ></td>
                  <td><span class="duty-input-items">${info.duty}</span>
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
      } else if (minSalaryFilter === "" && info.salary <= maxSalaryFilter) {
        employeeTable.innerHTML += `
        <tr>
                  <th scope="row">${info.id}</th>
                  <td>
                    <span class="name-input-items">${info.name}</span>
                    <span class="name-item-input d-none"
                      ><input type="text" class="" />
                      <button class="btn btn-info">Edit</button></span
                    >
                  </td>
                  <td><span class="surname-input-items">${info.surname}</span>
                  <span class="surname-item-input d-none"
                    ><input type="text" class="" />
                    <button class="btn btn-info">Edit</button></span
                  ></td>
                  <td><span class="salary-input-items">${info.salary}</span>
                  <span class="salary-item-input d-none"
                    ><input type="text" class="" />
                    <button class="btn btn-info">Edit</button></span
                  ></td>
                  <td><span class="duty-input-items">${data.duty}</span>
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
      } else if (minSalaryFilter <= info.salary && maxSalaryFilter === "") {
        employeeTable.innerHTML += `
        <tr>
                  <th scope="row">${info.id}</th>
                  <td>
                    <span class="name-input-items">${info.name}</span>
                    <span class="name-item-input d-none"
                      ><input type="text" class="" />
                      <button class="btn btn-info">Edit</button></span
                    >
                  </td>
                  <td><span class="surname-input-items">${info.surname}</span>
                  <span class="surname-item-input d-none"
                    ><input type="text" class="" />
                    <button class="btn btn-info">Edit</button></span
                  ></td>
                  <td><span class="salary-input-items">${info.salary}</span>
                  <span class="salary-item-input d-none"
                    ><input type="text" class="" />
                    <button class="btn btn-info">Edit</button></span
                  ></td>
                  <td><span class="duty-input-items">${info.duty}</span>
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
      } else if (maxSalaryFilter === "" && minSalaryFilter === "") {
        dataShowss(employeeTable, dataBase, employeeTableHeadCard);
      }
    });
    fieldsEdits(dataBase);
  });
}

export function dutyFilter() {
  // filter for duty
  document.querySelector("#dutyFilterBtn").addEventListener("click", (e) => {
    e.preventDefault();
    const dutyFilter = document.querySelector("#dutyfilter").value;
    employeeTable.innerHTML = employeeTableHeadCard;
    dataBase.forEach((person) => {
      if (person.duty === dutyFilter) {
        employeeTable.innerHTML += `
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
      } else if (dutyFilter === "All" || dutyFilter === "none") {
        dataShowss(employeeTable, dataBase, employeeTableHeadCard);
      }
    });
    fieldsEdits(dataBase);
  });
}
