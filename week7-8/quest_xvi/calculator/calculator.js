let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByTagName('button'));
let operators = Array.from(document.getElementsByClassName('operator'));
let digit = Array.from(document.getElementsByClassName('digit'));
let clear = document.getElementById('clear');
let equals = document.getElementById('equals');

let displayVal = '';
let operator = '';
let operand1 = '';
let operand2 = '';

digit.forEach(button => {
  button.addEventListener('click', (event) => {
    displayVal += event.target.innerText;
    display.innerText = displayVal;
  });
});

operators.forEach(button => {
  button.addEventListener('click', (event) => {
    if (displayVal !== '') {
      operand1 = displayVal;
      operator = event.target.innerText;
      displayVal += operator;
      display.innerText = displayVal;
    }
  });
});

equals.addEventListener('click', () => {
  let operands = displayVal.split(operator);
  if (operands.length > 1) {
    operand2 = operands[1];
    switch (operator) {
      case '+':
        displayVal = parseFloat(operand1) + parseFloat(operand2);
        break;
      case '-':
        displayVal = parseFloat(operand1) - parseFloat(operand2);
        break;
      case '*':
        displayVal = parseFloat(operand1) * parseFloat(operand2);
        break;
      case '/':
        if (operand2 === '0') {
          displayVal = "Error";
        } else {
          displayVal = parseFloat(operand1) / parseFloat(operand2);
        }
        break;
      default:
        displayVal = "Error";
    }
    display.innerText = displayVal;
  }
});

clear.addEventListener('click', () => {
  displayVal = '';
  operator = '';
  operand1 = '';
  operand2 = '';
  display.innerText = displayVal;
});
