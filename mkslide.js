var index = 0;
var slides;

function splitSlides(slidesElem){
    var text = slidesElem.text();
    return text.toString().split(/---+\n/);    
}

function markdown(text){
    return (new (Showdown.converter)).makeHtml(text)
}

function nextSlide(){
    var slide = slides[++index]
    if (!slide){
        index--
        return
    }
    showSlide(slide)
}
function prevSlide(){
    var slide = slides[--index]
    if (!slide){
        index++
        return
    }
    showSlide(slide)
}
function showSlide(slideText){
    var slideDiv = $('#slide');
    console.log(markdown(slideText))
    slideDiv.html(markdown(slideText))
}

function runSlides(){
    console.log("running slides...");
    slides = splitSlides($("#slidemd"));
    showSlide(slides[index]);
}

function resize(){
    var height = $(window).height()
    $('#slide').css({height: height + 'px'})
}

// function fit(){
// 	var slide = document.getElementById('slide')
//     slide.style.height = window.innerHeight + 'px'
// 	var text = $('#slide').text()
// 	  , lines = text.split('\n')
// 	  , longestLineLength = lines.reduce(function(curr, line){
// 			if (curr > line.length)
// 				return curr
// 			else
// 				return line.length
// 		}, 0)
// 	  , maxSize = !!$('#content .maxsize').length
// 	var fontSize = Math.min(
// 		maxSize ? Number.POSITIVE_INFINITY : window.innerWidth / 10, 
// 		1.5 * window.innerWidth / 
// 			longestLineLength, 
// 		0.5 * window.innerHeight / 
// 			lines.length)
//     console.log("fotn size:"+fontSize)
// 	$('#slide').css({'font-size': fontSize + 'px'})
// }

$(function(){
//     $(window).resize(fit)
// 	fit()
    $(document).keyup(function(e){
		var code = e.keyCode
		if (code == 39)
			nextSlide()
		if (code == 37)
			prevSlide()
    })
    runSlides();
})