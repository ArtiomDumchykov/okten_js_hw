/*
    
- створити блок,
- додати йому класи wrap, collapse, alpha, beta
- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
- додати цей блок в body.
- клонувати його повністю, та додати клон в body.


*/


const body = document.body

const div = document.createElement("div")
div.textContent = "Hello World"

div.classList.add("wrap");
div.classList.add("collapse");
div.classList.add("alpha");
div.classList.add("beta");

div.style.backgroundColor = "red";
div.style.color = "violet";
div.style.fontSize = 24 + "px";

body.appendChild(div);
body.appendChild(div.cloneNode(true));



