// get the inputs elements where the applicaton goes to show the operations and results
var operandsBox = document.getElementById('operands');
var resultBox = document.getElementById('result');

// function that clean all application's input elements
exports.clean = function() {
    operandsBox.value = "";
    resultBox.value = 0;
    this.sendFocus();
};

// function that delete an element of the operations string
exports.backspace = function() {
    var exp = operandsBox.value;
    operandsBox.value = exp.substring(0, exp.length-1);
    this.sendFocus();
};

// insert the values to be calculate for the application
exports.insert = function(num) {
    if (operandsBox.value == "") {
        operandsBox.value = num;
    } else {
        operandsBox.value += num;
    }
    this.sendFocus();
};

// calculate and show the result of the operations
exports.equal = function() {
    // replace the ascii values × and ÷ per * and / for can be calculate correctly by the application
    var exp = operandsBox.value.replace(/×|÷/gi, function(match) { return (match == '×') ? '*' : '/'; });
    try {
        resultBox.value = eval(exp);
    } catch(error) {
        resultBox.value = error;
    }
    this.sendFocus();
};

// move the focus at other area
exports.sendFocus = function() {
    document.getElementById('btnEqual').focus();
};
