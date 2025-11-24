document.getElementById('fetchBtn').addEventListener('click', () => {
    let postid = document.getElementById('postId').value;
    fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`)
        .then(response => {
            // if(!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            if(!data.title){
                document.getElementById("output").innerHTML =
                        `<h3>No post found.</h3>`;
            } else {
                document.getElementById("output").innerHTML =
                    `<h3>${data.title}</h3><p>${data.body}</p>`;
            }
            document.getElementById('postId').value = "";
        })
        .catch(error => console.error('Error fetching data:', error));
});