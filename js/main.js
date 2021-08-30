//conteudo aula 5

function clicar() {

    document.getElementById('agradecimento').innerHTML = "<b>Obrigado por clicar<b>"
    //document.getElementById('agradecimento').innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById('agradecimento'));
}

function redirecionar() {
    window.open('https://www.linkedin.com/feed/');
    //window.location.href = 'https://www.linkedin.com/feed/';
}

function trocar(elemento) {
    //document.getElementById('mouseMove').innerHTML = 'Obrigado pela atenção';
    elemento.innerHTML = 'Obrigado pela atenção';
    //alert('Trocar texto');
}

function voltar(elemento) {
    //document.getElementById('mouseMove').innerHTML = 'Passe o mouse aqui';
    elemento.innerHTML = 'Passe o mouse aqui';
}

function load() {
    alert('Pagina carregada com sucesso');
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*function clicar() {
    alert("Obrigado por clicar!")
}*/

//conteudo aula 4

/*function validaIdade (idade) {
    var validar;
    if(idade >=18){
        validar = true;
    } else {
        validar = false;
    }
    return validar;
};

var idade = prompt('Informe sua idade: ');
console.log(validaIdade(idade));*/

/*function soma(n1, n2) {
    return n1 + n2;
}
alert(soma(10, 25));*/

/*function setReplace(frase, nome, novoNome) {
    return frase.replace(nome, novoNome);
}
alert(setReplace('Vai Japão', 'Japão', 'Brasil'));*/


//conteudo aula 3

//var data = new Date;                //para trabalhar com datas

//alert(data.getHours());
//alert(data.getMonth()+1);       //retorna o mes -- inicia sempre do zero
//alert(data);                   //retorna a data completa --Sun Aug 29 2021 11:11:40 GMT-0300 (Horário Padrão de Brasília)
//console.log(data);

/*var count;
for(count = 0; count < 5; count++){     //for é outra estrutura de repetiçao
    alert(count);
    console.log(count);
}*/

/*var count = 0;
while(count < 5) {                  //while é uma estrutura de repetição
    console.log(count);
    alert(count);
    count = count + 1;              // ou podemos fazer count ++
};*/

/*var idade = prompt('Informe sua idade'); //prompt recebe uma entrada do usuario 
if(idade >= 18) {
    alert('Maior de idade');
} else {
    alert('Menor de idade');
};*/

/*var idade = 18;
if(idade >= 18) {
    alert('Maior de idade');
} else {
    alert('Menor de idade');
};*/



// conteudo aula 2

//var frutas = [{nome: 'maça', cor: 'vermelha'}, {nome:'uva', cor: 'roxa'}]; //lista de dicionario

//alert(frutas[1].nome);
//console.log(frutas);

//var fruta = {nome: 'maça', cor:'vermelha'}; //dicionario

//alert(fruta.nome);
//console.log(fruta.nome, fruta.cor);

//var lista = ['maça', 'pera', 'laranja'];

//lista.push('uva'); //adiciona um elemento a lista
//lista.pop('maca'); //remove um elemento a lista

//console.log(lista.join(' - ')); //join adiciona o que quisermos entre os elementos
//console.log(lista.toString([0])); //imprime a primeira letra das strings pois foi convertido
//console.log(lista.toString()); //converte para string a lista
//console.log(lista.reverse()); //imprime na ordem contraria os elementos
//console.log(lista); // mostra no console o conteudo da lista
//console.log(lista[0]); // mostra o primeiro elemento da lista
//console.log(lista.length); //length retorna o numero de elementos da lista



// conteudo aula 1

/*var nome = 'Rodrigo Sundfeld';
var n1 = 40;
var n2 = 10;
var n3 = '40';
var n4 = '10';
var frase = 'Corinthians é o melhor time do mundo!'

alert('Bem vindo ' + nome + ' a sua idade é ' + n1 + ' anos.');
alert(n1 + n2);
alert(n3 + n4);
alert(frase.replace('Corinthians', 'Brasil'));
alert(frase.toLowerCase());
alert(frase.toUpperCase());

console.log(nome);
console.log(n1 + n2);
console.log(n3 + n4);
console.log(frase);
console.log(frase.replace('Corinthians', 'Brasil'));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());*/