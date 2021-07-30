// < !--Code is Written By krishna6431-- >
document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('blueButton').onclick = switchBlue;
document.getElementById('yellowButton').onclick = switchYellow;

function switchGray() {
    document.getElementsByTagName('body')[0].style.background = 'gray';
    document.getElementsByTagName('body')[0].style.color = 'white';
}

function switchWhite() {
    document.getElementsByTagName('body')[0].style.background = 'white';
    document.getElementsByTagName('body')[0].style.color = 'black';
}

function switchBlue() {
    document.getElementsByTagName('body')[0].style.background = 'blue';
    document.getElementsByTagName('body')[0].style.color = 'white';
}

function switchYellow() {
    document.getElementsByTagName('body')[0].style.background = 'yellow';
    document.getElementsByTagName('body')[0].style.color = 'black';
}
