// Main paralax letters-START
function myParallax() {
    this.querySelectorAll(".parallax__item").forEach(layer => {
        let speed = layer.getAttribute("data-speed") * 0.01;
        let distanceX = event.clientX * speed;
        let distanceY = event.clientY * speed;
        layer.style.transform = `translate(${distanceX}px, ${distanceY}px)`;
    });
}
document.addEventListener('mousemove', myParallax);
// Main paralax letters-END

// Клик по бургер-меню-START
function menuClick() {
    this.classList.toggle('menu-opened');
    document.querySelector('.menu-wrapper').classList.toggle('menu-wrapper__active');
    document.body.classList.toggle('body__overflow-y');
}
document.querySelector('.burger-menu').addEventListener('click', menuClick);
// Клик по бургер-меню-END


// scrollup-START
// $(window).scroll(function() {
//     if ($(this).scrollTop() > 1000) {
//         $('.scrollup').fadeIn();
//     } else {
//         $('.scrollup').fadeOut();
//     }
// });
// $('.scrollup').click(function() {
//     $("html, body").animate({ scrollTop: 0 }, 1000);
//     return false;
// });
// scrollup-END


// Клики по навигации меню
$(".arrow-bottom").on("click", function(event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор блока с атрибута href
    var id = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1000 мс
    $('body,html').animate({ scrollTop: top }, 1000);
});