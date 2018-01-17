import {bgChange, bgScrollResponse} from './background.js';

export const scrollMove = () => {
    let scrollTop = $('html').scrollTop();

    // if (scrollTop > 0) {alert(scrollTop);}

    let aspectRatio = $('.intro-container').width()/$('.intro-container').height();
    let projectsModif = 1;

    if (aspectRatio > 2/3 && aspectRatio < 4/3){projectsModif = 1.5};

    if (scrollTop < 500*projectsModif){
        $('.contact-title').css('display', 'none');
        $('.contact-page-bg').css('opacity', '0');
        $('.intro-container').css('display', 'block');        
        $('.small-intro-container').css('display', 'block');
        $('.projects-title').css('display', 'none');
        $('.projects-title').css('left', '-50%');
        $('.projects-handle').css('display', 'none');

        let newScale = 100+ scrollTop/1.2;
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
        // if ($(window).width() > 1950 && scrollTop > 650){
        //     $('.intro-container').css('display', 'none');
        // }

        $('.model').css('width', (25 + scrollTop/10) + 'vw');
        $('.model-small').css('width', (40 + scrollTop/10) + 'vh'); 

    } else if (scrollTop > 500*projectsModif && scrollTop <= 1950){



        bgChange(scrollTop);

        $('.contact-title').css('display', 'none');
        $('.contact-page-bg').css('opacity', '0');
        $('.projects-title').css('display', 'block');
        $('.projects-handle').css('display', 'none');
        $('.intro-container').css('display', 'none');
        $('.small-intro-container').css('display', 'none');

        let left;
        let top;
        let fontSize;
        let projOpacity = (4*(scrollTop - (1950 - 500*projectsModif)))/1000;

        if ($('.projects-container').ready()){
            $('.projects-container').css('opacity', projOpacity);
        }

        // console.log((4*(scrollTop - (1950 - 500*projectsModif)))/1000);

        if (scrollTop<=1950){
            top = 50;
            fontSize = 15;
            left = (scrollTop-1100)/8;
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

        bgChange(scrollTop);
        // console.log(scrollTop);

        $('.contact-title').css('display', 'none');
        $('#last-proj').removeClass("last-proj-fixed");
        $('.intro-container').css('display', 'none');
        $('.small-intro-container').css('display', 'none');
        $('.projects-title').css('display', 'none');
        // $('.projects-handle').css('display', 'block');

    } else if (scrollTop >= $(".project-3").position().top + $(".project-3").height()){

        bgChange(scrollTop);

        $('.contact-title').css('display', 'block');
        $('.projects-handle').css('display', 'none');
        $('.intro-container').css('display', 'none');
        $('.small-intro-container').css('display', 'none');
        $('#last-proj').addClass("last-proj-fixed");
        $('.contact-form-container').css('margin-top', '50vh');

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
            left = 49.5;
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

        if (scrollSinceProject > 1400){
            let contactTop = ((1911 - scrollSinceProject)/5)-50;
            let contactOpacity = (100 - ((1911 - scrollSinceProject)/5))/100;

            $('.contact-form-container').css({
                'margin-top': contactTop + 'vh',
                'opacity': contactOpacity
            });

            // console.log(contactOpacity);            
        }


        // console.log(left);

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
export const resizeText = () => {
    let aspectRatio = $('.intro-container').width()/$('.intro-container').height();

    // console.log(aspectRatio);

    if (aspectRatio <= 2/3){
        $('.intro-thin').css('font-size', $('#small-intro-text-container').width()*0.03);
        $('.intro-med').css('font-size', $('#small-intro-text-container').width()*0.06);
        $('.intro-artem').css('font-size', $('#small-intro-text-container').width()*0.08);
        $('.intro-druzhkov').css('font-size', $('#small-intro-text-container').width()*0.08);

    } else if (aspectRatio > 2/3 && aspectRatio < 1.35) {
        $('.intro-thin').css('font-size', $('#small-intro-text-container').width()*0.025);
        $('.intro-med').css('font-size', $('#small-intro-text-container').width()*0.035);
        $('.intro-artem').css('font-size', $('#small-intro-text-container').width()*0.04);
        $('.intro-druzhkov').css('font-size', $('#small-intro-text-container').width()*0.04);

    } else if (aspectRatio > 2.2){
        $('.intro-thin').css('font-size', $('#intro-text-container').width()*0.03);
        $('.intro-med').css('font-size', $('#intro-text-container').width()*0.05);
        $('.intro-artem').css('font-size', $('#intro-text-container').width()*0.06);
        $('.intro-druzhkov').css('font-size', $('#intro-text-container').width()*0.06);
        
    } else {
        $('.intro-thin').css('font-size', $('#intro-text-container').width()*0.06);
        $('.intro-med').css('font-size', $('#intro-text-container').width()*0.1);
        $('.intro-artem').css('font-size', $('#intro-text-container').width()*0.12);
        $('.intro-druzhkov').css('font-size', $('#intro-text-container').width()*0.12);
    }
}