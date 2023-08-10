import './style.css'

(function () {
  function changeRootFont() {
		const WIDTH = 375
		const clientWidth = document.documentElement.clientWidth
		document.documentElement.style.fontSize = `${clientWidth / WIDTH * 100}px`
    // document.documentElement.style.fontSize = `${clientWidth / 10}px`
  }
  changeRootFont()
  window.addEventListener("resize", changeRootFont, false)
})()