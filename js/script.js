
$(document).ready(() => {
    $('.works__btns button, .works__btns a').on('focus', ({ target }) => {
        $(target).parents('.works__element').addClass('works__element--active');
    });

    $('.works__btns button, .works__btns a').on('blur', ({ target }) => {
        $(target).parents('.works__element').removeClass('works__element--active');
    });

    function moveProgressBar(node, nodeLine, tooltip, animationLength = 1500) {
        const progressElement = $(node);
        progressElement.each(function (value, item) {
            $(item).find(nodeLine).animate({
                width: item.dataset.progressPercent + '%',
            }, animationLength);

            $(item).find(tooltip).show(animationLength);
        })
    }

    let animate = true;

    $(window).scroll(function() {

        if (animate && $('.skills').offset().top <= $(window).scrollTop() + 150) {
            moveProgressBar('.progress__element', '.progress__line', '.progress__tooltip');
            animate = false;
        }
    });

    $('.carousel').owlCarousel({
        loop:true,
        margin:0,
        dots: true,
        nav: true,
        navText: [],
        items: 5,
        responsive:{
            0:{
                items:1
            },
            468:{
                items:2
            },
            768:{
                items:3
            },
            980: {
                items:5
            }
        }
    });

});
