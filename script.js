window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');

    let num = 1;

    form.addEventListener('submit', (e) => {
        // Prevent page from reloading when submit button is clicked
        e.preventDefault();

        /*trial--
         if (input.value === '' ||input ==null){
             alert('Please enter a task')
         }*/

        // create a variable and assign the value of task input
        const task = input.value;
        // create a div eleemnt and assin it to variable task_el
        const task_el = document.createElement('div');
        // assign the class 'task' to the eleemnt created
        task_el.classList.add('task');

        if (input.value.length <= 1) {
            alert("Please input a task");
            return;
        }

        // same workflow as above
        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        // make the task_conent_el a child of the task_el (div)
        task_el.appendChild(task_content_el);

        // create an input field to store the task values
        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';

        // assign the task to the input field created above
        task_input_el.value = task;

        const task_number_el = document.createElement('div');
        task_number_el.classList.add('number');
        task_number_el.type = "text";
        task_number_el.innerHTML = num;
        task - task_content_el.appendChild(task_number_el);

        task_input_el.setAttribute("readonly", "readonly");
        task_content_el.appendChild(task_input_el);

        const task_action_el = document.createElement('div');
        task_action_el.classList.add('actions');

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = 'Edit';

        const task_del_el = document.createElement('button');
        task_del_el.classList.add('delete');
        task_del_el.innerText = 'Delete';

        task_action_el.appendChild(task_edit_el);
        task_action_el.appendChild(task_del_el);

        input.value = '';

        num++

        task_el.appendChild(task_action_el);



        list_el.appendChild(task_el);

        task_edit_el.addEventListener('click', (e) => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_edit_el.innerText = "Save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
            } else {
                task_edit_el.innerText = "Edit";
                task_input_el.setAttribute("readonly", "readonly");
            }
        });
        task_del_el.addEventListener('click', (e) => {

            let el = task_el.nextElementSibling;
            while (el) {
                el.firstChild.firstChild.innerHTML--;
                el = el.nextElementSibling;
            }


            list_el.removeChild(task_el);

            num--;
        });

        /*  trial --function myFunction() {
  const inpObj = document.getElementById("id1");
  if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  }
}*?

        /*task_input_el.addEventListener('input', (e) => {
        task_el.required()( function (e) {
            if (task_el.required() == true) {
                task_edit_el.innerText = "Save";
                task_el.removeAttribute("readonly");
                task_el.focus();
            } else {
                alert('Please input a task');
                task_el.innerText = 'edit';
                task_el.setAttribute("readonly", "readonly");
            }*/
    })


});

