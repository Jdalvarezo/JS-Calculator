window.addEventListener("load", function() {

    var operandsBox = document.getElementById('operands');
    var resultBox = document.getElementById('result');
    
    function clean() {
        operandsBox.value = "";
        resultBox.value = 0;
        sendFocus();
    }
    
    function backspace() {
        var exp = operandsBox.value;
        operandsBox.value = exp.substring(0, exp.length-1);
        sendFocus();
    }
    
    function insert(num) {
        if (operandsBox.value == "") {
            operandsBox.value = num;
        } else {
            operandsBox.value += num;
        }
        sendFocus();
    }
    
    function equal() {
        var exp = operandsBox.value.replace(/×|÷/gi, function(match) { return (match == '×') ? '*' : '/'; });
        try {
            resultBox.value = eval(exp);
        } catch(error) {
            resultBox.value = error;
        }
        sendFocus();
    }
    
    function sendFocus() {
        document.getElementById('btnEqual').focus();
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

    document.addEventListener("keyup", (evt) => {
        switch (evt.key) {
            case "0":
                insert(0);
                break;
            case "1":
                insert(1);
                break;
            case "2":
                insert(2);
                break;
            case "3":
                insert(3);
                break;
            case "4":
                insert(4);
                break;
            case "5":
                insert(5);
                break;
            case "6":
                insert(6);
                break;
            case "7":
                insert(7);
                break;
            case "8":
                insert(8);
                break;
            case "9":
                insert(9);
                break;
            case "+":
                insert("+");
                break;
            case "-":
                insert("-");
                break;
            case "*":
                insert("×");
                break;
            case "/":
                insert("÷");
                break;
            case ".":
                insert(".");
                break;
            case "(":
                insert("(");
                break;
            case ")":
                insert(")");
                break;
            case "Escape":
                clean();
                break;
            case "Backspace":
                backspace();
                break;
            case "Enter":
                equal();
                break;
            default:
                break;
        }
    });

    clean();
    
});