const resultArea = document.getElementById("resArea");

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
    resultArea.value += button.textContent.trim();
}

const parOpenClick = () => {
    const button = document.getElementById("parenthesisOpen")
    resultArea.value += button.textContent.trim();
}

const parCloseClick = () => {
    const button = document.getElementById("parenthesisClose")
    resultArea.value += button.textContent.trim();
}

const percentClick = () => {
    const button = document.getElementById("percent")
    resultArea.value += button.textContent.trim();
}

const resClick = () => {
    const res = eval(resultArea.value);
    resultArea.value = res;
}

const acClick = () => {
    resultArea.value = "";
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
