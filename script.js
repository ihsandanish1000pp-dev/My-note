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

 
      