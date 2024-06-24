async function getPosts() {
  try {
    const apiResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    
    if (!apiResponse.ok) {
      throw new Error(`HTTP error! Status: ${apiResponse.status}`);
    }

    const data = await apiResponse.json();
    renderPosts(data);
  } catch (error) {
    console.error("Error fetching or displaying posts:", error);
  }
}

function renderPosts(posts) {
  const postSection = document.getElementById("post-data");
  
  if (!postSection) {
    console.error("Post section not found in the DOM");
    return;
  }

  const postItems = posts.map(post => `
    <ul>
      <li>
        <h5>${post.title}</h5>
        <p>${post.body}</p>
      </li>
    </ul>
  `).join('');

  postSection.innerHTML = postItems;
}

const fetchPostsBtn = document.getElementById("fetch-posts-btn");
fetchPostsBtn.addEventListener("click", getPosts);
document.addEventListener('DOMContentLoaded', getPosts);