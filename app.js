function getPixelValue() {
	jarakImgToTopPage = document.querySelector('.hero-content-wrapper').offsetTop;
	tinggiImgSection = document.querySelector('.hero-content-wrapper').offsetHeight;
}

function heroScaleImage() {
	width = Math.min(40 + scrollTop / 18);
	if (width >= 40 && Math.ceil(width) <= 100) {
		document.querySelector('.img-hero-container').style.width = Math.ceil(width) + '%';
	} else if (width > 100) {
		document.querySelector('.img-hero-container').style.width = '100%';
	}
}

window.onresize = function () {
	getPixelValue();
	heroScaleImage();
};

window.onscroll = function () {
	scrollTop = window.pageYOffset;
	heroScaleImage();
};

$(window).on('load', function () {
	scrollTop = window.pageYOffset;
	getPixelValue();
	heroScaleImage();
});
