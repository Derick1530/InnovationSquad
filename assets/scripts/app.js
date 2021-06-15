document.addEventListener('DOMContentLoaded', function () {
	new Splide('.splide').mount();
	var elms = document.getElementsByClassName('splide');
	for (var i = 0, len = elms.length; i < len; i++) {
		new Splide(elms[i]).mount();
	}

	new Splide('#card-slider', {
		perPage: 3,
		height: '30rem',
		breakpoints: {
			600: {
				perPage: 1,
			}
		}
	}).mount();
});