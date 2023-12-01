
$(function(){


	// article에 마우스가 들어갔을때, 내가 가로값이 자연스럽게 늘어난다.
	// article



	$('article').mouseenter(function(){

		$(this).stop().animate({'width':'35%'},1000,function(){

			$(this).find('h3').stop().animate({'right':'10px'},400)
			$(this).find('p').stop().animate({'right':'10px'},800)
		})
		$(this).find('video').animate({'opacity':'0.9'},1300)
	})

	$('article').mouseleave(function(){

		$(this).stop().animate({'width':'12%'},500)
		$(this).find('video').animate({'opacity':'0'},2000)
		$(this).find('h3').stop().animate({'right':'-310px'},200);
			$(this).find('p').stop().animate({'right':'-310px'},200)
	})


})