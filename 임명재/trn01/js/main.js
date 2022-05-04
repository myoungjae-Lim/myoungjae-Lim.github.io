//document.querySelector('.headerWrap').style.display='none';

//$('.headerWrap').hide();

$(function () {
    $('.main_slider').slick({
        arrows:false,
        autoplay: true,
        autoplaySpeed: 1000,
        vertical: true,
        dots:true
        
    });

    $('.mopen').on('click', function(){
        $('.gnb').toggleClass('on')
        $(this).toggleClass('on')
    })
})



