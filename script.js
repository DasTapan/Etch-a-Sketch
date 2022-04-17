//create 16x16 template grid
let divId = 1;
const containerDiv = document.querySelector('.container');
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.setAttribute('id', divId);
    divId++;
    div.style.width = 'calc(100% / 16)';
    div.style.height = 'calc(100% / 16)';
    containerDiv.appendChild(div);
}

//listen for mouse cursor on container div
//(this trigers hover function to change background)
containerDiv.addEventListener('mouseenter', hover);

//define hover logic on divs
function hover() {
    const divs = document.querySelectorAll('div');
    divs.forEach((div) => {
        div.addEventListener('mouseenter', () => {
            div.classList.add('customBg');
        })
    })
}

//take user input through RESET button
const button = document.querySelector('button');
button.addEventListener('click', () => {
    let userInput = Number(window.prompt('Enter the number of boxes(n * n)', ''));
    //pass the value to create the custom box
    if (userInput > 100) {
        while (userInput > 100) {
            userInput = Number(window.prompt('Enter less than 100 * 100', ''));
        }
        generateGrid(userInput);
    } else generateGrid(userInput);
})

function generateGrid(num) {
    //clean the box
    containerDiv.replaceChildren();
    //create new layout
    let divId = 1;
    for (let i = 0; i < (num * num); i++) {
        const div = document.createElement('div');
        div.setAttribute('id', divId);
        divId++;
        div.style.width = `calc(100% / ${num})`;
        div.style.height = `calc(100% / ${num})`;
        containerDiv.appendChild(div);
    }
}