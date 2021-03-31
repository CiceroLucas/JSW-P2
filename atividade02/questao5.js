/* Faça um programa onde um objeto chamado usuário possui 3 informações a respeito de uma
pessoa: Nome, endereço e telefone. Concatene essas três informações em uma única string e
faça uma contagem de quantas letras do alfabeto estão presentes nesta string (considerando
as redundâncias) e também de dígitos numéricos. Os espaços e os caracteres de pontuação
devem ser ignorados.
*/

let pessoa = {
    nome: "Maria das Dores",
    endereco: " Ruas das almas, 1231 ",
    telefone: "988776655"
};
var concatenar = pessoa.nome + pessoa.endereco + pessoa.telefone;

var numeros = concatenar.replace(/[^0-9]/g,'');

console.log("Quantidade de dígitos numéricos = " + numeros.length);

var letras = concatenar.replace(/[^a-z]/g,'') + concatenar.replace(/[^A-Z]/g,'');

console.log("Quantidade de letras pertencentes ao alfabeto = "+ letras.length);