function addLI() {
    let myList = document.getElementById("myList");
    let newListItem = document.createElement("li");
    newListItem.textContent = "JavaScript";
    myList.append(newListItem);
}

document.getElementById("addItem").addEventListener("click", addLI);