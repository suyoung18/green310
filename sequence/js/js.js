$(function(){


var imgs='';
    for(var a = 0; a<200; a++){

        imgs +="<img src=img/pic"+a+".jpg>"
        console.log(imgs)

    }





    $(bady).mousemove(function(e){

        var X = e.pageX
        var wd = $(window).Width()
        var xNum = Math.floor((x/wd)*200)
        $('.box7 h1').text(xNum)


        // 속성값변경 메서드 attr()

        // $('section img').attr({'src':'img/pic'+xNum+'.jpg'})

        // 지정된 숫자만 보여라
        $('section img').hide()
        $('section img').eq(xNum).show()

    })
})