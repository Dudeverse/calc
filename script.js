let expression = []
let operandSelected = false;
let leftArray = []
let rightArray = []
let history = []
let leftOperand = 1;
let operator = "";
let rightOperand = 2;

const screen = document.querySelector(".screen")
console.log(screen.textContent)

const btn1 = document.querySelector("#b1")
console.log(btn1.textContent);


btn1.addEventListener("click", () => {
    if (operandSelected===false){
        leftArray.push(btn1.textContent)
        screen.textContent = leftArray.reduce((acc,curr)=> {return acc + curr}, "")
    } else {
        rightArray.push(btn1.textContent)
        screen.textContent = rightArray.reduce((acc,curr)=> {return acc + curr}, "")
    }
    console.log(leftArray)
    console.log(rightArray)
    
});


const btn2 = document.querySelector("#b2")

btn2.addEventListener("click", () => {
    if (operandSelected===false){
        leftArray.push(btn2.textContent)
        screen.textContent = leftArray.reduce((acc,curr)=> {return acc + curr}, "")
    } else {
        rightArray.push(btn2.textContent)
        screen.textContent = rightArray.reduce((acc,curr)=> {return acc + curr}, "")
    }
    console.log(leftArray)
    console.log(rightArray)
});

const btn3 = document.querySelector("#b3")
btn3.addEventListener("click", () => {
    if (operandSelected===false){
        leftArray.push(btn3.textContent)
        screen.textContent = leftArray.reduce((acc,curr)=> {return acc + curr}, "")
    } else {
        rightArray.push(btn3.textContent)
        screen.textContent = rightArray.reduce((acc,curr)=> {return acc + curr}, "")
    }
    console.log(leftArray)
    console.log(rightArray)
});

const btn4 = document.querySelector("#b4")
btn4.addEventListener("click", () => {
    if (operandSelected===false){
        leftArray.push(btn4.textContent)
        screen.textContent = leftArray.reduce((acc,curr)=> {return acc + curr}, "")
    } else {
        rightArray.push(btn4.textContent)
        screen.textContent = rightArray.reduce((acc,curr)=> {return acc + curr}, "")
    }
    console.log(leftArray)
    console.log(rightArray)
});

const btn5 = document.querySelector("#b5")
btn5.addEventListener("click", () => {
    if (operandSelected===false){
        leftArray.push(btn5.textContent)
        screen.textContent = leftArray.reduce((acc,curr)=> {return acc + curr}, "")
    } else {
        rightArray.push(btn5.textContent)
        screen.textContent = rightArray.reduce((acc,curr)=> {return acc + curr}, "")
    }
    console.log(leftArray)
    console.log(rightArray)
});

const btn6 = document.querySelector("#b6")
btn6.addEventListener("click", () => {
    if (operandSelected===false){
        leftArray.push(btn6.textContent)
        screen.textContent = leftArray.reduce((acc,curr)=> {return acc + curr}, "")
    } else {
        rightArray.push(btn6.textContent)
        screen.textContent = rightArray.reduce((acc,curr)=> {return acc + curr}, "")
    }
    console.log(leftArray)
    console.log(rightArray)
});

const btn7 = document.querySelector("#b7")
btn7.addEventListener("click", () => {
    if (operandSelected===false){
        leftArray.push(btn7.textContent)
        screen.textContent = leftArray.reduce((acc,curr)=> {return acc + curr}, "")
    } else {
        rightArray.push(btn7.textContent)
        screen.textContent = rightArray.reduce((acc,curr)=> {return acc + curr}, "")
    }
    console.log(leftArray)
    console.log(rightArray)
});

const btn8 = document.querySelector("#b8")
btn8.addEventListener("click", () => {
    if (operandSelected===false){
        leftArray.push(btn8.textContent)
        screen.textContent = leftArray.reduce((acc,curr)=> {return acc + curr}, "")
    } else {
        rightArray.push(btn8.textContent)
        screen.textContent = rightArray.reduce((acc,curr)=> {return acc + curr}, "")
    }
    console.log(leftArray)
    console.log(rightArray)
});

