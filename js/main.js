(function ($) {

	/*
	Colors before reset
		orange - #F8AD43
		red - #F8876E
		green - #294C67

		meter bcg - #c6d7df to #5AB783
		Meter stroke - #7c99a2 to #448962
	*/
	// variables
	let $coin = $('#Coin'),
		$Petr = $('#Petr'),
		path = [{ x: -90, y: 120 }, { x: -45, y: -220 }, { x: 0, y: 120 }],
		$mainBulb = $('#MainBulb'),
		$bulbIdea = $('#BulbIdea'),
		$bulbIdeaLight = $('#MainBulb2'),
		$part1 = $('#Part1'),
		$pointer = $("#pointer"),
		$liquids = $('.liquid'),
		$liquid01 = $('#Liquid1'),
		$liquid02 = $('#Liquid2'),
		$liquid03 = $('#Liquid3'),
		$liquid04 = $('#Liquid4'),
		$liquid05 = $('#Liquid5'),
		$liquid06 = $('#Liquid6'),
		$liquid07 = $('#Liquid7'),
		$liquid08 = $('#Liquid8'),
		$liquid09 = $('#Liquid9'),
		$liquidInsideMask01 = $("#LiquidInside1Mask"),
		$liquidInsideMask02 = $("#LiquidInside2Mask"),
		$liquidInsideMask03 = $("#LiquidInside3Mask"),
		$liquidInsideMask04 = $("#LiquidInside4Mask"),
		$liquidInsideMask05 = $("#LiquidInside5Mask"),
		$liquidInsideMask06 = $("#LiquidInside6Mask"),
		$liquidInsideMask07 = $("#LiquidInside7Mask"),
		$bulb1 = $('#Bulb1 .bulb'),
		$bulb2 = $('#Bulb2 .bulb'),
		$bulb3 = $('#Bulb3 .bulb'),
		$meterBcg = $('#meterBcg'),
		$meterStroke = $('#meterStroke'),
		$part2Light = $('#Part2 .light'),
		$part2LightLeft = $('#Part2 .light-left'),
		$part2LightMid = $('#Part2 .light-mid'),
		$part2LightRight = $('#Part2 .light-right'),
		$printerLightsTop = $('#PrinterLIghtTop, #PrinterLIghtTop_2_'),
		$printetLightsBottom = $('#PrinterLIghtBottom, #PrinterLIghtBottom_1_'),
		$mainLight = $('#MainLight'),
		$paper = $('#Paper'),
		$slider = $('#slider'),
		$stage = $('#stage'),
		$mainMask = $('#MainMask'),
		$h1 = $('h1'),
		$body = $('body'),
		$smile = $('#smile')
	mainTL = new TimelineMax();

	function clearStage() {
		let clearTL = new TimelineMax();

		clearTL
			.set($coin, { x: -90, y: 120, scale: 0.5, transformOrigin: 'center center' })
			.set($mainBulb, { fill: '#ffffff' })
			.set($liquids, { stroke: '#ffffff' })
			.set($Petr, { autoAlpha: 1, x: '1400%', scale: 2.5, transformOrigin: "bottom center" })
			.set($stage, { autoAlpha: 0.5 })
			.set($mainMask, { attr: { x: 932 } })
			// Clear liquid
			.set($liquidInsideMask01, { attr: { y: 492 } }) //y value = y +  height
			.set($liquidInsideMask02, { attr: { y: 494 } })
			.set($liquidInsideMask03, { attr: { y: 491 } })
			.set($liquidInsideMask04, { attr: { y: 650 } })
			.set($liquidInsideMask05, { attr: { y: 654 } })
			.set($liquidInsideMask06, { attr: { y: 651 } })
			.set($liquidInsideMask07, { attr: { y: 651 } })
			.set($pointer, { rotation: -45, transformOrigin: 'bottom center' })
			.set($paper, { y: '+=55' })
			;


		return clearTL;

	}

	function getIntroTl() {
		let introTL = new TimelineMax();


		introTL
			.set($h1, { y: '-=40px' })
			.to($Petr, 0.8, { x: '76%', ease: Power4.easeInOut })
			.fromTo($h1, 0.5, { x: '-46%', autoAlpha: 0 }, { x: '-50%', autoAlpha: 1 })
			.fromTo($smile, 0.4, { scale: 0.4, transformOrigin: 'bottom center' }, { scale: 1, transformOrigin: 'bottom center' }, '+=1.2')
			.add('zoom-out')
			.to($Petr, 1, { x: '0%', scale: 1, ease: Power4.easeInOut }, 'zoom-out+=1')
			.to($h1, 0.5, { autoAlpha: 0 }, 'zoom-out+=1')
			.to($mainMask, 1, { attr: { x: 131 }, ease: Power4.easeInOut }, 'zoom-out+=1')
			.set($body, { className: "+=is-active" }, 'zoom-out+=1')
			.set($h1, { y: '-=60px', text: 'and this is my GreenSock Lab!' })
			.add('text-in')
			.to($h1, 0.3, { y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut }, 'text-in')
			.to($h1, 0.2, { y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut }, '+=2.5')
			.set($h1, { y: '-=30px', text: 'Let\'s have some fun!' })
			.to($h1, 0.3, { y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut })
			.to($h1, 0.2, { y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut }, '+=2')
			.to($stage, 0.2, { autoAlpha: 1, ease: Power0.none }, '-=0.2')
			;

		return introTL;
	}

	function getIdeaTl() {
		let ideaTL = new TimelineMax();

		ideaTL
			.set($bulbIdea, { autoAlpha: 1, immediateRender: false })
			.from($bulbIdea, 0.5, { y: '+=40px', ease: Bounce.easeOut })
			.set($h1, { y: '-=30px', text: 'You have a cool idea, right?' })
			.to($h1, 0.3, { y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut })
			.to($h1, 0.2, { y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut }, '+=2')
			.set($h1, { y: '-=30px', text: 'And now what?' })
			.fromTo($bulbIdeaLight, 0.3, { fill: '#ffffff' }, { fill: '#73C996', repeat: 3, yoyo: true })
			.fromTo($bulbIdeaLight, 0.3, { fill: '#ffffff' }, { fill: '#F8876E', repeat: 3, yoyo: true })
			.fromTo($bulbIdeaLight, 0.8, { fill: '#ffffff' }, { fill: '#F8AD43' })
			.to($bulbIdea, 0.6, { y: '-=20px', scale: 1.1, transformOrigin: 'center bottom', ease: Power4.easeOut })
			.to($bulbIdea, 0.2, { y: '+=120px', scale: 0.8, ease: Back.easeInOut })

			// Idea out of the head
			.set($coin, { autoAlpha: 1 }, '+=0.3')
			.to($coin, 6, { rotation: 720, bezier: { curviness: 0.3, values: path }, ease: SlowMo.ease.config(0.9, 0.7, false) })
			.to($h1, 0.3, { y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut }, '-=5.5')
			.to($h1, 0.2, { y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut }, '-=3.5')
			.set($h1, { y: '-=30px', text: 'Let GreenSock do the rest!?' }, '-=3.3')
			.to($h1, 0.3, { y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut }, '-=3.2')
			.to($h1, 0.2, { y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut }, '-=1.2')
			.to($part1, 0.06, { rotation: 5, y: '+=5px', x: '+=3px', transformOrigin: 'bottom right', repeat: 5, yoyo: true })
			;

		return ideaTL;
	}
	function getPart2Tl() {
		let part2TL = new TimelineMax();

		part2TL
			.add('part2-lights')
			.to($pointer, 2, { rotation: 20 })
			.staggerTo($part2Light, 0.1, { fill: '#F8AD43' }, 0.1, 'part2-lights')
			.staggerTo($part2Light, 0.1, { fill: '#F8876E' }, 0.1, 'part2-lights+=0.5')
			.staggerTo($part2Light, 0.1, { fill: '#73C996' }, 0.1, 'part2-lights+=1')
			.to($meterBcg, 0.2, { fill: '#5AB783' }, 'part2-lights+=1.2')
			.to($meterStroke, 0.2, { stroke: '#448962' }, 'part2-lights+=1.2')
			.to($slider, 1.2, { x: '-=10px', ease: Power4.easeInOut }, 'part2-lights+=1.4')
			.set($bulb1, { fill: '#5AB783' }, 'part2-lights+=2.6')
			.set($bulb2, { fill: '#F8876E' }, 'part2-lights+=3')
			.set($bulb3, { fill: '#F8AD43' }, 'part2-lights+=3.4')
			;

		return part2TL;
	}
	function init() {
		mainTL
			.add(clearStage())
			.add(getIntroTl(), 'scene-intro')
			.add(getIdeaTl(), 'scene-idea')
			.add(getPart2Tl(), 'scene-part2');

		mainTL.seek('scene-part2');
	}

	init();

})(jQuery);