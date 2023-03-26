import { dataBase } from "../js/modules/database.js";
import {employeeTable,employeeTableHeadCard} from "../js/modules/dom-selectors.js";
import { deleteFeature } from "../js/modules/delete.js";
import { dataShowss } from "./modules/dataShows.js";
import { login } from "./modules/login.js";
import { addEmployeeFeature } from "./modules/addEmployee.js";
import { sort } from "./modules/sort.js";
import {salaryFilter,dutyFilter} from "./modules/filter.js"
import {search} from "./modules/search.js"
import { navbar } from "./modules/navbar.js";
import { profileMenu } from "./modules/profile.js";

login();
profileMenu();
dataShowss(employeeTable, dataBase, employeeTableHeadCard);
navbar();
addEmployeeFeature();
deleteFeature();
sort();
salaryFilter();
dutyFilter();
search();
