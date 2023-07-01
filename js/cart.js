var cart = {}; // корзина

$.getJSON('goods.json', function(data) {
    var goods = data; // все товары в массиве
    
    checkCart();
    showCart(); // вывожу товары на страницу

    function showCart() {

        var out = '';
        for (var key in cart) {

            out += '<button class="delete">x</button>';
            out += '<img src="'+goods[key].img+'" width="48">';
            out += goods[key].name;
            out += '<button class="minus">-</button>';
            out += cart[key];
            out += '<button class="plus">+</button>';
            out += cart[key]*goods[key].cost;
            out += '<br>';
        }
        $('#my-cart').html(out);
    }
});

function checkCart() {
    // проверяю наличие корзины в localStorage
    if (localStorage.getItem('cart') != null) {

        cart = JSON.parse(localStorage.getItem('cart'));
    }
}