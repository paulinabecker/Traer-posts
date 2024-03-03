async function getPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error(`Error al obtener los posts. Código de estado: ${response.status}`);
      }
  
      const posts = await response.json();
      displayPosts(posts);
    } catch (error) {
      console.error('Error:', error.message);
      alert('Error al obtener los posts.');
    }
  }
  
  function displayPosts(posts) {
    const postData = document.getElementById('post-data');
    postData.innerHTML = '';
  
    const ul = document.createElement('ul');
  
    posts.forEach(post => {
      const li = document.createElement('li');
      const titleElement = document.createElement('h2');
      const bodyElement = document.createElement('p');
  
      titleElement.textContent = post.title;
      bodyElement.textContent = post.body;
  
      li.appendChild(titleElement);
      li.appendChild(bodyElement);
  
      ul.appendChild(li);
    });
  
    postData.appendChild(ul);
  }
  
  