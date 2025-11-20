function change() {
    const el = document.getElementById("message");
    el.textContent = "This is my text!"
}

document.getElementById("headingBtn").addEventListener("click", change);