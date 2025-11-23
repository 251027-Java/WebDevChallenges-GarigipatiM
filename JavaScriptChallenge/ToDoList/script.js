const elements = {
    list: document.getElementById("todolist"),
    addinput: document.getElementById("task"),
    addbutton: document.getElementById("addTask"),
    removeinput: document.getElementById("taskRemove"),
    removebutton: document.getElementById("removeTask")
}

elements.addbutton.addEventListener("click", function () {
    const newTask = elements.addinput.value.trim();
    if(newTask === "") return;

    let li = document.createElement("li");
    li.textContent = newTask;

    li.addEventListener("click", function() {
        li.classList.toggle("done");
    })

    elements.list.appendChild(li);
    elements.addinput.value = "";
});

elements.removebutton.addEventListener("click", function() {
    const remTask = elements.removeinput.value.trim();
    if(remTask === "") return;

    const listItems = elements.list.querySelectorAll("li");
    
    listItems.forEach(li => {
        if (li.textContent === remTask) li.remove();
    });

    elements.removeinput.value = "";
});