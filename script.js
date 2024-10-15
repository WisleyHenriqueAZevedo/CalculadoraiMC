function calcularIMC(){
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let imc = (peso / (altura * altura)) * 10000
    if (imc < 18.5) {
        alert(`Seu IMC é ${imc.toFixed(2)} - Magrin`)
    } else if (imc >= 18.5 && imc <= 24.9) {
        alert(`Seu IMC é ${imc.toFixed(2)} - Normal`)
    } else if (imc >= 25 && imc <= 29.9) {
        alert(`Seu IMC é ${imc.toFixed(2)} - Sobrepeso`)
    } else if (imc >= 30 && imc <= 39.9) {
        alert(`Seu IMC é ${imc.toFixed(2)} - Obesidade`)
    } else if (imc >= 40) {
        alert(`Seu IMC é ${imc.toFixed(2)} - Obesidade grave`)
    }
}