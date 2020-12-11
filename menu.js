const hamburger = document.querySelector('.hamburger')
const navlink = document.querySelector('.nav-ul')
const links = document.querySelectorAll('.nav-ul li')

hamburger.addEventListener('click', () => {
  console.log('clicked')
  navlink.classList.toggle('open')
})
