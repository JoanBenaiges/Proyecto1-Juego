class Player {
    constructor(gameScreen, gameSize, keys) {
        this.gameScreen = gameScreen;
        this.gameSize = gameSize;
        this.keys = keys;
        this.counterItem = 0

        this.playerSize = {
            w: innerWidth / 30,
            h: innerWidth / 30
        };

        this.playerPos = {
            left: gameSize.w / 1.2,
            top: gameSize.h / 1.15,
        };

        this.playerVel = {
            left: 15,
            top: 15,
        };

        this.init();
    }



    init() {
        this.playerElement = document.createElement('div')

        this.playerElement.style.position = 'absolute';
        this.playerElement.style.width = `${this.playerSize.w}px`;
        this.playerElement.style.height = `${this.playerSize.h}px`;
        this.playerElement.style.left = `${this.playerPos.left}px`;
        this.playerElement.style.top = `${this.playerPos.top}px`;
        this.playerElement.style.backgroundImage = 'url(./img/player.png)';
        this.playerElement.style.backgroundSize = 'cover';


        this.gameScreen.appendChild(this.playerElement);
    }

    move() {
        this.updatePosition();
    }

    moveLeft() {
        if (this.playerPos.left > innerWidth / 70) {
            this.playerPos.left -= this.playerVel.left;
        }

    }

    moveRight() {
        if (this.playerPos.left + this.playerSize.w < this.gameSize.w - innerWidth / 70) {
            this.playerPos.left += this.playerVel.left;
        }

    }

    moveTop() {
        if (this.playerPos.top > innerWidth / 70) {
            this.playerPos.top -= this.playerVel.top;
        }

    }

    moveBottom() {
        if (this.playerPos.top + this.playerSize.h < this.gameSize.h - innerWidth / 70) {
            this.playerPos.top += this.playerVel.top;
        }

    }

    updatePosition() {
        this.playerElement.style.left = `${this.playerPos.left}px`;
        this.playerElement.style.top = `${this.playerPos.top}px`;
    }

    collisionDetectionWithEnemies(enemies) {
        for (const enemy of enemies)
            if (
                this.playerPos.left < enemy.enemiesPos.left + enemy.enemiesSize.w &&
                this.playerPos.left + this.playerSize.w > enemy.enemiesPos.left &&
                this.playerPos.top < enemy.enemiesPos.top + enemy.enemiesSize.h &&
                this.playerPos.top + this.playerSize.h > enemy.enemiesPos.top
            ) {

                this.playerPos.left = this.gameSize.w / 1.2
                this.playerPos.top = this.gameSize.h / 1.15

                const audioEnemy = document.createElement("audio"); audioEnemy.src = "./audio/laugh.wav"; audioEnemy.play()

            }
    }

    collisionDetectionWithBlock(blocks) {
        for (const block of blocks)
            if (
                this.playerPos.left < block.blockPos.left + block.blockSize.w &&
                this.playerPos.left + this.playerSize.w > block.blockPos.left &&
                this.playerPos.top < block.blockPos.top + block.blockSize.h &&
                this.playerPos.top + this.playerSize.h > block.blockPos.top
            ) {
                this.playerPos.left = this.gameSize.w / 1.2
                this.playerPos.top = this.gameSize.h / 1.15

                const audioEnemy = document.createElement("audio"); audioEnemy.src = "./audio/laugh.wav"; audioEnemy.play()

            }

    }


    collisionDetectionWithItems(items) {
        for (const item of items)
            if (
                this.playerPos.left < item.itemPos.left + item.itemSize.w &&
                this.playerPos.left + this.playerSize.w > item.itemPos.left &&
                this.playerPos.top < item.itemPos.top + item.itemSize.h &&
                this.playerPos.top + this.playerSize.h > item.itemPos.top &&
                !item.collected
            ) {
                const audioCoin = document.createElement("audio"); audioCoin.src = "./audio/coin.wav"; audioCoin.play()
                item.itemElement.remove();
                item.collected = true;
                this.counterItem = this.counterItem + 1

                if (this.counterItem === 5) {
                    this.door = new Door(this.gameScreen, this.gameSize)
                }

            }
    }

    collisionDetectionWithBoss(boss) {
        if (
            this.playerPos.left < boss.bossPos.left + boss.bossSize.w &&
            this.playerPos.left + this.playerSize.w > boss.bossPos.left &&
            this.playerPos.top < boss.bossPos.top + boss.bossSize.h &&
            this.playerPos.top + this.playerSize.h > boss.bossPos.top
        ) {

            alert("You lose");

        }
    }

    roadToExit() {

        if (this.counterItem === 5 &&
            this.playerPos.left >= this.door.doorPos.left &&
            this.playerPos.top >= this.door.doorPos.top) {

            alert("You win")

        }
    }



}

