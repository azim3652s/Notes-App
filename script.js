const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector("button"); 
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || '';
    bindEventListeners();
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

function bindEventListeners() {
    notesContainer.querySelectorAll(".input-box").forEach(nt => {
        nt.onkeyup = function() {
            updateStorage();
        };
    });

    notesContainer.addEventListener("click", function(e) {
        if (e.target.tagName === "IMG") {
            e.target.parentElement.remove();
            updateStorage();
        }
    });
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
    updateStorage(); 
    bindEventListeners(); 
});
