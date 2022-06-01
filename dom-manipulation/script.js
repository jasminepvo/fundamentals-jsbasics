const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// <p> with red text that says “Hey I’m red!”
const paragraph = document.createElement('p');
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";
container.appendChild(paragraph);

// an <h3> with blue text that says “I’m a blue h3!”
const heading = document.createElement('h3');
heading.style.color = "blue";
heading.textContent = "I'm a blue h3!"
container.appendChild(heading);

// a <div> with a black border and pink background color with the following elements inside of it:
const blackDiv = document.createElement('div');
blackDiv.style.cssText = 'background: pink; border-color: black'; 
blackDiv.textContent = "Test";
container.appendChild(blackDiv);

// another <h1> that says “I’m in a div”
const h1Div = document.createElement('h1'); 
h1Div.textContent = "I'm in a div";
container.appendChild(h1Div);

// a <p> that says “ME TOO!”
const paragraph2 = document.createElement('p');
paragraph2.textContent = "ME TOO!";
container.appendChild(paragraph2);

// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

// Add button
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

// Another method to add button - more flexible and powerful
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    alert("Helloooo World");
});

// Method using named functions
function alertFunction() {
    alert("YAY! YOU DID IT");
}
// Method 2
btn.onclick = alertFunction;

//Method 3
btn.addEventListener('click', alertFunction);

btn.addEventListener('click', function (e) {
    console.log(e);
});

btn.addEventListener('click', function (e) {
    console.log(e.target);
});

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});