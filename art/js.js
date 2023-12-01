$(function(){


    var arwid = $('article').width()
    console.log(arwid)
    // 갯수찾기
    var arNum = $('article').size()
    console.log(arNum)


    $('section').width(((arwid+20)*arNum)+600)
    var secWid = $('section').width()
    console.log(secWid)
    $('body').height(secWid)
    $('html,body').stop().animate({'scrollTop':(arwid+20)*arNum},600)
    


    $(window).scroll(function(){

        var sc = $(this).scrollTop()

        $('h1').text(sc)
        $('section').css({'left':-sc})
        





    })


    //  nav를 클릭했을때 section이 임의의 값으로 이동한다

    $('ul li').click(function(){


        //순번찾기 
        let i = $(this).index();
        $('html,body').stop().animate({'scrollTop':1000*i},1200)

    })

    // artciel
    
    $('article').click(function(){
        $('article').removeClass('on')
        $(this).addClass('on')
    })

})