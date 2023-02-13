// Getting all Elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAll = document.querySelector(".footer button");

// input data
inputBox.addEventListener("keyup", () =>{
    let userData = inputBox.value;   // getting user input.

    if(userData.trim() != 0){   // if input value empty.
        addBtn.classList.add("active");  // active button.
    } else{
        addBtn.classList.remove("active");
    }
})
showTasks() // calling showTasks();

// addeventlistener click
addBtn.addEventListener("click", () =>{
    let userData = inputBox.value;
    let getlocaleStorage = localStorage.getItem("New Todo");
    
    if(getlocaleStorage == null){
        listarr = []; // creating array
    } else{
        listarr = JSON.parse(getlocaleStorage); // transforming json string into a js object
    }

    listarr.push(userData); // adding user data.
    localStorage.setItem("New Todo", JSON.stringify(listarr));  // transforming js object into a json string.

    showTasks() // calling showTasks();
    addBtn.classList.remove("active");

})

// fuction to add task list
function showTasks(){
    let getlocaleStorage = localStorage.getItem("New Todo");
    if(getlocaleStorage == null){
        listarr = []; // creating array
    } else{
        listarr = JSON.parse(getlocaleStorage); // transforming json string into a js object
    }

    const pendingNum = document.querySelector(".pendingNum");
    pendingNum.textContent = listarr.length;    // the length value in pendingNum
    if(listarr.length > 0){
        deleteAll.classList.add("active");
    } else{
        deleteAll.classList.remove("active");
    }

    let newLiTag = "";
    listarr.forEach(element => {
        newLiTag += `<li onclick="deleteTask()";>${element}<img src="./img/remove.png" alt="remove"></li>`;
    });
    todoList.innerHTML = newLiTag;
    inputBox.value = "";
}

// deletetask list
function deleteTask(index){
    let getlocaleStorage = localStorage.getItem("New Todo");
    listarr = JSON.parse(getlocaleStorage);
    listarr.splice(index,1);    // delete the particular indexed li.

    // after remove the li again update the local storage
    localStorage.setItem("New Todo", JSON.stringify(listarr));  // transforming js object into a json string.
    showTasks() // calling showTasks();


}

// delete all tasks
deleteAll.addEventListener("click", () =>{
    listarr = [];   // empty array.
    
    // after delete all task again update the local storage.
    localStorage.setItem("New Todo", JSON.stringify(listarr));
    showTasks();
})
