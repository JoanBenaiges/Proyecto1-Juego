const Game = {
    gameScreen: document.querySelector("#game-screen"),
    musicGame: document.querySelector('#gameMusic'),


    gameSize: {
        w: window.innerWidth,
        h: window.innerHeight
    },

    background: undefined,

    walls: [],

    blocks: [],

    enemies: [],

    items: [],

    doors: [],

    player: undefined,

    boss: undefined,

    keys: { LEFT: 'ArrowLeft', RIGHT: 'ArrowRight', UP: 'ArrowUp', DOWN: 'ArrowDown' },




    init() {
        this.setDimensions()
        this.start()
    },

    setDimensions() {
        this.gameScreen.style.width = `${this.gameSize.w}px `
        this.gameScreen.style.height = `${this.gameSize.h}px`
    },

    start() {
        this.createElement()
        this.setEventListeners()
        this.gameLoop()
    },

    setEventListeners() {
        document.onkeydown = event => {
            switch (event.code) {
                case this.keys.LEFT:
                    this.player.moveLeft()
                    break

                case this.keys.RIGHT:
                    this.player.moveRight()
                    break;

                case this.keys.UP:
                    this.player.moveTop()
                    break;

                case this.keys.DOWN:
                    this.player.moveBottom()
                    break;
            }
        }
    },



    createElement() {

        this.background = new Background(this.gameScreen, this.gameSize)

        this.walls.push(new Wall(this.gameScreen, this.gameSize, innerWidth, innerWidth / 70, 0, this.gameSize.h - innerWidth / 70))
        this.walls.push(new Wall(this.gameScreen, this.gameSize, innerWidth, innerWidth / 70, 0, 0))
        this.walls.push(new Wall(this.gameScreen, this.gameSize, innerWidth / 70, innerHeight, 0, 0))
        this.walls.push(new Wall(this.gameScreen, this.gameSize, innerWidth / 70, innerHeight, innerWidth - innerWidth / 70))


        this.blocks.push(new Block(this.gameScreen, this.gameSize, innerWidth / 2.333, innerWidth / 80, innerWidth - innerWidth / 2.333, innerHeight / 1.25))
        this.blocks.push(new Block(this.gameScreen, this.gameSize, innerWidth / 3, innerWidth / 80, 0, innerHeight / 1.25))
        this.blocks.push(new Block(this.gameScreen, this.gameSize, innerWidth / 80, innerHeight / 1.25, innerWidth / 2.5, innerHeight - innerHeight / 1.25))
        this.blocks.push(new Block(this.gameScreen, this.gameSize, innerWidth / 80, innerHeight / 2, innerWidth / 5, 0))
        this.blocks.push(new Block(this.gameScreen, this.gameSize, innerWidth / 80, innerHeight / 2, innerWidth / 1.25, 0))
        this.blocks.push(new Block(this.gameScreen, this.gameSize, innerWidth / 80, innerHeight / 2, innerWidth / 1.75, innerHeight / 3.2))

        this.enemies.push(new Enemies(this.gameScreen, this.gameSize, innerWidth / 25, innerWidth / 25, this.gameSize.w / 1.125, this.gameSize.h / 9, 0, 5,
            this.gameSize.h / 1.5, this.gameSize.h / 15));
        this.enemies.push(new Enemies(this.gameScreen, this.gameSize, innerWidth / 30, innerWidth / 30, this.gameSize.w / 1.45, this.gameSize.h / 2.5, 5, 0,
            this.gameSize.h, 0, this.gameSize.w / 1.7, this.gameSize.w / 1.33));
        this.enemies.push(new Enemies(this.gameScreen, this.gameSize, innerWidth / 30, innerWidth / 30, this.gameSize.w / 1.9, this.gameSize.h / 9, 0, 7,
            this.gameSize.h / 1.1, this.gameSize.h / 20));
        this.enemies.push(new Enemies(this.gameScreen, this.gameSize, innerWidth / 30, innerWidth / 30, this.gameSize.w / 2.85, this.gameSize.h / 15, 0, 8,
            this.gameSize.h / 1.5, this.gameSize.h / 20));
        this.enemies.push(new Enemies(this.gameScreen, this.gameSize, innerWidth / 40, innerWidth / 40, this.gameSize.w / 6, this.gameSize.h / 1.2, 3, 0,
            this.gameSize.h, 0, this.gameSize.w / 15, this.gameSize.w / 3));
        this.enemies.push(new Enemies(this.gameScreen, this.gameSize, innerWidth / 30, innerWidth / 30, this.gameSize.w / 30, this.gameSize.h / 2.5, 5, 0,
            this.gameSize.h, 0, this.gameSize.w / 50, this.gameSize.w / 7));
        this.enemies.push(new Enemies(this.gameScreen, this.gameSize, innerWidth / 30, innerWidth / 30, this.gameSize.w / 4.5, this.gameSize.h / 9, 0, 10,
            this.gameSize.h / 1.4, this.gameSize.h / 12));

        this.items.push(new Item(this.gameScreen, this.gameSize, this.gameSize.w / 1.075, this.gameSize.h / 9))
        this.items.push(new Item(this.gameScreen, this.gameSize, this.gameSize.w / 25, this.gameSize.h / 1.15))
        this.items.push(new Item(this.gameScreen, this.gameSize, this.gameSize.w / 12, this.gameSize.h / 1.5))
        this.items.push(new Item(this.gameScreen, this.gameSize, this.gameSize.w / 2.2, this.gameSize.h / 2.2))
        this.items.push(new Item(this.gameScreen, this.gameSize, this.gameSize.w / 10, this.gameSize.h / 10))

        this.player = new Player(this.gameScreen, this.gameSize, this.keys, this.doors);

        this.boss = new Boss(this.gameScreen, this.gameSize)



    },

    gameLoop() {

        this.drawAll();

        window.requestAnimationFrame(() => this.gameLoop());
        this.player.collisionDetectionWithEnemies(this.enemies)
        this.player.collisionDetectionWithBlock(this.blocks)
        this.player.collisionDetectionWithItems(this.items)
        this.player.collisionDetectionWithBoss(this.boss);
        this.player.roadToExit()

    },

    drawAll() {

        this.player.move()
        this.enemies.forEach(enemy => enemy.move());
        this.boss.move()
    },


    getEnemiesPositions() {
        return this.enemies.map(enemy => enemy.enemiesPos);
    },


    createSplashScreen() {
        const start = document.createElement('div');
        start.style.position = "absolute"
        start.style.backgroundImage = "url(/img/allDogs.png)";
        start.style.backgroundSize = { w: this.gameSize.w, h: this.gameScreen.h };
        start.style.width = `${window.innerWidth}px`;
        start.style.height = `${window.innerHeight}px`;
        start.style.backgroundSize = "cover";
        start.style.position = 'relative';
        start.style.zIndex = '1';

        document.body.insertBefore(start, this.gameScreen)

        start.addEventListener("click", () => {
            start.remove()
            this.init()

        });

    },

}


