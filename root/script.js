const ball = document.getElementById('ball')

ball.addEventListener('click', () => {
  ball.classList.toggle('move')
  document.body.classList.toggle('mode-active-dark')
})