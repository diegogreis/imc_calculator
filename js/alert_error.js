export const alertError = {
  element: document.querySelector('.error-box'),
  open() {
    alertError.element.classList.add('open')
  },
  close() {
    alertError.element.classList.remove('open')
  }
}

