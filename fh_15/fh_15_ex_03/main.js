const ulElement = document.createElement('ul');
const divElement = document.getElementById('main');
divElement.appendChild(ulElement);

for(let i = 1; i <= 5; i++){
  const liElement = document.createElement('li');
  liElement.textContent = 'アイテム' + i;
  ulElement.appendChild(liElement);
}

console.log(ulElement.children[3]);
ulElement.removeChild(ulElement.children[3]);

const parentElement = document.getElementById('remove-all-items');
while(parentElement.firstChild){
  parentElement.removeChild(parentElement.firstChild);
}