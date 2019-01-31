const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// let service = document.querySelector("a");
// service.textContent = siteContent["nav"]["nav-item-1"];

// let product = document.querySelectorAll("a");
// product.textContent = siteContent["nav"]["nav-item-2"];
let navBar = document.querySelectorAll("nav a");

// navBar.forEach(a => {
//   a.textContent = siteContent.nav;
//   console.log(a.keys);
// });

for (let i = 0; i < navBar.length; i++) {
  navBar[i].setAttribute("id", "nav-item-" + (i + 1)); //nav bar index is given an id with nav items incremeting each loop
  navBar[i].textContent = siteContent["nav"][navBar[i].getAttribute("id")];
}
//h1 tag
let h1 = document.querySelector("h1");
h1.textContent = siteContent.cta.h1;

// const h1 = document.querySelector(".cta .cta-text h1"); // make sure to grab the parent classes to h1

// const content = siteContent.cta.h1.split(" "); //splits the content of h1 into an array
// console.log(content);

//button tag
let btn = document.querySelector("button");
btn.textContent = siteContent.cta.button;
//main header img
let mainImg = document.getElementById("cta-img");
mainImg.setAttribute("src", siteContent.cta["img-src"]);
//h4 tags
let h4 = document.querySelectorAll("h4");

for (let i = 0; i < h4.length; i++) {
  h4[i].setAttribute("id", h4[i] + "-h4");
  h4[i].textContent = siteContent["main-content"][h4[i].getAttribute("id")];
}
