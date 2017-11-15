

checklogin();


$('.logout').on('click',function(e){
    e.preventDefault();
    $.ajax({
        url:'/user/logout',
        type:'get',
        success:function(data){
            console.log(data);
            if(data.success){
                console.log(location.href)
                location.href='login.html?key='+location.href;
            }
        }
    })
})