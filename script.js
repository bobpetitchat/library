"use strict";
const card = document.querySelector(".card")
const cardTitle = document.querySelector(".cardTitle")
const cardAuthor = document.querySelector(".cardAuthor")
const cardPages = document.querySelector(".cardPages")

const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.getElementById("modal_container");

let myLibrary = [];

function Book (title, author, pages) {
    this.title = title 
    this.author = author 
    this.pages = pages 
}
const addbutton = document.querySelector(".addbutton")

function addBookToLibrary() {   
    addbutton.addEventListener("click", () => {
        console.log("addbooktolibrary has been fired!");
        let books = new Book()
        books.title = document.querySelector(".titleInput").value
        books.author = document.querySelector(".authorInput").value
        books.pages = document.querySelector(".pagesInput").value
        myLibrary.push(books)
        displayBook()
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

