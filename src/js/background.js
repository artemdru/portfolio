var changeFire;
var fireCooldown = true;
var isFired = false;

export const bgChange = (scrollTop) => {

    // console.log(isFired);

    clearTimeout(changeFire);
    changeFire = setTimeout(() => {
        bgScrollResponse(scrollTop);
    }, 500);

    if (!fireCooldown){
        // clearTimeout(changeFire);
        if (!isFired){
            isFired = true;
            setTimeout(() => {
                fireCooldown = true;
                isFired = false;
            }, 500);
        }
        
    } else if (fireCooldown){

        bgScrollResponse(scrollTop);

        fireCooldown = false;
    }
}

export const bgScrollResponse = (scrollTop) => {
    if (scrollTop < 1950-0.5*$(".project-1").height()){

            $('.bg').css('opacity', '0');

        } else if (scrollTop < 1950+0.5*$(".project-1").height()){

            console.log("green");

            $('.bg').css('opacity', '0');
            $('#green').css('opacity', '1');

        } else if (scrollTop < 1950+1.5*$(".project-1").height()){

            console.log("silver");

            $('.bg').css('opacity', '0');
            $('#silver').css('opacity', '1');

        } else if (scrollTop < 1950+2.5*$(".project-1").height()){

            console.log("purple");

            $('.bg').css('opacity', '0');
            $('#purple').css('opacity', '1');

        } else if (scrollTop > 1950+2.5*$(".project-1").height()){

            console.log("blue");

            $('.bg').css('opacity', '0');
            $('#blue').css('opacity', '1');

        }
}