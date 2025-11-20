function styleRedBold() {
    let text = document.getElementById("text");
    text.style.color = "red";
    text.style.fontWeight = "bold";
}

function styleDefault() {
    let text = document.getElementById("text");
    text.style.color = "black";
    text.style.fontWeight = "initial";
}

document.getElementById("RedBold").addEventListener("click", styleRedBold);
document.getElementById("normalStyle").addEventListener("click", styleDefault);