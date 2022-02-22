let imagestoLoad = document.querySelectorAll('img[data-src]');

const imageOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target)
            }
        });
    }, imageOptions);  

    imagestoLoad.forEach((img) => {
        imgObserver.observe(img);
    })
}
else {
    imagestoLoad.forEach((img) => {
        loadImages(img);
    })
}


// last visit to site//
const Visits = document.getElementById('visits');


let numOfVisits = Number(window.localStorage.getItem('visits'));
let lastVisit= Number(window.localStorage.getItem('lastVisits'));

const FACTOR = 1000 * 60 * 60 * 24;

let daysBetween = Date.now() - lastVisit;

let numOfDays = Math.floor(daysBetween / FACTOR);

localStorage.setItem('lastVisits', Date.now());

if (numOfVisits != 0) {
    Visits.textContent = 'The last time you visited was ' + numOfDays + ' day(s) ago.'
} else {
    Visits.textContent = 'This is your first page visit.'
}

numOfVisits++;

localStorage.setItem("visits", numOfVisits);



