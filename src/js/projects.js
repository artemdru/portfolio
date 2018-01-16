// import 'flickity';
import 'flickity/dist/flickity.min.css';
import 'flickity/dist/flickity.pkgd.min.js';

var Flickity = require('flickity');

let carouselElems = document.querySelectorAll('.carousel');

for (let i=0, len = carouselElems.length; i< len; i++){
	var carouselElem = carouselElems[i];
	var thisFlick = new Flickity(carouselElem, {

	    accessibility: true,
	    cellAlign: 'left',
	    contain: true,
	    draggable: true,
	    // prevNextButtons: false,
	});
}

// var flkty1 = new Flickity( '.carousel-1', {

//     accessibility: true,
//     cellAlign: 'left',
//     contain: true,
//     draggable: true,
//     // prevNextButtons: false,
// });

// var flkty2 = new Flickity( '.carousel-2', {

//     accessibility: true,
//     cellAlign: 'left',
//     contain: true,
//     draggable: true,
//     // prevNextButtons: false,
// });