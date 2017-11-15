mui(".mui-scroll-wrapper").scroll({
    indicators:false
  });
  

  function checklogin(){
    $.ajax({
      url:'/user/queryUserMessage',
      type:'get',
      success:function(data){
        console.log(data);
        if(data.error==400){
            location.href='login.html?key='+location.href;
        }
      }
    })
  }