// Questão 9
let estados= ["São Paulo", "Minas Gerais", "Rio de Janeiro", "Rio Grande do Norte",
"Santa Catarina", "Acre"]
function startS (array){
    for(let i=0;i<array.length;i++){
        let palavra = array[i]
        let teste = palavra.startsWith("S")
        if(teste==true){
            console.log(palavra)
        }
    }
}
startS(estados)