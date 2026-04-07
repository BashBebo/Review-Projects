let InputTask = document.getElementById("type_task");
let AddTask = document.getElementById("add_button");
let ValidationText = document.getElementById("validation_text");
let TaskList = document.getElementById("task_list");
let OrderList = document.getElementById("odl");
let filterbuttons = document.querySelectorAll(".filter button");
let Allbtn = document.getElementById("all");
let uncompletedbtn = document.getElementById("NotCompleted");
let completedbtn = document.getElementById("completed");
let _Done = document.getElementById("Done");
let _Undone = document.getElementById("Not_Done");

  // Initial state: All visible
  _Done.style.display = "flex";
  _Undone.style.display = "flex";

  // Filter event listeners
  Allbtn.addEventListener("click", function () {
    _Done.style.display = "flex";
    _Undone.style.display = "flex";
  });
  uncompletedbtn.addEventListener("click", function () {
    _Undone.style.display = "flex";
    _Done.style.display = "none";
  });
  completedbtn.addEventListener("click", function () {
    _Undone.style.display = "none";
    _Done.style.display = "flex";
  });

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
        TaskItem.remove();
      });               
      CheckBox.addEventListener("change", function() {
         if (CheckBox.checked) {
           _Done.appendChild(TaskItem);
           TaskItem.classList.add("completed");
        } else {
            _Undone.appendChild(TaskItem);
            TaskItem.classList.remove("completed");
          }
        });

      TaskItem.textContent = InputValue;
      TaskItem.appendChild(CheckBox);
      DelBtn.classList.add("delbtn");
      TaskItem.classList.add("task_item");
      TaskItem.appendChild(DelBtn);
      _Undone.appendChild(TaskItem);
      console.log(TaskItem);    
    }
});

