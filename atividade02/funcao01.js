function convert(){
	let temp1 = document.getElementById('temp')
	let res = document.getElementById('res')
	let temperaturaCelsius = Number(temp1.value)
	let fahrenheit = (temperaturaCelsius*1.8)+32
	res.innerHTML = `<p> ${temperaturaCelsius}°C = ${fahrenheit} F </p>`
	if(temperaturaCelsius<=30){
		if (temperaturaCelsius<23){
			if(temperaturaCelsius<16){
				if(temperaturaCelsius<10){
					res.innerHTML += '<p>FAZ MUITO FRIO</p>'
				}
				else{
					res.innerHTML += '<p>FAZ FRIO</p>'
				}
			}
			else{
				res.innerHTML += '<p>TEMPERATURA NORMAL</p>'
			}
		}
		else{
			res.innerHTML += '<p>ESTÁ QUENTE</p>'
		}

	}
}

