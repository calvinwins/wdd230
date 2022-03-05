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
// directory//
const requestURL = 'https://calvinwins.github.io/wdd230/chamber/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject['businesses'];
    businesses.forEach(displaybusinesses);  // loop through each prophet
  });

  

// assign values of each prophet
  function displayProphets() {
    let card = document.createElement('section');

    //name
    let h2 = document.createElement('h2');
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    card.appendChild(h2);
  
    //Date of Birth
    let db = document.createElement('p');
    db.textContent = `Date of Birth: ${prophet.birthdate}`;
    card.appendChild(db);
  
    //PLace of Birth
    let pb = document.createElement('p');
    pb.textContent = `Place of birth: ${prophet.birthplace}`;
    card.appendChild(pb);
  
    //img
    let image = document.createElement('img');
    image.src = prophet.imageurl;
    image.setAttribute('alt', prophet.order);
    card.appendChild(image);
  
  
    document.querySelector('div.cards').appendChild(card);
  
  }