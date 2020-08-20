//Criando um array
let data = [];



function renderTodo() {

    document.querySelector('.todo').innerHTML = '';


data.forEach(task => {

    let li = document.createElement('li');

    //recebe o template do html  - (o que estava dentro do ul)
    li.innerHTML = `
    
    <input type="checkbox" id="task-${task.id}">
    <label for="task-${task.id}">${task.title}</label>
    <button type="button">x</button>
    

    `; 

    li.querySelector('input').addEventListener("change" , e => {

        if (e.target.checked) {

            li.classList.add('complete');


        } else {
            li.classList.remove('complete');
        }


    });

    li.querySelector('button').addEventListener('click' , e => {

        console.log(e.target.parentNode.querySelector('input').id.split('-')[1]);


    });

    document.querySelector('.todo').append(li);


});

}

document.querySelector('#new-task').addEventListener('keyup' , e => {

    if (e.key === 'Enter'){

        data.push({

            id: data.length+1,
            title: e.target.value
       });

       e.target.value = "";


       renderTodo();

    }


});


renderTodo();







//foreach = para cada

