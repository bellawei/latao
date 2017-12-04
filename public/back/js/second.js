var currentpage=1;
var pageSize=5;

function render(){
    $.ajax({
        url:'/category/querySecondCategoryPaging',
        data:{
            page:currentpage,
            pageSize:pageSize
        },
        success:function(data){
            $('tbody').html(template('tpl',data));

            $('#paginator').bootstrapPaginator({
                    bootstrapMajorVersion: 3,
                    currentPage:currentpage,
                    totalPages:Math.ceil(data.total/pageSize), 
                    onPageClicked:function(a,b,c,page){
                        currentpage=page;
                        render();
                    }
                })
        }
    })
    
}

render();



// 弹出模态框
$('.btn_add').on('click',function(){
    $('#addcategory').modal('show');
})




// 模态框 下拉菜单
$.ajax({
    url:'/category/queryTopCategoryPaging',
    data:{
        page:1,
        pageSize:100    
    },
    success:function(data){
        $('.dropdown-menu').html(template('tpl2',data));
    }
})

// 下拉框 选中效果
$('.dropdown-menu').on('click','a',function(){
    $('#choosed').text($(this).text())
})



$("#fileupload").fileupload({
    dataType:"json",
    //e：事件对象
    //data：图片上传后的对象，通过e.result.picAddr可以获取上传后的图片地址
    done:function (e, data) {
        
    }
  });