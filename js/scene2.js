function scene2() {

  // Setup Stage
  var stage = document.querySelector('#stage')
  var castle = document.querySelector('#castle')
  var castleImgSrc = castle.getAttribute('src')
  var stageImg = stage.querySelector('#stage-img')
  stageImg.setAttribute('src', castleImgSrc)

  // Setup Cast
  // Ned div styles
  var nedContainer = document.createElement('div')
  nedContainer.style.position = 'absolute'
  nedContainer.style.width = '10%'
  nedContainer.style.height = '39%'
  nedContainer.style.top = '50%'
  nedContainer.style.left = '25%'

  stage.append(nedContainer)

  var ned = document.querySelector('#ned')
  var leather = document.querySelector('#leather-armour')
  ned.style.width = '70%'
  ned.style.position = 'absolute'
  ned.style.top = 0
  leather.style.position = 'absolute'
  leather.style.bottom = 0

  nedContainer.append(ned)
  nedContainer.append(leather)

  //Joffrey div styles
  var kingContainer = document.createElement('div')
  kingContainer.style.position = 'absolute'
  kingContainer.style.width = '7%'
  kingContainer.style.height = '25%'
  kingContainer.style.top = '50%'
  kingContainer.style.right = '30%'

  stage.append(kingContainer)

  var joffrey = document.querySelector('#joffrey')
  var robe = document.querySelector('#king')
  joffrey.style.width = '50%'
  joffrey.style.position = 'absolute'
  joffrey.style.top = 0
  joffrey.style.right = 0
  robe.style.position = 'absolute'
  robe.style.bottom = 0

  kingContainer.append(joffrey)
  kingContainer.append(robe)

  // Character 1
  // Character 2
  // Setup Props
  var sword = document.querySelector('#sword')
  stage.append(sword)
  sword.style.position = 'absolute'
  sword.style.top = '76%'
  sword.style.left = '31%'
  sword.style.height = '5%'
  sword.style.transform = 'rotateY(150deg)'

  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1


  // frame(function() {
  //   sword.style.top = '55%'
  //   sword.style.left = '60%'
  // })
  // Stage direction 2

  frame(function() { swordFlies() })
  frame(function() { swordFlies() })
  frame(function() { swordFlies() })
  frame(function() { swordFlies() })

  frame(function() {
    stage.append(joffrey)
    joffrey.style.width = '4%'
    joffrey.style.position = 'absolute'
    joffrey.style.top = '43%'
    joffrey.style.right = '33%'
    joffrey.style.transform = 'rotate(-10deg)'
    kingContainer.style.right = '25%'
    kingContainer.style.transform = 'rotateY(40deg) rotate(40deg)'
    swordFlies()
  })

  frame(function() {
    joffrey.style.top = '44%'
    joffrey.style.right = '39%'
    joffrey.style.transform = 'rotate(-30deg)'
    kingContainer.style.top = '58%'
    kingContainer.style.transform = 'rotateX(50deg) rotate(80deg)'
    swordFlies()
  })
  frame(function() {
    joffrey.style.top = '53%'
    joffrey.style.right = '46%'
    joffrey.style.transform = 'rotate(-130deg)'
    kingContainer.style.top = '59%'
    kingContainer.style.transform = 'rotateX(55deg) rotate(87deg)'
    swordFlies()
  })
  frame(function() {
    joffrey.style.top = '65%'
    joffrey.style.right = '50%'
    joffrey.style.transform = 'rotate(130deg)'
    kingContainer.style.top = '61%'
    kingContainer.style.transform = 'rotateX(60deg) rotate(88deg)'
    swordFlies()
  })
  frame(function() {
    joffrey.style.top = '68%'
    joffrey.style.right = '47%'
    joffrey.style.transform = 'rotate(220deg)'
    swordFlies()
  })
  frame(function() {
    joffrey.style.top = '71%'
    joffrey.style.right = '43%'
    joffrey.style.transform = 'rotate(300deg)'
    swordFlies()
  })

  frame(function() {
    joffrey.style.top = '71%'
    joffrey.style.right = '41%'
    joffrey.style.transform = 'rotate(360deg)'
  })

  function swordFlies() {
    sword.style.top = (parseInt(sword.style.top) - 5) + '%'
    sword.style.left = (parseInt(sword.style.left) + 7) + '%'
  }
  //reset stage
  setTimeout(reset, time + 3000)
}
