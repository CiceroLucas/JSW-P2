//Questão - 12

// A)
const carrinhoCompras = [
    {idProduto: 1, precoUnitario: 10.00, quantidade: 2},
    {idProduto: 2, precoUnitario: 10.00, quantidade: 2},
    {idProduto: 3, precoUnitario: 10.00, quantidade: 2},
    {idProduto: 4, precoUnitario: 10.00, quantidade: 0},
]

// C)
const carrinhoCompra2 = carrinhoCompras.filter( ({quantidade}) => quantidade > 0 )
console.log("\nCarrinho Filtrado.\n")
console.table(carrinhoCompra2)


// D)
let soma = function (idProduto, quantidade){
    let cont = 0
    for(let i = 0; i < idProduto; i++){
        let ad = quantidade + cont
        cont = ad
    }
    return cont
}

let carrinhoSubtotal = carrinhoCompras.map(({idProduto, quantidade}) => {
    let obj = {
        idProduto,
        subTotal: soma(idProduto, quantidade)
    }
    return obj      
})

console.log("\nSubtotal de produtos.\n")
console.table(carrinhoSubtotal)


// D)
console.log('\nValor Total')

const valorTotal = carrinhoCompras.reduce((soma, produto) => soma + produto.quantidade * produto.precoUnitario, 0)
console.table(valorTotal)

