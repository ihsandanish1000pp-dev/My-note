// let addNotebtn = document.querySelector(".add-note-btn");
// addNotebtn.addEventListener("click", function () {
//   alert("clicked");
// });

// addNotebtn.addEventListener("click", function () {
//   modal.style.display = "flex";
// });

let addNotebtn = document.querySelector(".add-note-btn");
let modal = document.querySelector(".modal-overlay");

addNotebtn.addEventListener("click", function () {
  modal.style.display = "flex";
});

let closeBtn = document.querySelector(".close-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// X button
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Cancel button
cancelBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

let titleInput = document.querySelector("#note-title");
let descriptionInput = document.querySelector("#note-description");
let categoryInput = document.querySelector("#note-category");
let saveBtn = document.querySelector(".save-btn");

saveBtn.addEventListener("click", function () {
  let title = titleInput.value;
  let description = descriptionInput.value;
  let category = categoryInput.value;
  console.log(title, description, category);
});

// let notesContainer = document.querySelector(".active");

//  notesContainer.addEventListener('click', function(){
//   alert("clicked");
//  })

let notesContainer = document.querySelector(".notes-container");
let noteAllbtn = document.querySelector(".active");

noteAllbtn.addEventListener("click", function () {
  notesContainer.innerHTML = `<div class= "note">
       <h2> java script Note </h2>
        <p> variables,Arry,Object,Loops</p>
    </div>
    
     <div class= "note">
        <h2> Php Note</h2>
        <p>variabes,object,loops,</p>
     </div>

     <div class= "note">
        <h2> Node js</h2>
        <p>variabes,object,loops,</p>
     </div>


     <div class= "note">
        <h2> Opp</h2>
        <p>variabes,object,loops,</p>
     </div>
    `;
});

let note = [
  {
    title: "Java script",
    Discription: "varaible , Array , object",
    Favorite: true,
  },

  {
    title: "php",
    Discription: "varaible , Array , object",
    Favorite: false,
  },

  {
    title: "Node js",
    Discription: "varaible , Array , object",
    Favorite: false,
  },

  {
    title: "opp",
    Discription: "varaible , Array , object",
    Favorite: true,
  },
];

let Notecontainer = document.querySelector(".notes-container");
let FavaBtn = document.querySelector(".Favorite-btn");

FavaBtn.addEventListener("click", function () {
  let favoriteNotes = note.filter(function (item) {
    return item.Favorite === true;
  });
  console.log(favoriteNotes);
});
