$(function(){



    var wht = $(window).height()
    $('section').height(wht);



    $(window).resize(function(){
        var wht = $(window).height()
        $('section').height(wht);


    });


    $('.gnb li').click(function(){

        var wht = $(window).height()
        var i = $(this).index();
        console.log(i);

        $('.gnd li').removeClass('on')
        $(this).addClass('on');

        $('html,bady').animate({'scrollTop':wht*i},2140,'easeOutElastic')
    });


    $('section').mousewheel(function(event,delta){

        event.preventDefault()


        if(delta>0){
            var prev =$(this).prev().offset().top 
            $('html,body').stop().animate({'scrollTop':prev},1400,'easeOutElastic')
        }

        if(delta<0){
            var next =$(this).next().offset().top 
            $('html,body').stop().animate({'scrollTop':next},1400,'easeOutElastic')
        }

    });



$(window).scroll(function(){


    var wht = $(window).height()
    var sc = $(this).scrollTop();
    $('h1').text(sc)









    for(var a=0;a<5;a++){
        if(sc>=wht*a && sc<wht*(a+1)){
            $('.gnb li').removeClass('on')
            $('.gnb li').eq(a).addClass('on')
        }
    }








})



















})