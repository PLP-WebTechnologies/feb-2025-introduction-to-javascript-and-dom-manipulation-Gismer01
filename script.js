// Change text content dynamically
const changeTextBtn = document.getElementById('change-text-btn');
const dynamicText = document.getElementById('dynamic-text');

changeTextBtn.addEventListener('click', function() {
    const texts = [
        "Text changed successfully!",
        "DOM manipulation is fun!",
        "JavaScript makes websites interactive!",
        "You clicked the button again!",
        "This text keeps changing!"
    ];
    const randomIndex = Math.floor(Math.random() * texts.length);
    dynamicText.textContent = texts[randomIndex];
    
    // Also change color for visual feedback
    dynamicText.style.color = getRandomColor();
});

// Modify CSS styles via JavaScript
const changeStyleBtn = document.getElementById('change-style-btn');
const styleBox = document.getElementById('style-box');

changeStyleBtn.addEventListener('click', function() {
    styleBox.style.backgroundColor = getRandomColor();
    styleBox.style.borderColor = getRandomColor();
    styleBox.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
    styleBox.style.boxShadow = `${Math.random() * 10}px ${Math.random() * 10}px ${Math.random() * 10}px rgba(0,0,0,0.3)`;
});

// Add or remove elements
const addElementBtn = document.getElementById('add-element-btn');
const removeElementBtn = document.getElementById('remove-element-btn');
const elementContainer = document.getElementById('element-container');

let elementCounter = 0;

addElementBtn.addEventListener('click', function() {
    elementCounter++;
    const newElement = document.createElement('div');
    newElement.className = 'box';
    newElement.innerHTML = `
        <h3>New Element ${elementCounter}</h3>
        <p>This element was added dynamically at ${new Date().toLocaleTimeString()}</p>
        <button class="remove-me-btn">Remove Me</button>
    `;
    elementContainer.appendChild(newElement);
    
    // Add event listener to the new button
    newElement.querySelector('.remove-me-btn').addEventListener('click', function() {
        elementContainer.removeChild(newElement);
    });
});

removeElementBtn.addEventListener('click', function() {
    const elements = elementContainer.querySelectorAll('.box');
    if (elements.length > 1) { // Keep at least one element
        elementContainer.removeChild(elements[elements.length - 1]);
        elementCounter--;
    } else {
        alert("Can't remove the last element!");
    }
});

// Helper function to generate random colors
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Bonus: Change header color on mouseover
const header = document.querySelector('header');
header.addEventListener('mouseover', function() {
    this.style.backgroundColor = getRandomColor();
});

header.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#4CAF50';
});