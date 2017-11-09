//验证是否登录

console.log(location.href);




$('#hideaside').on('click',function(){
    $('.aside').toggleClass("move");
    $('.main').toggleClass("move");
})
    
$('#catergory').on('click',function(){
    $('.child').slideToggle();
})


