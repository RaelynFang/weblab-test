//let myHeading = document.querySelector("h1");
//myHeading.textContent = "Hello world!";
alert("hello!");
// document.querySelector("html").addEventListener("click", () => {
//     alert("别戳我，我怕疼。");
//   });

let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/Firefox_logo.png") {
      myImage.setAttribute("src", "images/fox.png");
    } else {
      myImage.setAttribute("src", "images/Firefox_logo.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 酷毙了，" + myName;
  }

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}

myButton.onclick = function () {
    setUserName();
};
  