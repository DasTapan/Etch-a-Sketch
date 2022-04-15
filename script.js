//create 16x16 template grid
let divId = 1;
const containerDiv = document.querySelector('.container');
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.setAttribute('id', divId);
    divId++;
    div.style.width = 'calc(100% / 16)';
    div.style.height = 'calc(100% / 16)';
    // console.log(div.style.width);
    // console.log(div.style.height);
    containerDiv.appendChild(div);
    // console.log(div);
}
// listen & take user input from RESET
const button = document.querySelector('button');
button.addEventListener('click', () => {
    // console.log(button);
    let userInput = Number(window.prompt('Enter the number of boxes(n * n)', ''));
    console.log(userInput);
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
    let divId = 1;
    for (let i = 0; i < (num * num); i++) {
        const div = document.createElement('div');
        div.setAttribute('id', divId);
        divId++;
        div.style.width = `calc(100% / ${num})`;
        div.style.height = `calc(100% / ${num})`;
        // console.log(div.style.width);
        // console.log(div.style.height);
        containerDiv.appendChild(div);
        // console.log(div);
    }

}