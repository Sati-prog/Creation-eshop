var cart = {}; // моя корзина

$('document').ready(function() {

    loadGoods();
});

function loadGoods() {
    // загружаю товары на страницу
    $.getJSON('goods.json', function(data) {

        var out = "";
        for (var key in data) {

            out+='<div class="single-goods">';
            out+='<h2>'+data[key]['name']+'</h2>';
            out+='<p>Price: '+data[key]['cost']+' tg</p>';
            out+='<img src="'+data[key].img+'">';
            // out+='<p>'+data[key]['description']+'</p>';
            out+='<button class="add-to-cart" data-art="'+key+'">Buy</button>';
            out+='</div>';
        }
        $('#goods').html(out);
        $('button.add-to-cart').on('click', addToCart);
    });
}

function addToCart() {
    // добавляю товар в корзину
    var articul = $(this).attr('data-art');
    if (cart[articul] !=undefined) {

        cart[articul]++;
    } else {

        cart[articul] = 1;
    }
    
    console.log(cart);
}