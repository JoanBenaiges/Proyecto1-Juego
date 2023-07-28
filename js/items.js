class Item {
    constructor(gameScreen, gameSize, left, top) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize
        this.collected = false;


        this.itemSize = {
            w: innerWidth / 25,
            h: innerWidth / 25
        }

        this.itemPos = {
            left: left,
            top: top
        }

        this.init()
    }

    init() {
        this.itemElement = document.createElement('div')

        this.itemElement.style.position = "absolute"
        this.itemElement.style.width = `${this.itemSize.w}px`
        this.itemElement.style.height = `${this.itemSize.h}px`
        this.itemElement.style.left = `${this.itemPos.left}px`
        this.itemElement.style.top = `${this.itemPos.top}px`
        this.itemElement.style.backgroundImage = 'url(./img/bone.png)';
        this.itemElement.style.backgroundSize = 'cover';


        this.gameScreen.appendChild(this.itemElement)
    }
}