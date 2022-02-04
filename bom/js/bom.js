const listsize = document.querySelector('#listsize ');
const buildButton = document.querySelector('button');
const list = document.getElementById('list')

buildButton.addEventListener('click', () => {
     let size = listsize.value;
     let li = document.createElement('li');
     li.innerhtml
     list.appendChild(li)
});