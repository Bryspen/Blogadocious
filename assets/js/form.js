// TODO: Create a variable that selects the form element
const form = document.querySelector('blog-form');
const redirectPage = function (url) {
    redirectURL = (url);
    location.assign(url);
};
// TODO: Create a function that handles the form submission.
// Grab the form data and store it in local storage, then redirect 
//to the blog page using the `redirectPage` function. If the form is 
//submitted with missing data, display an error message to the user.

storeformData = function () {
    
    const storedData = readlocalStorage();
    const formData = {username: usernameInput.value, 
        title: titleInput.value, 
        content: contentInput.value};
        console.log(formData);  
    

    if (usernameInput.value === '' || titleInput.value === '' || contentInput.value === '') {
        error.textContent = 'Please complete the form.';
        return;
    }
    else {
                
    localStorage.setItem('formData', JSON.stringify(formData));  
    redirectPage('blog.html');
    
        }
    };
// TODO: Add an event listener to the form on submit. Call the function 
//to handle the form submission.

submitbutton.addEventListener('click', function (event) {
    event.preventDefault();
    formData.push(storeformData());
        
        
    

    storeformData();
    
    
    });