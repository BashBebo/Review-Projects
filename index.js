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
      let DelBtn = document.createElement("button");
      let TaskItem = document.createElement("li");
      let CheckBox = document.createElement("input");
      CheckBox.type = "checkbox";
      DelBtn.textContent = "Delete";
      DelBtn.addEventListener("click", function() {
        OrderList.removeChild(TaskItem);
      });   
                        
      TaskItem.textContent = InputValue;
      TaskItem.appendChild(CheckBox);
      DelBtn.classList.add("delbtn");
      TaskItem.classList.add("task_item");
      TaskItem.appendChild(DelBtn);
      OrderList.appendChild(TaskItem);
      console.log(TaskItem);    
    }
})

