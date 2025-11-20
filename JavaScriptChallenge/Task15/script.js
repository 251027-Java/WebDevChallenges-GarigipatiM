function switchImg() {
    let img = document.getElementById("myimg");

    if (img.src.includes("cat.jpg")) {
        img.src = "dog.jpg";
    } else
    {
        img.src = "cat.jpg";
    }
}

document.getElementById("imgChange").addEventListener("click", switchImg);