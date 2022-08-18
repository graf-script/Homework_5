
const firstNumber = Number(prompt('Choose First number'));
if(Number.isNaN(firstNumber)) {
    alert('wrong first number');
}

while (!Number.isNaN(firstNumber)) {
    const operation = prompt('Choose operation for: "+" "-" "/" "*"');
    if(operation !== '+' && operation !== '-' && operation !== '/' && operation !== '*') {
        alert('This operation is not exist');
        break;
    }
    const secondNumber = Number(prompt('Choose Second number'));
    if(Number.isNaN(secondNumber)) {
        alert('wrong second number');
        break;
    } else if(operation === '+'){
        alert(`Your result is ${firstNumber + secondNumber}`);
        break;
    } else if(operation === '-') {
        alert(`Your result is ${firstNumber - secondNumber}`);
        break;
    } else if(operation === '/') {
        alert(`Your result is ${firstNumber / secondNumber}`);
        break;
    } else if(operation === "*") {
        alert(`Your result is ${firstNumber * secondNumber}`);
        break;
    } 
}