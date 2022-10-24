const display = document.getElementById("display");
let operatorClickCount =0; 

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

function operate(){
    y = parseFloat(display.innerHTML);
    console.log("x is "+x+" and y is "+y+". The operator is "+operatorValue+". typeof x ="+ typeof x + "and typeof y ="+typeof y);
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

function addToDisplay(e){
    const displayValue = document.createTextNode(e.target.id);
    display.appendChild(displayValue);
}
let buttonList = document.getElementsByClassName('number');
for (button of buttonList) {
    button.addEventListener('click', addToDisplay);
  }

function clearFunction(){
    const display = document.getElementById("display");
    while (display.hasChildNodes()){
        display.removeChild(display.firstChild);
    }
}
let clearButton = document.getElementById("clear");
clearButton.addEventListener('click', clearFunction);

function selectOperator(e){
    operatorClickCount++;
    operatorValue = e.target.id;
    x = parseFloat(display.innerHTML);
    clearFunction();
    y = parseFloat(display.innerHTML);
}
let operatorsList = document.getElementsByClassName("operator");
for (operatorValues of operatorsList){
    operatorValues.addEventListener('click', selectOperator);
}

function resetOperatorClickCount(){
    return operatorClickCount=0;
}
clearButton.addEventListener('click', resetOperatorClickCount);
