const functionality = require('./functionality');

exports.loadKeyboard = function() {
    document.addEventListener("keyup", (evt) => {
        switch (evt.key) {
            case "0":
                functionality.insert(0);
                break;
            case "1":
                functionality.insert(1);
                break;
            case "2":
                functionality.insert(2);
                break;
            case "3":
                functionality.insert(3);
                break;
            case "4":
                functionality.insert(4);
                break;
            case "5":
                functionality.insert(5);
                break;
            case "6":
                functionality.insert(6);
                break;
            case "7":
                functionality.insert(7);
                break;
            case "8":
                functionality.insert(8);
                break;
            case "9":
                functionality.insert(9);
                break;
            case "+":
                functionality.insert("+");
                break;
            case "-":
                functionality.insert("-");
                break;
            case "*":
                functionality.insert("×");
                break;
            case "/":
                functionality.insert("÷");
                break;
            case ".":
                functionality.insert(".");
                break;
            case "(":
                functionality.insert("(");
                break;
            case ")":
                functionality.insert(")");
                break;
            case "Escape":
                functionality.clean();
                break;
            case "Backspace":
                functionality.backspace();
                break;
            case "Enter":
                functionality.equal();
                break;
            default:
                break;
        }
    });
};