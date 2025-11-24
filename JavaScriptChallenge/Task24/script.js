let count = 1;
document.getElementById('loadBtn').addEventListener('click', () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
        .then(response => response.json())
        .then(data => {
            const item = document.createElement('div');
            item.innerHTML = `<h3>${data.title}</h3><p>${data.body}</p>`;
            document.body.appendChild(item);
            count++;
        })
        .catch(error => console.error('Error fetching data:', error));
});