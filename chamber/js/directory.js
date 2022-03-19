// directory
const requestURL = 'https://calvinwins.github.io/wdd230/chamber/data.json';
const cards = document.querySelector('.card-view');


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusinesses);  // loop through each business
  });

  

// assign values of each business
  function displayBusinesses(business) {
    let card = document.createElement('section');

    //img
    let image = document.createElement('img');
    image.src = business.image;
    image.setAttribute('alt', business.imageAlt);
    card.appendChild(image);

    //name
    let h3 = document.createElement('h3');
    h3.textContent = `${business.name}`;
    card.appendChild(h3);
  
    //Address
    let ad = document.createElement('p');
    ad.textContent = `Address: ${business.address}`;
    card.appendChild(ad);
  
    //Phone Number
    let pn = document.createElement('p');
    pn.textContent = `Phone: ${business.phone}`;
    card.appendChild(pn);
    // //website
    let web = document.createElement('p');
    web.textContent = `Website: ${business.website}`;
    card.appendChild(web);
  
    document.querySelector('div.card-view').appendChild(card);
  
  }

const cardButton = document.getElementById('directory-card');
const listButton = document.getElementById('directory-list');

listButton.addEventListener("click", ()=> {
    cards.classList.replace("card-view", "list-view")
});

cardButton.addEventListener("click", ()=> {
    cards.classList.replace("list-view", "card-view")
});

