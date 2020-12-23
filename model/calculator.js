class Calculator {

    constructor(operandsBox, resultBox) {
        // Get the inputs elements where the applicaton goes to show the operations and results
        this.operandsBox = operandsBox
        this.resultBox = resultBox
    }

    // Insert a character into the calculator
    insertChar(value) {
        var str = this.operandsBox.value
        if(this.operandsBox.value == value) { this.operandsBox.value = str.substring(0, str.length-1) }
        if(str[str.length-2] == "+" || str[str.length-2] == "-" || str[str.length-2] == "×" || str[str.length-2] == "÷" || str[str.length-2] == ".") {
            this.operandsBox.value = str.substring(0, str.length-1)
            this.operandsBox.value = str.substring(0, str.length-2)
            this.operandsBox.value += value
        }
    }

    // Insert the values to be calculate for the application
    insert(value) {
        if (this.operandsBox.value == "" && Number.isInteger(parseInt(value))) {
            this.operandsBox.value = value
        } else if(this.operandsBox.value != "" && this.resultBox.value != 0 && (value == "+" || value == "-" || value == "×" || value == "÷")) {
            this.operandsBox.value = this.resultBox.value + value
            this.resultBox.value = 0
        } else if (this.operandsBox.value != "") {
            this.operandsBox.value += value
        }

        switch(value){
            case "+":
                this.insertChar(value)
                break

            case "-":
                this.insertChar(value)
                break

            case "×":
                this.insertChar(value)
                break

            case "÷":
                this.insertChar(value)
                break

            case ".":
                this.insertChar(value)
                break

            default:
                break
        }

        this.sendFocus()
        
    }

    // Insert the values to be calculate for the application by keyboard
    insertByKeyboard(value) {
        if (this.operandsBox.value == "" && Number.isInteger(parseInt(value))) {
            this.operandsBox.value = value
        } else if(this.operandsBox.value != "" && this.resultBox.value != 0 && (value == "+" || value == "-" || value == "*" || value == "/")) {
            this.operandsBox.value = this.resultBox.value + value
            this.resultBox.value = 0
        } else if (Number.isInteger(parseInt(value)) && this.operandsBox.value != "" || (value == "+" || value == "-" || value == "*" || value == "/" || value == "." || value == "(" || value == ")")) {
            this.operandsBox.value += value
        }

        switch(value){
            case "+":
                this.insertChar(value)
                break

            case "-":
                this.insertChar(value)
                break

            case "*":
                var exp = this.operandsBox.value.replace(/\*/gi, '×')
                this.operandsBox.value = exp
                this.insertChar("×")
                break

            case "/":
                var exp = this.operandsBox.value.replace(/\//gi, '÷')
                this.operandsBox.value = exp
                this.insertChar("÷")
                break

            case ".":
                this.insertChar(value)
                break
            
            case "(":
                // this.insertChar(value)
                break
            
            case ")":
                // this.insertChar(value)
                break

            case "Escape":
                this.clean()
                break
            
            case "Backspace":
                this.backspace()
                break

            case "Enter":
                this.equal()
                break

            default:
                break
        }
    }

    // Function that clean all application's input elements
    clean() {
        this.operandsBox.value = ""
        this.resultBox.value = 0
        this.sendFocus()
    }

    // Function that delete an element of the operations string
    backspace() {
        let exp = this.operandsBox.value
        this.operandsBox.value = exp.substring(0, exp.length-1)
        this.sendFocus()
    }

    // Calculate and show the result of the operations
    equal() {
        // Verify if there are operations to do
        if(this.operandsBox.value != "") {
            // Replace the ascii values × and ÷ per * and / for can be calculate correctly by the application
            let exp = this.operandsBox.value.replace(/×|÷/gi, (match) => { return (match == '×') ? '*' : '/' })
            try {
                // console.log(exp)
                let result = eval(exp)
                this.resultBox.value = result
            } catch(error) {
                // this.resultBox.value = error
                console.error(error)
            }
            this.sendFocus()
        } else {
            this.resultBox.value = 0
            this.sendFocus()
        }
    }

    // Move the focus at other area
    sendFocus() {
        setTimeout(() => {
            document.getElementById('btnEqual').focus()
        }, 75)
    }

}

module.exports = Calculator