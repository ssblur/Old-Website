var slides = ["resources/slides/slide1.png","resources/slides/slide2.png"];
var current_slide = 1;
function slideshow_cycle(){
	var slideshows = document.getElementsByClassName("slideshow");
	for(var i = 0; i<slideshows.length; i++){
		var img = document.createElement("img");
		img.src = slides[(current_slide+1)%slides.length];
		img.slideshows = slideshows;
		img.i = i;
		img.onload = function(){
			var slideshows = this.slideshows;
			var i = this.i;
			var anim = parseInt(slideshows[i].style.animationName.charAt(9)) ? parseInt(slideshows[i].style.animationName.charAt(9)) : 0;
			slideshows[i].style.backgroundImage = "url(\""+slides[(current_slide++)%slides.length]+"\")";
			if(Math.random()>.5||anim==0){
				slideshows[i].style.animationName = "slideshow"+((anim+1)%4);
			} else {
				slideshows[i].style.animationName = "slideshow"+(anim-1);
			}
			this.remove();
		}
	}
	setTimeout(slideshow_cycle, 12000);
}
