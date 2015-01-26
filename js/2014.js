$(function() {

	var _w = $(window),
		_d = $(document),
		main = new Swiper('#main', {
			mode: 'vertical',
			keyboardControl: true,
			loop: false,
			onSlideChangeStart: function(swiper, direction) {
				yewu.disableKeyboardControl()
				shengchan.disableKeyboardControl()
				gushi.disableKeyboardControl()

				if (swiper.activeIndex == 2) {

					yewu.enableKeyboardControl()

				} else if (swiper.activeIndex == 3) {

					shengchan.enableKeyboardControl()

				} else if (swiper.activeIndex == 4) {

					gushi.enableKeyboardControl()

				} else if (swiper.activeIndex == 5) {

					$("#heying").transition({
						opacity: 1,
						scale: 1,
						delay: 400
					})

				} else if (swiper.activeIndex == 6) {
					$('#logo').css({
						y: 0,
						scale: 1
					}).transition({
						opacity: 1,
						delay: 400
					}, 1000).transition({
						y: -100
					}, 2000)

					$("#slogen").transition({
						opacity: 1,
						y: -100,
						delay: 4000
					}, 1500)
				}
			}
		}),
		timeline = new Swiper('#timeline', {
			loop: false,
			keyboardControl: true
		}),
		yewu = new Swiper('#yewu', {
			loop: false,
			keyboardControl: true,
			onSlideChangeStart: function(swiper, direction) {
				if (direction == 'next') {
					switch (swiper.activeIndex) {
						case 1:
							ottStep();
							break;
						case 2:
							appStep();
							break;
						case 3:
							pcStep();
							break;
					}
				}
			}
		}),
		shengchan = new Swiper('#shengchan', {
			loop: false,
			keyboardControl: true,
			onSlideChangeStart: function(swiper, direction) {
				if (direction == 'next') {
					switch (swiper.activeIndex) {
						case 7:
							codeStep();
							break;
						case 8:
							fanStep();
							break;
					}
				}
			}
		}),
		gushi = new Swiper('#gushi', {
			loop: false,
			keyboardControl: true,
			onSlideChangeStart: function(swiper, direction) {
				if (direction == 'next') {
					$('.story-img').eq(swiper.activeIndex - 1).transition({
						scale: 1,
						opacity: 1,
						delay: 400
					})
				}
			}
		})



	$(".list li").css({
		y: 300
	})



	function ottStep() {

		$("#otttile").transition({
			scale: 0.5,
			x: "-60%",
			y: "-150%",
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
			scale: 0.5,
			x: "-60%",
			y: "-150%",
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
			scale: 0.5,
			x: "-60%",
			y: "-150%",
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

	var countUpOptions = {  
		useEasing: true,
		useGrouping: true,
		separator: ',',
		decimal: '.',
		prefix: '',
		suffix: ''
	}

	function codeStep() {
		var codeline = new countUp('codeLine', 0, 400000, 0, 2, countUpOptions)
		codeline.start()
	}

	function fanStep() {
		var fan = new countUp('fan', 0, 30000, 0, 2, countUpOptions)
		fan.start()
	}


	_w.on("load", function() {
		$("#loading").transition({
			opacity: 0,
			delay: 500
		}, 1000, function() {
			$(this).remove()
		})

		$(".story-img").each(function(index, item) {
			$(item).css({
				marginLeft: ($(item).width()) / -2,
				marginTop: ($(item).height()) / -2,
				scale: 0.3,
				opacity: 0
			})
		})
	})

})