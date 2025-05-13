
let myName=document.getElementById("myName");
console.log(myName);
myName.innerText="Mike"
const thingsILike = ["Teaching","Food","Games"];
let liList = document.querySelectorAll(".my-items")
console.log(liList)
let liSecond=document.querySelector("#my-list li:nth(2)")

for (let i=0; i<liList.length; i++){
    console.log(liList[i])
    liList[i].innerText = thingsILike[i]
} 
liList[0].innerText = thingsILike[0]
liList[1].innerText = thingsILike[1]
liList[2].innerText = thingsILike[2]

// creating new elements
let liItem = document.createElement("li")

liItem.innerText = "Watch Movies"
console.log(liItem);
let parentEl =document.getElementById('my-list')
parentEl.appendChild(liItem);

// DOM and styling
// // w3 schools javascript syntax for styling is different than css
// https://www.w3schools.com/cssref/index.php

let paragraph = document.querySelector("p");
paragraph.style.fontSize = "25px";
paragraph.style.background-color="#914775";

//DOM Eventlistener are waiting for a event to fire off.
let clickbutton = document.querrySelector("#here");
// click button with eventlistener
clickbutton.addEventListener("click", colorList)
function colorList(){
    let reList =document.querySelectorAll("li");
    // to update liList
    for (let i=0; i<reList.length; i++){
        liList[i].style.color = "purple"
    }
}
