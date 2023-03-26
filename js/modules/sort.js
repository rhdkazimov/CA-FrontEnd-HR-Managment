import { dataBase } from "./database.js";
import { sortName,sortSurName,sortSalary,sortDuty,employeeTable,employeeTableHeadCard } from "./dom-selectors.js";
import { dataShowss } from "./dataShows.js";

//Name Sort
 export function sort() {


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

  dataShowss(employeeTable,dataBase,employeeTableHeadCard);
});

//SurName Sort
let surnameIsSorted = false;
sortSurName.addEventListener("click", function () {
    surnameIsSorted = !surnameIsSorted;

  if (surnameIsSorted) {
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

  dataShowss(employeeTable,dataBase,employeeTableHeadCard);
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

  dataShowss(employeeTable,dataBase,employeeTableHeadCard);
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

  dataShowss(employeeTable,dataBase,employeeTableHeadCard);
});
}
