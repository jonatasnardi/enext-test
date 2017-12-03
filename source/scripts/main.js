import $ from 'jquery';
import App from './components/App';

class Main {
    constructor() {
        new App();
    }
}

$(window).on('load', function() {
    new Main();
})