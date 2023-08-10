import './style.css'


(function () {
  function adjustScale() {
		const WIDTH = 375
		let scale= screen.width/WIDTH
    let content= `width=${WIDTH}, initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}`
    let meta= document.querySelector('meta[name=viewport]')
    if(!meta) {
        meta= document.createElement('meta')
        meta.setAttribute('name', 'viewport')
        document.head.appendChild(meta)
    }
    meta.setAttribute('content', content)
  }
  adjustScale()
  window.addEventListener("resize", adjustScale, false)
})()
