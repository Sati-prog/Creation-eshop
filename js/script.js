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
            out+='<button>Buy</button>';
            out+='</div>';
        }
        $('#goods').html(out);
    });
}