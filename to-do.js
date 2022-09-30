// seleted workk div and added event listener to it
const work =  document.querySelector("#workkk");
document.querySelector("#btn").onclick = function () {
  // button
  if (document.querySelector("#inside input").value.length == 0) {
    alert("Enter task!");
  } else {
    document.querySelector("#workkk").innerHTML += `
    <div class="task">
        <span id="taskname">
        ${document.querySelector("#inside input").value}
        </span>
        <button class="delete">
            <i class='fas fa-trash-alt'></i> 
           
        </button>
    </div>
        
        `;
    // delete button
    // selected workk div 
    // get the length of the workk div 
    var current_tasks = document.querySelector("#workkk").children;   
    
    // loop through the workk div and add event listener to the delete button 
    for (var i = 0; i < current_tasks.length; i++) {

        // selected the delete button 
        current_tasks[i].children[1].onclick = function () {        // delete the task 
            this.parentElement.remove();    // remove the task from the workk div 
        };
        }
  }
};