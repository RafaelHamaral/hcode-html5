/*
    Projeto Tabuada
*/ 

//Declaraçao de uma funcao
function calculaTabuada() {


    //Obtendo do DOM o tbody da tabela
    let tabuada = document.querySelector("#tabuada tbody");
    //Obtendo o valor A do campo input number e convertendo em inteiro
    let valorA = parseInt (document.querySelector("#valorA").value); //chamar o valor de dentro de um campo (.value)
    //Limpando o conteudo tbody
    tabuada.innerHTML = ''; 

    //Criando um laço de repetiçao de 0 a 10
    for (let valorB = 0; valorB <= 10; valorB++) {

        //Calculando o resultado da linha atual
        let resultado = valorA * valorB;

        //Criando o template das colunas da linha atual
        let template = `
        <td>${valorA}</td>
        <td>x</td>
        <td>${valorB}</td>
        <td>=</td>
        <td>${resultado}</td>
    
    `;
        //Criando o elemento tr
        let tr = document.createElement('tr'); //criando um elemento para gerar a linda da tabela (nativo da api do DOM)
        //inserindo as colunas na linha
        tr.innerHTML = template; 
        //Inserindo a linha na tabela
        tabuada.append(tr);              


    }//Fechando o for


}//Fechando a funçao


//Chamando a nossa funcao pela primeira vez
calculaTabuada();

//Adicionando o evento de alteraçao ao campo numero
document.querySelector("#valorA").addEventListener('change', calculaTabuada);



/*---------------------------------------------------------------------------------------------
funcao anonima - funcao que nao tem nome


parseInt (funcao beauty - nativa) = transformar o numero (string) em numero mesmo (parseInt) 

append - adiciona no final */