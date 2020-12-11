function onlyOne (boxId, checkbox) {
  const btn1 = document.getElementById('btn1').checked
  const btn2 = document.getElementById('btn2').checked

  const box1 = document.getElementById('box1')
  const box2 = document.getElementById('box2')

  const checkboxes = document.getElementsByName('check')
  const box = document.getElementById(boxId)

  box.classList.remove('toggle')

  if (btn1 === false) box1.classList.add('toggle')
  if (btn2 === false) box2.classList.add('toggle')

  checkboxes.forEach(item => {
    if (item !== checkbox) item.checked = false
  })
}

function hide (boxId) {
  const box = document.getElementById(boxId)

  box.classList.add('toggle')
}
