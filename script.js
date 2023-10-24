/*Mobile NavBar*/
class mobileNavBar {
  constructor(mobileMenu, navList, navLinks){
    this.mobileMenu = document.querySelector(mobileMenu),
    this.navList = document.querySelector(navList),
    this.navLinks = document.querySelectorAll(navLinks),
    this.activeClass = "active",
    this.handleClick = this.handleClick.bind(this)
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation ? (link.style.animation = "") : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
    })
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass)
    this.mobileMenu.classList.toggle(this.activeClass)
    this.animateLinks()
  }

  addClickEvent() {
    this.mobileMenu.addEventListener('click', this.handleClick)
  }

  init() {
    if(this.mobileMenu) {
      this.addClickEvent()
    }

    return this
  }
}



const mobileNav = new mobileNavBar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
)

mobileNav.init()
/*Mobile NavBar*/


/*Auto digit*/
const typing = document.querySelector("#auto-digit")

const message = ["Meu nome é Carlos Alberto, tenho 27 anos, sou do Rio grande do sul. Tenho procurado ser minha melhor versão todos os dias, leio  muito e estudo todos os dias durante 1h e 30 minutos as 5 horas da manhã. Conheci a programação no curso técnico em eletrónica e desde então tenho me empenhado em aprender Javascript, HTML e CSS, estudo UI e UX pois quero trabalhar na área do Front-end. Me considero artistico e criativo e extremamente disciplinado, me dou bem em equipes e com certeza vou dar sempre o meu melhor pra entregar um excelente trabalho."]
let messageIndex = 0    
let characterIndex = 0
let currentMessage = ''
let currentCaracters = ''

const type = () => {
  currentMessage = message[messageIndex]
  currentCaracters = currentMessage.slice(0, characterIndex++)
  typing.textContent = currentCaracters
}

setInterval(type, 100);
    
/*Auto digit*/

/*Arrow Scroll*/

  const arrowButton = document.querySelector(".scrool-arrow")

  arrowButton.addEventListener('click', arrowScrool)

  function hiddenArrow(){
    const arrowButton = document.querySelector(".scrool-arrow")
    if(window.scrollY > 300) {
      arrowButton.style.visibility = 'visible'
    } else {
      arrowButton.style.visibility = 'hidden' 
    }
  }
    
  window.addEventListener("scroll", hiddenArrow)
      
  function arrowScrool() {
    window.scroll({
      top: 0,
      left: 0,
      behavior:"smooth"
      })
  }
/*Arrow Scroll*/
console.log(window.scrollY)
