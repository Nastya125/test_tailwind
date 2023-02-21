function calculator (firstNumber, secondNumber, oper) {
    switch (oper) {
        case "+":
            return firstNumber + secondNumber
        case "-":
            return firstNumber - secondNumber
        case "*":
            return firstNumber * secondNumber
        case "/":
            return firstNumber / secondNumber
        default:
            console.log('Неизвестный оператор')
            return 0
    }
}


const firstNumber = Number(prompt("Введите первое число"))
const secondNumber = Number(prompt("Введите второе число"))
const oper = prompt("Введите оператор")
alert(`Ответ: ${calculator(firstNumber, secondNumber, oper)}`)