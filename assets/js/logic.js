const toggle = document.querySelector('#toggle');
const container = document.querySelector('.container');
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitbutton = document.querySelector('#submit');
const error = document.querySelector('#error');
let formData = [];
let mode = localStorage.getItem('mode') || 'light';


// TODO: Create logic to toggle the light/dark mode styles for the page and circle. 
//The mode should be saved to local storage.
toggle.addEventListener('click', function (event) {
  event.preventDefault();
  
  if (mode === 'light' || mode === null) {
    mode = 'dark';
    container.setAttribute('class', mode);
    document.documentElement.style.setProperty('--circle-color', 'green');
    toggle.textContent = '☀️';
  }
  else {
    mode = 'light';
    container.setAttribute('class', mode);
    document.documentElement.style.setProperty('--circle-color', '#ffb100');
    toggle.textContent = '🌙';
  }
  localStorage.setItem('mode', mode);
  console.log(mode);
});

// TODO: Create a function called `readLocalStorage` that reads from local storage 
// and returns the data. If no data exists, return an empty array.

readlocalStorage = function () {
  const storedData = JSON.parse(localStorage.getItem('formData')) || [];
  console.log(storedData);
  if (storedData !== null) {
    formData = storedData;
  }
  return formData;
  };

// TODO: Create a function called `storeLocalStorage` that takes a given object 
//and saves the new data to the existing blog data in local storage.
storelocalStorage = function () {
  localStorage.setItem('formData', JSON.stringify(formData));
 
};




// ! Use the following function whenever you need to redirect to a different page

//let redirectURL = '';

//const redirectPage = function (url) {
  //redirectURL = url;
  //location.assign(url);
//};

function init() {
  container.setAttribute('class', mode);
}

init();