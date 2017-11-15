checklogin();

render();
function render(){
    $.ajax({
        url:'/cart/queryCart',
        type:'get',
        success:function(data){
            console.log(data);
            $('#OA_task_2').html(template('tpl',{data:data}))
        }
    })
}


//-------------------删除购物车--------------------
var id=[];
$('.lt_body').on('tap','.delete',function(){
    console.log(112);
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