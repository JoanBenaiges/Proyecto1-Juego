class Background {
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.backgroundSize = {
            w: gameSize.w,
            h: gameScreen.h
        }

        this.backgroundPosition = {
            left: 0,
            top: 0
        }

        this.init()
    }

    init() {

        this.backgroundElement = document.createElement('img')
        this.backgroundElement.src = "./img/grass2.jpg"

        this.backgroundElement.style.position = "absolute"
        this.backgroundElement.style.width = `${this.backgroundSize.w}px`
        this.backgroundElement.style.height = `${this.backgroundSize.h}px`
        this.backgroundElement.style.left = `${this.backgroundPosition.left}px`
        this.backgroundElement.style.top = `${this.backgroundPosition.top}px`

        this.gameScreen.appendChild(this.backgroundElement)

    }
}