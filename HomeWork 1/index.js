document.addEventListener("DOMContentLoaded", function(event) { 
    var addButton = document.getElementById('addTask');
    var taskNameInput = document.getElementById('taskName');
    var taskList = document.getElementById('taskList');
    addButton.addEventListener('click', function () {
        if (taskNameInput.value == '') {
            return;
        } 
        taskList.innerHTML += '<li><a class="deleteLink" onClick="deleteClick(this); return false;" href="">X</a>' + taskNameInput.value + '</li>';
        taskNameInput.value = '';
        return;
    });
});

function deleteClick(e) {
    var taskList = document.getElementById('taskList');
    taskList.removeChild(e.parentElement);
}