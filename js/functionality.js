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
    } else if(operandsBox.value != "" && resultBox.value != 0 && (num == "+" || num == "-" || num == "×" || num == "÷")) {
        operandsBox.value = resultBox.value + num
        resultBox.value = 0;
    } else {
        operandsBox.value += num;
    }
    switch(num){
        case "+":
            var str = operandsBox.value;
            if(operandsBox.value == "+") { operandsBox.value = str.substring(0, str.length-1); }
            if(str[str.length-2] == "+" || str[str.length-2] == "-" || str[str.length-2] == "×" || str[str.length-2] == "÷" || str[str.length-2] == ".") {
                operandsBox.value = str.substring(0, str.length-1);
                operandsBox.value = str.substring(0, str.length-2);
                operandsBox.value += "+";
            }
            break;
        case "-":
            var str = operandsBox.value;
            if(operandsBox.value == "-") { operandsBox.value = str.substring(0, str.length-1); }
            if(str[str.length-2] == "+" || str[str.length-2] == "-" || str[str.length-2] == "×" || str[str.length-2] == "÷" || str[str.length-2] == ".") {
                operandsBox.value = str.substring(0, str.length-1);
                operandsBox.value = str.substring(0, str.length-2);
                operandsBox.value += "-";
            }
            break;
        case "×":
            var str = operandsBox.value;
            if(operandsBox.value == "×") { operandsBox.value = str.substring(0, str.length-1); }
            if(str[str.length-2] == "+" || str[str.length-2] == "-" || str[str.length-2] == "×" || str[str.length-2] == "÷" || str[str.length-2] == ".") {
                operandsBox.value = str.substring(0, str.length-1);
                operandsBox.value = str.substring(0, str.length-2);
                operandsBox.value += "×";
            }
            break;
        case "÷":
            var str = operandsBox.value;
            if(operandsBox.value == "÷") { operandsBox.value = str.substring(0, str.length-1); }
            if(str[str.length-2] == "+" || str[str.length-2] == "-" || str[str.length-2] == "×" || str[str.length-2] == "÷" || str[str.length-2] == ".") {
                operandsBox.value = str.substring(0, str.length-1);
                operandsBox.value = str.substring(0, str.length-2);
                operandsBox.value += "÷";
            }
            break;
        case ".":
            var str = operandsBox.value;
            if(operandsBox.value == ".") { operandsBox.value = str.substring(0, str.length-1); }
            if(str[str.length-2] == "+" || str[str.length-2] == "-" || str[str.length-2] == "×" || str[str.length-2] == "÷" || str[str.length-2] == ".") {
                operandsBox.value = str.substring(0, str.length-1);
                operandsBox.value = str.substring(0, str.length-2);
                operandsBox.value += ".";
            }
            break;
        default:
            break;
    }
    this.sendFocus();
};

// calculate and show the result of the operations
exports.equal = function() {
    // verify if there are operations to do
    if(operandsBox.value != "") {
        // replace the ascii values × and ÷ per * and / for can be calculate correctly by the application
        var exp = operandsBox.value.replace(/×|÷/gi, function(match) { return (match == '×') ? '*' : '/'; });
        try {
            var result = eval(exp);
            if(result % 1 === 0) {
                resultBox.value = result;
            } else {
                resultBox.value = result.toFixed(6);
            }
        } catch(error) {
            resultBox.value = error;
        }
        this.sendFocus();
    } else {
        resultBox.value = 0;
        this.sendFocus();
    }
};

// move the focus at other area
exports.sendFocus = function() {
    document.getElementById('operands').focus();
};
