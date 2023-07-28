
class Block {

    constructor(gameScreen, gameSize, width, height, left, top) {

        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.blockSize = {
            w: width,
            h: height
        }

        this.blockPos = {
            left: left,
            top: top
        }

        this.init()
    }

    init() {
        this.blockElement = document.createElement('div')

        this.blockElement.style.position = 'absolute';
        this.blockElement.style.backgroundImage = `url(./img/wall2.png)`;
        this.blockElement.style.backgroundSize = "cover";
        this.blockElement.style.width = `${this.blockSize.w}px`;
        this.blockElement.style.height = `${this.blockSize.h}px`;
        this.blockElement.style.left = `${this.blockPos.left}px`;
        this.blockElement.style.top = `${this.blockPos.top}px`;
        //this.blockElement.style.backgroundColor = "brown"
        this.blockElement.style.borderRadius = "5px";


        this.gameScreen.appendChild(this.blockElement)

    }

}