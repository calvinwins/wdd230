const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('.navigation');

menubutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

 const joinButton = document.querySelector('.joinch');
 joinButton.addEventListener('click', function() {
    window.location='https://calvinwins.github.io/wdd230/chamber/join.html';
  });
  const joinButtons = document.querySelector('.joinch2');
  joinButtons.addEventListener('click', function() {
     window.location='https://calvinwins.github.io/wdd230/chamber/join.html';
   });
