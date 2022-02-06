const date =  new Date();
const year = date.getFullYear();

const lastmod = document.querySelector('#lastmod');
lastmod.textContent = `Last modified: ${document.lastModified}`;

const today = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", {
	dateStyle: "full"}).format(today);

document.getElementById('currentDate').innerHTML = `<em>${fulldate}</em>`;

document.getElementById('currentYear').textContent = year;


let dayOfWeek;

dayOfWeek = date.getDay();

// Step 4: Declare a variable to hold a message that will be displayed

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'


let message;
if (dayOfWeek >= 1 && dayOfWeek <= 3) {
message1 = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m. ';}



switch (day) {
    case (0):
        message2 = 'Sunday';
        break;
    case (1):
        message2 = 'Monday';
        break;
    case (2):
        message2 = 'Tuesday';
        break;
    case (3):
        message2 = 'Wednesday';
        break;
    case (4):
        message2 = 'Thursday';
        break;
    case (5):
        message2 = 'Friday';
        break;
    case (6):
        message2 = 'Saturday';
        break;
}

document.getElementById('banner').textContent = message1;
