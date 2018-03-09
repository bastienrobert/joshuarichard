class Card {
  constructor () {
    this.card = document.getElementById('card')
    this.cards = document.getElementById('cards').getElementsByTagName('div')
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

    if (image.classList.contains('visible') == false) {
      image.classList.add('visible')
    }

    image.src = src
    for (let i = 0; i < this.cards.length; i++) {
      this.cards[i].classList.toggle('default')
      this.cards[i].style.background = el.dataset.color
    }
  }
}
 export default new Card
