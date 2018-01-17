import 'jquery';
import Model from '../assets/test_guy.gif';
import Draggr from '../assets/draggr.svg';
import DraggrProj from '../assets/draggr-proj.png';
import Twitch from '../assets/twitch.png';

import Angular from '../assets/tech/angular.svg';
import CSS from '../assets/tech/css.svg';
import ES6 from '../assets/tech/es6.svg';
import Firebase from '../assets/tech/firebase.svg';
import Git from '../assets/tech/git.svg';
import HTML from '../assets/tech/html.svg';
import JavaScript from '../assets/tech/javascript.svg';
import JSON from '../assets/tech/json.svg';
import NPM from '../assets/tech/npm.svg';
import Sass from '../assets/tech/sass.svg';
import TypeScript from '../assets/tech/typescript.svg';
import Webpack from '../assets/tech/webpack.svg';
import JQuery from '../assets/tech/jquery.svg';
import Bootstrap from '../assets/tech/bootstrap.svg';

import WorkInProg from '../assets/workinprogress.svg';

import Contact from '../assets/contact_large.svg';
import Resume from '../assets/resume.svg';
import Github from '../assets/github.svg';
import Linkedin from '../assets/linkedin.svg';

// import 'bootstrap';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css';

import {scrollMove, resizeText} from './scroll.js';
import {bgChange, bgScrollResponse} from './background.js';


import './projects.js';
import '../css/style.scss';

const Test = () => {
    alert("Testing");
}

// $('.intro-text').css({
//     'opacity': '0',
//     'transform': 'translateX(10%)'
// });

// $('.model, .model-small').css({
//     'opacity': '0',
//     'transform': 'translateX(-10%)'
// });

$('.projects-container').css('opacity', '0');
var projectsLoaded = false;
var projOpacity;


// Attach src to images in index.html
const srcImages = () => {
    $(".model").attr(           {src: Model});
    $(".model-small").attr(     {src: Model});
    $(".draggr-logo").attr(     {src: Draggr});
    $(".draggr-proj").attr(     {src: DraggrProj});
    $(".twitch-proj").attr(     {src: Twitch});

    $(".angular-logo").attr(    {src: Angular});
    $(".css-logo").attr(        {src: CSS});
    $(".es6-logo").attr(        {src: ES6});
    $(".firebase-logo").attr(   {src: Firebase});
    $(".git-logo").attr(        {src: Git});
    $(".html-logo").attr(       {src: HTML});
    $(".javascript-logo").attr( {src: JavaScript});
    $(".json-logo").attr(       {src: JSON});
    $(".npm-logo").attr(        {src: NPM});
    $(".sass-logo").attr(       {src: Sass});
    $(".typescript-logo").attr( {src: TypeScript});
    $(".webpack-logo").attr(    {src: Webpack});
    $(".jquery-logo").attr(     {src: JQuery});
    $(".bootstrap-logo").attr(  {src: Bootstrap});

    $(".wip-icon").attr(        {src: WorkInProg});

    $(".contact-title").attr(   {src: Contact});
    $(".resume").attr(          {src: Resume});
    $(".github").attr(          {src: Github});
    $(".linkedin").attr(        {src: Linkedin});
}


// Check if opened on mobile device
var isMobile;
window.mobilecheck = function() {
  isMobile = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) isMobile = true;})(navigator.userAgent||navigator.vendor||window.opera);
  if (isMobile){}
};
mobilecheck();

srcImages();
// Use onscroll features if not on mobile
if (!isMobile){
    $('.mobile-intro, .mobile').css('display', 'none');

    $('.desktop-intro, .intro-placeholder, .scroller, .contact-title, .desktop').css('display', 'block');

    resizeText();
    scrollMove();
    window.addEventListener('scroll', scrollMove);
    window.addEventListener('resize', scrollMove);


    // Show intro after model has loaded
    $('.model').on('load', () => {
        scrollMove();
        $('.intro-text').toggleClass('unloaded');
        $('.intro-text').toggleClass('loaded');


        $('.model').toggleClass('loaded');
        $('.model-small').toggleClass('loaded');

        // Remove transition from model after loaded
        // Or else it will be wonky on scrolling
        setTimeout(() => {
            $('.model').toggleClass('unloaded');
            $('.model-small').toggleClass('unloaded');
        }, 500);
    });
}



// Scroll user to projects when 'Sign me up' is clicked.
$('.intro-med').click(() => {
    $('html, body').animate({
        scrollTop: $('.project-1').offset().top
    }, {
        duration: 2000,
        // easing: 'swing',
    });
});


// Display technology name on mouseover
let techNames = [];
$('.tech-logo-overlay').children().toArray().forEach((element, index) => {
    techNames[index] = $(element).attr('alt');
});
$('.tech-logo-overlay').toArray().forEach((element, index) => {
    let techName = document.createElement("p");
    techName.innerHTML = techNames[index];
    element.appendChild(techName);
});




// Show projects after projects have loaded
$('.projects-container').ready(() => {
    console.log("we got projects");

    projectsLoaded = true;

    let targetOpacity = 1;

    if (projOpacity){
        targetOpacity = projOpacity;
    }

    $('.projects-container').animate({
        opacity: targetOpacity
    }, 500);
});