const date =  new Date();
const year = date.getFullYear();

const lastmod = document.querySelector('#lastmod');
lastmod.textContent = `Last modified: ${document.lastModified}`;

const today = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", {
	dateStyle: "full"}).format(today);

document.getElementById('currentDate').innerHTML = `<em>${fulldate}</em>`;

document.getElementById('currentYear').textContent = year;

