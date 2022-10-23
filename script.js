function add(a,b){
    sum = a+b;
    //display.appendChild(sum);
    console.log("add works");
}

function subtract(a,b){
    sum = a-b;
   // display.appendChild(sum)    //
    console.log("subtract works");
}

function multiply(a,b){
    product = a*b;
   // display.appendChild(product);
    console.log("multiply works");
}

function divide(a,b){
    product = a/b;
   // display.appendChild(product);
    console.log("divide works");
}

function selectOperator(e){
    operator = e.target.id;
    console.log(operator);
}

function operate(operator,a,b){
    console.log("the operator is " + operator);
  switch(operator){
    case '+':
        return add(a,b);
    case '-':
        return subtract(a,b);
    case '*':
        return multiply(a,b);
    case '/':
        return divide(a,b);
    default:
        return null;
  };
};
document.getElementById("=").addEventListener('click', operate);

let buttonList = document.getElementsByClassName('number');
for (button of buttonList) {
    button.addEventListener('click', addNumberToDisplay);
  }

function addNumberToDisplay(e){
    const display = document.getElementById("display");
    const displayValue = document.createTextNode(e.target.id);
    display.appendChild(displayValue);
}

function clearFunction(){
    const display = document.getElementById("display");
    while (display.hasChildNodes()){
        display.removeChild(display.firstChild);
    }
}

let operatorsList = document.getElementsByClassName("operator");
for (operators of operatorsList){
    operators.addEventListener('click', selectOperator);
}

let a = 5; 
let b = 3; 

function opTest(){
    console.log("test: the operator is " + operator);
    switch(operator){
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
        default:
            return null;
      };
}