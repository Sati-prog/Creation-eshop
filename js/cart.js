var cart = {}; // корзина

$.getJSON('goods.json', function(data) {
    var goods = data; // все товары в массиве
    
    checkCart();
    showCart(); // вывожу товары на страницу

    function showCart() {

        if ($.isEmptyObject(cart)) {
            // корзина пуста
            var out = `
                <div class="cart-empty">
                    Your cart is empty. Add item to 
                    <a href="/eshop/">
                        cart 
                        <i class="fa-solid fa-cart-shopping"></i>
                    </a>
                </div>
            `;
            $('#my-cart').html(out);
        } else {

            var out = '';
            for (var key in cart) {

                out+='<div class="cart-goods">';
                out += '<button class="delete" data-art="'+key+'">x</button>';
                out += '<img src="'+goods[key].img+'" width="48">';
                out += goods[key].name;
                out += '<button class="minus" data-art="'+key+'">-</button>';
                out += cart[key];
                out += '<button class="plus" data-art="'+key+'">+</button>';
                out += '<p>'+cart[key]*goods[key].cost+' tg</p>';
                // out += '<br>';
                out+='</div>';
            }
            $('#my-cart').html(out);
            $('.plus').on('click', plusGoods);
            $('.minus').on('click', minusGoods);
            $('.delete').on('click', deleteGoods);
        }
    }

    function plusGoods() {

        var articul = $(this).attr('data-art');
        cart[articul]++;

        saveCartToLS(); // сохраняю корзину в localStorage
        showCart();
    }

    function minusGoods() {

        var articul = $(this).attr('data-art');
        if (cart[articul] > 1) {

            cart[articul]--;
        } else {

            delete cart[articul];
        }
        
        saveCartToLS(); // сохраняю корзину в localStorage
        showCart();
    }

    function deleteGoods() {

        var articul = $(this).attr('data-art');
        delete cart[articul];
        
        saveCartToLS();
        showCart();
    }
});

function checkCart() {
    // проверяю наличие корзины в localStorage
    if (localStorage.getItem('cart') != null) {

        cart = JSON.parse(localStorage.getItem('cart'));
    }
}

function saveCartToLS() {

    localStorage.setItem('cart', JSON.stringify(cart));
}