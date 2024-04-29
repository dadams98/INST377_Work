function getRandomInt() {
    return Math.floor(Math.random() * 7)
}
function changeColor() {
    var heading = document.getElementById('heading');
    var randomColor = getRandomInt()
    if (randomColor == 0) {
        heading.style.backgroundColor = 'blue';
    }else if (randomColor == 1) {
        heading.style.backgroundColor = 'red';
    }else if (randomColor == 2) {
        heading.style.backgroundColor = 'green';
    }else if (randomColor == 3) {
        heading.style.backgroundColor = 'yellow';
    }else if (randomColor == 4) {
        heading.style.backgroundColor = 'orange';
    }else if (randomColor == 5) {
        heading.style.backgroundColor = 'purple';
    }else {
        heading.style.backgroundColor = 'pink';
    }
}

var button = document.getElementById('button');
button.addEventListener('click', changeColor);