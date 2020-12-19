// set variable to target our container for our added elements
const squareContainer = document.getElementById("square");
const circleContainer = document.getElementById("circle")
// set variable to track the count of added element
let elementCount = 0;

// toggle image function toggles between background image and color
function toggleImage() {
    // variable to tager the body element
    const body = document.querySelector("body");
    body.classList.toggle("background-color");
}

// add square function, adds a square
function addSquare(event) {
    // variable to create our new div
    const squareElement = document.createElement("div");
    // adds class of box to our new div
    squareElement.classList.add("square");
    // adds an event listener with the function to delete this element if clicked
    squareElement.addEventListener("click", deleteElement);
    // increases our count to display within our new div
    elementCount++;
    // sets the text inside our div of whatever the current count is
    squareElement.innerText = elementCount;
    // last we append this div to our targeted container element
    squareContainer.append(squareElement);
}

// add circle function to add a circle
function addCircle(event) {
    const circleElement = document.createElement("div");
    circleElement.classList.add("circle");
    circleElement.addEventListener("click", deleteElement);
    elementCount++;
    circleElement.innerText = elementCount;
    circleContainer.append(circleElement);
}
// function to remove the target we click on
function deleteElement(event) {
    event.target.remove();
}