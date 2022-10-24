const display = document.getElementById("display");
const clearButton = document.getElementById("clear");

let operatorClickCount = 0; 
let x = 0;
let clearDisplayToggleSwitch = 0;

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
  clearDisplayToggleSwitch++;
    if (operatorClickCount % 2 == 0){
        y = y = parseFloat(display.innerHTML);
    }
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
    console.log("x is "+x+" and y is "+y+
                ". The operator is "+operatorValue+
                ". typeof x ="+ typeof x + 
                "and typeof y ="+typeof y+" and the answer is " + total);
    clearTheDisplay();
    const displayValue = document.createTextNode(total);
    display.appendChild(displayValue);
};
function addToDisplay(e){
    if (clearDisplayToggleSwitch === 1){
        clearTheDisplay();
      clearDisplayToggleSwitch--;
    }
    const displayValue = document.createTextNode(e.target.id);
    display.appendChild(displayValue);
}
function clearTheDisplay(){
    const display = document.getElementById("display");
    while (display.hasChildNodes()){
        display.removeChild(display.firstChild);
    }
}
function selectOperator(e){
    operatorClickCount++;
    console.log("alternation ="+operatorClickCount%2+", count total = "+operatorClickCount);
    if (operatorClickCount == 1){
        x = parseFloat(display.innerHTML);
        clearTheDisplay();
    }
    if (operatorClickCount % 2 == 1){
        y = parseFloat(display.innerHTML);
        clearTheDisplay();
    }

    if (operatorClickCount % 2 == 0){
        y = parseFloat(display.innerHTML);
    }
    if (operatorClickCount > 1){
        operate();
        x = parseFloat(display.innerHTML);
    }
    operatorValue = e.target.id;
}
function resetOperatorClickCount(){
    return operatorClickCount=0;
}
function equalsButtonFunction(){
    if (operatorClickCount % 2 == 0){
        y = parseFloat(display.innerHTML);
    }
    operate();
}
function clearDisplayToggleSwitchOn(){
  equalsButtonToggleSwitch = 1;
}
function clearDisplayToggleSwitchOff(){
  equalsButtonToggleSwitch = 0;
}
clearButton.addEventListener('click', resetOperatorClickCount);
clearButton.addEventListener('click', clearTheDisplay);
document.getElementById("=").addEventListener('click', resetOperatorClickCount);
document.getElementById("=").addEventListener('click', equalsButtonFunction);
let buttonList = document.getElementsByClassName('number');
for (button of buttonList) {
    button.addEventListener('click', addToDisplay);
  }
  let operatorsList = document.getElementsByClassName("operator");
  for (operatorValues of operatorsList){
      operatorValues.addEventListener('click', selectOperator);
  }
  