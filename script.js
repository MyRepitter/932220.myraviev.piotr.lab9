Expression.textContent = '0';
var onBeginning = true;
var currfontSize = 39;
var tempResult = 0.0;

function AddNumber(number) {
    if (onBeginning) {
        Expression.textContent = number;
        onBeginning = false;
    }
    else Expression.textContent += number;
}

function AddOperation(operation) {
    if (Expression.textContent.includes('+') || Expression.textContent.includes('-') || Expression.textContent.includes('*') || Expression.textContent.includes('/')){
        Expression.textContent = Expression.textContent.slice(0, -2);
    }
    tempResult = Expression.textContent;
    Expression.textContent = tempResult + " " + operation + " ";
}

function Addpoint() {
    if (!Expression.textContent.includes('.')) {
        Expression.textContent += '.';
    }
}

function clean() {
    onBeginning = true;
    Expression.textContent = '0';
}

function Backspace() {
    tempUserString = Expression.textContent;
    if (tempUserString.slice(-1) == ' ') Expression.textContent = tempUserString.slice(0, -3);
    else Expression.textContent = tempUserString.slice(0, -1);
    if (Expression.textContent == '') clean();
}


function compute() {
    Expression.textContent = eval(Expression.textContent);
}

calculator.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        if (Expression.textContent.length > 18) currfontSize -= 1.2;
        else currfontSize = 39;
        Expression.style.fontSize = currfontSize + 'px';
    }
})