const btn9 = document.querySelector("#b9")
btn9.addEventListener("click", () => {
    if (operandSelected===false){
        leftArray.push(btn9.textContent)
        screen.textContent = leftArray.reduce((acc,curr)=> {return acc + curr}, "")
    } else {
        rightArray.push(btn9.textContent)
        screen.textContent = rightArray.reduce((acc,curr)=> {return acc + curr}, "")
    }
    console.log(leftArray)
    console.log(rightArray)
});

const btn0 = document.querySelector("#b0")
btn0.addEventListener("click", () => {
    if (operandSelected===false){
        leftArray.push(btn0.textContent)
        screen.textContent = leftArray.reduce((acc,curr)=> {return acc + curr}, "")
    } else {
        rightArray.push(btn0.textContent)
        screen.textContent = rightArray.reduce((acc,curr)=> {return acc + curr}, "")
    }
    console.log(leftArray)
    console.log(rightArray)
});


const btnPlus = document.querySelector("#plus")
btnPlus.addEventListener("click", () => {
    operandSelected = true;
    operator = "+"
    screen.textContent = operator
    console.log(operator);
});

const btnMinus = document.querySelector("#minus")
btnMinus.addEventListener("click", () => {
    operandSelected = true;
    operator = "-"
    screen.textContent = operator
    console.log(operator);
});

const btnMul = document.querySelector("#mul")
btnMul.addEventListener("click", () => {
    operandSelected = true;
    operator = "*"
    screen.textContent = operator
    console.log(operator);
});

const btnDivide = document.querySelector("#divide")
btnDivide.addEventListener("click", () => {
    operandSelected = true;
    operator = "/"
    screen.textContent = operator
    console.log(operator);
});

const btnEq = document.querySelector("#equals")
btnEq.addEventListener("click", () => {
    equals()
    //console.log()
});
const btnClear = document.querySelector("#clear")
btnClear.addEventListener("click", () => {
    expression = []
    leftArray = []
    rightArray = []
    history = []
    operator = ""
    console.log(expression)
    screen.textContent = "clear"
});


function equals() {
    console.log(leftOperand)
    console.log(rightOperand)
    console.log(expression)
    operandSelected=false;
    if (history.length === 0){
        leftOperand = Number(leftArray.reduce((acc,curr)=> {return acc + curr}, ""));
    } else {
        leftOperand = history[0]
    }
    rightOperand = Number(rightArray.reduce((acc,curr)=> {return acc + curr}, ""));
    rightArray = []
    console.log(leftOperand)
    console.log(rightOperand)
    console.log(expression)
    operate(leftOperand,operator,rightOperand);
}


function operate(leftOperand, operator, rightOperand) {
    let result = 0
    if (operator=== "+"){
        result = add(leftOperand,rightOperand);
        screen.textContent = result;
        history[0] = result;
        console.log(history)
        
    } else if (operator === "-"){
        result = subtract(leftOperand,rightOperand);
        screen.textContent = result;
        history[0] = result;
        console.log(history)
    } else if (operator === "*"){
        result = multiply(leftOperand,rightOperand);
        screen.textContent = result;
        history[0] = result;
        console.log(history)
    } else if (operator === "/"){
        result = divide(leftOperand,rightOperand);
        screen.textContent = result;
        history[0] = result;
        console.log(history)
    }
}

function add(operand1, operand2) {
    return operand1 + operand2;

}

function multiply(operand1, operand2) {
    return operand1 * operand2;
}

function subtract(operand1, operand2) {
    return operand1 - operand2;
}

function divide(operand1, operand2) {
    if (operand2!=0){
        return operand1 / operand2;
    } else {
        return "No. Press C or Any number to continue"
    }
    
}


