
var key=location.search;
key=key.split('=')[1];
console.log(key);

$('.confirm').on('click',function(e){
    e.preventDefault();

    var username=$('.username').val();
    var password=$('.userpass').val();
    console.log(username);

    if(!username){
        mui.toast('请输入用户名!');
        return false;
    }
    if(!password){
        mui.toast('请输入用户密码');
        return false;
    }
    $.ajax({
        url:'/user/login',
        type:'post',
        data:{
            username:username,
            password:password 
        },
        success:function(data){
            console.log(data);
            if(data.error==403){
                mui.toast(data.message)
            }
            if(key.indexOf('register')!=-1){
                location.href='menber.html'
            }
            if(data.success){
                location.href=key
            }
        }
        
    })



})