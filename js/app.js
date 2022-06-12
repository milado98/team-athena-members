let teamMembers = [
    {
        Name: 'Emmanuel',
        Image: './img/me.jpg',
        favouriteFood: 'Vegetable Soup with Swallow' ,
        complexion:  'Fair',
        thingsLearnt: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
        bestMovie: 'The Old Guard',
        age: '23 years old'
    },
    {
        Name: 'Adekunle Rasheed',
        Image: './img/demand.jpg',
        favouriteFood: 'Rice' ,
        complexion:  'Fair',
        thingsLearnt: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
        bestMovie: 'The Wire',
        age: '30 years old'
    },
    {
        Name: 'Jhenna',
        Image:'./img/jhenna.jpg',
        favouriteFood: 'Ede Soup and swallow' ,
        complexion:  'Fair',
        thingsLearnt: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
        bestMovie: 'Anything Horrific',
        age: '23 years old'
    },
    {
        Name: 'Bamiigboye Elizabeth',
        Image: './img/shytemi.jpg',
        favouriteFood: 'Yam and Egg' ,
        complexion:  'Fair',
        thingsLearnt: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
        bestMovie: 'Mouse',
        age: '23 years old'
    },
    {
        Name: 'Emmanuel Mitti',
        Image: './img/mitems.jpg',
        favouriteFood: 'Ede Soup and swallow' ,
        complexion:  'Dark',
        thingsLearnt: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
        bestMovie: 'Wrath of Man',
        age: '23 years old'
    },
    {
        Name: 'Banfe Serah',
        Image: './img/korex.jpg',
        favouriteFood: 'White Rice with Beans' ,
        complexion:  'Dark',
        thingsLearnt: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
        bestMovie: 'Love in the Prison',
        age: '26 years old'
    },
    {
        Name: 'Obumneme Okoye',
        Image: './img/obum.JPG',
        favouriteFood: 'Well cooked Food' ,
        complexion:  'Chocolate',
        thingsLearnt: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
        bestMovie: 'Action and Comedy',
        age: '19 years old'
    },
    {
        Name: 'Okanlawon Oluwatobiloba',
        Image: './img/toba.jpg',
        favouriteFood: 'Semo with Egusi' ,
        complexion:  'Fair',
        thingsLearnt: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
        bestMovie: 'Prison Break',
        age: '24 years old'
    }

];

let container = document.querySelector('.container');

let containerHeader = document.createElement('h1');
containerHeader.innerHTML = 'Team Athena';
containerHeader.classList.add('text-center', 'py-3');

for (let i=0; i < teamMembers.length; i++) {
    let row = document.querySelector('.row');

    let card = document.createElement('div');
    card.classList.add('col-lg-3', 'col-md-6', 'col-sm-12');

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body', 'mb-5', 'd-flex', 'justify-content-center', 'align-items-center', 'flex-column');

    let cardImage = document.createElement('img');
    cardImage.src = teamMembers[i].Image;
    cardImage.classList.add('rounded-img', 'img-fluid');

    let cardName = document.createElement ('h2');
    cardName.classList.add('text-center', 'pt-3', 'fs-4');
    cardName.innerHTML = teamMembers[i].Name;

    let cardDetails = document.createElement('p');
    cardDetails.classList.add ('text-center');
    cardDetails.innerHTML = 'Age: ' + teamMembers[i].age;

    let cardDetails2 = document.createElement('p');
    cardDetails2.classList.add ('text-center');
    cardDetails2.innerHTML = 'Favourite Food: ' + teamMembers[i].favouriteFood;

    let cardDetails3 = document.createElement('p');
    cardDetails3.classList.add ('text-center');
    cardDetails3.innerHTML = 'Complexion: ' + teamMembers[i].complexion;

    let cardDetails4 = document.createElement('p');
    cardDetails4.classList.add ('text-center');
    cardDetails4.innerHTML = 'Best Movie: ' + teamMembers[i].bestMovie;

    let cardButton = document.createElement ('button');
    cardButton.classList.add('click-btn', 'mt-5');
    cardButton.innerHTML = "Click Me";
    cardButton.addEventListener('click', function () {
        alert (
            'I am ' + teamMembers[i].Name
        );
    });

    container.appendChild(containerHeader);
    container.appendChild(row);
    row.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(cardImage);
    cardBody.appendChild(cardName);
    cardBody.appendChild(cardDetails);
    cardBody.appendChild(cardDetails2);
    cardBody.appendChild(cardDetails3);
    cardBody.appendChild(cardDetails4);
    cardBody.appendChild(cardButton);

}

console.log (card);