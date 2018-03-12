class Loader {
  constructor () {
    this.loader = document.getElementById('loader')
    if (this.loader != null) {
      this.engine()
    }
  }
  engine () {
    this.loader.classList.add('visible')
    setTimeout(() => {
      this.loader.classList.remove('visible')
    }, 2000)
  }
}

export default new Loader
