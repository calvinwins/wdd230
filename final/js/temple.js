const api = 'https://calvinwins.github.io/wdd230/final/temple.json'

let templeList = [];

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples

const output = (temples) => {
    temples.forEach(
        temple => {
            let article = document.createElement('article');

            let templeName = document.createElement('h3');
            templeName.textContent = temple.templeName;

            let location = document.createElement('h4');
            location.textContent = `Location: ${temple.location}`;

            let dedicated = document.createElement('h4');
            dedicated.textContent = `Dedication: ${temple.dedicated}`;

            let services = document.createElement('p')
            services.textContent = `Services: ${temple.services}`;

            let phone = document.createElement('p')
            phone.textContent = `phone: ${temple.phone}`;

            let ordinanceSchedule = document.createElement('p')
            ordinanceSchedule.textContent = `Ordinance Schedule: ${temple.ordinanceSchedule}`;

            let closure = document.createElement('p')
            closure.textContent = `Closure: ${temple.closure}`;

            let sessionSchedule = document.createElement('p')
            sessionSchedule.textContent = `Session Schedule: ${temple.sessionSchedule}`;

            let img = document.createElement('img');
            img.setAttribute('src', temple.imageUrl);
            img.setAttribute('alt', temple.templeName);

            let likeButton = document.createElement('input');


            // let imgButton = document.createElement('img');
            // imgButton.setAttribute('src', 'images/like.png');
            // imgButton.setAttribute('alt', `likeButton`)  
            id = temple.id;
            likeButton.setAttribute('id', id );
            likeButton.setAttribute('value', 'like');
            likeButton.setAttribute('type', 'button');
            val = window.localStorage.getItem(id)
                // if( val == "null" && val =='like'){
                // val = 'like'
                // likeButton.setAttribute('value', 'like');
                // likeButton.style.backgroundColor = 'white';
                // likeButton.style.color = 'black';
                // localStorage.setItem(id, val)
                // }else{
                // likeButton.style.backgroundColor = '#F52100';
                // likeButton.style.color = 'white';
                // likeButton.setAttribute('value', 'liked')
                // };
            likeButton.addEventListener('click', function onClick() {
                if( likeButton.value == "like"){
                likeButton.style.backgroundColor = '#F52100';
                likeButton.style.color = 'white';;
                window.localStorage.setItem(id, 'liked');
                A = window.localStorage.getItem(id)
                likeButton.value = A
                }else{
                likeButton.value = 'liked'
                window.localStorage.setItem(id, 'like');
                B = window.localStorage.getItem(id)
                likeButton.value = B
                likeButton.style.backgroundColor = 'white';
                likeButton.style.color = 'black';
            }});
            localStorage.setItem(id, val);
            

            // function btn(){
            //     currentvalue = document.getElementById('btn').value;
            //     if(currentvalue == "like"){
            //       document.getElementById("btn").value="liked";
            //       document.getElementById("btn").innerHTML="liked"
            //     }else{
            //       document.getElementById("btn").value="like";
            //     }
            //   }
            

            article.appendChild(templeName);
            article.appendChild(location);
            article.appendChild(dedicated);
            article.appendChild(services);
            article.appendChild(phone);
            article.appendChild(ordinanceSchedule);
            article.appendChild(closure);
            article.appendChild(sessionSchedule);
            article.appendChild(img);
            article.appendChild(likeButton);

            document.querySelector('#temples').appendChild(article);
        }
    );
}

// Step 3: Using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'
// fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json');

// Step 4: Add a .then() method to turn the returned string into a JavaScript object ( hint: .json() )
// fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json')
//    .then(result = result.json())

// Step 5: Add another .then() method with a variable name to hold the temples and an empty arrow function
// fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json')
//    .then(response => response.json())
//    .then(temples => {
//    });

// Step 6: Inside of second .then() method, assign the list of temples (as a JSON object) to the temples variable
// fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json')
//    .then(response => response.json())
//    .then(temples => {
//        templeList = temples;
//    });

// Step 7: Finally, call the output function and pass it the list of temples
fetch(api)
    .then(response => response.json())
    .then(temples => {
        templeList = temples;
        output(templeList);
    });

// Step 8: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
const reset = () => {
    document.querySelector('#temples').innerHTML = '';
}

// Step 9: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples
const sortBy = () => {
    reset();

    let filter = document.querySelector('#sortBy').value;

    switch (filter) {
        case 'templeNameAscending':
            output(templeList.sort(
                (temple1, temple2) => {
                    let templeName1 = temple1.templeName.toLowerCase();
                    let templeName2 = temple2.templeName.toLowerCase();
                    if (templeName1 < templeName2) return -1;
                    else if (templeName1 > templeName2) return 1;
                    else return 0;
                }));
            break;
        case 'templeNameDescending':
            output(templeList.sort(
                (temple1, temple2) => {
                    let templeName1 = temple1.templeName.toLowerCase();
                    let templeName2 = temple2.templeName.toLowerCase();
                    if (templeName1 > templeName2) return -1;
                    else if (templeName1 < templeName2) return 1;
                    else return 0;
                }));
            break;
        default:
            // using ternary operators
            output(templeList.sort(
                (temple1, temple2) => 
                temple1.templeName.toLowerCase() > temple2.templeName.toLowerCase() ? 1 : 
                    temple2.templeName.toLowerCase() > temple1.templeName.toLowerCase() ? -1 : 0));
            break;
    }
}

document.querySelector('#sortBy').addEventListener('change', sortBy);

