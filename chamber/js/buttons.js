const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('.navigation');

menubutton.addEventListener('click', () => 
{mainnav.classList.toggle('responsive');
ham.classList.toggle('hidden')}, false)
;

window.onresize = () => {if (window.innerWidth > 760) 
    mainnav.classList.remove('responsive')
    ham.classList.remove("hidden");
};