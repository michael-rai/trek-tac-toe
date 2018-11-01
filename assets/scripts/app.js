'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
/* const loginModal = document.ready.getElementById(loginModal) {
  show.bs.Modal
}
*/
// const closeModal = document.ready.getElementByClass('close')
// const events = require('./events')

$(() => {
  const openModal = function () {
    document.getElementById('loginModal').display('flex')
  }
  $('btn btn-primary launch').addEventListenter('click', openModal)
  // $('loginFormModal').on('submit', events.onGetAllBooks)
})
