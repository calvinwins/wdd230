const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);  
  });

  

  function displayProphets(prophet) {
    let card = document.createElement('section');


    let h2 = document.createElement('h2');
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    card.appendChild(h2);
  

    let db = document.createElement('p');
    db.textContent = `Date of Birth: ${prophet.birthdate}`;
    card.appendChild(db);

    let pb = document.createElement('p');
    pb.textContent = `Place of birth: ${prophet.birthplace}`;
    card.appendChild(pb);
  
    let image = document.createElement('img');
    image.src = prophet.imageurl;
    image.setAttribute('alt', prophet.order);
    card.appendChild(image);
  
  
    document.querySelector('div.cards').appendChild(card);
  
  }