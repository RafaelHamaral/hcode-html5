var email = 'rafael_holandamaral@hotmail.com'; //criando a variavel


console.log(email);
console.log('O seu e-email é: ' + email); //concatenacao (+)
console.log(`O seu e-email é: ${email}`); //template string (dentro de crases (usar o ${})) - recomendado


document.getElementById('btn-submit').addEventListener('click', e => {

    console.log('O botão foi clicado!');

})

document.getElementById('form-login').addEventListener('mouseenter', e=> {

    console.log('O mouse está sobre o formulario');

})

document.querySelector('#form-login').addEventListener('mouseleave', e=> {

    console.log('O mouse esta fora do formulario');

})

//recuperando informaçoes de formulario
document.querySelector('#form-login').addEventListener('submit', e=> {


    e.preventDefault();

   let email =  document.querySelector('#email').value;
    let password = document.querySelector('#password').value;


   let json = {
       //email:email propriedade e variavel (lado esquerdo sempre quem recebe atribuicao (propriedade))
       email, //se a propriedade for o mesmo valor da variavel, basta inserir apenas um nome
       password
    };

    /*console.log(json);

    let stringJSON = JSON.stringify(json); //convertendo (serializa) o json para string - posso enviar para outra linguagem
    console.log(stringJSON);



    let jsonParse = JSON.parse(stringJSON); //valida e converte em objeto real ou seja converte de string para objeto

    console.log(jsonParse);
    
    console.log(jsonParse.email); //vejo só o valor email
    
    console.log(jsonParse.password); //vejo só o valor password*/


    if (!json.email) {  //exclamacao é o not (se nao tem nada faça)


        console.error("O campo email deve ser preenchido!");

    } else if (!json.password) {

        console.error("O campo password deve ser preenchido!");

    } else {
        console.info("Dados validados com sucesso!");
    }

});















/*------------------------------------------------------------------------------------------------------------------------------------
17/08/2020
 - var = variavel global, faz com que essa variavel exista em todo o documento
 - let = variavel local, respeita o escopo (area de atuacao), reservado tanto quanto o const (se chamar blz, se nao ele nao fala com ninguem) recomendado
- const = constante (sem mudanca valor) - respeita o escopo

- template strig = numa strig só chamar recursos de programacao



metodo getElementById = recupera o elemento pelo id
metodo querySelector = faz a mesma coisa mas mais poderoso usa o (#) para o id 

e. - evento

preventDefault(); - cancela o comportamento padrao

ajax - ele informa "login efetuado com sucesso etc.."

metodo submit - dispara o evento de envio


*JSON (JavaScript Object Notation) - padrao de notação JavaScript (faz Interoperabilidade) - cria um padrao que ambas as linguagens conseguem entender
funciona em qualquer navegador
----------------------------------------------------------------------------------------------------------------------------------------*/

