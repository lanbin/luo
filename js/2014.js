$(function() {

	var _w = $(window),
		_d = $(document),
		main = new Swiper('#main', {
			mode: 'vertical',
			keyboardControl: true,
			loop: false,
			onSlideChangeStart: function(swiper, direction) {
				console.log(swiper.activeIndex, direction)
			}
		}),
		yewu = new Swiper('#yewu', {
			loop: false,
			keyboardControl: true,
			onSlideChangeStart: function(swiper, direction) {
				if(direction == 'next') {
					switch(swiper.activeIndex) {
						case 1: ottStep();break;
						case 2: appStep();break;
						case 3: pcStep();break;
					}
				}
			}
		}),
		shengchan = new Swiper('#shengchan', {
			loop: false,
			keyboardControl: true,
			onSlideChangeStart: function(swiper, direction) {
				// if(direction == 'next') {
				// 	switch(swiper.activeIndex) {
				// 		case 1: ottStep();break;
				// 		case 2: appStep();break;
				// 		case 3: pcStep();break;
				// 	}
				// }
			}
		})

	$(".list li").css({
		y: 300
	})

	function ottStep() {

		$("#otttile").transition({
			scale: 0.7,
			x: "-40%",
			y: "-230%",
			delay: 1000
		}, 1500, function() {
			_w.trigger("titledone")
		})

		_w.on("titledone", function() {
			$("#ottlist li").each(function(index, item) {
				$(item).transition({
					opacity: 1,
					y: 0,
					delay: (index + 1) * 800
				})
			})
		})
	}

	function appStep() {
		$("#apptile").transition({
			scale: 0.7,
			x: "-40%",
			y: "-230%",
			delay: 1000
		}, 1500, function() {
			_w.trigger("apptitledone")
		})

		_w.on("apptitledone", function() {
			$("#applist li").each(function(index, item) {
				$(item).transition({
					opacity: 1,
					y: 0,
					delay: (index + 1) * 800
				})
			})
		})
	}

	function pcStep() {
		$("#pctile").transition({
			scale: 0.7,
			x: "-40%",
			y: "-230%",
			delay: 1000
		}, 1500, function() {
			_w.trigger("pctitledone")
		})

		_w.on("pctitledone", function() {
			$("#pclist li").each(function(index, item) {
				$(item).transition({
					opacity: 1,
					y: 0,
					delay: (index + 1) * 800
				})
			})
		})
	}


	_w.on("load", function() {
		$("#loading").transition({
			opacity: 0,
			delay: 500
		}, 1000, function() {
			$(this).remove()
		})
	})

})