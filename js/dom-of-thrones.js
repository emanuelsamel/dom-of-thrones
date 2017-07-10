
var time = 0

function frame(actions) {

  setTimeout(function () {
    actions()
  }, time)

  time += 500

}

function reset() {
  stage.innerHTML = '<h1>DOM of Thrones</h1><h3>#stage</h3><img id="stage-img" src="img/sets/the-stage-placeholder.png">'
  time = 0
}
document.addEventListener('DOMContentLoaded', function () {
//scene<sceneNumberHere>()
})
