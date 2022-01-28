const date =  new Date();
const year = date.getFullYear();

document.getElementById('currentDate').textContent = date
const lastmod = document.querySelector('#lastmod');
lastmod.textContent = `Last modified: ${document.lastModified}`;

document.getElementById('currentYear').textContent = year;
