$('.slickSlider1').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 5,
    infinite: true,
    autoplay: false,
    speed: 300,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 550,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
});

$('.slickSlider2').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slickSlider1',
    dots: true,
    autoplay: true,
    responsive: [
        {
            breakpoint: 550,
            settings: {
                arrows: false,
                dots: false
            }
        }
    ]
});

let preloader = setTimeout(remove, 3000);

function remove() {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("content").classList.remove("d-none");
}

