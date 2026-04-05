let InputTask = document.getElementById("type_task");
let AddTask = document.getElementById("add_button");
let ValidationText = document.getElementById("validation_text");
let TaskList = document.getElementById("task_list");
let OrderList = document.getElementById("odl");

AddTask.addEventListener("click", function () {
    let InputValue = InputTask.value
    if (InputValue === "") {
        ValidationText.textContent = "Please enter a task name.";
        
    } else {
      InputTask.value = "";
      ValidationText.textContent = "";
      let TaskItem = document.createElement("li");
      let DelBtn = document.createElement("button");
      TaskItem.textContent = InputValue;
      DelBtn.textContent = "Delete";
      TaskItem.classList.add("task_item");
      TaskItem.appendChild(DelBtn);
      OrderList.appendChild(TaskItem);
      console.log(TaskItem);
    }
})

