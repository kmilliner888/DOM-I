const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navList = document.querySelectorAll('nav a')
console.log(navList);

navList[0].classList.add('nav-item-1')
navList[1].classList.add('nav-item-2')
navList[2].classList.add('nav-item-3')
navList[3].classList.add('nav-item-4')
navList[4].classList.add('nav-item-5')
navList[5].classList.add('nav-item-6')

const nav1 = document.querySelector('.nav-item-1')
nav1.textContent = "Services"
const nav2 = document.querySelector('.nav-item-2')
nav2.textContent = "Product"
const nav3 = document.querySelector('.nav-item-3')
nav3.textContent = "Vision"
const nav4 = document.querySelector('.nav-item-4')
nav4.textContent = "Features"
const nav5 = document.querySelector('.nav-item-5')
nav5.textContent = "About"
const nav6 = document.querySelector('.nav-item-6')
nav6.textContent = "Contact"

const h1Class = document.querySelector('h1')
console.log(h1Class);

h1Class.classList.add('h1')

const h1Text = document.querySelector('.h1')
h1Text.textContent = "DOM is Awesome!"

const buttonClass = document.querySelector('button')
console.log(buttonClass);

buttonClass.classList.add('button')

const buttonText = document.querySelector('.button')
buttonText.textContent = "Get Started"

let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"])

const topClass = document.querySelectorAll('.top-content div')
topClass[0].classList.add('top-1')
topClass[1].classList.add('top-2')
console.log(topClass)


const h4FeatClass = document.querySelector('.top-1 h4')
h4FeatClass.classList.add('features-h4')
console.log(h4FeatClass)

const h4FeatText = document.querySelector('.features-h4')
h4FeatText.textContent = "Features"



const pFeatClass = document.querySelector('.top-1 p')
pFeatClass.classList.add('features-content')

const pFeatText = document.querySelector('.features-content')
pFeatText.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."



const h4AboutClass = document.querySelector('.top-2 h4')
h4AboutClass.classList.add('about-h4')

const h4AboutText = document.querySelector('.about-h4')
h4AboutText.textContent = "About"



const pAboutClass = document.querySelector('.top-2 p')
pAboutClass.classList.add('about-content')

const pAboutText = document.querySelector('.about-content')
pAboutText.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."


let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])


const bottomClass = document.querySelectorAll('.bottom-content div')
bottomClass[0].classList.add('bottom-1')
bottomClass[1].classList.add('bottom-2')
bottomClass[2].classList.add('bottom-3')




const h4ServicesClass = document.querySelector('.bottom-1 h4')
h4ServicesClass.classList.add('services-h4')

const h4ServicesText = document.querySelector('.services-h4')
h4ServicesText.textContent = "Services"

const pServicesClass = document.querySelector('.bottom-1 p')
pServicesClass.classList.add('services-content')

const pServicesText = document.querySelector('.services-content')
pServicesText.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."



const h4ProductClass = document.querySelector('.bottom-2 h4')
h4ProductClass.classList.add('product-h4')

const h4ProductText = document.querySelector('.product-h4')
h4ProductText.textContent = "Product"

const pProductClass = document.querySelector('.bottom-2 p')
pProductClass.classList.add('product-content')

const pProductText = document.querySelector('.product-content')
pProductText.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."



const h4VisionClass = document.querySelector('.bottom-3 h4')
h4VisionClass.classList.add('vision-h4')

const h4VisionText = document.querySelector('.vision-h4')
h4VisionText.textContent = "Vision"

const pVisionClass = document.querySelector('.bottom-3 p')
pVisionClass.classList.add('vision-content')

const pVisionText = document.querySelector('.vision-content')
pVisionText.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."


const h4ContactClass = document.querySelector('.contact h4')
h4ContactClass.classList.add('.contact-h4')

const h4ContactText = document. querySelectorAll('.contact-h4')
h4ContactClass.textContent = "Contact"

const contactP = document.querySelectorAll('.contact p')
contactP[0].classList.add('address')
contactP[1].classList.add('phone')
contactP[2].classList.add('email')
console.log(contactP)

const contactP1 = document.querySelector('.address')
contactP1.textContent = "123 Way 456 Street Somewhere, USA"

const contactP2 = document.querySelector('.phone')
contactP2.textContent = "1 (888) 888-8888"

const contactP3 = document.querySelector('.email')
contactP3.textContent = "sales@greatidea.io"

const footerClass = document.querySelector('footer p')
footerClass.classList.add('copyright')
console.log(footerClass)

const footerCopyright = document.querySelector('.copyright')
footerCopyright.textContent = "Copyright Great Idea! 2018"




const navBar = document.querySelector('nav')
navBar.classList.add('nav-bar')
console.log(navBar)

const newNavItem = document.createElement('a')
console.log(newNavItem)
const link = document.createTextNode("Testimonials")
newNavItem.appendChild(link)
newNavItem.href = "#"
newNavItem.className = "nav-item-7"
document.querySelector('.navBar')
navBar.appendChild(newNavItem)

const newNavItem2 = document.createElement('a')
const link2 = document.createTextNode("Research")
newNavItem2.appendChild(link2)
newNavItem2.href="#"
newNavItem2.className= "nav-item-8"
document.querySelector('.navBar')
navBar.prepend(newNavItem2)

const greenNavColors = document.querySelectorAll('nav a')

greenNavColors.forEach( link => {
  link.style.color = "green"
})