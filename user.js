//gets the post-list html element
const postListEl = document.querySelector(`.post-list`)
//gets id from local storage that was set in index.js userHTML() onclick
const id = localStorage.getItem(`id`)

//function called on change in user.html on line 21
async function onSearchChange(event){
    const id = event.target.value;
    renderPosts(id);
}

async function renderPosts(id){
    //fetch data from place and convert to json after waiting for data
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const postData = await post.json();
    //sets dynamic html in the post-list element from converted array using map 
    postListEl.innerHTML = postData.map(post => postHTML(post)).join(``);//joins array into one script for html
}

function postHTML(post){
    return `<div class="post">
      <div class="post__title">
        ${post.title}
      </div>
      <p class="post__body">
        ${post.body}
      </p>
    </div>`
}

renderPosts(id);