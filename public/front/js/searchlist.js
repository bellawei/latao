
var list=$('.historylist a');
var Arrhistory=[];
for(var i=0;i<list.length;i++){
    console.log(list[i].innerHTML);
    Arrhistory.push(list[i].innerHTML);
}
console.log(Arrhistory);

$('.search_btn').on('click',function(){
   var newhistory=$('.searchbar input').val().trim();
   Arrhistory.unshift(newhistory);

})