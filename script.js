const screenContent = document.querySelector(".screen");

let screenArray = [];
let firstNum = '';
let secondNum = '';
let operation = '';
let counter = 0;

const numButtons = document.querySelectorAll('.number');
const numText = document.querySelector(".popUp");
const op = document.querySelectorAll('.operator');
const eqSign = document.querySelector('.equal');
const clearBtn = document.querySelector('.clear');
const backBtn = document.querySelector('.backspace');


backBtn.addEventListener('click', () => {
    numText.textContent = back();
})

numButtons.forEach((number) => {
number.addEventListener('click', () => {
    getNum(number.textContent)
    });
});

op.forEach((operator) => {
    operator.addEventListener('click', () => {
        getOperator(operator.textContent)
    });
});

eqSign.addEventListener('click', () => {
    numText.textContent= operate(operation, secondNum, firstNum);
});

clearBtn.addEventListener('click', () => {
    clearAll()
});

function getNum(a){
    firstNum = a;
    screenArray.push(firstNum);
    firstNum = screenArray.join("");
    numText.textContent = `${screenArray.join("")}`;
    console.log("firstNum " + screenArray.join(""));
}


//function getNum(a){
  //  firstNum += a;
    //screenArray.push(firstNum);
    //numText.textContent = `${firstNum}`;
    //console.log("firstNum " + firstNum);
//}

function getOperator(a){
    if(counter>0){
        numText.textContent= operate(operation, secondNum, firstNum);
        secondNum = operate(operation, secondNum, firstNum);
    }
    else if(counter <= 0){
        secondNum = firstNum;
    }
    operation = a;
    firstNum = "";
    screenArray = [];
    console.log("secondNum " + secondNum);
    console.log("operator " + operation);
    console.log(counter);
    counter++;
}

function clearAll(){
    secondNum = "";
    firstNum = "";
    operation = '';
    screenArray = [];
    numText.textContent = "";
    console.log("firstNum " + firstNum);
    console.log("secondNum " + secondNum);
    console.log("operator " + operation);
    counter = 0;
}

function back(){
    screenArray.pop();
    console.log(screenArray.join(""));
    firstNum = screenArray.join("");
    return screenArray.join("");
}

function add(a, b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

let a1 = 3;
let a2 = 2;
let op1 = "+";
let op2 = "-";
let op3 = "*";
let op4 = "/";

console.log(add(a1, a2));
console.log(subtract(a1,a2));
console.log(multiply(a1,a2));
console.log(divide(a1,a2));

function operate(operator, num1, num2){
    if(operator == '+'){
        console.log("secondNum: " + secondNum + " firstNum: " + firstNum);
        return +num1 + +num2;
    }

    else if(operator == '-'){
        return +num1 - +num2;
    }

    else if(operator == '*'){
        return +num1 * +num2;
    }

    else if(operator == '/'){
        return +num1 / +num2;
    }
}

console.log(operate(op1, a1, a2));
console.log(operate(op2, a1, a2));
console.log(operate(op3, a1, a2));
console.log(operate(op4, a1, a2));