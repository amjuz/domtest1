let redParagraph = document.createElement('p');
redParagraph.textContent="Hey I'm red!";
redParagraph.style.color = 'red';

let blueHeading = document.createElement('h3');
blueHeading.textContent = "I'm a blue h3!";
blueHeading.style.color = 'blue';

let divContainer = document.createElement('div');
divContainer.style.border = '1px solid black';
divContainer.style.backgroundColor = 'pink';

let h1InsideDiv = document.createElement('h1'); 
h1InsideDiv.textContent = "I'm in a div";
      
let pInsideDiv = document.createElement('p');
pInsideDiv.textContent = "ME TOO";
      
divContainer.appendChild(h1InsideDiv);
divContainer.appendChild(pInsideDiv);
    
let container = document.createElement('div');
container.appendChild(redParagraph);
container.appendChild(blueHeading);
container.appendChild(divContainer);

const body = document.body;
body.appendChild(container);

