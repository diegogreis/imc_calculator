export const modal = {

  wrapper: document.querySelector('.card-wrapper'),
  message: document.querySelector('.card-wrapper h2'),
  buttonClose: document.querySelector('.card-wrapper button'),

  open() {
    modal.wrapper.classList.add('open')
  },
  close() {
    modal.wrapper.classList.remove('open')
  }
}

modal.buttonClose.onclick = () => { 
  modal.close()
}

function exitModal (event) {
  if (event.key === 'Escape') {
    modal.close()
  }
}

export function displayResultMsg (imc) {
  const msg = `Seu IMC é ${imc}`
  modal.message.innerText = msg
  modal.open()
}

window.addEventListener('keydown', exitModal)

