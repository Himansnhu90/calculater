let display = document.getElementById('display');
let keys = document.querySelectorAll('.keys button');

let calculator = {
    displayValue: '',
    firstOperand: '',
    operator: '',
    secondOperand: '',
    result: '',

    clear() {
        this.displayValue = '';
        this.firstOperand = '';
        this.operator = '';
        this.secondOperand = '';
        this.result = '';
        display.value = '';
    },

    backspace() {
        this.displayValue = this.displayValue.slice(0, -1);
        display.value = this.displayValue;
    },

    handleNumber(key) {
        this.displayValue += key.textContent;
        display.value = this.displayValue;
    },

    handleOperator(key) {
        this.firstOperand = this.displayValue;
        this.operator = key.textContent;
        this.displayValue = '';
        display.value = '';
    },

    handleEquals() {
        this.secondOperand = this.displayValue;
        this.result = eval(`${this.firstOperand} ${this.operator} ${this.secondOperand}`);
        display.value = this.result;
        this.displayValue = '';
        this.firstOperand = '';
        this.operator = '';
        this.secondOperand = '';
    }
};

keys.forEach(key => {
    key.addEventListener('click', () => {
        switch (key.id) {
            case 'clear':
                calculator.clear();
                break;
            case 'backspace':
                calculator.backspace();
                break;
            case 'divide':
            case 'multiply':
            case 'subtract':
            case 'add':
                calculator.handleOperator(key);
                break;
            case 'equals':
                calculator.handleEquals();
                break;
            default:
                calculator.handleNumber(key);
        }
    });
});