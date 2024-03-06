document.getElementById("modalContainer").innerHTML = 
  `
    <div id="modal">
        <div id="title">
            <h3>Erro ao adicionar nova tarefa!</h3>
        </div>
        <div id="message">
            <p>Não é possível adicionar uma nova tarefa sem a descrição dela presente!</p>
        </div>
        <div class="button">
            <button onclick="closeModal()">
                OK
            </button>
        </div>
    </div>
    `;

let taskCount = 0;
closeModal();

function addTask () {
    taskCount = document.getElementsByClassName("newItem").length;

    const newTask = document.getElementById("newTask");

    if(newTask.value != ""){
        const toDoList = document.getElementById("toDoList");
        const newItem = document.createElement("div");

        newItem.innerHTML = 
         `
        <div id="${`item-${taskCount}`}" class="newItem">
            <div class="text">
                <input id="${`text-${taskCount}`}" type="text" value="${newTask.value}">   
            </div>
            <div class="button">
                <button id="${`check-${taskCount}`}" class="ckButton" onclick="checkTask(this.id)">
                    CK
                </button>
            </div>
            <div class="button">
                <button id="${`remove-${taskCount}`}" class="delButton" onclick="removeTask(this.id)">
                    X
                </button>
            </div>
        </div> 
         `
        ;
        newTask.value = "";
        toDoList.appendChild(newItem);
    }else{
        openModal();
    }
}

function checkTask (id) {
    // Pegar apenas o número do id dos itens criados (item-1, item-2, etc)
    const idNumber = id.substring(id.indexOf("-") + 1);
    // Pegar os componentes da div item-? que tenham id
    const taskField = document.getElementById(`text-${idNumber}`);

    const buttonCheck = document.getElementById(`check-${idNumber}`);
    const buttonRemove = document.getElementById(`remove-${idNumber}`);

    // alert(id)

    // Marcar e desmarcar tarefas
    if(taskField.style.textDecoration === "line-through"){

        taskField.style.textDecoration = "none";
        taskField.style.backgroundColor = "white";
        taskField.style.opacity = "1";

        buttonCheck.style.opacity = "1";
        buttonRemove.style.opacity = "1";

    } else {
        taskField.style.textDecoration = "line-through";
        taskField.style.backgroundColor = "gray";
        taskField.style.opacity = "0.5";

        buttonCheck.style.opacity = "0.5";
        buttonRemove.style.opacity = "0.5";

    }
}

const removeTask = (id) =>{
    const idNumber = id.substring(id.indexOf("-") + 1);
    const itemToRemove = document.getElementById(`item-${idNumber}`);

    itemToRemove.parentNode.removeChild(itemToRemove);
}

function openModal (){

    document.getElementById("modalContainer").style.display = "flex";
    document.getElementById("modalOverlay").style.display = "flex";
    document.getElementById("modalContainer").style.opacity = "1";
    document.getElementById("modalOverlay").style.opacity = "1";
    
}

function closeModal(){
    document.getElementById("modalContainer").style.display = "none";
    document.getElementById("modalOverlay").style.display = "none";
    document.getElementById("modalContainer").style.opacity = "0";
    document.getElementById("modalOverlay").style.opacity = "0";
}