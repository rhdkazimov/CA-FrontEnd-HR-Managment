import { dataBase,loginDatas } from "../js/modules/database.js";
import {
  mainArea,
  loginArea,
  addArea,
  loginBtn,
  navLinks,
  deletePageTable,
  employeeTable,
  deletePage,
  addEmployee,
  AddBtn,
  sortName,
  sortSurName,
  sortSalary,
  sortDuty,
  showSalaryBtn,
  searchBtn,
  employeeTableHeadCard
} from "../js/modules/dom-selectors.js";

dataShow(employeeTable);

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    e.preventDefault();
    if (navLink.innerText === "Ana Sehife") {
      mainArea.style.display = "block";
      addArea.style.display = "none";
      deletePage.style.display = "none";
      if (employeeTable.innerHTML === "") {
        dataShow(employeeTable);
      } else {
        dataShow(employeeTable);
      }
    } else if (navLink.innerText === "Elave et") {
      mainArea.style.display = "none";
      addArea.style.display = "block";
      deletePage.style.display = "none";
    } else if (navLink.innerText === "Sil") {
      deletePage.style.display = "block";
      mainArea.style.display = "none";
      addArea.style.display = "none";
      dataShow(deletePageTable);
    }
  });
});


document.querySelector("#loginBtn").addEventListener("click", (e) => {
  e.preventDefault();
  const loginName = document.querySelector("#login-name").value;
  const loginPassword = document.querySelector("#login-password").value;

  loginDatas.forEach((loginData) => {
    if (
      loginData.userName === loginName &&
      loginPassword === loginData.userPassword
    ) {
      loginArea.style.display="none";
      mainArea.style.display = "block";
    document.querySelector(".navbar").classList.remove("d-none");
    }
  });
});

let transform = 0;
document.querySelector("#registerBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const regName = document.querySelector("#reg-name").value;
  const regTel = document.querySelector("#reg-tel").value;
  const regEmail = document.querySelector("#reg-email").value;
  const regPassword = document.querySelector("#reg-password").value;
  if (
    regName !== "" &&
    regTel !== "" &&
    regEmail !== "" &&
    regPassword !== ""
  ) {
    loginDatas.push({
      userName: regName,
      userTel: regTel,
      userEmail: regEmail,
      userPassword: regPassword,
    });
    document.querySelector(
      ".card-back"
    ).style.transform = `rotateY(${transform}deg)`;
    transform += 180;
    document.querySelector(
      ".card-front"
    ).style.transform = `rotateY(${transform}deg)`;
  }
});

document.querySelector("#forgotpass").addEventListener("click", (e) => {
  e.preventDefault;
  const forgotName = prompt("Adinizi Daxil Edin");
  const forgotphone = prompt("Nomrenizi Daxil edin");
  const forgotmail = prompt("Mail daxil edin");
  loginDatas.forEach((data) => {
    if (
      data.userName === forgotName &&
      data.userTel === forgotphone &&
      data.userEmail === forgotmail
    ) {
      alert(`Sifreniz : ${data.userPassword}`);
    } else alert("Melumatlar Sehvdir");
  });
});





AddBtn.addEventListener("click", () => {
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
      salary: addEmployee[2].value,
      duty: `${addEmployeeDuty}`,
    });
    alert("Isci Elave Olundu");
    dataShow(employeeTable);
    addArea.style.display = "none";
    mainArea.style.display = "block";
  }
});

