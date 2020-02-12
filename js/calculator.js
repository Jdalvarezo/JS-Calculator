window.addEventListener("load", function() {
    // console.log("It's work!");

    var operandsBox = document.getElementById('operands');
    var resultBox = document.getElementById('result');
    
    document.getElementById('btnClean').addEventListener("click", function() {
        console.log("Presionaste el botón limpiar");
    });
    var btnDivide = document.getElementById('btnDivide');
    var btnMultiply = document.getElementById('btnMultiply');
    var btnBackspace = document.getElementById('btnBackspace');

    var btn7 = document.getElementById('btn7');
    var btn8 = document.getElementById('btn8');
    var btn9 = document.getElementById('btn9');
    var btnSubtract = document.getElementById('btnSubtract');

    var btn4 = document.getElementById('btn4');
    var btn5 = document.getElementById('btn5');
    var btn6 = document.getElementById('btn6');
    var btnAdd = document.getElementById('btnAdd');

    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var btn3 = document.getElementById('btn3');
    var btnEqual = document.getElementById('btnEqual');

    var btn0 = document.getElementById('btn0');
    var btnDot = document.getElementById('btnDot');

    operandsBox.value = "";
    resultBox.value = 0;
});