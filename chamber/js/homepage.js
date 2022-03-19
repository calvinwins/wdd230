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
const spotlights = document.querySelectorAll('.spotlights');


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const businesses = jsonObject['businesses'];
        const businessesStatus = businesses.filter((business) => {
            return business.membship == "Bronze" || business.membship == "Silver" || business.membship == "Gold";
        });
        spotlights.forEach((spotlight,index) => {
            const i = Math.floor(Math.random()*businessesStatus.length);
            const business = businessesStatus[i];

            //img
            let image = document.createElement('img');
            image.src = business.image;
            image.setAttribute('alt', business.imageAlt);
            spotlight.appendChild(image);

            let ad = document.createElement('p');
            ad.textContent = `Address: ${business.address}`;
            spotlight.appendChild(ad);
          
            //Phone Number
            let pn = document.createElement('p');
            pn.textContent = `Phone: ${business.phone}`;
            spotlight.appendChild(pn);
            // //website
            let web = document.createElement('p');
            web.textContent = `Website: ${business.website}`;
            spotlight.appendChild(web);


            businessesStatus.splice(i,1);
        });
    });

