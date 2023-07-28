class Wall {

    constructor(gameScreen, gameSize, width, height, left, top) {

        this.gameScreen = gameScreen
        this.gameSize = gameSize
        this.wallSize = {
            w: width,
            h: height
        }

        this.wallPos = {
            left: left,
            top: top
        }

        this.init()

    }

    init() {
        this.wallElement = document.createElement('div')

        this.wallElement.style.position = "absolute"
        this.wallElement.style.width = `${this.wallSize.w}px`
        this.wallElement.style.height = `${this.wallSize.h}px`
        this.wallElement.style.left = `${this.wallPos.left}px`
        this.wallElement.style.top = `${this.wallPos.top}px`
        this.wallElement.style.backgroundColor = 'green'

        this.gameScreen.appendChild(this.wallElement)

    }

}