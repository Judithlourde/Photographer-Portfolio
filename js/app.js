const images = [
    {alt: 'cake', file: 'assets/img1.jpg', text: 'California', year: '2021'},
    {alt: 'fireworks', file: 'assets/img2.jpg', text: 'New York', year: '2020'},
    {alt: 'john-towner', file: 'assets/img3.jpg', text: 'Florida', year: '2021'},
    {alt: 'cake', file: 'assets/img4.jpg', text: 'Norway', year: '2021'},
    {alt: 'couple', file: 'assets/img5.jpg', text: 'London', year: '2017'},
    {alt: 'table-decoration', file: 'assets/img6.jpg', text: 'California', year: '2021'},
    {alt: 'bridegroom', file: 'assets/img7.jpg', text: 'New Jersey', year: '2021'},
    {alt: 'church', file: 'assets/img8.jpg', text: 'Paris', year: '2021'},
    {alt: 'church', file: 'assets/img9.jpg', text: 'California', year: '2021'},
    {alt: 'couple', file: 'assets/img10.jpg', text: 'Norway', year: '2021'},
    {alt: 'small-cakes', file: 'assets/img11.jpg', text: 'California', year: '2019'},
    {alt: 'table-decoration', file: 'assets/img12.jpg', text: 'Sweden', year: '2020'},
    {alt: 'bride', file: 'assets/img13.jpg', text: 'London', year: '2021'},
    {alt: 'couple', file: 'assets/img14.jpg', text: 'California', year: '2018'},
    {alt: 'couple', file: 'assets/img15.jpg', text: 'Denmark', year: '2021'}
];
const backgroundImages = [
    { source: 'assets/home1.jpg' },
    { source: 'assets/home2.jpg' },
    { source: 'assets/home3.jpg' },
    { source: 'assets/home4.jpg' }
];

const container = document.querySelector('.container');
let index = 0;
container.style.backgroundImage = 'url(' + backgroundImages[0].source + ')';
function change() {
    container.style.backgroundImage = 'url(' + backgroundImages[index].source + ')';
    index > 2 ? index = 0 : index++;
}
setInterval(change, 3000);

const hamburgerButtons = document.querySelectorAll('.container--hamburger');
[...hamburgerButtons].forEach (button => {
    button.addEventListener('click', openingMenu);
});
function openingMenu() {
    const visible =  document.querySelector('.menu');
    visible.style.visibility = "visible";   
}
const closeButtons = document.querySelectorAll('.menu__head--button');
[...closeButtons].forEach (closeButton => {
    closeButton.addEventListener('click', closingMenu);
});
function closingMenu() {
    const visible =  document.querySelector('.menu');
    visible.style.visibility = "hidden";   
}
const menuLinks = document.querySelectorAll('.menu__item');
[...menuLinks].forEach (menuLink => {
    menuLink.addEventListener ('click', closingMenu)      
});

const pictures = document.querySelector('.portfolio');

for (let index = 0; index < images.length; index++) {

    const heading = document.createElement('h3');
    const paragraph = document.createElement('p');
    heading.innerText = images[index].text;
    paragraph.innerText = images[index].year;
    const divOverlay = document.createElement('div');
    divOverlay.className = 'portfolio__imagesJs--overlay';
    divOverlay.appendChild(heading);
    divOverlay.appendChild(paragraph);

    const pict = document.createElement('img'); 
    const source = document.createAttribute('src');
    // const alternativeText = document.createAttribute('alt');

    pict.className = 'portfolio__imagesJS--img'
    source.value = images[index].file;
    // alternativeText.innerText = images[index].alt;

    pict.setAttributeNode(source);
    // pict.setAttribute(alternativeText);

    const portfolioDiv = document.createElement('div');
    portfolioDiv.className = 'portfolio__imagesJS'

    portfolioDiv.appendChild(divOverlay);
    portfolioDiv.appendChild(pict);
    pictures.appendChild(portfolioDiv);
}   
  


