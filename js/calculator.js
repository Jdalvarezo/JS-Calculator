window.addEventListener("load", function() {
    
    const functionality = require('./js/functionality');
    const keyboard = require('./js/keyboard');

    function addClickEvent(id, value){
        document.getElementById(id).addEventListener("click", function() {
            functionality.insert(value);
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

    document.getElementById('btnClean').addEventListener("click", function() { functionality.clean(); });
    document.getElementById('btnBackspace').addEventListener("click", function() { functionality.backspace(); });
    document.getElementById('btnEqual').addEventListener("click", function() { functionality.equal(); });

    keyboard.loadKeyboard();
    functionality.clean();
    
});