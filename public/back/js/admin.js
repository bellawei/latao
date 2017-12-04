$(function(){
    var page=1;
    var pageSize=100;


    function render(){
        $.ajax({
            data:{
                page:page,
                pageSize:pageSize
            },
            type:'get',
            url:'/user/queryUser',
            success:function(data){
                console.log(data);
                var html=template('tpluser',data)
                $(".lt_content tbody").html(html)
            }
        })
    }
    render()

    // function disable(){
    //     $('.lt_content tbody').on('disable','click',function(){

    //     })

    //     $.ajax({
    //         url:'/user/updateUser',
    //         type:'post',

    //     })
    // }
})