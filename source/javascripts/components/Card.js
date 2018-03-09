class Card {
  constructor () {
    this.card = document.getElementById('card')
    this.container = document.getElementById('cards')
    this.cards = this.container.getElementsByTagName('div')
    this.nav = document.getElementById('nav')
    this.projects = this.nav.getElementsByTagName('li')
    this.event()
  }
  event () {
    for (let i = 0; i < this.projects.length; i++) {
      let el = this.projects[i]
      this.shift(el)
      el.addEventListener('mouseenter', this.mouseEnter.bind(this, el))
    }
    this.nav.addEventListener('mouseleave', this.mouseLeave.bind(this))
  }
  shift (el) {
    let shift = document.createElement('span')
    shift.classList.add('shift')
    shift.style.color = el.dataset.color
    shift.innerHTML = el.querySelector('h2').innerHTML
    el.querySelector('h2').appendChild(shift)
  }
  mouseEnter (el) {
    let project = el.dataset.project
    let image = this.card.querySelector('img')
    let src = '/images/' + project + '/cover.png'

    image.classList.contains('visible') ? null : image.classList.add('visible')
    this.container.classList.contains('animate') ? null : this.container.classList.add('animate')

    image.src = src
    for (let i = 0; i < this.cards.length; i++) {
      this.cards[i].style.backgroundColor = el.dataset.color
    }
  }
  mouseLeave () {
    this.card.querySelector('img').classList.remove('visible')
    this.container.classList.contains('animate') ? this.container.classList.remove('animate') : null
    for (let i = 0; i < this.cards.length; i++) {
      this.cards[i].style.backgroundColor = null
    }
  }
}
 export default new Card
