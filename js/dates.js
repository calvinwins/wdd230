const date =  new Date();
const year = date.getFullYear();

const lastmod = document.querySelector('#lastmod');
lastmod.textContent = `Last modified: ${document.lastModified}`;

document.getElementById('currentYear').textContent = year
