window.addEventListener("load", function() {

    var operandsBox = document.getElementById('operands');
    var resultBox = document.getElementById('result');
    
    function clean() {
        operandsBox.value = "";
        resultBox.value = 0;
    }
    
    function backspace() {
        var exp = operandsBox.value;
        operandsBox.value = exp.substring(0, exp.length-1);
    }
    
    function insert(num) {
        if (operandsBox.value == "") {
            operandsBox.value = num;
        } else {
            operandsBox.value += num;
        }
    }
    
    function equal() {
        var exp = operandsBox.value.replace(/×|÷/gi, function(match) { return (match == '×') ? '*' : '/'; });
        try {
            resultBox.value = eval(exp);
        } catch(error) {
            resultBox.value = error;
        }
    }

    function addClickEvent(id, value){
        document.getElementById(id).addEventListener("click", function() {
            insert(value);
        })
    }

    var numeros = ["btn0", "btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8", "btn9"];
    var operations = ["btnAdd", "btnSubtract", "btnMultiply", "btnDivide", "btnDot"];
    var symbols = ["+", "-", "×", "÷", "."];

    for(var i=0; i<numeros.length; i++) {
        addClickEvent(numeros[i], i);
    }

    for(var i=0; i<operations.length; i++) {
        addClickEvent(operations[i], symbols[i]);
    }

    document.getElementById('btnClean').addEventListener("click", function() { clean(); });
    document.getElementById('btnBackspace').addEventListener("click", function() { backspace(); });
    document.getElementById('btnEqual').addEventListener("click", function() { equal(); });

    clean();
    
});