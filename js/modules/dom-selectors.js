//pages
const mainArea = document.querySelector("#main-page");
const loginArea = document.querySelector("#login-page");
const addArea = document.querySelector("#add-page");

const loginBtn = document.querySelector("#login");
const navLinks = document.querySelectorAll(".nav-link");
const deletePageTable = document.querySelector("#delete-page table");

const employeeTable = document.querySelector("#main-page table");
const deletePage = document.querySelector("#delete-page");
let addEmployee = document.querySelectorAll("#add-page input");
const addBtn = document.querySelector("#employeeAddBtn");
const sortName = document.querySelector("#sortName");
const sortSurName = document.querySelector("#sortSurName");
const sortSalary = document.querySelector("#sortSalary");
const sortDuty = document.querySelector("#sortDuty");
const showSalaryBtn = document.querySelector("#salaryFilterBTN");
const searchBtn = document.querySelector("#searchBtn");
const employeeTableHeadCard = `
<thead>
<tr>
  <th scope="col">#</th>
  <th scope="col">Ad</th>
  <th scope="col">Soyad</th>
  <th scope="col">Maaş</th>
  <th scope="col">Vəzifə</th>
</tr>
</thead>
<tr>`;
// employeeTable,deletePage,addEmployee,AddBtn,sortName,sortSurName,sortSalary,sortDuty,showSalaryBtn,searchBtn
export {
  mainArea,
  loginArea,
  addArea,
  loginBtn,
  navLinks,
  deletePageTable,
  employeeTable,
  deletePage,
  addEmployee,
  addBtn,
  sortName,
  sortSurName,
  sortSalary,
  sortDuty,
  showSalaryBtn,
  searchBtn,
  employeeTableHeadCard,
};
