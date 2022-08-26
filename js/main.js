// getting data and displaying them by id
const url = 'https://solovey.com.ua/test/data.json';

const modelData = document.getElementById('model');
const priceData = document.getElementById('price');
const imageData = document.getElementById('image');
const linkData = document.getElementById('link');

fetch(url)
    .then((resp) => resp.json())
    .then(function(date) {
        let sneakerData = date.sneakers;

        return sneakerData.map(function(sneakers) {
            let modelDataSpan = createNode('span');
            modelDataSpan.innerHTML = `${sneakers.model}`;
            append(modelData, modelDataSpan);

            let priceDataSpan = createNode('span');
            priceDataSpan.innerHTML = `€${sneakers.price}`;
            append(priceData, priceDataSpan);

            let imageDataImg = createNode('img');
            imageDataImg.src = `${sneakers.image_url}`;
            imageDataImg.alt = `${sneakers.image_url}`;
            append(imageData, imageDataImg);

            let linkDataA = createNode('a');
            linkDataA.href = `${sneakers.link}`;
            linkDataA.innerHTML = `ORDER NOW!`;
            append(linkData, linkDataA);
        })
    })
    .catch(function(error) {
        console.log(error);
    });

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

// animation on display

setTimeout(
    function(){
        document.getElementById("banner").style.transition = "opacity " + 3 + "s";
        document.getElementById("banner").style.opacity = 1;
    }, 300
);

// animation(JQuery) on title, price, image, link.

$timerOut = 3000;

var currentModel = 1;
var currentPrice = 1;
var currentImage = 1;
var currentLink = 1;

setInterval(function() {
    var animationModel = $("#model span").hide();

    animationModel.eq(currentModel).fadeIn("normal");
    if (currentModel < animationModel.length - 1)
        currentModel++;
    else
        currentModel = 0;
}, $timerOut);

setInterval(function() {
    var animationPrice = $("#price span").hide();

    animationPrice.eq(currentPrice).fadeIn("normal");
    if (currentPrice < animationPrice.length - 1)
        currentPrice++;
    else
        currentPrice = 0;
}, $timerOut);

setInterval(function() {
    var animationImage = $("#image img").hide();

    animationImage.eq(currentImage).fadeIn("normal");
    if (currentImage < animationImage.length - 1)
        currentImage++;
    else
        currentImage = 0;
}, $timerOut);

setInterval(function() {
    var animationLink = $("#link a").hide();

    animationLink.eq(currentLink).fadeIn("normal");
    if (currentLink < animationLink.length - 1)
        currentLink++;
    else
        currentLink = 0;
}, $timerOut);

