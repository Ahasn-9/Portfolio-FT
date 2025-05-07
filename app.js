
document.getElementById('calculator').addEventListener('submit', function (e) {
    e.preventDefault(); 

    
    const num1 = parseFloat(document.getElementById('num1').value.trim());
    const num2 = parseFloat(document.getElementById('num2').value.trim());
    const operation = document.getElementById('operation').value;
    const resultDiv = document.getElementById('result');

    
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = 'Please enter valid numbers.';
        resultDiv.style.color = '#e53935'; 
        return;
    }

    let result;

    
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                resultDiv.textContent = 'Cannot divide by zero.';
                resultDiv.style.color = '#e53935';
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultDiv.textContent = 'Unknown operation.';
            resultDiv.style.color = '#e53935';
            return;
    }

    
    resultDiv.textContent = `Result: ${result}`;
    resultDiv.style.color = '#2e7d32'; 
});
