const start = document.createElement('div');
start.style.position = "absolute"
start.style.backgroundImage = "url(/img/allDogs.png)";
start.style.width = `${window.innerWidth}px`;
start.style.height = `${window.innerHeight}px`;
start.style.backgroundSize = "cover";
start.style.position = 'absolute';
start.style.zIndex = '1';

document.body.insertBefore(start, gameScreen)

