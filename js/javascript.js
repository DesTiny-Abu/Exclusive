let firstName = "Destiny";
let lastName = "Abumere";
let h2Elem = document.getElementById("name");
console.log(h2Elem);
h2Elem.style.color = "red";
h2Elem.innerHTML = `${firstName}  ${lastName}`;
let hElem = document.getElementsByName("title");
hElem.innerHTML = "welcome to function class";

let h1Elem = document.querySelector(".hello");
console.log(h1Elem);
h1Elem = document.querySelector ("destiny");


let itemBtnElem = document.querySelector("item-btn");
itemBtnElem.addEventListener("click", () => {
    h1Elem.style.color = "red";
    h2Elem.style.display = "none";
});
nameBtnElem.addEventListener("click", () => {
    document.write("I have erased everything!")
});

function addNums() {
    let result = 10+5;
    console.log(result);
}
addNums();

addNums(a,b)
function addNums() {
    let result = 10+5;
    console.log(result);
}

function addNums(a,b) {
    let result = a + b;
    console.log(result);
}

function changeBg() {
    changeBtnElem.style.backgroundcolor = "orange";
    changeBtnElem.stle.padding = "10px";
}
changeBg()