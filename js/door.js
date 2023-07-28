class Door {
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.doorSize = {
            w: innerWidth / 10,
            h: innerWidth / 10
        }

        this.doorPos = {
            left: this.gameSize.w / 1.125,
            top: this.gameSize.h / 1.22
        }

        this.init()
    }

    init() {
        this.doorElement = document.createElement('div')

        this.doorElement.style.position = "absolute"
        this.doorElement.style.width = `${this.doorSize.w}px`
        this.doorElement.style.height = `${this.doorSize.h}px`
        this.doorElement.style.left = `${this.doorPos.left}px`
        this.doorElement.style.top = `${this.doorPos.top}px`
        this.doorElement.style.backgroundImage = 'url(./img/house.png)';
        this.doorElement.style.backgroundSize = 'cover';

        this.gameScreen.appendChild(this.doorElement)
    }

}