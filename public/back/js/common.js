//验证是否登录

console.log(location.href);
if ((location.href).indexOf('login.html') == -1) {
    $.ajax({
        url: '/employee/checkRootLogin',
        type: 'get',
        success: function (data) {
            console.log(data);
            if (data.error == 400) {
                location.href = 'login.html'
            }
        }
    })
}



$('#hideaside').on('click', function () {
    $('.aside').toggleClass("move");
    $('.main').toggleClass("move");
})

$('#catergory').on('click', function () {
    $('.child').slideToggle();
})

// 模态框---退出登录
$('#logout').on('click', function () {
    $('#logoutmodel').modal('show');
    
    $('#confirmlogout').off().on('click', function () {
        $.ajax({
            type: 'get',
            url: '/employee/employeeLogout',
            success: function (data) {

                if (data.success) {
                    location.href = "login.html";
                }
            }
        });
    })

})





