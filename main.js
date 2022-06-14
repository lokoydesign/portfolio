(function() {
  const body          = document.querySelector('body')
  const scrollToTop   = body.querySelector('.scroll-to-top')
  const galleryImages = body.querySelectorAll('.gallery img')

  body.classList.replace('no-js', 'js')

  window.addEventListener('scroll', function(event) {
    scrollToTop.style.insetInlineEnd = window.scrollY > 500 ? '1em' : '-50em'
  })

  scrollToTop.addEventListener('click', function(event) {
    event.preventDefault()
    window.scrollTo({top: 0, behavior: 'smooth'})
  })

  if (window.location.hash !== '') {
    const target = body.querySelector(window.location.hash)

    if (!target) return

    window.scrollTo({top: target.offsetTop, behavior: 'smooth'})
  }

  const galleryOverlay   = document.createElement('div')
  const galleyOverlayImg = document.createElement('img')
  
  galleryOverlay.classList.add('gallery-overlay')

  galleryOverlay.addEventListener('click', function(e) {
    galleryOverlay.style.display = 'none'
  })

  for (const galleryImage of galleryImages) {
    galleryImage.addEventListener('click', function(e) {
      galleyOverlayImg.setAttribute('src', galleryImage.src)
      galleryOverlay.style.display = 'block'
    })
  }

  galleryOverlay.appendChild(galleyOverlayImg)
  body.appendChild(galleryOverlay)
})()