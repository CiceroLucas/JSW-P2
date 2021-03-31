//Questão - 10

// A)
const nums = [1, 2, 3, 4, 5, 6]

const dobrarNumero = nums.map(function(elem){
    return elem * 2
})
console.log('\nNumeros Dobrados')
console.log(dobrarNumero)


// B)
const pares = function(item){
    return !(item % 2)
}

const numePares = nums.filter(pares)

console.log('\nNumeros Pares')
console.log(numePares)


// C)
const soma = nums.reduce(function(item, total){
    return total + item
})

console.log('\nSoma Total do Array')
console.log(soma)
