//create 16x16 template grid
let divId = 1;
const containerDiv = document.querySelector('.container');
for(let i=0; i<256; i++) {
    const div = document.createElement('div');
    div.setAttribute('id',divId);
    divId++;
    div.style.width = 'calc(100% / 16)';
    div.style.height = 'calc(100% / 16)';
    containerDiv.appendChild(div);
    console.log(div);
} 