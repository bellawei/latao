var key = window.location.search;
var productId = key.split('=')[1];

$.ajax({
    url: '/product/queryProductDetail',
    data: {
        id: productId
    },
    success: function (data) {
        console.log(data);
        $('.mui-scroll').html(template('tpl', data));
        mui(".mui-numbox").numbox();
    }
})

$('.lt_body ').on('tap', '.lt_size span', function () {
    $(this).addClass('now').siblings().removeClass('now');
})


//--------------------添加购物车------------
$('.btn_add_cart').on('click', function () {

    var size=$('.lt_size span.now').html();
    var num=$('.lt_stock .mui-numbox input').val();
    if(!size){
        mui.toast('请选择商品尺码!');
        return;
    }
    $.ajax({
        url: '/cart/addCart',
        type: 'post',
        data: {
            productId: productId,
            num: num,
            size: size
        },
        success: function (data) {
            console.log(data);
            mui.confirm('商品添加成功!','温馨提示',['去购物车','继续浏览'],function(e){
                if(e.index==0){
                    location.href='cart.html';
                }
            })
        }

    })
})

