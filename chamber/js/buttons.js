const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('.navigation');

menubutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

//  const joinButton = document.querySelector('.joinch');
//  joinButton.addEventListener('click', function() {
//     window.location='https://calvinwins.github.io/wdd230/chamber/join.html';
//   });
//   const joinButtons = document.querySelector('.joinch2');
//   joinButtons.addEventListener('click', function() {
//      window.location='https://calvinwins.github.io/wdd230/chamber/join.html';
//    });

// directory
const requestURL = 'https://calvinwins.github.io/wdd230/chamber/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusinesses);  // loop through each prophet
  });

  

// assign values of each business
  function displayBusinesses() {
    let card = document.createElement('section');

    //name
    let h2 = document.createElement('h2');
    h2.textContent = `${business.name}`;
    card.appendChild(h2);
  
    //Address
    let ad = document.createElement('p');
    ad.textContent = `Address: ${business.address}`;
    card.appendChild(ad);
  
    //Phone Number
    let pn = document.createElement('p');
    pn.textContent = `Phone: ${business.phone}`;
    card.appendChild(pn);
  
    //img
    let image = document.createElement('img');
    image.src = business.imageurl;
    image.setAttribute('alt', business.order);
    card.appendChild(image);
  
  
    document.querySelector('div.cards').appendChild(card);
  
  }
