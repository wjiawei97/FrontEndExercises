$(function(){
    var form=layui.form
    var layer=layui.layer
    form.verify({
        nickname:function(value){
            if(value.length>6){
                return '昵称长度必须在1-6之间'
            }
        }
    })

    //初始化用户信息
    initUserInfo()

    function initUserInfo(){
        $.ajax({
            url:'/my/userinfo',
            type:'GET',
            success:function(res){
                if(res.status!==0){
                    return layer.msg('获取用户信息失败')
                }
                //为表单赋值
                form.value('formUserInfo',res.data)
            }
        })
    }

    // 重置表单的数据
    $('#btnReset').on('click',function(e){
        e.preventDefault()
        initUserInfo()
    })

    //监听表单的提交事件
    $('.layui-form').on('submit',function(e){
        e.preventDefault()
        $.ajax({
            url:'/my/userinfo',
            type:'POST',
            data:$(this).serialize(),
            success:function(res){
                if(res.status!==0){
                    return layer.msg('获取用户信息失败')
                }
                layer.msg('更新用户信息成功')
                //调用父页面中的方法，重新渲染用户头像和用户信息
                window.parent.getUserInfo()
            }
        })
    })
})