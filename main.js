// Capturando o input onde será exibido o resultado
const result = document.getElementById('result');

// Capturando os botões
const buttons = document.querySelectorAll('button');

// Armazenar o valor atual da operação
let currentInput = '';

// Função para atualizar o display com o valor atual de currentInput
function updateDisplay() {
    result.value = currentInput;
}

// Função para adicionar números ao display
function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

// Realizando os cálculos
function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    }
    catch (error) {
        currentInput = 'Erro';
        updateDisplay();
    }
}

// Limpar o display
function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

// Capturar os eventos de clique dos botões
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        console.log('Botão clicado!');

        if (buttonText === 'C') {
            clearDisplay();
        }
        else if (buttonText === '=') {
            calculate();
        }
        else {
            appendNumber(buttonText);
        }
    });
});


const testitemtocalculate = '1+5'
const calculated = eval(testitemtocalculate);
console.log(`O número calculado foi ${calculated}`);