fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    data.slice(0, 5).forEach(post => {
        const item = document.createElement('div');
        item.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
        document.body.appendChild(item);
        });
  })
  .catch(error => console.error('Error fetching data:', error));