import {loginDatas} from "../modules/database.js"
import {loginArea,mainArea} from "../modules/dom-selectors.js"

export function login() 
{
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
            const showUsarName = document.querySelector("#showUsarname")
            const showUsarMail = document.querySelector("#showUserMail")
            showUsarName.innerText = "Usarname:"
            showUsarMail.innerText = "Mail:"
            showUsarName.innerText += ` ${loginData.userName}`;
            showUsarMail.innerText += ` ${loginData.userEmail}`;
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
}