$(function(){
    /////////////////////////////////////////

    $('.top_banner i').on('click',function(){
        $('.top_banner').slideUp();
    });
    
    $('.main_slider').on('init reInit afterChange', function(){
        let current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
    });

    $('.main_slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    // $(window).on('scroll',function(){
    //     let sct = $(window).scrollTop();            
    //     if(sct >= 200){
    //         $('.mid .figure1').addClass('on');
    //         $('.mid .figure2').addClass('on');
    //         $('.mid .figure3').addClass('on');
    //     }
    //     if(sct < 200){
    //         $('.mid .figure1').removeClass('on');
    //         $('.mid .figure2').removeClass('on');
    //         $('.mid .figure3').removeClass('on');
    //     }
    // })




    /////////////////////////////////////////    
})