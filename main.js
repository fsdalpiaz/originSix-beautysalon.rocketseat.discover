/* Abre e fecha menu quando clicar no ícone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* qando clicar em um item do menu, esconder menu */
const links =
  document.querySelectorAll(
    'nav ul li a'
  ) /* pod usar nav .title, mas cuidado ao incluir outras classes titles no nav*/
console.log(links)
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function highLightHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* Slider Swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/*Scroll Reveal: Mostrar elementos quando der scroll na página*/

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1000,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text, #about .image, #about .text, #services header, #services .card, #testimonials header, #testimonials .testimonials, #contact .text, #contact .links, footer .brand, footer .social`,
  { interval: 200 }
)

/*Button Back-to-top */

function backTop() {
  const backTop = document.querySelector('.back-to-top')
  if (window.scrollY >= 560) {
    backTop.classList.add('show')
  } else {
    backTop.classList.remove('show')
  }
}

/* Menu ativo conforme seção visível na página */
const sections = document.querySelectorAll('main section[id]')
function activeMenuCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/*Call When Scroll Functions*/
window.addEventListener('scroll', function () {
  highLightHeaderWhenScroll()
  backTop()
  activeMenuCurrentSection()
})
