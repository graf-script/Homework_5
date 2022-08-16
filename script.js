const firstNumber = Number(prompt('Choose First number'));
const operation = prompt('Choose operation for: "+" "-" "/" "*"');
const secondNumber = Number(prompt('Choose Second number'));
 if(Number.isNaN(firstNumber)){
    alert('Wrong FIRST Number!');
} else if(Number.isNaN(secondNumber)) {
    alert('Wrong SECOND Number!');
} else if(operation === '+'){
    alert(`Your result is ${firstNumber + secondNumber}`);
} else if(operation === '-') {
    alert(`Your result is ${firstNumber - secondNumber}`);
} else if(operation === '/') {
    alert(`Your result is ${firstNumber / secondNumber}`);
} else if(operation === '*') {
    alert(`Your result is ${firstNumber * secondNumber}`);
} else {
    alert('This operation is not exist')
}