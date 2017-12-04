$.ajax({
    url:'/category/queryTopCategory',
    success:function(data){
        $('.nav ul').html(template('tpl',data));
        var id=$('.nav ul li').first().data('id');
        renderSecond(id);
    }
})

$('.nav ul').on('click','a',function(e){
    e.preventDefault();
    $(this).parent().addClass('now').siblings().removeClass();
    var id=$(this).parent().data('id');
    renderSecond(id);
})


function renderSecond(id){
    $.ajax({
        url:'/category/querySecondCategory',
        data:{id:id},
        success:function(data){
            $('.content ul').html(template('tpl2',data))
        }
    })
}
