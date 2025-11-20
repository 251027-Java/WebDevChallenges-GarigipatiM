function greetUser() {
  let name = document.getElementById("nameInput").value;
  let color = document.getElementById("color").value;
  if (name.trim() === "" || color.trim() === "") {
    alert("Please enter your name and favorite color first!");
  } else {
    alert("Hello, " + name + "! " + color + " is my favorite color too!");
  }
}

document.getElementById("greetBtn").addEventListener("click", greetUser);

/*
Add a second input field for the user’s **favorite color**.
When the button is clicked, greet the user *and* mention their color in the message.
*/