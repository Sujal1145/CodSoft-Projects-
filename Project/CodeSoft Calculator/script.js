function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

function calculate() {
    let expression = document.getElementById('display').value;
    try {
        let result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateFactorial() {
    let num = parseInt(document.getElementById('display').value);
    if (!isNaN(num) && num >= 0) {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        document.getElementById('display').value = result;
    } else {
        document.getElementById('display').value = 'Invalid input';
    }
}
