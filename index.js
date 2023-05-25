document.body.style.backgroundColor = 'silver';
let h1 = document.getElementsByTagName('h1')[0];
h1.style.color = 'green';
let h3List = document.getElementsByTagName('h3');
for (var i = 0; i < h3List.length; i++) {
  h3List[i].style.textTransform = 'uppercase';
}
let fruitsList = document.getElementById('fruList');
let newFruit = document.createElement('li');
newFruit.textContent = 'apple';
fruitsList.appendChild(newFruit);
let vegeList = document.getElementById('vegList');
let newVeges = document.createElement('li');
newVeges.textContent = 'Brocolli';
vegeList.appendChild(newVeges);







