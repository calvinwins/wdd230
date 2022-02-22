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
const visited = window.localStorage.getItem('lastvisit');
if(visited === undefined) {
    visited = new Date(Data.now());
}
const lastVisited = Date.parse(visited);
const Seperation = 1000 * 60 * 60 * 24;

let days = Date.now() - lastVisited;
let number = days / Seperation;

window.localStorage.setItem('lastvisit', Date.now());

const daysBetween = Math.floor(number);
document.getElementById('visits').textContent = daysBetween;
