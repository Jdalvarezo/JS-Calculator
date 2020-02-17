// add the functionality module for can use its functions
const functionality = require('./functionality');

// this function add events for the keyboard when the key is up
exports.loadKeyboard = function() {
    document.addEventListener("keyup", (evt) => {
        var e = document.getElementById('operands');
        switch (evt.key) {
            case "0":
                if(!e.hasFocus()) { functionality.insert(0); }
                break;
            case "1":
                if(!e.hasFocus()) { functionality.insert(1); }
                break;
            case "2":
                if(!e.hasFocus()) { functionality.insert(2); }
                break;
            case "3":
                if(!e.hasFocus()) { functionality.insert(3); }
                break;
            case "4":
                if(!e.hasFocus()) { functionality.insert(4); }
                break;
            case "5":
                if(!e.hasFocus()) { functionality.insert(5); }
                break;
            case "6":
                if(!e.hasFocus()) { functionality.insert(6); }
                break;
            case "7":
                if(!e.hasFocus()) { functionality.insert(7); }
                break;
            case "8":
                if(!e.hasFocus()) { functionality.insert(8); }
                break;
            case "9":
                if(!e.hasFocus()) { functionality.insert(9); }
                break;
            case "+":
                if(!e.hasFocus()) { functionality.insert("+"); }
                break;
            case "-":
                if(!e.hasFocus()) { functionality.insert("-"); }
                break;
            case "*":
                if(!e.hasFocus()) { functionality.insert("×"); }
                break;
            case "/":
                if(!e.hasFocus()) { functionality.insert("÷"); }
                break;
            case ".":
                if(!e.hasFocus()) { functionality.insert("."); }
                break;
            case "(":
                if(!e.hasFocus()) { functionality.insert("("); }
                break;
            case ")":
                if(!e.hasFocus()) { functionality.insert(")"); }
                break;
            case "Escape":
                functionality.clean();
                break;
            case "Backspace":
                if(!e.hasFocus()) { functionality.backspace(); }
                break;
            case "Enter":
                functionality.equal();
                break;
            default:
                break;
        }
    });
};