function sayHello() {
  alert("Hello from the external file!");
}

function sayGoodbye() {
  alert("Goodbye from the external file!");
}

// Connect the function to the button
let btn = document.getElementById("helloBtn");
btn.addEventListener("click", sayHello);

let gbtn = document.getElementById("ByeBtn");
gbtn.addEventListener("click", sayGoodbye);