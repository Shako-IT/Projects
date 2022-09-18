"use strict";
// Submit button
const btn = document.getElementById("submit");
// First Name
const firstName = document.getElementById("fname");
// Last Name
const lasttName = document.getElementById("lname");
// User address
const uAddress = document.getElementById("user_address");
// Date of birth
const bDay = document.getElementById("birthday");
// User gender
const uGender = document.getElementById("dropdown");
// User note
const uNote = document.getElementById("usernote");
// Inserted tabla
const table = document.getElementById("table-list");

// const date = new Date();
// const idn = (Date.now() + "").slice(-10);

// HTML code to insert
const tablaData = `
<tr>
<td id="Input_ID"></td>
<td id="Usares_First_Name"></td>
<td id="Usares_Last_Name"></td>
<td id="Users_Address"></td>
<td id="Users_Date_Of_Birth"></td>
<td id="Users_Gender"></td>
<td id="Delete_Row"></td>
</tr>
`;

let personalArray = new Array();
let personalData = {};
let ID = 0;

const isEmpty = function (inputelement) {
  if (inputelement.value == "") {
    alert(`Please ${inputelement.placeholder}`);
  }
  return;
};

btn.addEventListener("click", function (e) {
  // e.preventDefault();
  // validation
  isEmpty(firstName);
  isEmpty(lasttName);
  isEmpty(uAddress);
  if (
    firstName.value !== "" &&
    lasttName.value !== "" &&
    uAddress.value !== ""
  ) {
    table.insertAdjacentHTML("afterend", tablaData);
    // Received answers
    const rowCount = document.getElementById("table-form").rows.length;
    const InputID = document.getElementById("Input_ID");
    const UsaresFirstName = document.getElementById("Usares_First_Name");
    const UsaresLastName = document.getElementById("Usares_Last_Name");
    const UsersAddress = document.getElementById("Users_Address");
    const UsersDateOfBirth = document.getElementById("Users_Date_Of_Birth");
    const UsersGender = document.getElementById("Users_Gender");
    const UsersNotes = document.getElementById("Users_Notes");
    const DeleteRow = document.getElementById("Delete_Row");

    //get old Data
    const oldData = JSON.parse(localStorage.getItem("DATA"));

    if (oldData !== null) {
      for (let i = 0; i < oldData.length; i++) {
        let daTa = {};
        daTa.firstName = oldData[i].firstName;
        daTa.lasttName = oldData[i].lasttName;
        daTa.uAddress = oldData[i].uAddress;
        daTa.bDay = oldData[i].bDay;
        daTa.uGender = oldData[i].uGender;
        daTa.uNote = oldData[i].uNote;
        daTa.uDelete =
          "<button type='button' id='i" +
          (i + 1) +
          "' class='deleteButton'>x</button>";

        personalArray.push(daTa);
      }
    }

    // Insert values in the table
    InputID.innerHTML = rowCount - 1;
    UsaresFirstName.innerHTML = firstName.value;
    UsaresLastName.innerHTML = lasttName.value;
    UsersAddress.innerHTML = uAddress.value;
    UsersDateOfBirth.innerHTML = bDay.value;
    UsersGender.innerHTML = uGender.value;
    DeleteRow.innerHTML =
      "<button type='button' id='i" +
      (rowCount - 1) +
      "' class='deleteButton'>x</button>";
    // tr.id = rowCount - 1;

    personalData.firstName = firstName.value;
    personalData.lasttName = lasttName.value;
    personalData.uAddress = uAddress.value;
    personalData.bDay = bDay.value;
    personalData.uGender = uGender.value;
    personalData.uNote = uNote.value;
    personalData.uDelete =
      "<button type='button' id='i" +
      (rowCount - 1) +
      "' class='deleteButton'>x</button>";

    personalArray.push(personalData);

    console.log(personalArray);

    // console.log(JSON.stringify(personalArray));

    // Set local storage

    // JSON.stringify(

    console.log(JSON.stringify(personalArray));

    localStorage.setItem("DATA", JSON.stringify(personalArray));
    // console.log(UsaresFirstName);
    // localStorage.setItem("xxxx", personalData);
  }
});

(function () {
  var store = JSON.parse(localStorage.getItem("DATA"));

  if (store !== null) {
    let table = document.getElementById("table-form");
    let rowx = 1;
    for (let x = 0; x < store.length; x++) {
      let row = table.insertRow(rowx);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);
      let cell5 = row.insertCell(4);
      let cell6 = row.insertCell(5);
      let cell7 = row.insertCell(6);
      cell1.innerHTML = x + 1;
      cell2.innerHTML = store[x].firstName;
      cell3.innerHTML = store[x].lasttName;
      cell4.innerHTML = store[x].uAddress;
      cell5.innerHTML = store[x].bDay;
      cell6.innerHTML = store[x].uGender;
      cell7.innerHTML = store[x].uDelete;

      rowx++;
    }
  }
})();

// table.addEventListener("click", function () {
//   console.log("test");
// });

const table2 = document.getElementById("table-form");
const rows2 = table2.getElementsByTagName("tr");
for (let i = 0; i < rows2.length; i++) {
  let currentRow = table2.rows[i];
  let createClickHandler = function (row) {
    return function (e) {
      let cell = row.getElementsByTagName("td")[0];
      // check if not null
      if (!cell) return; // no errors!
      let id = cell.innerHTML;

      let store = JSON.parse(localStorage.getItem("DATA"));
      if (store !== null) {
      }

      let uNoteId = id - 1;
      if (e.target.type != "button") {
        alert(store[uNoteId].uNote);
      }
    };
  };
  currentRow.onclick = createClickHandler(currentRow);
}

const deleteButton = document.getElementsByClassName("deleteButton");

for (let y = 0; y < deleteButton.length; y++) {
  deleteButton[y].addEventListener("click", function (e) {
    let idx = e.target.id.split("i");
    let id = parseInt(idx[1]);

    if (confirm("Would you like to delete item?")) {
      let store2 = JSON.parse(localStorage.getItem("DATA"));

      if (store2 !== null) {
        let newStore = [];
        let rowx = 1;
        for (let x = 0; x < store2.length; x++) {
          if (rowx != id) {
            let daTa2 = {};
            daTa2.firstName = store2[x].firstName;
            daTa2.lasttName = store2[x].lasttName;
            daTa2.uAddress = store2[x].uAddress;
            daTa2.bDay = store2[x].bDay;
            daTa2.uGender = store2[x].uGender;
            daTa2.uNote = store2[x].uNote;
            daTa2.uDelete =
              "<button type='button' id='i" +
              rowx +
              "' class='deleteButton'>x</button>";

            newStore.push(daTa2);
          }

          rowx++;
        }

        localStorage.setItem("DATA", JSON.stringify(newStore));

        location.reload();
      }
    }
  });
}
