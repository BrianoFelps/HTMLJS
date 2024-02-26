const resultArea = document.getElementById("resArea");
const buttonsSci = document.getElementById("buttonsSci");
const calc = document.getElementById("calc")

// 
// Números
// 

function numOneClick (){
    const button = document.getElementById("one")
    resultArea.value += button.textContent.trim();
    // o trim tira espaços padrão e exclui
}

function numTwoClick (){
    const button = document.getElementById("two")
    resultArea.value += button.textContent.trim();
    // o trim tira espaços padrão e exclui
}

function numThreeClick (){
    const button = document.getElementById("three")
    resultArea.value += button.textContent.trim();
    // o trim tira espaços padrão e exclui
}

function numFourClick (){
    const button = document.getElementById("four")
    resultArea.value += button.textContent.trim();
    // o trim tira espaços padrão e exclui
}

function numFiveClick (){
    const button = document.getElementById("five")
    resultArea.value += button.textContent.trim();
    // o trim tira espaços padrão e exclui
}

function numSixClick (){
    const button = document.getElementById("six")
    resultArea.value += button.textContent.trim();
    // o trim tira espaços padrão e exclui
}

function numSevenClick (){
    const button = document.getElementById("seven")
    resultArea.value += button.textContent.trim();
    // o trim tira espaços padrão e exclui
}

function numEightClick (){
    const button = document.getElementById("eight")
    resultArea.value += button.textContent.trim();
    // o trim tira espaços padrão e exclui
}

function numNineClick (){
    const button = document.getElementById("nine")
    resultArea.value += button.textContent.trim();
    // o trim tira espaços padrão e exclui
}

function numZeroClick (){
    const button = document.getElementById("zero")
    resultArea.value += button.textContent.trim();
    // o trim tira espaços padrão e exclui
}

// 
// Símbolos
// 

const sumClick = () => {
    const button = document.getElementById("sum")
    resultArea.value += button.textContent.trim();
}

const minusClick = () => {
    const button = document.getElementById("minus")
    resultArea.value += button.textContent.trim();
}

const timesClick = () => {
    const button = document.getElementById("mult")
    resultArea.value += "*";
}

const divisionClick = () => {
    const button = document.getElementById("division")
    resultArea.value += "/";
}

const commaClick = () => {
    const button = document.getElementById("comma")
    resultArea.value += ".";
}

const parOpenClick = () => {
    if(buttonsSci.style.opacity > 0){
    const button = document.getElementById("parenthesisOpen")
    resultArea.value += button.textContent.trim();
    }
}

const parCloseClick = () => {
    if(buttonsSci.style.opacity > 0){
    const button = document.getElementById("parenthesisClose")
    resultArea.value += button.textContent.trim();
    }
}

const percentClick = () => {
    // Digitar o elemento "%"
    const button = document.getElementById("percent");
    resultArea.value += button.textContent.trim();
}

const calculateTrigonometric = (operation) => {
    if(buttonsSci.style.opacity > 0){
        const expression = resultArea.value;
        const angle = parseFloat(expression);

        if (isNaN(angle)) {
            resultArea.value = "Erro";
            return;
        }

        let result;
        switch (operation) {
            case 'sin':
                result = Math.sin(angle * (Math.PI / 180));
                break;
            case 'cos':
                result = Math.cos(angle * (Math.PI / 180));
                // Considerar valores muito próximos de zero como zero
                if (Math.abs(result) < 1e-15) {
                    result = 0;
                }
                break;
            case 'tan':
                result = Math.tan(angle * (Math.PI / 180));
                // Verificar se tan é muito grande (considerar como indefinido)
                if (Math.abs(result) > 1e15) {
                    result = "Indefinido";
                }
                break;
            default:
                result = "Erro";
        }

        resultArea.value = result;
    }
}

const resClick = () => {
    var res = eval(resultArea.value);
    const expression = resultArea.value;

    if (expression.includes("%")) {
        // Se houver "%" na expressão, calcular a porcentagem
        const [percent, num] = expression.split('%');
        const percentage = parseFloat(percent);
        const baseNumber = parseFloat(num);
        const resPor = (percentage / 100) * baseNumber;
        resultArea.value = resPor.toFixed(2);
    } else {
        resultArea.value = res;
    }
}

const acClick = () => {
    resultArea.value = "";
}

const delClick = () => {
    resultArea.value = resultArea.value.slice(0, -1);
}

const sciClick = () => {
    const buttonsSci = document.getElementById("buttonsSci")
    const calc = document.getElementById("calc")

    if (buttonsSci.style.opacity == 0) {
        buttonsSci.style.opacity = 1;
        calc.style.width = "1000px";
    } else {
        buttonsSci.style.opacity = 0;
        calc.style.width = "680px";
    }
}