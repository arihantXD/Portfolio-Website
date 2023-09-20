const cartTrigger = document.querySelector(".logo-section-cart");
const cart = document.querySelector(".logo-section-left");
cartTrigger.addEventListener("click", () => {
    cart.classList.toggle("active");
})

const tl = gsap.timeline();

tl
.from(".navbar" ,{
    delay : 0.5,
    top: 20,
    opacity : 0,
    duration : 0.5
})
.from(".logo-section" ,{
    top: 20,
    opacity : 0,
    duration : 0.5
})
.from(".logo-section-right .logo" ,{
    top: 30,
    opacity : 0,
    duration : 0.5
})
.from(".logo-section-right p" ,{
    top: 30,
    opacity : 0,
    duration : 0.5
})
.from(".logo-section-right a" ,{
    top: 30,
    opacity : 0,
    duration : 0.5
})
.from(".logo-section-left" ,{
    top: 30,
    opacity : 0,
    duration : 0.5
})
.from(".slider ion-icon" ,{
    opacity : 0,
    duration : 0.3
})
.to(".slider ion-icon" ,{
    y: 30,
    yoyo : "true",
    repeat : -1,
    duration : 1
})