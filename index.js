let hamburgar_icon = document.querySelector(".hamburger");
let hamburgerMenu = document.querySelector(".hamburger-menu");

/********************************************** Hamburger Menu **********************************************/
hamburgar_icon.childNodes[1].addEventListener("click", () => {
    gsap.to(".hamburger-menu", { y: 360, opacity: 1, ease: "power4", duration: 0.5 })

})


document.body.addEventListener("click", (elm) => {
    if (elm.path[2].className != "hamburger") {
        gsap.to(".hamburger-menu", { y: -300, opacity: 1, ease: "power4", duration: 0.5 })
    }
})

/*********************************************** Scroll Animation ***********************************************/
$(document).ready(function () {
    $(".text-big").addClass("animated zoomIn");
    $(".text-big").css("opacity", 1);
    $(".text-small").addClass("animated fadeInUp");

    $(".f-sect").css({ opacity: 0 });
    $(".s-sect").css({ opacity: 0 });
    $(".t-sect").css({ opacity: 0 });

    $(".f-sect").waypoint(function (direction) {
        if (direction == "down") {
            $(".f-sect").css({ opacity: 1 });
            $(".f-sect .data .heading").addClass("animated slideInDown");
            $(".f-sect .data .main-data").addClass("animated slideInUp");
            $(".f-sect .img").addClass("animated slideInRight");
        }
        else {
            $(".f-sect .data .heading").removeClass("animated slideInDown");
            $(".f-sect .data .main-data").removeClass("animated slideInUp");
            $(".f-sect .img").removeClass("animated slideInRight");
        }
    }, {
        offset: '100%'
    })

    $(".s-sect").waypoint(function (direction) {
        if (direction == "down") {
            $(".s-sect").css({ opacity: 1 });
            $(".s-sect .data .heading").addClass("animated slideInRight");
            $(".s-sect .data .main-data").addClass("animated slideInUp");
            $(".s-sect .img").addClass("animated slideInLeft");
        }
        else {
            $(".s-sect .data .heading").removeClass("animated slideInRight");
            $(".s-sect .data .main-data").removeClass("animated slideInUp");
            $(".s-sect .img").removeClass("animated slideInLeft");
        }
    }, {
        offset: '100%'
    })

    $(".t-sect").waypoint(function (direction) {
        if (direction == "down") {
            $(".t-sect").css({ opacity: 1 });
            $(".t-sect .data .heading").addClass("animated slideInDown");
            $(".t-sect .data .main-data").addClass("animated slideInUp");
            $(".t-sect .img").addClass("animated slideInRight");
        }
        else {
            $(".t-sect .data .heading").removeClass("animated slideInDown");
            $(".t-sect .data .main-data").removeClass("animated slideInUp");
            $(".t-sect .img").removeClass("animated slideInRight");
        }
    }, {
        offset: '100%'
    })
})

