var key=window.location.search;
var proName=key.split('=')[1];

var page=1;
var pageSize=1000;



function render(){
    var key=$('.lt_sort [data-type].now').data('type');
    var value=$('.lt_sort [data-type].now').find('span').hasClass('fa-angle-down')?1:2;
    var obj={
        page:page,
        pageSize:pageSize,
        proName:proName
    }
    if(key){
        obj[key]=value;
    }

    $.ajax({
        url:'/product/queryProduct',
        data:obj,
        success:function(data){
            $('.product ul').html(template('tpl',data));
            console.log(data);
        }
    })
}
render();


$('.lt_sort [data-type]').on('click',function(){
    //改变颜色   箭头方向
    if($(this).hasClass('now')){
        $(this).find('span').toggleClass('fa-angle-down').toggleClass('fa-angle-up');
    }else{
        $(this).addClass("now").siblings().removeClass("now");
    }
    render();


})

$('.searchbar button').on('click',function(){
    $(".lt_sort a").removeClass("now").find("span").removeClass("fa-angle-up").addClass("fa-angle-down");
    proName=$('.searchbar input').val();
    // if(proName===""){
    //     return false;
    // }
    
    render();
})


$('.product').on('click','a',function(){
    var productId=$(this).data('id');
    console.log(productId);
    location.href='details.html?productId='+productId;
 
})