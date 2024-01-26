// image switcher code 
let myImage = document.querySelector("#i1"); // specifically allowing clicking on the image with this id 

myImage.onclick = function() {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/ginger.jpeg") {
    myImage.setAttribute("src", "images/ginger-sunglasses.jpg"); // if the image is the original one, switch it to this new one
  } 
  else {
    myImage.setAttribute("src", "images/ginger.jpeg"); // if the image isn't the original one, switch back to it 
  }
}

let myButton = document.querySelector("button");
function guessAge() {
    const guess = prompt("Enter your guess for how old I am: ")
    if (guess === "20" || guess === "twenty" || guess === "Twenty") { // various options for how the user may input the guess (numerical or written)
        alert("Correct! I'm 20!") // message if age is correctly guessed
    }
    else {
        alert("Wrong! I am not " + guess + " years old.") // message if age is not correctly guessed
    }
}

myButton.onclick = () => { // setting the clicking of the button to the guessAge function
    guessAge();
};
