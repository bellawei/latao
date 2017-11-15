
checklogin();


var vCode='';

//--------------发送二维码-------------
$('.getvcode').on('click', function () {
    console.log(111);
    $.ajax({
        url: '/user/vCode',
        success: function (data) {
            console.log(data);
            vCode=data.vCode;
        }
    })
})



//----------------------------注册按钮-------------------------
$('.register').on('click', function (e) {
    var username = $('.username').val();
    var password = $('.password').val();
    var confirm = $('.confirm').val();
    var phonenum = $('.phonenum').val();
    vCode = $('.vcode').val();
    
    
    e.preventDefault();
            //-----非空验证------
 console.log(username);
    if (!username) {
        mui.toast('请输入用户名!');
        return false;
    }
    if (!password) {
        mui.toast('请输入密码!');
        return false;
    }
    if (!confirm) {
        mui.toast('请再次输入密码!');
        return false;
    }
    if (!phonenum) {
        mui.toast('请输入您的手机号码!');
        return false;
    }
    if (!vCode) {
        mui.toast('请输入验证码!');
        return false;
    }

    if (!username) {
        mui.toast('请输入用户名!');
        return false;
    }
    
    if ($('.declaration input').prop('checked') ==false) {
        mui.toast('请仔细阅读协议');
        return false;
    }
   
    $('.register').on('click', function (e) {
        e.preventDefault();
    })


//---------------------注册成功,跳转---------------------
    $.ajax({
        url:'/user/register',
        type:'post',
        data:{
            username:username,
            password:password,
            mobile:phonenum,
            vCode:vCode
        },
        success:function(data){
            console.log(data);
            if(data.success){
                mui.toast('注册成功!')
                setTimeout(function() {
                    location.href='login.html?key='+location.href;
                }, 1000);
            }else if(data.error==403){
                mui.toast(data.message)
            }
        }
    })


})

$('.login').on('click',function(e){
    e.preventDefault();
    location.href='login.html?key='+location.href;
})