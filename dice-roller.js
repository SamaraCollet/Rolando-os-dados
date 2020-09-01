const count = [0,0,0,0,0,0,0,0,0,0,0,0,0]

// Dados
function rolarDado(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// Soma dos Dados
function calcularDados() {
    let dado1 = rolarDado(1,6)
    let dado2 = rolarDado(1,6)
    return dado1 + dado2
}

// Rolar dados até 1000 vezes
for(let i = 1; i <= 1000; i++) {
    let rollOfDice = calcularDados()
    count[rollOfDice]++    
    console.log(rollOfDice)
}

// Teste
console.log('somas')
for(let i = 0; i < count.length; i++) {
    console.log(i + ': ' + count[i])
}

function showDice() {
    for(let i = 2; i < count.length; i++) {
        num = count[i]

        let newElement = document.createElement("div")
        newElement.className = "bar"
        newElement.style.width = num/2 + "%" 

        let text = document.getElementsByTagName("h1")
        text = document.createTextNode(`${i} : ${num}`)
        newElement.appendChild(text)

        let destination = document.getElementById("d1")
        destination.appendChild(newElement)
    }
}
showDice()

// Math.floor(Math.random() * (12 - 2 + 1) + 2);