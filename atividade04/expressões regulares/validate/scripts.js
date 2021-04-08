const Mask = {
   Cnpj(input){
    let valor = input.value //pegando o valor do input
       valor = valor.replace(/[\D]/g,"")
    if(valor.length>14){
       valor = valor.slice(0,-1)  //splice e replacae n modificam a string original, a n ser que se faça valor = valor.splice
    }
    valor = valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
    input.value = valor
},
   cep(input){
    let valor = input.value
    valor = valor.replace(/[\D]/g,"") 
    if(valor.length>8){
        valor = valor.slice(0,-1)
    }
     valor = valor.replace(/(\d{5})(\d{3})/,"$1-$2")
     input.value = valor
}
}
const Validate = {
    isEmail(input){
       let valor = input.value
       let emailFormato = /\w+([\._-]?\w+)@\w+(\.\w{3})+/
       let teste = emailFormato.test(valor)
       if(teste==true){
          let divMensagem = document.getElementById("msgEmail")
          divMensagem.innerHTML="Email válido"
          divMensagem.style.color="green"
       }
        if(teste==false){
          let divMensagem =  document.getElementById("msgEmail")
          divMensagem.innerHTML = "Email inválido"
          divMensagem.style.color = "red"
        } 
    },
    isCnpj(input){
        let valor = input.value
        let cnpjFormato = /(\d{2}).(\d{3}).(\d{3})\/(\d{4})-(\d{2})/
        let teste = cnpjFormato.test(valor)
        if(teste==true){
           let divMensagem = document.getElementById("msgCNPJ")
           divMensagem.innerHTML="Cnpj válido"
           divMensagem.style.color="green"
        }
         if(teste==false){
           let divMensagem =  document.getElementById("msgCNPJ")
           divMensagem.innerHTML = "Cnpj inválido"
           divMensagem.style.color = "red"
         } 
    },
    isCep(input){
        let valor = input.value
        let cepFormato = /(\d{5})-(\d{3})/
        let teste = cepFormato.test(valor)
        if(teste==true){
           let divMensagem = document.getElementById("msgCEP")
           divMensagem.innerHTML="Cep válido"
           divMensagem.style.color="green"
        }
         if(teste==false){
           let divMensagem =  document.getElementById("msgCEP")
           divMensagem.innerHTML = "Cep inválido"
           divMensagem.style.color = "red"
         } 
    },
    isName(input){
      let valor = input.value
      let nomeFormato = /([A-Zç]+ [A-Zç]+)[ A-Zç]+/i
      let teste = nomeFormato.test(valor)
      if(teste==true){
         let divMensagem = document.getElementById("msgNome")
         divMensagem.innerHTML="Nome válido"
         divMensagem.style.color="green"
      }
       if(teste==false){
         let divMensagem =  document.getElementById("msgNome")
         divMensagem.innerHTML = "Nome inválido"
         divMensagem.style.color = "red"
    }
}
}







  