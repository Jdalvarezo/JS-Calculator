// create event load for the window, this desplegate the application main process
window.addEventListener("load", function() {
    
    // add functionality module and keyboard module
    const functionality = require('./js/functionality');
    const keyboard = require('./js/keyboard');

    // this function iterate in an array to add a function to each different option
    function addClickEvent(id, value){
        document.getElementById(id).addEventListener("click", function() {
            functionality.insert(value);
        })
    }

    // arrays that will utilized to add actions in each different option
    var numbers = ["btn0", "btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8", "btn9"];
    var operations = ["btnAdd", "btnSubtract", "btnMultiply", "btnDivide", "btnDot"];
    var symbols = ["+", "-", "×", "÷", "."];

    // use the add event function to add a custom event for each number option (0-9)
    for(var i=0; i<numbers.length; i++) {
        addClickEvent(numbers[i], i);
    }

    // use the add event function to add a custom event for each operation option (+, -, x, /, .)
    for(var i=0; i<operations.length; i++) {
        addClickEvent(operations[i], symbols[i]);
    }

    // add events to specifics options (clean, backspace and equal)
    document.getElementById('btnClean').addEventListener("click", function() { functionality.clean(); });
    document.getElementById('btnBackspace').addEventListener("click", function() { functionality.backspace(); });
    document.getElementById('btnEqual').addEventListener("click", function() { functionality.equal(); });

    // call the function through the keyboard module that load all keyboard events
    keyboard.loadKeyboard();
    // call the function through the functionality module that clear the input elements in the application
    functionality.clean();
    
});