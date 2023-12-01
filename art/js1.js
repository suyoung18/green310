$(function(){


    var arwid = $('artlcie').width()
    console.log(arwid)
    var arNum = $('artlcie').size()
    console.log(arNum)


    $('section').width(((arwid+20)*arNum)+600)
    var secWid = $('section').width()
    console.log(secWid)
    $('body').height(secWid)
    $('html,body').stop().animate({'scrollTop':(arwid)*arNum},600)








})