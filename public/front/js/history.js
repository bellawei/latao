
var historyArr=[];
function render(){
    historyArr=JSON.parse(localStorage.getItem('lt_search_history')||'[]'); 
    console.log(historyArr);
    var html=template('tpl',{arr:historyArr});
    $('.lt_history').html(template('tpl',{arr:historyArr}))
}
render();




//清空记录
$('.icon_empty').on('click',function(){
    console.log(11);
    localStorage.setItem('lt_search_history','[]');
    render();
})

//删除一条记录
$('.lt_body').on('click','.fa-close',function(){
    var index=$(this).data('index');
    historyArr=JSON.parse(localStorage.getItem('lt_search_history'));
    historyArr.splice(index,1);
    localStorage.setItem('lt_search_history',JSON.stringify(historyArr));
    render();
})  


// -----------添加------------
$('.search_btn').on('click',function(){
    var newhistory=$('.searchbar input').val().trim();
    var index=historyArr.indexOf(newhistory);
    if(index>-1){
     historyArr.splice(index,1);
    }
    historyArr.unshift(newhistory);
    if(historyArr.length>10){
     historyArr.pop();
    }


    localStorage.setItem('lt_search_history',JSON.stringify(historyArr));
 
    render();
    $('.searchbar input').val('');
    location.href='productlist.html?key='+newhistory;
 })


 
 //点击记录  跳转
 $('.lt_history').on('click','.historylist a',function(){
     console.log($(this));
     var key=$(this).html();
     location.href='productlist.html?key='+key;
       
     })
 