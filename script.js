const num1Input = document.getElementById('firstNumber');
const num2Input = document.getElementById('secondNumber');
const resultSpan = document.getElementById('resultValue');
const resultContainer = document.getElementById('result-display');
const error1 = document.getElementById('error1');
const error2 = document.getElementById('error2');
const operatorButtons = document.querySelectorAll('.operator-button');

function calculate(operator) {
    const num1Str = num1Input.value;
    const num2Str = num2Input.value;

    error1.textContent = '';
    error2.textContent = '';
    resultContainer.style.display = 'none';
    resultSpan.textContent = '';

    if (num1Str === '' || num2Str === '') {
        if (num1Str === '') error1.textContent = 'Please enter a number.';
        if (num2Str === '') error2.textContent = 'Please enter a number.';
        alert('Please fill both fields with numbers.');
        return;
    }

    const num1 = parseFloat(num1Str);
    const num2 = parseFloat(num2Str);
    let result;

    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case 'x': result = num1 * num2; break;
        case '/':
            if (num2 === 0) {
                error2.textContent = 'Bobo Ampota!';
                alert('Error: Division by zero is not allowed.');
                return;
            }
            result = num1 / num2;
            break;
        default: return;
    }

    alert(`Result: ${result}`);
    resultSpan.textContent = result.toFixed(4).replace(/\.0+$/, '');
    resultContainer.style.display = 'block';
}

operatorButtons.forEach(button => {
    button.addEventListener('click', function() {
        const operator = this.getAttribute('data-operator'); 
        calculate(operator);
    });
});