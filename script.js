// Welcome to Calculator

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
        this.total = 0
    }
    
    del() {
        this.currentOperand = this.currentOperand.slice(0,-1)
    }
    
    appendNumber(number){
        if(number == '.' && this.currentOperand.includes('.')) {
            return
        }
        if(computedTotal_bool) this.clear()
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    
    chooseOperation(operation){
        if (this.currentOperand == '') return
        this.operation = operation
        this.compute()
        this.previousOperand += this.currentOperand + " " + this.operation.toString() + " "
        //this.previousOperand = this.previousOperand + " " + this.operation.toString() + " "
        //this.operation = operation
        //this.previousOperand += this.currentOperand
        this.currentOperand = ''
    }
    
    compute() {
        if (this.previousOperand == '') {
            this.total = parseFloat(this.currentOperand)
            return
        }
        if (this.currentOperand == ''){
            this.total = parseFloat(this.previousOperand) //*** */
        }
        switch(this.operation){
            case '÷':
                this.total = (this.total) / parseFloat(this.currentOperand)
                //textTest.innerText = this.total.toString() + "   " + (this.currentOperand)
                break
            case 'x':
                this.total = this.total * parseFloat(this.currentOperand)
                break
            case '-':
                this.total = this.total - parseFloat(this.currentOperand)
                break
            case '+':
                this.total = this.total + parseFloat(this.currentOperand)
                break

            // case '÷':
            //     return parseFloat(this.previousOperand) / parseFloat(this.currentOperand)
            //     break
            // case 'x':
            //     return parseFloat(this.previousOperand) * parseFloat(this.currentOperand)
            //     break
            // case '-':
            //     return parseFloat(this.previousOperand) - parseFloat(this.currentOperand)
            //     break
            // case '+':
            //     return parseFloat(this.previousOperand) + parseFloat(this.currentOperand)
            //     break
        }
    }

    computeTotal() {
        //display Total
        textTest.innerText = this.total
        this.currentOperand = this.total
        this.total = 0
    }
    
    updateDisplay(){
        computedTotal_bool = false
        this.currentOperandTextElement.innerText = this.currentOperand
        this.previousOperandTextElement.innerText = this.previousOperand
        //** */
        textTest.innerText = this.total
    }
}


// Declare HTML Variables
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const delButton = document.querySelector('[data-del]')
const acButton = document.querySelector('[data-ac]')
const previousOperandTextElement = document.querySelector('[data-prev-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const textTest = document.querySelector('[data-test]')

//JS variables
var computedTotal_bool = false

const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement)

textTest.innerText = calculator.total

//numbers
numberButtons.forEach(button => {
    button.addEventListener('click', () => { //function
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

//operators
operationButtons.forEach(button => {
    button.addEventListener('click', () => { //function
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

//All Clear
acButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

//Delete
delButton.addEventListener('click', button => {
    calculator.del()
    calculator.updateDisplay()
})

// =
equalsButton.addEventListener('click', button => {
    if (computedTotal_bool) return
    calculator.previousOperand += calculator.currentOperand + " ="
    calculator.compute()
    //calculator.currentOperand= calculator.compute()
    calculator.currentOperand = calculator.total
    //calculator.total = 0
    //calculator.computeTotal()
    calculator.updateDisplay()
    computedTotal_bool = true
})

// +/- tbc...