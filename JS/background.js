const images = ['5.jpg', '6.jpg', '4.jpg'];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const image = document.createElement('img');
image.src = `img/${chosenImage}`;

const body = document.querySelector('body');
body.appendChild(image);
