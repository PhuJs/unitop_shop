
$(document).ready(function(){
    $('.menu-item').click(function(){
        $(this).next('ul').slideToggle(1000);
        return false;
    });

    $('.toggle_responsive').click(function(){
        $(this).next().find('ul').slideToggle(500);
        if($(this).find('i').hasClass('rotate')){
            $(this).find('i').removeClass('rotate');
        }else{
            $(this).find('i').addClass('rotate');
        }
    });

    $('#toggle').click(function(){
        $('#menu_responsive').slideToggle(1000);
    });

    $(window).resize(function(){
        $('#menu_responsive').slideUp(500);
    });

    $('.contact-item').hover(
        function(){
            $(this).find('.contact-icon').addClass('text-danger');
            $(this).find('.contact-text').addClass('text-danger');
        }, 
        function(){
            $(this).find('.contact-icon').removeClass('text-danger');
            $(this).find('.contact-text').removeClass('text-danger');
        }
    );

});
