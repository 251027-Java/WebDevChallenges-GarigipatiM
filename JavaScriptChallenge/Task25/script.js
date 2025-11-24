document.getElementById('fetchBtn').addEventListener('click', () => {
    let postid = document.getElementById('postId').value;
    fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("output").innerHTML =
                    `<h3>${data.title}</h3><p>${data.body}</p>`;
            document.getElementById('postId').value = "";
        })
        .catch(error => console.error('Error fetching data:', error));
});