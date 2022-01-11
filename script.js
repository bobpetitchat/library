"use strict";
const card = document.querySelector(".card");
const cardTitle = document.querySelector(".cardTitle");
const cardAuthor = document.querySelector(".cardAuthor");
const cardPages = document.querySelector(".cardPages");
const main = document.querySelector("main");
const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.getElementById("modal_container");
const addbutton = document.querySelector(".addbutton");

let myLibrary = [];
let book;
let readOrNot;
let i;

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = Number(pages);
}

const makeBook = () => {
  book = new Book();
  book.title = document.querySelector(".titleInput").value;
  book.author = document.querySelector(".authorInput").value;
  book.pages = document.querySelector(".pagesInput").value;
};

const addBook = (item) => {
  const newdiv = document.createElement("div");
  const card_title = document.createElement("h2");
  const card_author = document.createElement("h3");
  const card_pages = document.createElement("p");
  const read_or_not = document.createElement("button");
  const buttons_container = document.createElement("div");
  const deletebutton = document.createElement("button");

  deletebutton.className = "delete button";
  newdiv.className = "card";
  read_or_not.className = "readornot";
  card_title.className = "cardTitle";
  card_author.className = "cardAuthor";
  card_pages.className = "cardPages";
  buttons_container.className = "buttonsContainer";

  main.appendChild(newdiv);
  newdiv.appendChild(deletebutton);
  newdiv.appendChild(card_title);
  newdiv.appendChild(card_author);
  newdiv.appendChild(card_pages);
  newdiv.appendChild(buttons_container);
  buttons_container.appendChild(read_or_not);

  
  read_or_not.innerText = "Not read";
  card_title.innerText = `${item.title}`;
  card_author.innerText = `by ${item.author}`;
  card_pages.innerText = `${item.pages} pages`;
  deletebutton.innerText = "X"
};

const assignAttribute = () => {
  let test = document.querySelectorAll(".card.see") 
  for (let j = 0; j < test.length; j++) {
test[j].setAttribute("id", "" + j);
   }
  // document.querySelectorAll(".card.see").forEach(elem => console.log(elem.getAttribute("number"))); //
}

addbutton.addEventListener("click", () => {
  document.querySelector("main").innerHTML = "";
  makeBook();
  myLibrary.push(book); 
  updateBooks();
  assignAttribute();
  clearEv();
});

let to
let removed
let index
const removeBook = () => {
  document.querySelectorAll(".delete.button").forEach(elem => 
    elem.addEventListener("click", (e) => {
      to = e.target.parentNode.getAttribute("id")
      console.log(to)
      index = myLibrary.map(e => e.id).indexOf(to);
      console.log(index)
      myLibrary.splice(1, 0)
      console.log(myLibrary)
      removed = document.getElementById(to);
      console.log(removed)
      removed.remove()
    }))
}

const updateBooks = () => {
  for (let i = 0; i < myLibrary.length; i++) {
    addBook(myLibrary[i]);
  }
  removeBook()
  displayBooks();
};


const displayBooks = () => {
  main.querySelectorAll(".card").forEach((item) => item.classList.add("see"));
  document.querySelectorAll(".readornot").forEach((e) =>
    e.addEventListener("click", (e) => {
      e.target.innerText === "Read"
        ? (e.target.innerText = "Not read")
        : (e.target.innerText = "Read");
         }
    )
  )
}

function clearEv() {
  document.querySelector(".titleInput").value = "";
  document.querySelector(".authorInput").value = "";
  document.querySelector(".pagesInput").value = "";
}

open.addEventListener("click", () => {
  modal.classList.add("show");
});

close.addEventListener("click", () => {
  modal.classList.remove("show");
});
