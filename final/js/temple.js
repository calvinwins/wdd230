const api = 'https://calvinwins.github.io/wdd230/final/temple.json'

let templeList = [];

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



fetch(api)
    .then(response => response.json())
    .then(temples => {
        templeList = temples;
        output(templeList);
    });


const reset = () => {
    document.querySelector('#temples').innerHTML = '';
}
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

