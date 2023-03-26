export function fieldsEdits(dataBase){
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
         dataBase[idx].salary = Number(this.innerText);
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