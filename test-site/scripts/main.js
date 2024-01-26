// image switcher code 
let myImage = document.querySelector("img");

myImage.onclick = function() {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefoxx.jpeg") {
    myImage.setAttribute("src", "images/cat.jpeg");
  } 
  else {
    myImage.setAttribute("src", "images/firefoxx.jpeg");
  }
}

//personalized welcome message code
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    }
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
}
else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = () => {
    setUserName();
};