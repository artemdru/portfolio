import 'jquery';
import Model from '../assets/test_guy.gif';
import Contact from '../assets/contact.svg';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

import '../css/test.scss';

const moveText = () => {
    let scrollTop = $('html').scrollTop();

    if (scrollTop < 900){
        $('.intro-container').css('display', 'block');
        $('.projects-title').css('left', '-50%');

        let newScale = 100+ scrollTop/2.2;
        let newPos = -1*(newScale/2);

        $('.intro-container').css({
            'width': newScale+'vw', 
            'height': newScale+'vh',
            'margin-left': newPos+'vw',
            'margin-top': newPos+'vh'
        });

        resizeText();

        $('.model').css('width', 400 + scrollTop); 
    } else if (scrollTop > 900 && scrollTop <= 1850){
        $('.projects-title').css('display', 'block');
        $('.projects-handle').css('display', 'none');
        $('.intro-container').css('display', 'none');

        let left;
        let top;
        let fontSize;

        if (scrollTop<=1500){
            top = 50;
            fontSize = 15;
            left = (scrollTop-1100)/8;

        } else if (scrollTop>1500 && scrollTop<=1850){
            left = 50;
            top = 50-(scrollTop-1500)/8;
            fontSize = 15-(scrollTop-1500)/24;

            if (fontSize < 5){
                fontSize = 5;
            }
        }

        $('.projects-title').css({
            'left': left + '%',
            'top': top + '%',
            'font-size': fontSize + 'vw',
        });

    } else if (scrollTop > 1850 && scrollTop < $(".project-3").position().top + $(".project-3").height()){

        $('#last-proj').removeClass("last-proj-fixed");
        $('.intro-container').css('display', 'none');
        $('.projects-title').css('display', 'none');
        $('.projects-handle').css('display', 'block');

    } else if (scrollTop >= $(".project-3").position().top + $(".project-3").height()){

        $('.projects-handle').css('display', 'none');
        $('.intro-container').css('display', 'none');
        $('#last-proj').addClass("last-proj-fixed");

        // let width;

        // if ($('.contact-title').width()/$(window).width()*100 > 350) {
            // let width = 2300 - ((scrollTop - ($(".project-3").position().top + $(".project-3").height()))/16)*(8 + Math.sqrt(Math.sqrt($('.contact-title').width())));
        // } 
        // else
        // let width = 2300 - ((scrollTop - ($(".project-3").position().top + $(".project-3").height()))/16)*16;

        let scrollSinceProject = (scrollTop - ($(".project-3").position().top + $(".project-3").height()));
        let width;
        let left;
        let top;

        width = 2300 - scrollSinceProject*1.4;

        // if (width <= 35){console.log(scrollTop)};

        if (width < 35){
            width = 35;
        }

        left = 0.23913*width + scrollSinceProject/39;
        top = 60 - scrollSinceProject/39;

        if (scrollSinceProject >= 1600){
            left = 50;
        }

        console.log(scrollSinceProject/39);


        // if (left <= 50){
        //     console.log((scrollTop - ($(".project-3").position().top + $(".project-3").height())));
        // }



        // console.log("LEFT: " + (0.19565*width + (scrollTop - ($(".project-3").position().top + $(".project-3").height()))/39));
        // console.log((scrollTop - ($(".project-3").position().top + $(".project-3").height()))/39);

        // console.log($('.contact-title').width());

        
        // times a modifier based on contact width that starts at 8 and exponentially decreases.

        // console.log(2300 - ((scrollTop - ($(".project-3").position().top + $(".project-3").height()))/16)*8);
        // console.log(Math.sqrt(Math.sqrt($('.contact-title').width())));
        // console.log(width);

        // console.log($('.contact-title').width());

        // console.log("TOP: " + (scrollTop - ($(".project-3").position().top + $(".project-3").height()))/16);
        // console.log("BOTTOM: " + (Math.sqrt(Math.sqrt(scrollTop))));

        // console.log($('.contact-title').width()/$(window).width()*100);

        $('.contact-title').css({
            'width': width + 'vw',
            'left': left + 'vw',
            // 'top': top + '%',
        });
    }

     
}

// Check aspect ratio, boost font size by 25 if narrow ratio.
// Otherwise, since text is based on width of containing element,
// it would be too small for narrower aspect ratios.
// Smaller font size for extra wide aspect ratios.
const resizeText = () => {
    let aspectRatio = $('.intro-container').width()/$('.intro-container').height();

    if (aspectRatio < 1.35){
        $('.intro-text').css('font-size', 25 + $('#intro-text-container').width()*0.2);
    } else if (aspectRatio > 2.2){
        $('.intro-text').css('font-size', $('#intro-text-container').width()*0.05);
    } else $('.intro-text').css('font-size', $('#intro-text-container').width()*0.1);
}

const resizeModel = () => {

}

const renderModel = () => {
    $(".model").attr({src: Model});
    $(".contact-title").attr({src: Contact});
}

resizeText();
renderModel();
moveText();

window.addEventListener('scroll', moveText);
