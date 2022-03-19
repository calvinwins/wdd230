// homepage
const joinButton = document.querySelector('.joinch');
 joinButton.addEventListener('click', function() {
    window.location='https://calvinwins.github.io/wdd230/chamber/join.html';
  });
const joinButtons = document.querySelector('.joinch2');
  joinButtons.addEventListener('click', function() {
     window.location='https://calvinwins.github.io/wdd230/chamber/join.html';
    });


// spotlight
const requestURL = 'https://calvinwins.github.io/wdd230/chamber/data.json';
const spotlight = document.querySelector('.spotlight');


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const businesses = jsonObject['businesses'];
        const businessesStatus = businesses.filter((business) => {
            return business.membship == "Bronze" || business.membship == "Silver" || business.membship == "Gold";
        });
        spotlightItems.forEach((spotlight,index) => {
            const i = Math.floor(Math.random()*businessesStatus.length);
            const business = businessesStatus[i];

            //img
            let image = document.createElement('img');
            image.src = business.imgfile;
            image.setAttribute('alt', business.name);
            spotlight.appendChild(image);

            //p phone
            let p2 = document.createElement('p');
            p2.textContent = business.phone;
            spotlight.appendChild(p2);

            //p website
            let p3 = document.createElement('p');
            p3.textContent = business.website;
            spotlight.appendChild(p3);


            businessesStatus.splice(i,1);
        });
    });

