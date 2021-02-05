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
        if(computedTotal_bool) {
            this.clear()
        }
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    toggleSign(){
        if (computedTotal_bool || this.currentOperand === '') return
        this.currentOperand = -this.currentOperand
        this.updateDisplay()
    }
    
    chooseOperation(operation){
        if (this.currentOperand == '') return
        
        if (computedTotal_bool) {
            this.previousOperand = this.total + " " + this.operation.toString() + " "
            this.currentOperand = ''
            return
        }
        else this.compute()

        this.operation = operation

        this.previousOperand += this.currentOperand + " " + this.operation.toString() + " "
        this.currentOperand = ''
    }
    
    compute() {
        const previous = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)

        //not sure about this 
        if (this.previousOperand == '') {
            this.total = current
            return
        }
        if (this.currentOperand == ''){
            this.total = previous
        }
        //not sure about this  ^^
        
        if (isNaN(previous) || isNaN(current)) return
        
        switch(this.operation){
            case '÷':
                this.total = this.total / current
                break
            case 'x':
                this.total = this.total * current
                break
            case '-':
                this.total = this.total - current
                break
            case '+':
                this.total = this.total + current
                break
            default:
                this.total = current
                return
        }
    }


    // computeBEDMAS() {
    //     //display Total
    //     textTest.innerText = this.total
    //     this.currentOperand = this.total
    //     this.total = 0
    // }
    

    updateDisplay(){
        computedTotal_bool = false
        this.currentOperandTextElement.innerText = this.currentOperand
        this.previousOperandTextElement.innerText = this.previousOperand
        //temp testing
        //textTest.innerText = this.total
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
const plusMinusButton = document.querySelector('[data-plus-minus]')



//JS variables
var computedTotal_bool = false

const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement)


// TESTING ---------------
// const textTest = document.querySelector('[data-test]')
// textTest.innerText = calculator.total
// -----------------------


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
    calculator.currentOperand = calculator.total
    calculator.updateDisplay()
    computedTotal_bool = true
})


plusMinusButton.addEventListener('click', button => {
    calculator.toggleSign() //toggles sign and updates display
})

// +/- tbc...

