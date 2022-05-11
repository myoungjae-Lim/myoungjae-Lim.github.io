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

    $('.movie .dec i:nth-of-type(1)').on('click', function(){
        $('.movie video').trigger('play');
    })

    $('.movie .dec i:nth-of-type(2)').on('click', function(){
        $('.movie video').trigger('pause');
    })


    $('#myMovie').YTPlayer({
        videoURL:'https://www.youtube.com/watch?v=7xmgRLTjxIw',
        containment:'.utube',
        autoPlay:true,
        mute:true,
        startAt:0,
        opacity:1,
        showControls:false,
        playOnlyIfVisible:true
    });

    $('.utube i:nth-of-type(1)').on('click',function(){
        $('#myMovie').YTPPlay();
    })
     
    $('.utube i:nth-of-type(2)').on('click',function(){
        $('#myMovie').YTPPause();
    })
     
    $('.product_slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode:true,
        autoplay:true,
    });

    $('.product i:nth-of-type(1)').on('click',function(){
        $('.product_slide').slick('slickPrev');
    });

    $('.product i:nth-of-type(2)').on('click',function(){
        $('.product_slide').slick('slickNext');
    });

    $('.product_slide').on('init reInit afterChange', function(){
        let current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
       
    });

    $('.tap_link>li').on('click',function(){
        var idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.tap_content>li').eq(idx).addClass('on').siblings().removeClass('on');
    })

    $('.footer #link').on('change',function(){
        var lik = $(this).val();
        if(lik){
            window.open(lik);
        }
    })

    $('.mopen').on('click', function(){
        $('.gnb nav').toggleClass('on')
        $(this).toggleClass('on')
    })

    
    AOS.init();
   

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