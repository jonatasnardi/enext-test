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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _Header = __webpack_require__(4);

var _Header2 = _interopRequireDefault(_Header);

var _Product = __webpack_require__(5);

var _Product2 = _interopRequireDefault(_Product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function Main() {
    _classCallCheck(this, Main);

    new _Header2.default();
    new _Product2.default();
};

(0, _jquery2.default)(window).on('load', function () {
    new Main();
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Services = __webpack_require__(0);

var _Services2 = _interopRequireDefault(_Services);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Header = function () {
    function Header() {
        _classCallCheck(this, Header);

        this.serv = new _Services2.default();
        this.setListeners();
    }

    _createClass(Header, [{
        key: 'setListeners',
        value: function setListeners() {
            var _this = this;

            $('.navbar-toggle').bind('click', function (e) {
                return _this.openMenuThree(e);
            });
        }
    }, {
        key: 'openMenuThree',
        value: function openMenuThree() {
            $('.navbar-toggle').toggleClass('close');
            $('.menu, .header__help').show();
            $('.header__search').fadeIn('normal');
            if ($('.menu').hasClass('opened-menu')) {
                TweenMax.fromTo($('.menu, .header__help'), 0.4, { x: "0%" }, { x: "100%", ease: Quad.easeInOut });
                $('.menu').removeClass('opened-menu');
                $('.header__search').fadeOut('fast');
            } else {
                $('.menu').addClass('opened-menu');
                $('.navbar-toggle').removeClass('purple-menu');
                TweenMax.fromTo($('.menu, .header__help'), 0.6, { x: "110%" }, { x: "0%", ease: Quad.easeInOut });
            }
        }
    }]);

    return Header;
}();

exports.default = Header;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Services = __webpack_require__(0);

var _Services2 = _interopRequireDefault(_Services);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Product = function () {
    function Product() {
        _classCallCheck(this, Product);

        this.serv = new _Services2.default();
        this.setListeners();
    }

    _createClass(Product, [{
        key: 'setListeners',
        value: function setListeners() {
            var _this = this;

            $('.close-button, .overlay').on('click', function (e) {
                return _this.onCloseModal(e);
            });
            $('[data-action="openProductModal"]').on('click', function (e) {
                return _this.onOpenModal(e);
            });
            $('#btnAddToCart').on('click', function (e) {
                return _this.onAddToCart(e);
            });
        }
    }, {
        key: 'onOpenModal',
        value: function onOpenModal(e) {
            var currentProductIndex = $(e.currentTarget).attr('data-id');

            $('.overlay, #modalProduct').fadeIn('fast');
            $.ajax({
                url: "../data/potions.json",
                success: function success(data) {
                    var currentItem = data.potions[currentProductIndex];
                    $('#modalImage').attr('src', '../img/' + currentItem.image);
                    $('#modalName').text(currentItem.name);
                    $('#modalEffect').text(currentItem.effect);
                    $('#modalPrice').text('$' + currentItem.price);
                    $('#modalIngredients').empty();
                    for (var i = 0; i < currentItem.ingredients.length; i++) {
                        $('#modalIngredients').append(currentItem.ingredients[i] + '<br>');
                    }
                }
            });
        }
    }, {
        key: 'onCloseModal',
        value: function onCloseModal(e) {
            $('.overlay, #modalProduct').fadeOut('fast');
        }
    }, {
        key: 'onAddToCart',
        value: function onAddToCart(e) {
            var currentItems = parseInt($('#cartItems').text()) + 1;
            $('#cartItems').text(currentItems);
        }
    }]);

    return Product;
}();

exports.default = Product;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDkwYjIwM2QwMDUyMGZjNzUwODgiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3NjcmlwdHMvc2VydmljZS9TZXJ2aWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2Uvc2NyaXB0cy9tYWluLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovLy8uL3NvdXJjZS9zY3JpcHRzL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9zY3JpcHRzL2NvbXBvbmVudHMvUHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJTZXJ2aWNlcyIsImJhc2VVcmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiaW5kZXhPZiIsIl91cmwiLCJfdmVyYiIsIl9zdWNjZXNzIiwiX2Vycm9yIiwiX2Zvcm0iLCJfdGltZW91dCIsIiQiLCJhamF4IiwidXJsIiwidHlwZSIsImRhdGFUeXBlIiwiZGF0YSIsInNlcmlhbGl6ZSIsInRpbWVvdXQiLCJzdWNjZXNzIiwidGV4dFN0YXR1cyIsInhociIsImZhaWwiLCJlcnJvciIsIm5hbWUiLCJocmVmIiwicmVwbGFjZSIsInJlZ2V4UyIsInJlZ2V4IiwiUmVnRXhwIiwicmVzdWx0cyIsImV4ZWMiLCJNYWluIiwib24iLCJIZWFkZXIiLCJzZXJ2Iiwic2V0TGlzdGVuZXJzIiwiYmluZCIsImUiLCJvcGVuTWVudVRocmVlIiwidG9nZ2xlQ2xhc3MiLCJzaG93IiwiZmFkZUluIiwiaGFzQ2xhc3MiLCJUd2Vlbk1heCIsImZyb21UbyIsIngiLCJlYXNlIiwiUXVhZCIsImVhc2VJbk91dCIsInJlbW92ZUNsYXNzIiwiZmFkZU91dCIsImFkZENsYXNzIiwiUHJvZHVjdCIsIm9uQ2xvc2VNb2RhbCIsIm9uT3Blbk1vZGFsIiwib25BZGRUb0NhcnQiLCJjdXJyZW50UHJvZHVjdEluZGV4IiwiY3VycmVudFRhcmdldCIsImF0dHIiLCJjdXJyZW50SXRlbSIsInBvdGlvbnMiLCJpbWFnZSIsInRleHQiLCJlZmZlY3QiLCJwcmljZSIsImVtcHR5IiwiaSIsImluZ3JlZGllbnRzIiwibGVuZ3RoIiwiYXBwZW5kIiwiY3VycmVudEl0ZW1zIiwicGFyc2VJbnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDN0RNQSxRO0FBQ0Ysd0JBQWE7QUFBQTs7QUFDVCxhQUFLQyxPQUFMLEdBQWUsRUFBZjs7QUFFQSxZQUFLQyxPQUFPQyxRQUFQLENBQWdCQyxRQUFoQixDQUF5QkMsT0FBekIsQ0FBaUMsYUFBakMsSUFBa0QsQ0FBQyxDQUFuRCxJQUNESCxPQUFPQyxRQUFQLENBQWdCQyxRQUFoQixDQUF5QkMsT0FBekIsQ0FBaUMsb0JBQWpDLElBQXlELENBQUMsQ0FEekQsSUFFREgsT0FBT0MsUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJDLE9BQXpCLENBQWlDLG1CQUFqQyxJQUF3RCxDQUFDLENBRnhELElBR0RILE9BQU9DLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCQyxPQUF6QixDQUFpQyxpQkFBakMsSUFBc0QsQ0FBQyxDQUgzRCxFQUlBO0FBQ0ksaUJBQUtKLE9BQUwsR0FBZSxLQUFmO0FBQ0g7QUFDSjs7OztrQ0FFU0ssSSxFQUFNQyxLLEVBQU9DLFEsRUFBVUMsTSxFQUFRQyxLLEVB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Z0QsSUFBakIsQ0FBc0IsS0FBdEIsRUFBNkIsWUFBWUMsWUFBWUUsS0FBckQ7QUFDQW5ELHNCQUFFLFlBQUYsRUFBZ0JvRCxJQUFoQixDQUFxQkgsWUFBWXBDLElBQWpDO0FBQ0FiLHNCQUFFLGNBQUYsRUFBa0JvRCxJQUFsQixDQUF1QkgsWUFBWUksTUFBbkM7QUFDQXJELHNCQUFFLGFBQUYsRUFBaUJvRCxJQUFqQixDQUFzQixNQUFNSCxZQUFZSyxLQUF4QztBQUNBdEQsc0JBQUUsbUJBQUYsRUFBdUJ1RCxLQUF2QjtBQUNBLHlCQUFJLElBQUlDLElBQUksQ0FBWixFQUFlQSxJQUFJUCxZQUFZUSxXQUFaLENBQXdCQyxNQUEzQyxFQUFtREYsR0FBbkQsRUFBd0Q7QUFDcER4RCwwQkFBRSxtQkFBRixFQUF1QjJELE1BQXZCLENBQThCVixZQUFZUSxXQUFaLENBQXdCRCxDQUF4QixJQUE2QixNQUEzRDtBQUNIO0FBQ0o7QUFaRSxhQUFQO0FBY0g7OztxQ0FFWTdCLEMsRUFBRztBQUNaM0IsY0FBRSx5QkFBRixFQUE2QndDLE9BQTdCLENBQXFDLE1BQXJDO0FBQ0g7OztvQ0FFV2IsQyxFQUFHO0FBQ1gsZ0JBQUlpQyxlQUFlQyxTQUFTN0QsRUFBRSxZQUFGLEVBQWdCb0QsSUFBaEIsRUFBVCxJQUFtQyxDQUF0RDtBQUNBcEQsY0FBRSxZQUFGLEVBQWdCb0QsSUFBaEIsQ0FBcUJRLFlBQXJCO0FBQ0g7Ozs7OztrQkFHVWxCLE8iLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQ5MGIyMDNkMDA1MjBmYzc1MDg4IiwiY2xhc3MgU2VydmljZXMge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuYmFzZVVybCA9IFwiXCI7XG4gICAgICAgXG4gICAgICAgIGlmICgod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YoXCJjb21wYXJ0aWxoZVwiKSA+IC0xIHx8XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5kZXhPZihcInBhY290ZXMtdHVyYmluYWRvc1wiKSA+IC0xIHx8XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5kZXhPZihcInRpcmUtc3Vhcy1kdXZpZGFzXCIpID4gLTEgfHxcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKFwidmVuaGEtcGFyYS12aXZvXCIpID4gLTEpKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmJhc2VVcmwgPSBcIi4uL1wiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWpheEJ5VXJsKF91cmwsIF92ZXJiLCBfc3VjY2VzcywgX2Vycm9yLCBfZm9ybSwgX3RpbWVvdXQpe1xuICAgICAgICBpZihfdXJsLmluZGV4T2YoXCJodHRwXCIpID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZVVybCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IHRoaXMuYmFzZVVybCArIF91cmwsXG4gICAgICAgICAgICB0eXBlOiBfdmVyYixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBkYXRhOiBfZm9ybSA/ICQoX2Zvcm0pLnNlcmlhbGl6ZSgpIDogJCh0aGlzKS5zZXJpYWxpemUoKSxcbiAgICAgICAgICAgIHRpbWVvdXQ6IF90aW1lb3V0ID8gX3RpbWVvdXQgOiAwLFxuICAgICAgICAgICAgc3VjY2VzczogKGRhdGEsIHRleHRTdGF0dXMsIHhocik9PiB7X3N1Y2Nlc3MoZGF0YSwgdGV4dFN0YXR1cywgeGhyKX0sXG4gICAgICAgICAgICBmYWlsOiAoZXJyb3IpPT57X2Vycm9yKGVycm9yKX1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cblxuICAgIGdldFVybFBhcmFtKG5hbWUsIHVybCkge1xuICAgICAgICBpZiAoIXVybCkgdXJsID0gbG9jYXRpb24uaHJlZjtcbiAgICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW10vLFwiXFxcXFxcW1wiKS5yZXBsYWNlKC9bXFxdXS8sXCJcXFxcXFxdXCIpO1xuICAgICAgICBsZXQgcmVnZXhTID0gXCJbXFxcXD8mXVwiK25hbWUrXCI9KFteJiNdKilcIjtcbiAgICAgICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cCggcmVnZXhTICk7XG4gICAgICAgIGxldCByZXN1bHRzID0gcmVnZXguZXhlYyggdXJsICk7XG4gICAgICAgIHJldHVybiByZXN1bHRzID09IG51bGwgPyBudWxsIDogcmVzdWx0c1sxXTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL3NjcmlwdHMvc2VydmljZS9TZXJ2aWNlcy5qcyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi9jb21wb25lbnRzL1Byb2R1Y3QnO1xuXG5jbGFzcyBNYWluIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgbmV3IEhlYWRlcigpO1xuICAgICAgICBuZXcgUHJvZHVjdCgpO1xuICAgIH1cbn1cblxuJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgbmV3IE1haW4oKTtcbn0pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL3NjcmlwdHMvbWFpbi5qcyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwialF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFNlcnZpY2VzIGZyb20gJy4uL3NlcnZpY2UvU2VydmljZXMnO1xuXG5jbGFzcyBIZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuc2VydiA9IG5ldyBTZXJ2aWNlcygpO1xuICAgICAgICB0aGlzLnNldExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHNldExpc3RlbmVycygpIHtcbiAgICAgICAgJCgnLm5hdmJhci10b2dnbGUnKS5iaW5kKCdjbGljaycsIChlKT0+IHRoaXMub3Blbk1lbnVUaHJlZShlKSk7XG4gICAgfVxuXG4gICAgb3Blbk1lbnVUaHJlZSgpIHtcbiAgICAgICAgJCgnLm5hdmJhci10b2dnbGUnKS50b2dnbGVDbGFzcygnY2xvc2UnKTtcbiAgICAgICAgJCgnLm1lbnUsIC5oZWFkZXJfX2hlbHAnKS5zaG93KCk7XG4gICAgICAgICQoJy5oZWFkZXJfX3NlYXJjaCcpLmZhZGVJbignbm9ybWFsJyk7XG4gICAgICAgIGlmKCQoJy5tZW51JykuaGFzQ2xhc3MoJ29wZW5lZC1tZW51JykpIHtcbiAgICAgICAgICAgIFR3ZWVuTWF4LmZyb21UbygkKCcubWVudSwgLmhlYWRlcl9faGVscCcpLCAwLjQsIHt4OiBcIjAlXCJ9LCB7eDogXCIxMDAlXCIsIGVhc2U6IFF1YWQuZWFzZUluT3V0fSk7XG4gICAgICAgICAgICAkKCcubWVudScpLnJlbW92ZUNsYXNzKCdvcGVuZWQtbWVudScpO1xuICAgICAgICAgICAgJCgnLmhlYWRlcl9fc2VhcmNoJykuZmFkZU91dCgnZmFzdCcpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICQoJy5tZW51JykuYWRkQ2xhc3MoJ29wZW5lZC1tZW51Jyk7XG4gICAgICAgICAgICAkKCcubmF2YmFyLXRvZ2dsZScpLnJlbW92ZUNsYXNzKCdwdXJwbGUtbWVudScpO1xuICAgICAgICAgICAgVHdlZW5NYXguZnJvbVRvKCQoJy5tZW51LCAuaGVhZGVyX19oZWxwJyksIDAuNiwge3g6IFwiMTEwJVwifSwge3g6IFwiMCVcIiwgZWFzZTogUXVhZC5lYXNlSW5PdXR9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL3NjcmlwdHMvY29tcG9uZW50cy9IZWFkZXIuanMiLCJpbXBvcnQgU2VydmljZXMgZnJvbSAnLi4vc2VydmljZS9TZXJ2aWNlcyc7XG5cbmNsYXNzIFByb2R1Y3Qge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuc2VydiA9IG5ldyBTZXJ2aWNlcygpO1xuICAgICAgICB0aGlzLnNldExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHNldExpc3RlbmVycygpIHtcbiAgICAgICAgJCgnLmNsb3NlLWJ1dHRvbiwgLm92ZXJsYXknKS5vbignY2xpY2snLCAoZSk9PiB0aGlzLm9uQ2xvc2VNb2RhbChlKSk7XG4gICAgICAgICQoJ1tkYXRhLWFjdGlvbj1cIm9wZW5Qcm9kdWN0TW9kYWxcIl0nKS5vbignY2xpY2snLCAoZSk9PiB0aGlzLm9uT3Blbk1vZGFsKGUpKTtcbiAgICAgICAgJCgnI2J0bkFkZFRvQ2FydCcpLm9uKCdjbGljaycsIChlKT0+IHRoaXMub25BZGRUb0NhcnQoZSkpO1xuICAgIH1cblxuICAgIG9uT3Blbk1vZGFsKGUpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRQcm9kdWN0SW5kZXggPSAkKGUuY3VycmVudFRhcmdldCkuYXR0cignZGF0YS1pZCcpO1xuXG4gICAgICAgICQoJy5vdmVybGF5LCAjbW9kYWxQcm9kdWN0JykuZmFkZUluKCdmYXN0Jyk7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiLi4vZGF0YS9wb3Rpb25zLmpzb25cIiwgIFxuICAgICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEl0ZW0gPSBkYXRhLnBvdGlvbnNbY3VycmVudFByb2R1Y3RJbmRleF07XG4gICAgICAgICAgICAgICAgJCgnI21vZGFsSW1hZ2UnKS5hdHRyKCdzcmMnLCAnLi4vaW1nLycgKyBjdXJyZW50SXRlbS5pbWFnZSk7XG4gICAgICAgICAgICAgICAgJCgnI21vZGFsTmFtZScpLnRleHQoY3VycmVudEl0ZW0ubmFtZSk7XG4gICAgICAgICAgICAgICAgJCgnI21vZGFsRWZmZWN0JykudGV4dChjdXJyZW50SXRlbS5lZmZlY3QpO1xuICAgICAgICAgICAgICAgICQoJyNtb2RhbFByaWNlJykudGV4dCgnJCcgKyBjdXJyZW50SXRlbS5wcmljZSk7XG4gICAgICAgICAgICAgICAgJCgnI21vZGFsSW5ncmVkaWVudHMnKS5lbXB0eSgpO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjdXJyZW50SXRlbS5pbmdyZWRpZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAkKCcjbW9kYWxJbmdyZWRpZW50cycpLmFwcGVuZChjdXJyZW50SXRlbS5pbmdyZWRpZW50c1tpXSArICc8YnI+Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNsb3NlTW9kYWwoZSkge1xuICAgICAgICAkKCcub3ZlcmxheSwgI21vZGFsUHJvZHVjdCcpLmZhZGVPdXQoJ2Zhc3QnKTtcbiAgICB9XG5cbiAgICBvbkFkZFRvQ2FydChlKSB7XG4gICAgICAgIGxldCBjdXJyZW50SXRlbXMgPSBwYXJzZUludCgkKCcjY2FydEl0ZW1zJykudGV4dCgpKSArIDE7XG4gICAgICAgICQoJyNjYXJ0SXRlbXMnKS50ZXh0KGN1cnJlbnRJdGVtcyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL3NjcmlwdHMvY29tcG9uZW50cy9Qcm9kdWN0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==