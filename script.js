function add(a,b){
    sum = a+b;
    //display.appendChild(sum);
    console.log(sum);
}

function subtract(a,b){
    sum = a-b;
   // display.appendChild(sum)    //
    console.log(sum)
}

function multiply(a,b){
    product = a*b;
   // display.appendChild(product);
    console.log(product);
}

function divide(a,b){
    product = a/b;
   // display.appendChild(product);
    console.log(product);
}

function selectOperator(e){
    operator = e.target.id;
    console.log(operator);
}

function operate(){
    console.log("the operator is " + operator);
  switch(operator){
    case '+':
        add(a,b);
        break;
    case '-':
        subtract(a,b);
        break;
    case '*':
        multiply(a,b);
        break;
    case '/':
        divide(a,b);
        break;
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
for (operatorValues of operatorsList){
    operatorValues.addEventListener('click', selectOperator);
}

let a = 9; 
let b = 5;