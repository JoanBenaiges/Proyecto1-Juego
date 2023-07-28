class Boss {
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.bossSize = {
            w: innerWidth / 18,
            h: innerWidth / 18

        }

        this.bossPos = {
            left: 0,
            top: 0

        }

        this.bossVel = {
            left: 8,
            top: 6,
        }

        this.init()

    }


    init() {

        this.bossElement = document.createElement('div')

        this.bossElement.style.position = "absolute"
        this.bossElement.style.width = `${this.bossSize.w}px`
        this.bossElement.style.height = `${this.bossSize.h}px`
        this.bossElement.style.left = `${this.bossPos.left}px`
        this.bossElement.style.top = `${this.bossPos.top}px`
        this.bossElement.style.backgroundImage = 'url(./img/raccoon-roll.gif)';
        this.bossElement.style.backgroundSize = 'cover';

        this.gameScreen.appendChild(this.bossElement)
    }


    bossBorderCollision() {

        if (
            this.bossPos.top < 0 || this.bossPos.top > this.gameSize.h - this.bossSize.h
        ) {
            this.bossVel.top *= -1
        }

        if (
            this.bossPos.left < 0 || this.bossPos.left > this.gameSize.w - this.bossSize.w
        ) {
            this.bossVel.left *= -1
        }

    }

    move() {
        this.bossBorderCollision();
        this.bossPos.top += this.bossVel.top;
        this.bossPos.left += this.bossVel.left;
        this.updatePosition();
    }

    updatePosition() {
        this.bossElement.style.left = `${this.bossPos.left}px`
        this.bossElement.style.top = `${this.bossPos.top}px`
    }


}
