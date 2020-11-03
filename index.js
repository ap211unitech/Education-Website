let hamburgar_icon = document.querySelector(".hamburger");
let hamburgerMenu = document.querySelector(".hamburger-menu");

/********************************************** Hamburger Menu **********************************************/
hamburgar_icon.childNodes[1].addEventListener("click", () => {
    gsap.to(".hamburger-menu", { y: 330, opacity: 1, ease: "power4", duration: 0.5 })

})


document.body.addEventListener("click", (elm) => {
    if (elm.path[2].className != "hamburger") {
        gsap.to(".hamburger-menu", { y: -300, opacity: 1, ease: "power4", duration: 0.5 })
    }
})

