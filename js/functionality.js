var operandsBox = document.getElementById('operands');
var resultBox = document.getElementById('result');

exports.clean = function() {
    operandsBox.value = "";
    resultBox.value = 0;
    this.sendFocus();
};

exports.backspace = function() {
    var exp = operandsBox.value;
    operandsBox.value = exp.substring(0, exp.length-1);
    this.sendFocus();
};

exports.insert = function(num) {
    if (operandsBox.value == "") {
        operandsBox.value = num;
    } else {
        operandsBox.value += num;
    }
    this.sendFocus();
};

exports.equal = function() {
    var exp = operandsBox.value.replace(/×|÷/gi, function(match) { return (match == '×') ? '*' : '/'; });
    try {
        resultBox.value = eval(exp);
    } catch(error) {
        resultBox.value = error;
    }
    this.sendFocus();
};

exports.sendFocus = function() {
    document.getElementById('btnEqual').focus();
};
