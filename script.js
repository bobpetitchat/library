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

  newdiv.className = "card";
  card_title.className = "cardTitle";
  card_author.className = "cardAuthor";
  card_pages.className = "cardPages";
  main.appendChild(newdiv);

  card_title.innerText = item.title;
  card_author.innerText = item.author;
  card_pages.innerText = item.pages;

  newdiv.appendChild(card_title);
  newdiv.appendChild(card_author);
  newdiv.appendChild(card_pages);
    console.log(newdiv);

};

addbutton.addEventListener("click", () => {
    document.querySelector("main").innerHTML = "";

    makeBook();
    myLibrary.push(book);
    updateBooks();
    clearEv();
  });


const updateBooks = () => {
  for (let i = 0; i < myLibrary.length; i++) {
    addBook(myLibrary[i]);
    console.log(myLibrary[i]);
  }
  displayBooks();
};

const displayBooks = () => {
    main.querySelectorAll(".card").forEach((item) => item.classList.add("see"));
};

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
