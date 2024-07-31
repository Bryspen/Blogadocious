const toggleSwitch = document.querySelector('#toggle');
const container = document.querySelector('.container');

let mode = 'light';

toggleSwitch.addEventListener('click', function () {
  if (mode === 'light') {
    mode = 'dark';
    container.setAttribute('class', 'dark');
    toggleSwitch.textContent = '☀️';
  }
  else {
    mode = 'light';
    container.setAttribute('class', 'light');
    toggleSwitch.textContent = '🌙';
  }
});

// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.


// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

