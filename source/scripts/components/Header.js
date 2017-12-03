import Services from '../service/Services';

class Header {
    constructor(){
        this.serv = new Services();
        this.setListeners();
    }

    setListeners() {
        $('.navbar-toggle').bind('click', (e)=> this.openMenuThree(e));
    }

    openMenuThree() {
        $('.navbar-toggle').toggleClass('close');
        $('.menu, .header__help').show();
        $('.header__search').fadeIn('normal');
        if($('.menu').hasClass('opened-menu')) {
            TweenMax.fromTo($('.menu, .header__help'), 0.4, {x: "0%"}, {x: "100%", ease: Quad.easeInOut});
            $('.menu').removeClass('opened-menu');
            $('.header__search').fadeOut('fast');
        }else{
            $('.menu').addClass('opened-menu');
            $('.navbar-toggle').removeClass('purple-menu');
            TweenMax.fromTo($('.menu, .header__help'), 0.6, {x: "110%"}, {x: "0%", ease: Quad.easeInOut});
        }
    }
}

export default Header;
