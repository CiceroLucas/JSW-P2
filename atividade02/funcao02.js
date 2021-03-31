function serieH(){
    let num = document.querySelector('input#num')
    let res = document.querySelector('div#res')
    let n = Number(num.value)
    var sh = 0
    while(n>0){
        sh+=1/n
        n--
    }
    res.innerHTML += `<p>O valor da Série Harmônica para n = ${num.value} é h = ${sh}  </p>`

}