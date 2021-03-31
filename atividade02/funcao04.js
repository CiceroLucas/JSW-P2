function serie1(){
    let res = document.querySelector('div#res')
    var serie = 0
    while(serie<100){
        if(serie<10){
            res.innerHTML += '0'+serie + '  '
        }
        if(serie%10==0 && serie>=10){
            res.innerHTML += '<br>'+serie + '  '
        }
        if (serie%10 != 0 && serie>=10) {
            res.innerHTML += serie + '  '
        }
        serie++
    }
    res.innerHTML += '<br> <br>'
}

function serie2(){
    let res2 = document.querySelector('div#res2')
    var serie = 99
    while(serie>=0){
        if(serie<10){
            res2.innerHTML += '0'+serie + '  '
        }
        if(serie%10==0 && serie>=10){
            res2.innerHTML += serie + '  <br>'
        }
        if (serie%10 != 0 && serie>=10) {
            res2.innerHTML += serie + '  '
        }
        serie--
    }
    res2.innerHTML += '<br> <br>'
}

function serie3(){
    let res3 = document.querySelector('div#res3')
    var serie = 99
    var count = 1
    while(serie>0){
        if(count%5 != 0){
            if (serie>10) {
                res3.innerHTML += serie + '  '
            } else {
                res3.innerHTML += '0' + serie + '  '
            }
        }
        if(count%5 ==0){
            if (serie>10) {
                res3.innerHTML += serie + '  <br>'
            } else {
                res3.innerHTML += '0' + serie + '  '
            }
        }
        serie -= 2
        count++
    }
}