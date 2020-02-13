window.addEventListener("load", function() {

    var operandsBox = document.getElementById('operands');
    var resultBox = document.getElementById('result');

    operandsBox.value = "";
    resultBox.value = 0;

    function insert(num) {
        if (operandsBox.value == "") {
            operandsBox.value = num;
        } else {
            operandsBox.value += num;
        }
    }
    
    function equal() {
        var exp = operandsBox.value;
        resultBox.value = eval(exp);
    }
    
    function clean() {
        operandsBox.value = "";
        resultBox.value = 0;
    }
    
    function backspace() {
        var exp = operandsBox.value;
        operandsBox.value = exp.substring(0, exp.length-1);
    }

    var numeros = ["btn0", "btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8", "btn9"];

    for(i=0; i<numeros.length; i++) {
        document.getElementById(numeros[i]).addEventListener("click", function() {
            insert(i);
        });
    }
    
    document.getElementById('btnClean').addEventListener("click", function() {
        clean();
    });
    document.getElementById('btnBackspace').addEventListener("click", function() {
        backspace();
    });
    document.getElementById('btnAdd').addEventListener("click", function() {
        insert("+");
    });
    document.getElementById('btnSubtract').addEventListener("click", function() {
        insert("-");
    });
    document.getElementById('btnMultiply').addEventListener("click", function() {
        insert("*");
    });
    document.getElementById('btnDivide').addEventListener("click", function() {
        insert("/");
    });
    document.getElementById('btnDot').addEventListener("click", function() {
        insert(".");
    });
    document.getElementById('btnEqual').addEventListener("click", function() {
        equal();
    });

    // var btn7 = document.getElementById('btn7');
    // var btn8 = document.getElementById('btn8');
    // var btn9 = document.getElementById('btn9');
    

    // var btn4 = document.getElementById('btn4');
    // var btn5 = document.getElementById('btn5');
    // var btn6 = document.getElementById('btn6');
    

    // var btn1 = document.getElementById('btn1');
    // var btn2 = document.getElementById('btn2');
    // var btn3 = document.getElementById('btn3');
    

    // var btn0 = document.getElementById('btn0');
    

});