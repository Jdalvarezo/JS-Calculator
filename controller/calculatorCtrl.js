// Add calculator module
const Calculator = require('../../model/calculator')

class CalculatorCtrl {

    constructor() {
        // Get the elements for operandsBox and resultBox from the view
        this.operandsBox = document.getElementById('operands')
        this.resultBox = document.getElementById('result')

        // Create a new object from calculator class
        this.calculator = new Calculator(this.operandsBox, this.resultBox)
        
        // Set listners from DOM
        this.setElements()
    }

    // This function iterate in an array to add a function to each different option
    addClickEvent(id, value){
        document.getElementById(id).addEventListener("click", () => {
            this.calculator.insert(value)
        })
    }

    // Load and set the elements for to be used from DOM
    setElements() {
        // Arrays that will utilized to add actions for each different option
        let numbers = ["btn0", "btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8", "btn9"]
        let operations = ["btnAdd", "btnSubtract", "btnMultiply", "btnDivide", "btnDot"]
        let symbols = ["+", "-", "×", "÷", "."]

        // Use the addClickEvent function to add a custom event for each number option (0-9)
        for(let i=0; i<numbers.length; i++) {
            this.addClickEvent(numbers[i], i)
        }

        // Use the addClickEvent function to add a custom event for each operation option (+, -, x, /, .)
        for(let i=0; i<operations.length; i++) {
            this.addClickEvent(operations[i], symbols[i])
        }

        // Add events to specifics options (clean, backspace, equal and info)
        document.getElementById('btnClean').addEventListener("click", () => { this.calculator.clean() })
        document.getElementById('btnBackspace').addEventListener("click", () => { this.calculator.backspace() })
        document.getElementById('btnEqual').addEventListener("click", () => { this.calculator.equal() })
        let descript = "JS Calculator v2.0.0\n2020 - Developed by Jhonatan Alvarez\n\nProject created using Electron JS\n\nDeveloper profile: https://github.com/Jdalvarezo/\nProject link: https://github.com/Jdalvarezo/JS-Calculator"
        document.getElementById('info').addEventListener("click", () => { alert(descript) })

        // Manager actions by keys
        document.addEventListener('keyup', (evt) => {
            this.calculator.insertByKeyboard(evt.key)
            // console.log(evt.key)
        })

        // Call the function through the calculator module that clear the input elements in the application
        this.calculator.clean()
    }

}

new CalculatorCtrl()