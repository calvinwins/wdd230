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
// const visited = window.localStorage.getItem('lastvisit');
// if(visited === undefined) {
//     visited = new Date(Data.now());
// }
// const lastVisited = Date.parse(visited);
// const Seperation = 1000 * 60 * 60 * 24;
// let numVisits = Number(window.localStorage.getItem("visits-ls"));

// let days = Date.now() - lastVisited;
// let number = days / Seperation;

// window.localStorage.setItem('lastvisit', new Date(Date.now()));

// const daysBetween = Math.floor(number);
// document.getElementById('visits').textContent = daysBetween;

// const visited = document.getElementById('lastvisit');


// let numOfVisits = Number(window.localStorage.getItem('visits'));
// let lastVisit= Number(window.localStorage.getItem('lastVisits'));

// const Seperation = 1000 * 60 * 60 * 24;

// let daysBetween = Date.now() - lastVisit;
// let numOfDays = Math.floor(daysBetween / Seperation);

// localStorage.setItem('lastVisits', Date.now());



// if (numOfVisits !== 0) {
//     visited.textContent = 'The last time you visited was' + numOfDays + ' day(s) ago.'
// } else {
// 	visited.textContent = `This is your first visit!`;
// }
// numOfVisits++;
// // store the new number of visits value
// localStorage.setItem("visits", numOfVisits);


// Script for Number of Visits
const numVisits = document.getElementById('visits');

//Script for displaying the number of days on Discover page

let numOfVisits = Number(window.localStorage.getItem('visits'));
let lastVisit= Number(window.localStorage.getItem('lastVisits'));

const FACTOR = 1000 * 60 * 60 * 24;

let daysBetween = Date.now() - lastVisit;

let numOfDays = Math.floor(daysBetween / FACTOR);

localStorage.setItem('lastVisits', Date.now());

if (numOfVisits != 0) {

    numVisits.textContent = 'The last time you visited was ' + numOfDays + ' day(s) ago.'

} else {
    numVisits.textContent = 'This is your first page visit.'
}

numOfVisits++;
// store the new number of visits value
localStorage.setItem("visits", numOfVisits);



