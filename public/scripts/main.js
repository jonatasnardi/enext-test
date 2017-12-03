/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

var _App = __webpack_require__(3);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function Main() {
    _classCallCheck(this, Main);

    new _App2.default();
};

(0, _jquery2.default)(window).on('load', function () {
    new Main();
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Services = __webpack_require__(4);

var _Services2 = _interopRequireDefault(_Services);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var done = true;

var App = function () {
    function App() {
        var _this = this;

        _classCallCheck(this, App);

        this.cookie = new Cookie();
        var self = this;

        this.serv = new _Services2.default();
        this.preSelector = '#modalC2b';
        $('#btnAntecipeAgora, .hire-package-now').bind('click', function (e) {
            return _this.onOpenModal(e);
        });
        $(this.preSelector + ' input[data-number="phoneNumber"]').bind("focus", function (e) {
            return _this.onFocus(e);
        });
        $(this.preSelector + ' #formHire').on('submit', function (e) {
            return _this.onSubmit(e);
        });
        var urlHash = window.location.hash;
        if (urlHash.indexOf('svas_turbo') > -1 && window.location.pathname == '/') {
            setTimeout(function () {
                self.scrollToSection('apps-section', 300);
            }, 700);
        }
    }

    _createClass(App, [{
        key: 'onOpenModal',
        value: function onOpenModal(e) {
            $(this.preSelector + ' input[name="product"]').val($(e.currentTarget).data('key').toString());
            $(this.preSelector + ' .box__title').text('Quer antecipar a sua renovação?');
            $(this.preSelector + ' .box__description').text('Digite seu telefone abaixo');
            $(this.preSelector).show();
            TweenMax.fromTo($(this.preSelector + ' .modal-dialog'), 0.6, { x: "100%", 'opacity': '0' }, { x: "0%", 'opacity': '1', ease: Back.easeInOut, onComplete: this.onCompleteHandler });
            $("html, body").css("overflow", "hidden");

            if ($(window).width() >= 768) {
                $(this.preSelector + ' [data-number="phoneNumber"]').focus();
            }
        }
    }, {
        key: 'onSubmit',
        value: function onSubmit(e) {
            var _this2 = this;

            e.stopPropagation();
            e.preventDefault();

            var response = "";

            var inputPhoneNumber = $(this.preSelector + ' input[data-number="phoneNumber"]'),
                phoneNumber = $(inputPhoneNumber).val(),
                formatedNumber = phoneNumber.replace(/[^0-9]+/g, ''),
                ddd = formatedNumber.slice(0, 2),
                number = formatedNumber.substring(2);
            response = grecaptcha.getResponse();

            if (phoneNumber.length < 14) {
                $(this.preSelector + ' input[data-number="phoneNumber"]').addClass('error');
                $(this.preSelector + ' input[data-number="phoneNumber"]').attr('placeholder', 'Digite um número válido');
                $(this.preSelector + ' input[data-number="phoneNumber"]').val('');
            } else if (response.length == 0 && !window.done) {
                $(this.preSelector + ' .error-recaptcha').slideDown('fast');
            } else {
                $(this.preSelector + ' input[name="DDD"]').val(ddd);
                $(this.preSelector + ' input[name="Cel"]').val(number);
                jQuery.support.cors = true;
                this.data = {};
                this.serv.ajaxByUrl('https://www.vivoturbo.com.br/api/security', 'POST', this.onSuccessDataPost(), function (error) {
                    return _this2.onErrorDataPost(error);
                }, $(this.preSelector + ' #formHire'));

                $(this.preSelector + ' input[data-number="phoneNumber"]').removeClass('error');
                $(this.preSelector + ' .error-recaptcha').slideUp('fast');
            }
        }
    }, {
        key: 'onSuccessDataPost',
        value: function onSuccessDataPost(data) {
            $(this.preSelector + ' .wrapper__container').hide();
            $(this.preSelector + ' .wrapper__success').fadeIn('fast');
        }
    }, {
        key: 'onErrorDataPost',
        value: function onErrorDataPost(error) {
            // console.log("Ocorreu um erro inesperado, por favor tente novamente.");
        }
    }, {
        key: 'onFocus',
        value: function onFocus(e) {
            $(this.preSelector + ' input[data-number="phoneNumber"]').removeClass('error');
        }
    }, {
        key: 'onCompleteHandler',
        value: function onCompleteHandler() {
            $('.animated-box').addClass('stop-animation');
        }
    }, {
        key: 'scrollToSection',
        value: function scrollToSection(_id, _time) {
            var top = $("#" + _id).offset().top - $(".header__center").height();
            $("body, html").animate({
                scrollTop: top - 60
            }, _time);
        }
    }]);

    return App;
}();

exports.default = App;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Services = function () {
    function Services() {
        _classCallCheck(this, Services);

        this.baseUrl = "";

        if (window.location.pathname.indexOf("compartilhe") > -1 || window.location.pathname.indexOf("pacotes-turbinados") > -1 || window.location.pathname.indexOf("tire-suas-duvidas") > -1 || window.location.pathname.indexOf("venha-para-vivo") > -1) {
            this.baseUrl = "../";
        }
    }

    _createClass(Services, [{
        key: "ajaxByUrl",
        value: function ajaxByUrl(_url, _verb, _success, _error, _form, _timeout) {
            if (_url.indexOf("http") > -1) {
                this.baseUrl = "";
            }
            return $.ajax({
                url: this.baseUrl + _url,
                type: _verb,
                dataType: 'json',
                data: _form ? $(_form).serialize() : $(this).serialize(),
                timeout: _timeout ? _timeout : 0,
                success: function success(data, textStatus, xhr) {
                    _success(data, textStatus, xhr);
                },
                fail: function fail(error) {
                    _error(error);
                }
            });
            return "";
        }
    }, {
        key: "getUrlParam",
        value: function getUrlParam(name, url) {
            if (!url) url = location.href;
            name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regexS = "[\\?&]" + name + "=([^&#]*)";
            var regex = new RegExp(regexS);
            var results = regex.exec(url);
            return results == null ? null : results[1];
        }
    }]);

    return Services;
}();

exports.default = Services;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjZmYTcwZmE5ODA0ZTAwNzY0NTkiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly8vLi9zb3VyY2Uvc2NyaXB0cy9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2Uvc2NyaXB0cy9zZXJ2aWNlL1NlcnZpY2VzLmpzIl0sIm5hbWVzIjpbIk1haW4iLCJ3aW5kb3ciLCJvbiIsImRvbmUiLCJBcHAiLCJjb29raWUiLCJDb29raWUiLCJzZWxmIiwic2VydiIsInByZVNlbGVjdG9yIiwiJCIsImJpbmQiLCJlIiwib25PcGVuTW9kYWwiLCJvbkZvY3VzIiwib25TdWJtaXQiLCJ1cmxIYXNoIiwibG9jYXRpb24iLCJoYXNoIiwiaW5kZXhPZiIsInBhdGhuYW1lIiwic2V0VGltZW91dCIsInNjcm9sbFRvU2VjdGlvbiIsInZhbCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhIiwidG9TdHJpbmciLCJ0ZXh0Iiwic2hvdyIsIlR3ZWVuTWF4IiwiZnJvbVRvIiwieCIsImVhc2UiLCJCYWNrIiwiZWFzZUluT3V0Iiwib25Db21wbGV0ZSIsIm9uQ29tcGxldGVIYW5kbGVyIiwiY3NzIiwid2lkdGgiLCJmb2N1cyIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJpbnB1dFBob25lTnVtYmVyIiwicGhvbmVOdW1iZXIiLCJmb3JtYXRlZE51bWJlciIsInJlcGxhY2UiLCJkZGQiLCJzbGljZSIsIm51bWJlciIsInN1YnN0cmluZyIsImdyZWNhcHRjaGEiLCJnZXRSZXNwb25zZSIsImxlbmd0aCIsImFkZENsYXNzIiwiYXR0ciIsInNsaWRlRG93biIsImpRdWVyeSIsInN1cHBvcnQiLCJjb3JzIiwiYWpheEJ5VXJsIiwib25TdWNjZXNzRGF0YVBvc3QiLCJlcnJvciIsIm9uRXJyb3JEYXRhUG9zdCIsInJlbW92ZUNsYXNzIiwic2xpZGVVcCIsImhpZGUiLCJmYWRlSW4iLCJfaWQiLCJfdGltZSIsInRvcCIsIm9mZnNldCIsImhlaWdodCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJTZXJ2aWNlcyIsImJhc2VVcmwiLCJfdXJsIiwiX3ZlcmIiLCJfc3VjY2VzcyIsIl9lcnJvciIsIl9mb3JtIiwiX3RpbWVvdXQiLCJhamF4IiwidXJsIiwidHlwZSIsImRhdGFUeXBlIiwic2VyaWFsaXplIiwidGltZW91dCIsInN1Y2Nlc3MiLCJ0ZXh0U3RhdHVzIiwieGhyIiwiZmFpbCIsIm5hbWUiLCJocmVmIiwicmVnZXhTIiwicmVnZXgiLCJSZWdFeHAiLCJyZXN1bHRzIiwiZXhlYyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7OztBQUNBOzs7Ozs7OztJQUVNQSxJLEdBQ0YsZ0JBQWM7QUFBQTs7QUFDVjtBQUNILEM7O0FBR0wsc0JBQUVDLE1BQUYsRUFBVUMsRUFBVixDQUFhLE1BQWIsRUFBcUIsWUFBVztBQUM1QixRQUFJRixJQUFKO0FBQ0gsQ0FGRCxFOzs7Ozs7QUNUQSx3Qjs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7O0FBRUEsSUFBSUcsT0FBTyxJQUFYOztJQUVNQyxHO0FBQ0YsbUJBQWE7QUFBQTs7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ZixHQUFaLENBQWQ7QUFDQSxtQkFBT2MsV0FBVyxJQUFYLEdBQWtCLElBQWxCLEdBQXlCQSxRQUFRLENBQVIsQ0FBaEM7QUFDSDs7Ozs7O2tCQUdVdkIsUSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjZmYTcwZmE5ODA0ZTAwNzY0NTkiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJztcblxuY2xhc3MgTWFpbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIG5ldyBBcHAoKTtcbiAgICB9XG59XG5cbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgIG5ldyBNYWluKCk7XG59KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9zY3JpcHRzL21haW4uanMiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpRdWVyeVwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBTZXJ2aWNlcyBmcm9tICcuLi9zZXJ2aWNlL1NlcnZpY2VzJztcblxudmFyIGRvbmUgPSB0cnVlO1xuXG5jbGFzcyBBcHAge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuY29va2llID0gbmV3IENvb2tpZSgpO1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5zZXJ2ID0gbmV3IFNlcnZpY2VzKCk7XG4gICAgICAgIHRoaXMucHJlU2VsZWN0b3IgPSAnI21vZGFsQzJiJztcbiAgICAgICAgJCgnI2J0bkFudGVjaXBlQWdvcmEsIC5oaXJlLXBhY2thZ2Utbm93JykuYmluZCgnY2xpY2snLCAoZSk9PiB0aGlzLm9uT3Blbk1vZGFsKGUpKTtcbiAgICAgICAgJCh0aGlzLnByZVNlbGVjdG9yICsgJyBpbnB1dFtkYXRhLW51bWJlcj1cInBob25lTnVtYmVyXCJdJykuYmluZChcImZvY3VzXCIsIChlKT0+IHRoaXMub25Gb2N1cyhlKSk7XG4gICAgICAgICQodGhpcy5wcmVTZWxlY3RvciArICcgI2Zvcm1IaXJlJykub24oJ3N1Ym1pdCcsIChlKT0+IHRoaXMub25TdWJtaXQoZSkpO1xuICAgICAgICBsZXQgdXJsSGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICAgICAgICBpZih1cmxIYXNoLmluZGV4T2YoJ3N2YXNfdHVyYm8nKSA+IC0xICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSAnLycpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zY3JvbGxUb1NlY3Rpb24oJ2FwcHMtc2VjdGlvbicsIDMwMCk7XG4gICAgICAgICAgICB9LCA3MDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25PcGVuTW9kYWwoZSkge1xuICAgICAgICAkKHRoaXMucHJlU2VsZWN0b3IgKyAnIGlucHV0W25hbWU9XCJwcm9kdWN0XCJdJykudmFsKCQoZS5jdXJyZW50VGFyZ2V0KS5kYXRhKCdrZXknKS50b1N0cmluZygpKTtcbiAgICAgICAgJCh0aGlzLnByZVNlbGVjdG9yICsgJyAuYm94X190aXRsZScpLnRleHQoJ1F1ZXIgYW50ZWNpcGFyIGEgc3VhIHJlbm92YcOnw6NvPycpO1xuICAgICAgICAkKHRoaXMucHJlU2VsZWN0b3IgKyAnIC5ib3hfX2Rlc2NyaXB0aW9uJykudGV4dCgnRGlnaXRlIHNldSB0ZWxlZm9uZSBhYmFpeG8nKTtcbiAgICAgICAgJCh0aGlzLnByZVNlbGVjdG9yKS5zaG93KCk7XG4gICAgICAgIFR3ZWVuTWF4LmZyb21UbygkKHRoaXMucHJlU2VsZWN0b3IgKyAnIC5tb2RhbC1kaWFsb2cnKSwgMC42LCB7eDogXCIxMDAlXCIsICdvcGFjaXR5JzogJzAnfSwge3g6IFwiMCVcIiwgJ29wYWNpdHknOiAnMScsIGVhc2U6IEJhY2suZWFzZUluT3V0LCBvbkNvbXBsZXRlOiB0aGlzLm9uQ29tcGxldGVIYW5kbGVyfSk7XG4gICAgICAgICQoXCJodG1sLCBib2R5XCIpLmNzcyhcIm92ZXJmbG93XCIsIFwiaGlkZGVuXCIpO1xuXG4gICAgICAgIGlmKCQod2luZG93KS53aWR0aCgpID49IDc2OCl7XG4gICAgICAgICAgICAkKHRoaXMucHJlU2VsZWN0b3IgKyAnIFtkYXRhLW51bWJlcj1cInBob25lTnVtYmVyXCJdJykuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3VibWl0KGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCI7XG5cbiAgICAgICAgbGV0IGlucHV0UGhvbmVOdW1iZXIgPSAkKHRoaXMucHJlU2VsZWN0b3IgKyAnIGlucHV0W2RhdGEtbnVtYmVyPVwicGhvbmVOdW1iZXJcIl0nKSxcbiAgICAgICAgICAgIHBob25lTnVtYmVyID0gJChpbnB1dFBob25lTnVtYmVyKS52YWwoKSxcbiAgICAgICAgICAgIGZvcm1hdGVkTnVtYmVyID0gcGhvbmVOdW1iZXIucmVwbGFjZSgvW14wLTldKy9nLCAnJyksXG4gICAgICAgICAgICBkZGQgPSBmb3JtYXRlZE51bWJlci5zbGljZSgwLCAyKSxcbiAgICAgICAgICAgIG51bWJlciA9IGZvcm1hdGVkTnVtYmVyLnN1YnN0cmluZygyKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gZ3JlY2FwdGNoYS5nZXRSZXNwb25zZSgpO1xuXG4gICAgICAgIGlmIChwaG9uZU51bWJlci5sZW5ndGggPCAxNCkge1xuICAgICAgICAgICAgJCh0aGlzLnByZVNlbGVjdG9yICsgJyBpbnB1dFtkYXRhLW51bWJlcj1cInBob25lTnVtYmVyXCJdJykuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgICAgICAkKHRoaXMucHJlU2VsZWN0b3IgKyAnIGlucHV0W2RhdGEtbnVtYmVyPVwicGhvbmVOdW1iZXJcIl0nKS5hdHRyKCdwbGFjZWhvbGRlcicsICdEaWdpdGUgdW0gbsO6bWVybyB2w6FsaWRvJyk7XG4gICAgICAgICAgICAkKHRoaXMucHJlU2VsZWN0b3IgKyAnIGlucHV0W2RhdGEtbnVtYmVyPVwicGhvbmVOdW1iZXJcIl0nKS52YWwoJycpO1xuICAgICAgICB9IGVsc2UgaWYocmVzcG9uc2UubGVuZ3RoID09IDAgJiYgIXdpbmRvdy5kb25lKSB7XG4gICAgICAgICAgICAkKHRoaXMucHJlU2VsZWN0b3IgKyAnIC5lcnJvci1yZWNhcHRjaGEnKS5zbGlkZURvd24oJ2Zhc3QnKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzLnByZVNlbGVjdG9yICsgJyBpbnB1dFtuYW1lPVwiREREXCJdJykudmFsKGRkZCk7XG4gICAgICAgICAgICAkKHRoaXMucHJlU2VsZWN0b3IgKyAnIGlucHV0W25hbWU9XCJDZWxcIl0nKS52YWwobnVtYmVyKTtcbiAgICAgICAgICAgIGpRdWVyeS5zdXBwb3J0LmNvcnMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5kYXRhID0ge307XG4gICAgICAgICAgICB0aGlzLnNlcnYuYWpheEJ5VXJsKCdodHRwczovL3d3dy52aXZvdHVyYm8uY29tLmJyL2FwaS9zZWN1cml0eScsICdQT1NUJywgdGhpcy5vblN1Y2Nlc3NEYXRhUG9zdCgpLCAoZXJyb3IpPT4gdGhpcy5vbkVycm9yRGF0YVBvc3QoZXJyb3IpLCAkKHRoaXMucHJlU2VsZWN0b3IgKyAnICNmb3JtSGlyZScpKTtcblxuICAgICAgICAgICAgJCh0aGlzLnByZVNlbGVjdG9yICsgJyBpbnB1dFtkYXRhLW51bWJlcj1cInBob25lTnVtYmVyXCJdJykucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgICAgICAkKHRoaXMucHJlU2VsZWN0b3IgKyAnIC5lcnJvci1yZWNhcHRjaGEnKS5zbGlkZVVwKCdmYXN0Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblN1Y2Nlc3NEYXRhUG9zdChkYXRhKSB7XG4gICAgICAgICQodGhpcy5wcmVTZWxlY3RvciArICcgLndyYXBwZXJfX2NvbnRhaW5lcicpLmhpZGUoKTtcbiAgICAgICAgJCh0aGlzLnByZVNlbGVjdG9yICsgJyAud3JhcHBlcl9fc3VjY2VzcycpLmZhZGVJbignZmFzdCcpO1xuICAgIH1cblxuICAgIG9uRXJyb3JEYXRhUG9zdChlcnJvcil7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiT2NvcnJldSB1bSBlcnJvIGluZXNwZXJhZG8sIHBvciBmYXZvciB0ZW50ZSBub3ZhbWVudGUuXCIpO1xuICAgIH1cblxuICAgIG9uRm9jdXMoZSkge1xuICAgICAgICAkKHRoaXMucHJlU2VsZWN0b3IgKyAnIGlucHV0W2RhdGEtbnVtYmVyPVwicGhvbmVOdW1iZXJcIl0nKS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICB9XG5cbiAgICBvbkNvbXBsZXRlSGFuZGxlcigpIHtcbiAgICAgICAgJCgnLmFuaW1hdGVkLWJveCcpLmFkZENsYXNzKCdzdG9wLWFuaW1hdGlvbicpO1xuICAgIH1cblxuICAgIHNjcm9sbFRvU2VjdGlvbihfaWQsIF90aW1lKXtcbiAgICAgICAgbGV0IHRvcCA9ICQoXCIjXCIrX2lkKS5vZmZzZXQoKS50b3AgLSAkKFwiLmhlYWRlcl9fY2VudGVyXCIpLmhlaWdodCgpO1xuICAgICAgICAkKFwiYm9keSwgaHRtbFwiKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogdG9wIC0gNjBcbiAgICAgICAgfSwgX3RpbWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL3NjcmlwdHMvY29tcG9uZW50cy9BcHAuanMiLCJjbGFzcyBTZXJ2aWNlcyB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gXCJcIjtcbiAgICAgICBcbiAgICAgICAgaWYgKCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5kZXhPZihcImNvbXBhcnRpbGhlXCIpID4gLTEgfHxcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKFwicGFjb3Rlcy10dXJiaW5hZG9zXCIpID4gLTEgfHxcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKFwidGlyZS1zdWFzLWR1dmlkYXNcIikgPiAtMSB8fFxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YoXCJ2ZW5oYS1wYXJhLXZpdm9cIikgPiAtMSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZVVybCA9IFwiLi4vXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhamF4QnlVcmwoX3VybCwgX3ZlcmIsIF9zdWNjZXNzLCBfZXJyb3IsIF9mb3JtLCBfdGltZW91dCl7XG4gICAgICAgIGlmKF91cmwuaW5kZXhPZihcImh0dHBcIikgPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5iYXNlVXJsID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogdGhpcy5iYXNlVXJsICsgX3VybCxcbiAgICAgICAgICAgIHR5cGU6IF92ZXJiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGRhdGE6IF9mb3JtID8gJChfZm9ybSkuc2VyaWFsaXplKCkgOiAkKHRoaXMpLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgdGltZW91dDogX3RpbWVvdXQgPyBfdGltZW91dCA6IDAsXG4gICAgICAgICAgICBzdWNjZXNzOiAoZGF0YSwgdGV4dFN0YXR1cywgeGhyKT0+IHtfc3VjY2VzcyhkYXRhLCB0ZXh0U3RhdHVzLCB4aHIpfSxcbiAgICAgICAgICAgIGZhaWw6IChlcnJvcik9PntfZXJyb3IoZXJyb3IpfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuXG4gICAgZ2V0VXJsUGFyYW0obmFtZSwgdXJsKSB7XG4gICAgICAgIGlmICghdXJsKSB1cmwgPSBsb2NhdGlvbi5ocmVmO1xuICAgICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXFxbXS8sXCJcXFxcXFxbXCIpLnJlcGxhY2UoL1tcXF1dLyxcIlxcXFxcXF1cIik7XG4gICAgICAgIGxldCByZWdleFMgPSBcIltcXFxcPyZdXCIrbmFtZStcIj0oW14mI10qKVwiO1xuICAgICAgICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKCByZWdleFMgKTtcbiAgICAgICAgbGV0IHJlc3VsdHMgPSByZWdleC5leGVjKCB1cmwgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHMgPT0gbnVsbCA/IG51bGwgOiByZXN1bHRzWzFdO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VydmljZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2Uvc2NyaXB0cy9zZXJ2aWNlL1NlcnZpY2VzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==