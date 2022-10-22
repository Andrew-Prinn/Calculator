function add(a,b){
    return sum = a+b;
}

function subtract(a,b){
    return sum = a-b;
}

function multiply(a,b){
    return product = a*b;
}

function divide(a,b){
    return product = a/b;
}

function operate(operator,a,b){
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


let buttonList = document.querySelectorAll('button');
for (button of buttonList) {
    button.addEventListener('click', buttonFunction);
  }

function buttonFunction(e){
    const display = document.getElementById("display");
    const displayValue = document.createTextNode(e.target.id);
    display.appendChild(displayValue);
}