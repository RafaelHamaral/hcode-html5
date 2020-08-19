//Criando um array
let data = [{
    id: 1,
    title: "Estudar HTML"
}, {

    id: 2,
    title: "Estudar CSS"
}, {

    id:3,
    title: "Estudar JavaScript"
}, {

    id:4,
    title: "Estudar PHP"
}];


data.forEach(task => {

    let li = document.createElement('li');

    //recebe o template do html  - (o que estava dentro do ul)
    li.innerHTML = `
    
    <input type="checkbox" id="task-${task.id}">
    <label for="task-${task.id}">${task.title}</label>
    

    `; 

    li.querySelector('input').addEventListener("change" , e => {

        if (e.target.checked) {

            li.classList.add('complete');


        } else {
            li.classList.remove('complete');
        }


    })

    document.querySelector('.todo').append(li);


});

document.querySelector('#new-task').addEventListener('keyup' , e => {

    if (e.key === 'Enter'){

        console.log(e.target.value);
    }


});










//foreach = para cada

