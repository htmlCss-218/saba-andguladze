
const celsius = prompt('Enter temperature in Celsius:')

const fahrenheit = (celsius * 9/5) + 32

alert(`The temperature in fahrenheit is ${fahrenheit}`)

const newtxt = document.getElementById('Texti'); 

if (newtxt) {
    newtxt.innerText = 'es texti jsdan aris gaketebuli';
}

const axaliparagrapi = document.createElement('p')

axaliparagrapi.innerHTML = 'es aris axali paragrapi jsit damatebuli'

document.body.appendChild(axaliparagrapi)