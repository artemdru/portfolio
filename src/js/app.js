import 'jquery';
import Model from '../assets/test_guy.gif';
import Contact from '../assets/contact_large.svg';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

import '../css/test.scss';

const moveText = () => {
    let scrollTop = $('html').scrollTop();

    console.log(scrollTop);

    if (scrollTop < 900){
        $('.contact-title').css('display', 'none');
        $('.contact-page-bg').css('opacity', '0');
        $('.intro-container').css('display', 'block');        
        $('.small-intro-container').css('display', 'block');
        $('.projects-title').css('display', 'none');
        $('.projects-title').css('left', '-50%');
        $('.projects-handle').css('display', 'none');

        let newScale = 100+ scrollTop/2.2;
        let newPos = -1*(newScale/2);

        $('.intro-container').css({
            'width': newScale+'vw', 
            'height': newScale+'vh',
            'margin-left': newPos+'vw',
            'margin-top': newPos+'vh'
        });

        $('.small-intro-container').css({
            'width': newScale*1.5+'vw', 
            'height': newScale*1.5+'vh',
            // 'margin-left': newPos*1.5+'vw',
            'margin-top': newPos*1.5+'vh',
        });

        resizeText();

        //TODO: Optimize for 4k
        if ($(window).width() > 1950 && scrollTop > 650){
            $('.intro-container').css('display', 'none');
        }

        $('.model').css('width', (25 + scrollTop/10) + 'vw');
        $('.model-small').css('width', (40 + scrollTop/10) + 'vh'); 

    } else if (scrollTop > 900 && scrollTop <= 1950){

        // console.log($(window).width());

        $('.contact-title').css('display', 'none');
        $('.contact-page-bg').css('opacity', '0');
        $('.projects-title').css('display', 'block');
        $('.projects-handle').css('display', 'none');
        $('.intro-container').css('display', 'none');
        $('.small-intro-container').css('display', 'none');

        let left;
        let top;
        let fontSize;

        if (scrollTop<=1950){
            top = 50;
            fontSize = 15;
            left = (scrollTop-1400)/8;
            if (left > 50){left = 50;}

        }

        if (scrollTop>1500 && scrollTop<=1950){
            top = 50-(scrollTop-1500)/8;
            fontSize = 15-(scrollTop-1500)/24;

            if (fontSize < 5){
                fontSize = 5;
            }
        }

        $('.projects-title').css({
            'left': left + '%',
            'top': top + '%',
            'font-size': fontSize + 'vmax',
        });

    } else if (scrollTop > 1950 && scrollTop < $(".project-3").position().top + $(".project-3").height()){

        $('.contact-title').css('display', 'none');
        $('#last-proj').removeClass("last-proj-fixed");
        $('.intro-container').css('display', 'none');
        $('.small-intro-container').css('display', 'none');
        $('.projects-title').css('display', 'none');
        // $('.projects-handle').css('display', 'block');

    } else if (scrollTop >= $(".project-3").position().top + $(".project-3").height()){

        $('.contact-title').css('display', 'block');
        $('.projects-handle').css('display', 'none');
        $('.intro-container').css('display', 'none');
        $('.small-intro-container').css('display', 'none');
        $('#last-proj').addClass("last-proj-fixed");

        let scrollSinceProject = (scrollTop - ($(".project-3").position().top + $(".project-3").height()));
        let width;
        let left;
        let top;
        let aspectModif = 1.7/Math.pow(($(window).width()/$(window).height()), 3.5);


        width = 6400 - scrollSinceProject*(5+(100*(1/scrollSinceProject)));
        left = 0.07241*width + scrollSinceProject/27;
        top = aspectModif + scrollSinceProject/23;

        if (scrollSinceProject < 300){
            aspectModif -= 9;
            // width = 6400;
        };


        if (width < 100){
            width = 100;
            left = 50;
            top = 50;
        }

       

        if (scrollSinceProject > 1000){
            $('.contact-page-bg').css('opacity', '1');
            top = 85 - scrollSinceProject/25;
            if (top > 50) {
                top = 50;
            } else if (top < 12){
                top = 12;
            }
        } else $('.contact-page-bg').css('opacity', '0');


        $('.contact-title').css({
            'width': width + 'vw',
            'left': left + 'vw',
            'top': top + '%',
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
        $('.intro-text').css('font-size', 25 + $('#intro-text-container').width()*0.1);
        $('.small-intro-text').css('font-size', 25 + $('#small-intro-text-container').width()*0.05);
    } else if (aspectRatio > 2.2){
        $('.intro-text').css('font-size', $('#intro-text-container').width()*0.05);
    } else $('.intro-text').css('font-size', $('#intro-text-container').width()*0.1);
}

const renderModel = () => {
    $(".model").attr({src: Model});
    $(".model-small").attr({src: Model});
    $(".contact-title").attr({src: Contact});
}

// resizeText();
renderModel();
moveText();

window.addEventListener('scroll', moveText);
