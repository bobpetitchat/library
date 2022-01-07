"use strict";

let myLibrary = [];

function Book (title, author, pages) {
    this.title = title 
    this.author = author 
    this.pages = pages 
}

function addBookToLibrary() {
    console.log("addbook has been fired!")    
    const createBook = Object.create(Book);
    createBook.title = document.querySelector(".titleInput").value
    createBook.author = document.querySelector(".authorInput").value
    createBook.pages = document.querySelector(".pagesInput").value
    myLibrary.push(createBook)
    console.table(myLibrary)
}

const addbutton = document.querySelector(".addbutton")

addbutton.addEventListener("click", addBookToLibrary)