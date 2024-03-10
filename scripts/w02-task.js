/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Jose Pablo Mariscal'
let currentYear = new Date().getFullYear();
let imagePath = "images/profilePicture.jpeg"

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('picture img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', imagePath);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let favoriteFoods = ['Tacos al pastor', 'Chilaquiles', 'Pozole'];
foodElement.innerHTML = favoriteFoods.join(', ');

const newFavoriteFood = 'Mole';
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;

const removedFirst = favoriteFoods.shift();
foodElement.innerHTML += `<br> ${favoriteFoods.join(', ')}`;

const removedLast = favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;












