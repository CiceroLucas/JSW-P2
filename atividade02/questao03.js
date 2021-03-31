// Escreva uma função que deve ler um array contendo uma quantidade de palavras. Para cada
// palavra informada (incluindo a última) escrever a primeira e a última letra:


var palavras = ['azul', 'amarelo', 'comida', 'hora', 'correr'];

palavras.forEach(function(item){

    var tamanho = item.length-1;
    
    console.log("Primeira letra: " + item.charAt(0) + " -  Ultima letra:  " + item.charAt(tamanho) );
});

