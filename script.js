const display = document.getElementById("display");
let x = 0; 
let y = 0;
let operatorClickCount = 0; 

function add(x,y){
    total = x+y;
}

function subtract(x,y){
    total = x-y;
}

function multiply(x,y){
    total = x*y;
}

function divide(x,y){
    total = x/y
}

function selectOperator(e){
    operatorValue = e.target.id;
    operatorClickCount++;
    if (operatorClickCount > 1){
        operate(); 
        return x = total;
    }
}

function operate(){
    let input = document.getElementById("display").innerHTML;
    const inputsArray = input.split(operatorValue);
    let x = parseFloat(inputsArray[0]);
    let y = parseFloat(inputsArray[1]);
    console.log("x is "+x+" and y is "+y+". The operator is "+operatorValue+". typeof x ="+ typeof x + "and typeof y ="+typeof y)
  switch(operatorValue){
    case '+':
        add(x,y);
        break;
    case '-':
        subtract(x,y);
        break;
    case '*':
        multiply(x,y);
        break;
    case '/':
        divide(x,y);
        break;
    default:
        return null;
  };
  console.log("the answer is " + total);

  clearFunction();
  const displayValue = document.createTextNode(total);
  display.appendChild(displayValue);
};
document.getElementById("=").addEventListener('click', operate);

let buttonList = document.getElementsByClassName('number');
for (button of buttonList) {
    button.addEventListener('click', addToDisplay);
  }

function addToDisplay(e){
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
    operatorValues.addEventListener('click', addToDisplay);
}

let clearButton = document.getElementById("clear");
clearButton.addEventListener('click', clearFunction);

