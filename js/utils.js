export function IMC (weight, height) {
  let imc = (weight / ((height / 100) ** 2)).toFixed(2)
  return imc
}

export function noNumber (value) {
  return isNaN(value) || value === '' || value < 0
}

