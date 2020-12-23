// add the functionality module for can use its functions
const functionality = require('./functionality');

// function that manage the keys actions
exports.loadKeyboard = function() {
    var operandsBox = document.getElementById('operands');
    operandsBox.addEventListener('keyup', function(evt) {
        if(/^([a-z])*$/.test(evt.key) || /^([A-Z])*$/.test(evt.key)) {
            var str = operandsBox.value;
            operandsBox.value = str.substring(0, str.length-1);
        }
        switch(evt.key){
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
            case "*":
                var str = operandsBox.value;
                if(operandsBox.value == "*") { operandsBox.value = str.substring(0, str.length-1); }
                if(str[str.length-2] == "+" || str[str.length-2] == "-" || str[str.length-2] == "×" || str[str.length-2] == "÷" || str[str.length-2] == ".") {
                    operandsBox.value = str.substring(0, str.length-1);
                    operandsBox.value = str.substring(0, str.length-2);
                    operandsBox.value += "*";
                }
                var exp = operandsBox.value.replace(/\*/gi, '×');
                operandsBox.value = exp;
                break;
            case "/":
                var str = operandsBox.value;
                if(operandsBox.value == "/") { operandsBox.value = str.substring(0, str.length-1); }
                if(str[str.length-2] == "+" || str[str.length-2] == "-" || str[str.length-2] == "×" || str[str.length-2] == "÷" || str[str.length-2] == ".") {
                    operandsBox.value = str.substring(0, str.length-1);
                    operandsBox.value = str.substring(0, str.length-2);
                    operandsBox.value += "/";
                }
                var exp = operandsBox.value.replace(/\//gi, '÷');
                operandsBox.value = exp;
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
            case "Escape":
                functionality.clean();
                break;
            case "Enter":
                functionality.equal();
                break;
            default:
                break;
        }
    });
};
