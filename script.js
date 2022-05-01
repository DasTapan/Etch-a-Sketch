const rgbButton = document.getElementById('rgb');
const gradButton = document.getElementById('grad');
const vanButton = document.getElementById('van');

const globalContainerDiv = document.querySelector('.container');
console.log(globalContainerDiv);
const modes = document.querySelector('.modes');
const buttons = modes.querySelectorAll('button');
console.log(buttons);

vanilla();

buttons.forEach(button => button.addEventListener('click', () => {
    if (button.id == 'rgb') rgb();
    if (button.id == 'grad') gradient();
    if (button.id == 'van') vanilla();
}));

function rgb() {
    generateDefault();
    rgbButton.hidden = true;
    gradButton.hidden = false;
    vanButton.hidden = false;
    //listen for mouse cursor on container div
    //(this trigers hover function to change background)
    globalContainerDiv.addEventListener('mouseenter', hover);

    //define hover logic on divs
    function hover() {
        const divs = globalContainerDiv.querySelectorAll('div');
        divs.forEach((div) => {
            div.addEventListener('mouseenter', () => {
                div.classList.add('rgbBg');
            })
        })
    }
}

function gradient() {
    generateDefault();
    rgbButton.hidden = false;
    gradButton.hidden = true;
    vanButton.hidden = false;
    //listen for mouse cursor on container div
    //(this trigers hover function to change background)
    globalContainerDiv.addEventListener('mouseenter', hover);

    //define hover logic on divs
    function hover() {
        const divs = globalContainerDiv.querySelectorAll('div');
        divs.forEach((div) => {
            div.addEventListener('mouseenter', () => {
                div.classList.add('gradBg');
            })
        })
    }
}

function vanilla() {
    generateDefault();
    rgbButton.hidden = false;
    gradButton.hidden = false;
    vanButton.hidden = true;

    //listen for mouse cursor on container div
    //(this trigers hover function to change background)
    globalContainerDiv.addEventListener('mouseenter', hover);

    //define hover logic on divs
    function hover() {
        const divs = globalContainerDiv.querySelectorAll('div');
        divs.forEach((div) => {
            div.addEventListener('mouseenter', () => {
                div.classList.add('vanillaBg');
            })
        })
    }
}

function generateDefault() {
    //create 16x16 template grid
    if (globalContainerDiv.hasChildNodes()) globalContainerDiv.replaceChildren();
    let divId = 1;
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.setAttribute('id', divId);
        divId++;
        div.style.width = 'calc(100% / 16)';
        div.style.height = 'calc(100% / 16)';
        globalContainerDiv.appendChild(div);
    }
}

//take user input through RESET button
const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', () => {
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
    const containerDiv = document.querySelector('.container');
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