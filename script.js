"use strict";
const card = document.querySelector(".card")
const cardTitle = document.querySelector(".cardTitle")
const cardAuthor = document.querySelector(".cardAuthor")
const cardPages = document.querySelector(".cardPages")
const main = document.querySelector("main")
const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.getElementById("modal_container");
const addbutton = document.querySelector(".addbutton");
const titleInput = document.querySelector(".titleInput").value
const authorInput = document.querySelector(".authorInput").value
const pagesInput = document.querySelector(".pagesInput").value
const bookList = document.querySelector(".bookList")
let myLibrary = [];
let book


function Book (title, author, pages) {
    this.title = title 
    this.author = author 
    this.pages = Number(pages) 
}

const makeBook = () => {
    book = new Book()
    book.title = titleInput.value
    book.author = authorInput.value
    book.pages = pagesInput.value
}

const updateBooks = () => {
    for (let i = 0; i < myLibrary.length; i++) {
        addBooks(myLibrary[i])
    }
}

 const addBooks = (item) => {
     const newdiv = document.createElement("div");
     const card_title = document.createElement("h2");
     const card_author = document.createElement("h3");
     const card_pages = document.createElement("p");

     newdiv.className = "card"
     card_title.className = "cardTitle"
     card_author.className = "cardAuthor"
     card_pages.className = "cardPages"
     bookList.appendChild(newdiv)
     
     card_title.innerText = item.title
     card_author.innerText = ` by ${item.author} `
     card_pages.innerText = ` ${item.pages} pages`

     newdiv.appendChild(card_title)
     newdiv.appendChild(card_author)
     newdiv.appendChild(card_pages)
     console.log(newdiv)
 }


function addBookToLibrary() {   
    addbutton.addEventListener("click", () => {
        makeBook()
        myLibrary.push(book)
        updateBooks()
        clearEv()
    }
    )
}
addBookToLibrary()


function clearEv() {
    document.querySelector(".titleInput").value = "";
    document.querySelector(".authorInput").value = "";
    document.querySelector(".pagesInput").value = "";
}


function displayBook() {
    cardTitle.innerText = "" + document.querySelector(".titleInput").value
    cardAuthor.innerText = " by " + document.querySelector(".authorInput").value
    cardPages.innerText = document.querySelector(".pagesInput").value + " pages"
    card.classList.add("see");
}

open.addEventListener("click", () => {
	modal.classList.add("show");
});

close.addEventListener("click", () => {
	modal.classList.remove("show");
});

