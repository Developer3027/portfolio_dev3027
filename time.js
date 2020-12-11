// Get the DOM elements
const time = document.getElementById('time')
const greeting = document.getElementById('greeting')
const name = document.getElementById('name')
const focus = document.getElementById('focus')

// Function to show time
function showTime () {
  const today = new Date()
  let hour = today.getHours()
  const min = today.getMinutes()
  const sec = today.getSeconds()

  // Set the AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM'

  // 12hr Format
  hour = hour % 12 || 12

  // Output the time
  time.innerHTML = `${hour} <span>:</span> ${addZero(
    min
  )} <span>:</span> ${addZero(sec)}`

  setTimeout(showTime, 1000)
}

// Fix time format, add zero
function addZero (num) {
  return (parseInt(num, 10) < 10 ? '0' : '') + num
}

// Set background and greeting
// function setDayGreeting () {
//   const today = new Date()
//   const hour = today.getHours()

//   if (hour < 12) {
//     document.body.style.backgroundImage =
//       "url('./img/mountain-view-morning.jpg')"
//     // Photo by Martin Damboldt from Pexels
//     greeting.textContent = 'Good Morning'
//   } else if (hour < 18) {
//     document.body.style.backgroundImage = "url('./img/day-boat.jpg')"
//     // Photo by Terje Sollie from Pexels
//     document.getElementById('wrapper').style.backgroundColor =
//       'rgba(255,255,255,0.4)'
//     document.getElementById('wrapper').style.color = 'black'
//     greeting.textContent = 'Good Afternoon'
//   } else {
//     document.body.style.backgroundImage = "url('./img/evening-laptop-pub.jpg')"
//     // Photo by Andrea Piacquadio from Pexels
//     document.getElementById('wrapper').style.backgroundColor = 'rgba(0,0,0,0.4)'
//     document.getElementById('wrapper').style.color = 'white'
//     greeting.textContent = 'Good Evening'
//   }
// }

// Get Name
function getName () {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]'
  } else {
    name.textContent = localStorage.getItem('name')
  }
}

// Set Name
function setName (e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which === 13 || e.keyCode === 13) {
      localStorage.setItem('name', e.target.innerText)
      name.blur()
    }
  } else {
    localStorage.setItem('name', e.target.innerText)
  }
}

// Get Focus
function getFocus () {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]'
  } else {
    focus.textContent = localStorage.getItem('focus')
  }
}

// Set Focus
function setFocus (e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which === 13 || e.keyCode === 13) {
      localStorage.setItem('focus', e.target.innerText)
      focus.blur()
    }
  } else {
    localStorage.setItem('focus', e.target.innerText)
  }
}

name.addEventListener('keypress', setName)
name.addEventListener('blur', setName)
focus.addEventListener('keypress', setFocus)
focus.addEventListener('blur', setFocus)

// run
showTime()
// setDayGreeting()
getName()
getFocus()
