import Services from '../service/Services';

class Product {
    constructor(){
        this.serv = new Services();
        this.setListeners();
    }

    setListeners() {
        $('.close-button, .overlay').on('click', (e)=> this.onCloseModal(e));
        $('[data-action="openProductModal"]').on('click', (e)=> this.onOpenModal(e));
        $('#btnAddToCart').on('click', (e)=> this.onAddToCart(e));
    }

    onOpenModal(e) {
        let currentProductIndex = $(e.currentTarget).attr('data-id');

        $('.overlay, #modalProduct').fadeIn('fast');
        $.ajax({
            url: "../data/potions.json",  
            success: (data) => {
                let currentItem = data.potions[currentProductIndex];
                $('#modalImage').attr('src', '../img/' + currentItem.image);
                $('#modalName').text(currentItem.name);
                $('#modalEffect').text(currentItem.effect);
                $('#modalPrice').text('$' + currentItem.price);
                $('#modalIngredients').empty();
                for(let i = 0; i < currentItem.ingredients.length; i++) {
                    $('#modalIngredients').append(currentItem.ingredients[i] + '<br>');
                }
            }
        });
    }

    onCloseModal(e) {
        $('.overlay, #modalProduct').fadeOut('fast');
    }

    onAddToCart(e) {
        let currentItems = parseInt($('#cartItems').text()) + 1;
        $('#cartItems').text(currentItems);
    }
}

export default Product;
