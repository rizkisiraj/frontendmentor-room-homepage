const imageArray = [
    {
        image: "./images/desktop-image-hero-1.jpg",
        title: "Discover innovative ways to decorate",
        paragraph: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
    },
    {
        image: "./images/desktop-image-hero-2.jpg",
        title: "We are available all across the globe",
        paragraph: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        image: "./images/desktop-image-hero-3.jpg",
        title: "Manufactured with the best materials",
        paragraph: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
        experience in this industry, we understand what customers want for their home and office.`
    },
]

const heroImage = document.querySelector('.hero-image');
const heroTitle = document.querySelector('.hero-title')
const heroContent = document.querySelector('.hero-content')
const leftControl = document.querySelector('.left-control');
const rightControl = document.querySelector('.right-control');
const hamburger = document.querySelector('.hamburger');
const closeButton = document.querySelector('.close-button')
let index = 0;


const handleNavbar = () => {
    if(document.body.classList.contains('locked')) {
        document.body.classList.remove('locked');
        return;
    }

    document.body.classList.add('locked');
}

const renderHero = ({image,title,paragraph}) => {
    heroContent.innerHTML = paragraph;
    heroTitle.innerHTML = title;
    heroImage.setAttribute('src',image);
}

leftControl.addEventListener('click', ()=> {
    index--;
    if(index < 0) {
        index = 2;
    }
    renderHero(imageArray[index]);
    console.log(index);
})

rightControl.addEventListener('click', ()=> {
    index++;
    if(index > 2) {
        index = 0;
    }
    renderHero(imageArray[index]);
    console.log(index);
})

hamburger.addEventListener('click', handleNavbar);
closeButton.addEventListener('click', handleNavbar);