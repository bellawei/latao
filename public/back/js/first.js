$(function(){
    var currentPage=1;
    var pageSize=5;

    function render(){
        $.ajax({
            type:'get',
            url: "/category/queryTopCategoryPaging",
            data:{
                page:currentPage,
                pageSize:pageSize
            },
            success:function(data){
                $('tbody').html(template('tpl',data));

                $('#paginator').bootstrapPaginator({
                    bootstrapMajorVersion: 3,
                    currentPage:currentPage,
                    totalPages:Math.ceil(data.total/pageSize), 
                    onPageClicked:function(a,b,c,page){
                        currentPage=page;
                        render();
                    }
                })
                
              
            }
        })  
    }
    render();

    $('.contentbox button').on('click',function(){
        $('#addcategory').modal('show');
    })

    var $form=$('form');
    console.log($form);
    $form.bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
          },
        fields:{
            categoryName:{
                validators:{
                    notEmpty:{
                        message:"请输入一级分类"
                    }
                }
            }
        }
    })

    $form.on('success.form.bv',function(e){
        e.preventDefault();

        $.ajax({
            type:'post',
            url:'/category/addTopCategory',
            data:$form.serialize(),
            success:function(data){
                console.log(data);
                if(data.success){
                    $("#addcategory").modal("hide");
                    currentPage = 1;
                    render();

                    $form.data("bootstrapValidator").resetForm();
                    $form[0].reset();
                }
            }
        })
    })




})