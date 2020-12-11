class Calculator {
  constructor (previousOperandText, currentOperandText) {
    this.previousOperandText = previousOperandText
    this.currentOperandText = currentOperandText
    this.clear()
  }

  clear () {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

  delete () {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  appendNumber (number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chooseOpperation (operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

  compute () {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '/':
        computation = prev / current
        break
      default:
        return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
  }

  updateDisplay () {
    this.currentOperandText.innerText = this.currentOperand
    this.previousOperandText.innerText = this.previousOperand
  }

  play () {
    box1.classList.remove('toggle')
  }
}

const box1 = document.getElementById('box1')
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandText = document.querySelector('[data-previous-operand]')
const currentOperandText = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandText, currentOperandText)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
    calculator.play()
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOpperation(button.innerText)
    calculator.updateDisplay()
    calculator.play()
  })
})

equalsButton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
  calculator.play()
})

allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
  calculator.play()
})

deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
  calculator.play()
})
