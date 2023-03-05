const tablo = document.querySelector('#tablo');
const buttons = document.querySelector("#buttons");

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ","];
const controlers = ["AC", "+/-", "%", "/", "x", "-", "+", ",", "="];

let num1 = 0;
let num2 = 0;
let operator = "";

buttons.addEventListener("click", (event) => {
    let contex = event.target.innerText;
    if (numbers.includes(contex) && operator == '') {
        if (tablo.value == 0) tablo.value = contex
        else tablo.value += contex
        num1 = +tablo.value
    }

    if (numbers.includes(contex) && operator != "") {
        if (tablo.value == 0) tablo.value = contex
        else tablo.value += contex
        num2 = +tablo.value
    }
    if (controlers.includes(contex)) {
        operator = contex
        tablo.value = 0;
    }
    if (num1 != 0 && num2 != 0 && operator != '') {
        tablo.value = calculator(num1, num2, operator)
        num1 = +tablo.value
        num2 = 0
    }
})




function calculator (firstNumber, secondNumber, oper) {
    switch (oper) {
        case "+":
            return +firstNumber + +secondNumber
        case "-":
            return +firstNumber - +secondNumber
        case "*":
            return +firstNumber * +secondNumber
        case "/":
            return +firstNumber / +secondNumber

    }
}


// const firstNumber = Number(prompt("Введите первое число"))
// const secondNumber = Number(prompt("Введите второе число"))
// const oper = prompt("Введите оператор")
// alert(`Ответ: ${calculator(firstNumber, secondNumber, oper)}`)