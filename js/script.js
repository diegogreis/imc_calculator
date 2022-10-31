import { modal } from "./modal.js"
import { alertError } from "./alert_error.js"
import { IMC, noNumber } from "./utils.js"
import { displayResultMsg } from "./modal.js"

// Variables
const form = document.querySelector('form')
const inWeight = document.querySelector('#weight')
const inHeight = document.querySelector('#height')


form.onsubmit = e => {
  e.preventDefault()

  const weight = inWeight.value
  const height = inHeight.value

  const weightOrHeightIsNotANumber = noNumber(weight) || noNumber(height)

  if (weightOrHeightIsNotANumber) {
    alertError.open()
    return
  }

  alertError.close()
  
  const imc = IMC(weight, height)
  displayResultMsg(imc)
  
}

inWeight.oninput = () => alertError.close()
inHeight.oninput = () => alertError.close()




