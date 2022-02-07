const lastmod = document.querySelector('#lastmod');
lastmod.textContent = `Last modified: ${document.lastModified}`;

const date = new Date();
const year = date.getFullYear();

document.getElementById('year').textContent = year;