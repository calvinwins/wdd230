const input = document.querySelector('input');
const buildButton = document.querySelector('button');
const list = document.getElementById('list')

document.getElementById('favbook').style.background='#D4CCE3'
buildButton.addEventListener('click', () => {
     let size = input.value;
     input.value = '';
     let li = document.createElement('li');
     let span = document.createElement('span');
     let button = document.createElement('button');

     li.appendChild(span);
     span.textContent = size;
     li.appendChild(button);
     button.textContent = '❌';
     list.appendChild(li);

     button.addEventListener('click', () => {
         list.removeChild(li);
     })

     input.focus();
});