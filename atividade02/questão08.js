//Questão 8 
function maisculo(string){
    console.log(string.toUpperCase())
    function contarVogais(){                      //a e b
     return string.match(/[aeiou]/gi).length;
   } 
  console.log(contarVogais(string) + " vogais");
 }
 
 function ins (string){
    let lower=string.startsWith("ins")
    let upper=string.startsWith("INS")    //c
    if(lower==true||upper==true){
        console.log(string)
    }
    
 }
 maisculo("matheus")
 ins("instrumental")
 
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