(function($) {
    
	var arrow = $('.arrow'),
        stamp = $('.st0'),
		h2 = $('h2'),
		h1 = $('h1'),
		intro = $('.intro'),
		listItem = $('ul li'),
		buttons = $('button'),
		tl = new TimelineLite({paused: true, repeatDelay:1, repeat:-1, yoyo:true}),
		dot = $('.dot'),
		loader = $('#loader'),
        colors = {left:"blue", right:"yellow"};
		tlLoader = new TimelineMax({repeat: 2, onComplete: loadContent});

	// TimelineStart
	tl
		.set(header, {autoAlpha:1})
        .set(arrow, {scale:1, autoAlpha:0})
        .set(stamp, {autoAlpha:0})
		.from(h1, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
        .from(arrow, 1.5, {autoAlpha:1, x:0, y:0, scale:0, transformOrigin:"center center", ease: Bounce.easeOut})
        .from(intro, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
        .to(stamp, 0.3, {autoAlpha: 1}, '+=1.0')
        
        .staggerTo("#Layer_1 stop", 1, {
            stopColor:'#cc0000',
            cycle:{
                /* number of <stop> elements and ending value */
                stopColor: ['#F1F904','#F4B404', '#ff9999']  
              }
            }, '+=0.25')

        // pre-record GSAP properties and values
        .progress(1).progress(0)
        ;

	// Loader Timeline
	tlLoader
		.staggerFromTo(dot, 0.3, 
			{y: 0, autoAlpha: 0}, 
			{y: 20, autoAlpha: 1, ease:Back.easeInOut}
		)
		.fromTo(loader, 0.3, 
			{autoAlpha: 1, scale: 1.3}, 
			{autoAlpha: 0, scale: 1, ease:Power0.easeNone},
			0.05
		);

	function loadContent(){
		var tlLoaderOut = new TimelineLite({onComplete: contentIn});
		tlLoaderOut
			.set(dot, {backgroundColor: '#2b4d66'})
			.to(loader, 0.3, {autoAlpha: 1, scale: 1.3, ease:Power0.easeNone})
			.staggerFromTo(dot, 0.3, 
				{y: 0, autoAlpha: 0}, 
				{y: 20, autoAlpha: 1, ease:Back.easeInOut}, 
				0.05, 0
			)
			.to(loader, 0.3, {y: -150, autoAlpha: 0, ease:Back.easeIn});
	}
    
    

	function contentIn(){
		tl.play();
	}

	$('#btnPlay').on('click',function(){
		tl.play();
	});

	$('#btnPause').on('click',function(){
		tl.pause();
	});

	$('#btnResume').on('click',function(){
		tl.resume();
	});

	$('#btnReverse').on('click',function(){
		tl.reverse();
	});

	$('#btnSpeedUp').on('click',function(){
		tl.timeScale(8);
	});

	$('#btnSlowDown').on('click',function(){
		tl.timeScale(0.5);
	});

	$('#btnSeek').on('click',function(){
		tl.seek(1);
	});

	$('#btnProgress').on('click',function(){
		tl.progress(0.5);
	});

	$('#btnRestart').on('click',function(){
		tl.restart();
	});

})(jQuery);






