let resultadoConcurso = [
    {candidato: "Renata Soares", nota: 7.8, idade: 29},
    {candidato: "Marcos Texeira", nota: 7.8, idade: 26},
    {candidato: "Priscila Gomes", nota: 8.0, idade: 30},
    {candidato: "João Oliveira", nota: 8.0, idade: 27},
    {candidato: "Adriana Telles", nota: 7.4, idade: 28},
    {candidato: "Fábio Queiroga", nota: 6.4, idade: 20},
    {candidato: "Felipe Soares", nota: 5.0, idade: 18},
    {candidato: "José Dantas", nota: 0.0, idade: 21}
]


const notaAcimaDeSete = resultadoConcurso
                        .filter(valor => valor.nota > 7.0 ? valor : '')
                        .sort((a, b) => a.candidato < b.candidato ? -1 : a.candidato > b.candidato ? 1 : 0)
console.table(notaAcimaDeSete)


console.log('\nResposta B')
const listaOrdenadaNotas = resultadoConcurso.sort((a, b) => a.nota > b.nota ? -1 : a.nota < b.nota ? 1 : 0)
const resultadoFinal = listaOrdenadaNotas.map(function (valor, indice){
    if(indice <= 2){
        return {candidato: valor.candidato, situacao:'Aprovado'}
    }else if ( valor.nota >= 7){
        return {candidato: valor.candidato, situacao: 'Homologado'}
    }else{
        return {candidato: valor.candidato, situacao: 'Desclassificado'}
    }
})

console.table(resultadoFinal)

console.log('\nResposta C')
const media = resultadoConcurso.reduce((acumulador, valor) => acumulador += valor.nota, 0)/resultadoConcurso.length
console.log(media)