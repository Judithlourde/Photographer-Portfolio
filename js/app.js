                                    /********* MODEL(Data) **********/

const images = [
    { alt: 'cake', file: 'assets/img1.jpg', text: 'California', year: '2021' },
    { alt: 'fireworks', file: 'assets/img2.jpg', text: 'New York', year: '2020' },
    { alt: 'john-towner', file: 'assets/img3.jpg', text: 'Florida', year: '2021' },
    { alt: 'cake', file: 'assets/img4.jpg', text: 'Norway', year: '2021' },
    { alt: 'couple', file: 'assets/img5.jpg', text: 'London', year: '2017' },
    { alt: 'table-decoration', file: 'assets/img6.jpg', text: 'California', year: '2021' },
    { alt: 'bridegroom', file: 'assets/img7.jpg', text: 'New Jersey', year: '2021' },
    { alt: 'church', file: 'assets/img8.jpg', text: 'Paris', year: '2021' },
    { alt: 'church', file: 'assets/img9.jpg', text: 'California', year: '2021' },
    { alt: 'couple', file: 'assets/img10.jpg', text: 'Norway', year: '2021' },
    { alt: 'small-cakes', file: 'assets/img11.jpg', text: 'California', year: '2019' },
    { alt: 'table-decoration', file: 'assets/img12.jpg', text: 'Sweden', year: '2020' },
    { alt: 'bride', file: 'assets/img13.jpg', text: 'London', year: '2021' },
    { alt: 'couple', file: 'assets/img14.jpg', text: 'California', year: '2018' },
    { alt: 'couple', file: 'assets/img15.jpg', text: 'Denmark', year: '2021' }
];

const backgroundImages = [
    { source: 'assets/home1.jpg' },
    { source: 'assets/home2.jpg' },
    { source: 'assets/home3.jpg' },
    { source: 'assets/home4.jpg' }
];

                                /********* Events and Functions (Controller) *******/

const container = document.querySelector('.home');
let index = 0;

/* setInterval() starting only after 3 seconds - setting the backgroundImages[0] to display in starting */
container.style.backgroundImage = 'url(' + backgroundImages[0].source + ')';

/* setInterval() for to change the background-images for every 3 seconds */
function change() {
    container.style.backgroundImage = 'url(' + backgroundImages[index].source + ')';
    index > 2 ? index = 0 : index++;
}
setInterval(change, 3000);

/* Adding enent to the hamburger-icon */
const hamburgerButtons = document.querySelectorAll('.home__hamburger');
[...hamburgerButtons].forEach (button => {
    button.addEventListener('click', openingMenu);
});

/* Function for opening the hamburger menu when clicking the hamburger-icon */
function openingMenu() {
    const visible =  document.querySelector('.menu');
    visible.style.visibility = "visible";   
}

/* Adding events to the close button and links in the menu */
const closeButtons = document.querySelectorAll('.menu__content-button');
[...closeButtons].forEach (closeButton => {
    closeButton.addEventListener('click', closingMenu);
});

const menuLinks = document.querySelectorAll('.menu__content-item');
[...menuLinks].forEach (menuLink => {
    menuLink.addEventListener ('click', closingMenu)      
});

/* Function for closing the hamburger menu when clicking the close button and links in the menu */
function closingMenu() {
    const visible =  document.querySelector('.menu');
    visible.style.visibility = "hidden";   
}

                                        /****** From Model to View ******/

const pictures = document.querySelector('.portfolio');
for (let index = 0; index < images.length; index++) {

    /* Creating div (.portfolio__imagesJS) element to display the image */
    const portfolioDiv = document.createElement('div');
    portfolioDiv.className = 'portfolio__imagesJS'

    /* Creating img element source and alternativetext  */
    const photos = document.createElement('img');
    photos.className = 'portfolio__imagesJS-img' 

    const source = document.createAttribute('src');
    source.value = images[index].file;

    const alternativeText = document.createAttribute('alt');
    alternativeText.value = images[index].alt;

    /*  Setting the source, alternativetext to the image element */
    photos.setAttributeNode(source);
    photos.setAttributeNode(alternativeText);

    /*  appendChild() helps to set the img element to be the child of div (.portfolio__imagesJS) element */
    portfolioDiv.appendChild(photos);

    /* appending the div (.portfolio__imagesJS) to the parent div (.portfolio) element (from HTML)*/
    pictures.appendChild(portfolioDiv);

    /* Creating div (.portfolio__imagesJS-overlay) - it have h3 and p for display discriptions on images */
    const divOverlay = document.createElement('div');
    divOverlay.className = 'portfolio__imagesJs-overlay';

    const heading = document.createElement('h3');
    heading.innerText = images[index].text;

    const paragraph = document.createElement('p');
    paragraph.innerText = images[index].year;
    
    divOverlay.appendChild(heading);
    divOverlay.appendChild(paragraph);

    /* appending the div (.portfolio__imagesJS-overlay) to div (.portfolio__imagesJS) */
    portfolioDiv.appendChild(divOverlay);
}   
  


