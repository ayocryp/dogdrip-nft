

let img = document.getElementById('image');
let imageData = [
    '/assets/dog1.png',
    '/assets/dog2.png',
    '/assets/dog3.png',
    '/assets/dog4.png',
    '/assets/dog5.png',
    '/assets/dog.png',
    '/assets/dog6.png',
    '/assets/dog7.png',
];
setInterval(function () {
    let random = Math.floor(Math.random() * 8);
    img.src = imageData[random]
}, 400)


