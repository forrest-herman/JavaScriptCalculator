// Welcome to Calculator

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }
}

clear() {

}

del() {

}

appendNumber(){

}

chooseOperation(operation){

}

compute() {

}

updateDisplay(){

}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const delButton = document.querySelector('[data-del]')
const acButton = document.querySelector('[data-ac]')
const previousOperandTextElement = document.querySelector('[data-prev-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')