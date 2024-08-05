
// TODO: Create a variable that selects the main element, and a variable 
//that selects the back button element
const main = document.querySelector('main');
const back = document.querySelector('#back');

const redirectPage = function (url) {
    redirectURL = (url);
    location.assign(url);
};
// TODO: Create a function that builds an element and appends it to the DOM
createPost = function (post) {
        post = formData;
       
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        const blockquote = document.createElement('blockquote');
        h2.textContent = post.title;
        p.textContent = `Posted by: ${post.username}`;
        blockquote.textContent = post.content;
        article.appendChild(h2);
        article.appendChild(p);
        article.appendChild(blockquote);
        main.appendChild(article);
        console.log(formData);
    

    
  };

// TODO: Create a function that handles the case where there are no blog 
//posts to display
noPosts = function () {
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    h2.textContent = 'No Blog posts yet...';
    article.appendChild(h2);
};
// TODO: Create a function called `renderBlogList` that renders the list 
//of blog posts if they exist. If not, call the no posts function.
renderbloglist = function () {
    main.innerHTML = '';
    let formData = readlocalStorage();
  

    if (formData.length === 0) {
    noPosts();
    }
    else {
        createPost();
  }
}; 
// TODO: Call the `renderBlogList` function

// TODO: Redirect to the home page using the `redirectPage` 
//function found in logic.js when the back button is clicked


back.addEventListener('click', function (event) {
    event.preventDefault();
    redirectPage('index.html');
});

function init() {
    readlocalStorage();  
    console.log(formData);
    renderbloglist();
    createPost();
}
init();