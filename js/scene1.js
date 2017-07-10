function scene3() {


  // Setup Stage
  var stage = document.querySelector('#stage')
  var desert = document.querySelector('#desert')
  var desertImgSrc = desert.getAttribute('src')
  var stageImg = stage.querySelector('#stage-img')
  stageImg.setAttribute('src', desertImgSrc)
  // Setup Cast
  var danny = document.querySelector('#danererys')
  var drogo = document.querySelector('#drogo')
  var dress = document.querySelector('#blue-dress')
  var beef = document.querySelector('#bulky-man')
  var dannyContainer = document.createElement('div')
  var drogoContainer = document.createElement('div')

  dannyContainer.append(danny)
  dannyContainer.append(dress)
  drogoContainer.append(drogo)
  drogoContainer.append(beef)

  // Character 1
  stage.append(dannyContainer)
  dannyContainer.style.width = '10%'
  dannyContainer.style.height = '34%'
  dannyContainer.style.position = 'absolute'
  dannyContainer.style.top = '55%'
  dannyContainer.style.left = '35%'
  danny.style.position = 'absolute'
  danny.style.top = '0'
  danny.style.left = '17%'
  danny.style.width = '42%'
  dress.style.position = 'absolute'
  dress.style.bottom = '0'
  // Character 2
  stage.append(drogoContainer)
  drogoContainer.style.width = '11%'
  drogoContainer.style.height = '40%'
  drogoContainer.style.position = 'absolute'
  drogoContainer.style.top = '45%'
  drogoContainer.style.left = '80%'
  drogo.style.position = 'absolute'
  drogo.style.top = '0'
  drogo.style.left = '18%'
  drogo.style.width = '65%'
  beef.style.position = 'absolute'
  beef.style.bottom = '0'

  // Setup Props
  var egg = document.querySelector('#egg')
  // Prop 1
  stage.append(egg)
  egg.style.position = 'absolute'
  egg.style.width = '5%'
  egg.style.top = '45%'
  egg.style.right = '20%'
  egg.style.transform = 'rotate(-35deg)'
  // Prop 2

  // Action!

  // Stage direction 1
  frame(function() {
    egg.style.top = '45%'
    dannyContainer.style.top = '55%'
  })

  frame(function() {
    egg.style.top = '39%'
    egg.style.right = '28%'
    egg.style.transform = 'rotate(-47deg)'
    dannyContainer.style.left = '32%'
  })

  frame(function() {
    egg.style.top = '36%'
    egg.style.right = '36%'
    egg.style.transform = 'rotate(-63deg)'
    dannyMoves()
  })

  frame(function() {
    egg.style.top = '34%'
    egg.style.right = '44%'
    egg.style.transform = 'rotate(-80deg)'
    dannyMoves()
  })

  frame(function() {
    egg.style.right = '52%'
    egg.style.transform = 'rotate(-106deg)'
    dannyMoves()
  })

  frame(function() {
    egg.style.top = '37%'
    egg.style.right = '60%'
    egg.style.transform = 'rotate(-120deg)'
    dannyMoves()
  })

  frame(function() {
    egg.style.top = '42%'
    egg.style.right = '68%'
    egg.style.transform = 'rotate(-135deg)'
    dannyMoves()
  })

  frame(function() {
    egg.style.top = '53%'
    egg.style.right = '75%'
    egg.style.transform = 'rotate(0deg)'
    dannyMoves()
  })

  // Stage direction 2


  function dannyMoves() {
    dannyContainer.style.left = (parseInt(dannyContainer.style.left) - 3) + '%'
  }
  //reset stage
  setTimeout(reset, time + 3000)

}
