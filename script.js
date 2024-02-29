function moveCircle() {
    var circle = document.getElementById('movingCircle');
    var maxX = window.innerWidth - circle.offsetWidth;
    var maxY = window.innerHeight - circle.offsetHeight;

    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    circle.style.left = randomX + 'px';
    circle.style.top = randomY + 'px';
}

setInterval(moveCircle, 1000);