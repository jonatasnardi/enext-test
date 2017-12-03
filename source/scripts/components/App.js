import Services from '../service/Services';

var done = true;

class App {
    constructor(){
        this.cookie = new Cookie();
        let self = this;

        this.serv = new Services();
        this.preSelector = '#modalC2b';
        $('#btnAntecipeAgora, .hire-package-now').bind('click', (e)=> this.onOpenModal(e));
        $(this.preSelector + ' input[data-number="phoneNumber"]').bind("focus", (e)=> this.onFocus(e));
        $(this.preSelector + ' #formHire').on('submit', (e)=> this.onSubmit(e));
        let urlHash = window.location.hash;
        if(urlHash.indexOf('svas_turbo') > -1 && window.location.pathname == '/') {
            setTimeout(function() {
                self.scrollToSection('apps-section', 300);
            }, 700);
        }
    }

    onOpenModal(e) {
        $(this.preSelector + ' input[name="product"]').val($(e.currentTarget).data('key').toString());
        $(this.preSelector + ' .box__title').text('Quer antecipar a sua renovação?');
        $(this.preSelector + ' .box__description').text('Digite seu telefone abaixo');
        $(this.preSelector).show();
        TweenMax.fromTo($(this.preSelector + ' .modal-dialog'), 0.6, {x: "100%", 'opacity': '0'}, {x: "0%", 'opacity': '1', ease: Back.easeInOut, onComplete: this.onCompleteHandler});
        $("html, body").css("overflow", "hidden");

        if($(window).width() >= 768){
            $(this.preSelector + ' [data-number="phoneNumber"]').focus();
        }
    }

    onSubmit(e) {
        e.stopPropagation();
        e.preventDefault();

        let response = "";

        let inputPhoneNumber = $(this.preSelector + ' input[data-number="phoneNumber"]'),
            phoneNumber = $(inputPhoneNumber).val(),
            formatedNumber = phoneNumber.replace(/[^0-9]+/g, ''),
            ddd = formatedNumber.slice(0, 2),
            number = formatedNumber.substring(2);
            response = grecaptcha.getResponse();

        if (phoneNumber.length < 14) {
            $(this.preSelector + ' input[data-number="phoneNumber"]').addClass('error');
            $(this.preSelector + ' input[data-number="phoneNumber"]').attr('placeholder', 'Digite um número válido');
            $(this.preSelector + ' input[data-number="phoneNumber"]').val('');
        } else if(response.length == 0 && !window.done) {
            $(this.preSelector + ' .error-recaptcha').slideDown('fast');
        }else {
            $(this.preSelector + ' input[name="DDD"]').val(ddd);
            $(this.preSelector + ' input[name="Cel"]').val(number);
            jQuery.support.cors = true;
            this.data = {};
            this.serv.ajaxByUrl('https://www.vivoturbo.com.br/api/security', 'POST', this.onSuccessDataPost(), (error)=> this.onErrorDataPost(error), $(this.preSelector + ' #formHire'));

            $(this.preSelector + ' input[data-number="phoneNumber"]').removeClass('error');
            $(this.preSelector + ' .error-recaptcha').slideUp('fast');
        }
    }

    onSuccessDataPost(data) {
        $(this.preSelector + ' .wrapper__container').hide();
        $(this.preSelector + ' .wrapper__success').fadeIn('fast');
    }

    onErrorDataPost(error){
        // console.log("Ocorreu um erro inesperado, por favor tente novamente.");
    }

    onFocus(e) {
        $(this.preSelector + ' input[data-number="phoneNumber"]').removeClass('error');
    }

    onCompleteHandler() {
        $('.animated-box').addClass('stop-animation');
    }

    scrollToSection(_id, _time){
        let top = $("#"+_id).offset().top - $(".header__center").height();
        $("body, html").animate({
            scrollTop: top - 60
        }, _time);
    }
}

export default App;