function dataShow(table) {
  table.innerHTML = employeeTableHeadCard;
  dataBase.forEach((data) => {
    if (data.name !== undefined) {
      table.innerHTML += `
      <tr>
                <th scope="row">${data.id}</th>
                <td>
                  <span class="name-input-items">${data.name}</span>
                  <span class="name-item-input d-none"
                    ><input type="text" class="" />
                    <button class="btn btn-info">Edit</button></span
                  >
                </td>
                <td><span class="surname-input-items">${data.surname}</span>
                <span class="surname-item-input d-none"
                  ><input type="text" class="" />
                  <button class="btn btn-info">Edit</button></span
                ></td>
                <td><span class="salary-input-items">${data.salary}</span>
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
    }
    fieldsEdit();
  });
 
}

function fieldsEdit(){
   const names = document.querySelectorAll(".name-input-items");
  const nameInput = document.querySelectorAll(".name-item-input");
  const nameInputsTable = document.querySelectorAll(".name-item-input input");
  const nameEditBtnTable = document.querySelectorAll(".name-item-input button");

  const surnames = document.querySelectorAll(".surname-input-items");
  const surnameInput = document.querySelectorAll(".surname-item-input");
  const surnameInputsTable = document.querySelectorAll(
    ".surname-item-input input"
  );
  const surnameEditBtnTable = document.querySelectorAll(
    ".surname-item-input button"
  );

  const salarys = document.querySelectorAll(".salary-input-items");
  const salarysInput = document.querySelectorAll(".salary-item-input");
  const salarysInputsTable = document.querySelectorAll(
    ".salary-item-input input"
  );
  const salarysEditBtnTable = document.querySelectorAll(
    ".salary-item-input button"
  );

  const dutys = document.querySelectorAll(".duty-input-items");
  const dutysInput = document.querySelectorAll(".duty-item-input");
  const dutysInputsTable = document.querySelectorAll(".duty-item-input select");
  const dutysEditBtnTable = document.querySelectorAll(
    ".duty-item-input button"
  );

  names.forEach(function (name, idx) {
    name.addEventListener("click", function () {
      this.classList.add("d-none");
      nameInput[idx].classList.remove("d-none");
      nameInputsTable[idx].value = this.innerText;
      nameEditBtnTable[idx].addEventListener("click", () => {
        this.innerText = nameInputsTable[idx].value;
        dataBase[idx].name = this.innerText;
        nameInput[idx].classList.add("d-none");
        this.classList.remove("d-none");
      });
    });
  });

  surnames.forEach(function (surname, idx) {
    surname.addEventListener("click", function () {
      this.classList.add("d-none");
      surnameInput[idx].classList.remove("d-none");
      surnameInputsTable[idx].value = this.innerText;
      surnameEditBtnTable[idx].addEventListener("click", () => {
        this.innerText = surnameInputsTable[idx].value;
        dataBase[idx].surname = this.innerText;
        surnameInput[idx].classList.add("d-none");
        this.classList.remove("d-none");
      });
    });
  });

  salarys.forEach(function (salary, idx) {
    salary.addEventListener("click", function () {
      this.classList.add("d-none");
      salarysInput[idx].classList.remove("d-none");
      salarysInputsTable[idx].value = this.innerText;
      salarysEditBtnTable[idx].addEventListener("click", () => {
        this.innerText = salarysInputsTable[idx].value;
        dataBase[idx].salary = this.innerText;
        salarysInput[idx].classList.add("d-none");
        this.classList.remove("d-none");
      });
    });
  });

  dutys.forEach(function (duty, idx) {
    duty.addEventListener("click", function () {
      this.classList.add("d-none");
      dutysInput[idx].classList.remove("d-none");
      dutysInputsTable[idx].value = this.innerText;
      dutysEditBtnTable[idx].addEventListener("click", () => {
        this.innerText = dutysInputsTable[idx].value;
        dataBase[idx].duty = this.innerText;
        dutysInput[idx].classList.add("d-none");
        this.classList.remove("d-none");
      });
    });
  });
}

//#region  Sort

//Name Sort

let nameIsSorted = false;
sortName.addEventListener("click", function () {
  nameIsSorted = !nameIsSorted;

  if (nameIsSorted) {
    dataBase.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    sortName.innerText = "AtoZ";
  } else {
    sortName.innerText = "ZtoA";
    dataBase.reverse();
  }

  dataShow(employeeTable);
});

//SurName Sort
let SurnameisSorted = false;
sortSurName.addEventListener("click", function () {
  SurnameisSorted = !SurnameisSorted;

  if (SurnameisSorted) {
    dataBase.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    sortSurName.innerText = "AtoZ";
  } else {
    sortSurName.innerText = "ZtoA";
    dataBase.reverse();
  }

  dataShow(employeeTable);
});

//maas sort

let salaryIsSorted = false;
sortSalary.addEventListener("click", function () {
  salaryIsSorted = !salaryIsSorted;

  if (salaryIsSorted) {
    dataBase.sort(function (a, b) {
      if (a.salary < b.salary) {
        return -1;
      }
      if (a.salary > b.salary) {
        return 1;
      }
      return 0;
    });
    sortSalary.innerText = "MaxtoMin";
  } else {
    sortSalary.innerText = "MinToMax";
    dataBase.reverse();
  }

  dataShow(employeeTable);
});

//duty sort
let dutyIsSorted = false;
sortDuty.addEventListener("click", function () {
  dutyIsSorted = !dutyIsSorted;

  if (dutyIsSorted) {
    dataBase.sort(function (a, b) {
      if (a.duty < b.duty) {
        return -1;
      }
      if (a.duty > b.duty) {
        return 1;
      }
      return 0;
    });
    sortDuty.innerText = "AtoZ";
  } else {
    sortDuty.innerText = "ZtoA";
    dataBase.reverse();
  }

  dataShow(employeeTable);
});

//#endregion

//#region Salary FIlter
showSalaryBtn.addEventListener("click", () => {
  const minSalaryFilter = document.querySelector("#minSalaryFilter").value;
  const maxSalaryFilter = document.querySelector("#maxSalaryFilter").value;
  const tableHeadCard = employeeTableHeadCard;
  employeeTable.innerHTML = tableHeadCard;
  dataBase.forEach((info) => {
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
    } else if (maxSalaryFilter == "" && minSalaryFilter == "") {
      dataShow(employeeTable);
    }
  });
  fieldsEdit();
});

//#endregion

//#region search

//search with btn
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
  fieldsEdit();
});

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

//#endregion

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
    }
    else if (dutyFilter==="All" || dutyFilter==="none"){dataShow(employeeTable)}
  });
  fieldsEdit();
});

//delete
document.querySelector("#delete-page button").addEventListener("click", () => {
  const deletePersonID = document.querySelector("#delete-page input").value;
  // dataBase.splice(deletePersonID-1,1);
  dataBase[deletePersonID - 1] = "";
  alert(`#${deletePersonID}-IDli insan sistemden silindi`);
  dataShow(deletePageTable);
});
