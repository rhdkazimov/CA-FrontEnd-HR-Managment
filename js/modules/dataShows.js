import { fieldsEdits } from "./fieldsEdit.js";

function dataShowss(table, datas, headCard) {
  table.innerHTML = headCard;
  datas.forEach((data) => {
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
    fieldsEdits(datas);
  });
}

export { dataShowss };
