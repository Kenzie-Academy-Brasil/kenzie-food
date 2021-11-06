

//VARIÁVEIS//
let nomeHudson = "Hudson"
let nomeMaria  = "Maria"
//const nome = "Daniel" 

//TIPOS DE DADOS//

//INT - INTEIRO -> NUMEROS 
let numero1 = 1
let numero2 = 2
//console.log(numero1)


//STRING - TUDO QUE É DO TIPO TEXTO
let nome = "Hudson "
let sobrenome = "Carolino"
//CONCATENAR


//BOOLEAN
//true  => VERDADEIRO 
//false => FALSO  

//TIPO DE DADOS OBJETOS


//ARRAY
let nomes = ["Maria","Daniel","Andréia","Lucino", "João Guilherme","Hudson"]
let numeros = [1,2,4,45,65,345,56]
let numerosNomes = ["Hudson",2,"Maria",45,65,345,56]




//console.log(alunos)
//NOME: Hudson
//Idade: 25
//Nota: 60

//OBJETOS
//CRIANDO ALUNO HUDSON
const hudson = {
    nome: "Hudson",
    sobreNome: "Carolino",
    idade: "25",
    cursando:"Front-end",
    escola: "Kenzie" 
}

//CRIANDO ALUNA MARIA
const maria = {
    nome: "Maria",
    sobreNome: "Porcina",
    idade: "21",
    cursando:"Front-end",
    escola: "Kenzie" 
}

//LISTA DE ALUNOS
let alunos  = []

//ENVIANDO O ALUNO HUDSON PARA DENTRO DA LISTA => ARRAY
alunos.push(hudson)

//ENVIANDO O ALUNA MARIA PARA DENTRO DA LISTA => ARRAY
alunos.push(maria)

//console.log(alunos)



//CONDICIONAIS IF E ELSE 
// IF =>   SE (idade do hudson > 18) => maior idade   
// ELSE => SENÃO  => menor idade


if("1" !== "1"){

    //console.log("diferente") 
  

}else{

    //console.log("igual") 

}

//FUNÇÕES 

function somaNumeros(){
    
    //ESCOPO DA FUNÇÃO
    //ADICIONAMOS AS INSTRUÇÕES DO QUE ELA PRECISA
    console.log("Estou somando 2 numeros")
    let numero1 = 10
    let numero2 = 20

    let resultado  = numero1 + numero2
    console.log(resultado)

}

//CHAMANDO FUNÇÃO
//somaNumeros()


function atingiuMaiorIdade(valorIdade){

    if(valorIdade >= 18){
        console.log("Atingiu maior idade")
    }else{
        console.log("Não atingiu maior idade")
    }

}
atingiuMaiorIdade(20)
atingiuMaiorIdade(12)
atingiuMaiorIdade(50)


function soma(numero1, numero2){

    return numero1 + numero2

}

let resultado  = soma(2,5)

console.log(resultado)