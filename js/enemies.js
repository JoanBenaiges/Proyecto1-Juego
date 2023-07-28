class Enemies {
    constructor(gameScreen, gameSize, width, height, left, top, velLeft, velTop, collisionTop, collisionBot, collisionLeft, collisionRigth) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.enemiesSize = {
            w: width,
            h: height

        }

        this.enemiesPos = {
            left: left,
            top: top

        }

        this.enemiesVel = {
            left: velLeft,
            top: velTop
        }

        this.init()

        this.collisionBot = collisionBot
        this.collisionTop = collisionTop
        this.collisionLeft = collisionLeft
        this.collisionRigth = collisionRigth
    }


    init() {

        this.enemiesElement = document.createElement('div')

        this.enemiesElement.style.position = "absolute"
        this.enemiesElement.style.width = `${this.enemiesSize.w}px`
        this.enemiesElement.style.height = `${this.enemiesSize.h}px`
        this.enemiesElement.style.left = `${this.enemiesPos.left}px`
        this.enemiesElement.style.top = `${this.enemiesPos.top}px`
        this.enemiesElement.style.backgroundImage = 'url(./img/raccoon-roll.gif)';
        this.enemiesElement.style.backgroundSize = 'cover';

        this.gameScreen.appendChild(this.enemiesElement)
    }


    enemiesBorderCollision() {

        if (
            this.enemiesPos.top < this.collisionBot || this.enemiesPos.top > this.collisionTop
        ) {
            this.enemiesVel.top *= -1
        }

        if (
            this.enemiesPos.left < this.collisionLeft || this.enemiesPos.left > this.collisionRigth
        ) {
            this.enemiesVel.left *= -1
        }

    }

    move() {
        this.enemiesBorderCollision();
        this.enemiesPos.top += this.enemiesVel.top;
        this.enemiesPos.left += this.enemiesVel.left;
        this.updatePosition();
    }

    updatePosition() {
        this.enemiesElement.style.left = `${this.enemiesPos.left}px`
        this.enemiesElement.style.top = `${this.enemiesPos.top}px`
    }


}
