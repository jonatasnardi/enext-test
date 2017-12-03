import $ from 'jquery';
import Header from './components/Header';
import Product from './components/Product';

class Main {
    constructor() {
        new Header();
        new Product();
    }
}

$(window).on('load', function() {
    new Main();
})