$(function () {



    $('form').bootstrapValidator({　
        feedbackIcons: {　　　　　　　　
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'　　　　　　　　
        },
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    callback:{
                        message:'用户名错误'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '邮箱地址不能为空'
                    },
                    stringLength:{
                        min:6,
                        max:12
                    },
                    callback:{
                        message:'密码错误'
                    }
                }
            }
        }
    });





})