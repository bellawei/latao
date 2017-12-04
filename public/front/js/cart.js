checklogin();

render();
function render(){
    $.ajax({
        url:'/cart/queryCart',
        type:'get',
        success:function(data){
            var obj={data:data}
            console.log(obj);
            $('#OA_task_2').html(template('tpl',obj))
        }
    })
}

//-------------------删除购物车--------------------
var id=[];
$('.lt_body').on('tap','.delete',function(){
    
    id=$(this).data('id');
    $.ajax({
        url:'/cart/deleteCart',
        type:'get',
        data:{
            id:id
        },
        success:function(data){
            console.log(data);
            if(data.success){
                render();
            }
        }
    })
})

$('.lt_body').on('tap','.compose',function(){

    var data=this.dataset;
    var html=template('tpl2',data);
    html = html.replace(/\n/g, "");

    mui.confirm(html,'编辑商品',['确认','取消'],function(e){
        var id = data.id;
        var size=$('.lt_size span.now').html();
        var num =  $(".lt_stock .mui-numbox-input").val();

        if(e.index==0){
            $.ajax({
                url:'/cart/updateCart',
                type:'post',
                data:{
                    id:id,
                    size:size,
                    num:num
                },
                success:function(data){
                    console.log(data);
                    render();
                }
            })
        }
    })

     //重新获取尺码  必须在确认框之后
     $('.lt_size span').on('tap', function () {
        $(this).addClass('now').siblings().removeClass('now');
    })
    //初始化数字框 必须在确认框之后
    mui(".mui-numbox").numbox();
    
})

$('.lt_body').on('click','.mui-table-view-cell input',function(){
    var total=0;
    $('.mui-table-view-cell input:checked').each(function(){
        total+=this.dataset.price*this.dataset.num;
    })

    $('.totalprice').html(total.toFixed(2))
})