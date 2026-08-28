// for (let i = 0; i < 200; i++) {
let anotherH1 = document.createElement("h1");
anotherH1.textContent = "Hello, World by javascript!";
anotherH1.style.color = "blue";
document.body.appendChild(anotherH1);
// }

let paragraph = document.getElementsByTagName("p");
paragraph[0].style.color = "green";
paragraph[1].style.color = "red";

// let anotherParagraph = document.getElementById("third-paragraph");
// anotherParagraph.textContent = "jumlad kale oo ku qoran javascript";
// anotherParagraph.style.color = "orange";
// anotherParagraph.style.fontSize = "20px";

let anotherParagraph = document.querySelector("#third-paragraph");
anotherParagraph.textContent = "jumlad kale oo ku qoran javascript";
anotherParagraph.style.color = "orange";
anotherParagraph.style.fontSize = "20px";