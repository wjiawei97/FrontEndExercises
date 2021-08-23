$(function(){
    //获取用户基本信息
    getUserInfo()
    var layer=layui.layer

    $('#btnLogout').on('click',function(){
        layer.confirm('确定退出？',{icon:3,title:'提示'},function(index){
            localStorage.removeItem('token')
            location.href='./login.html'
            layer.close(index)
        })
    })
})

function getUserInfo(){
    $.ajax({
        url:'my/userinfo',
        type:'GET',
        headers:{
            Authorization:localStorage.getItem('token')||''
        },
        success:function(){
            if(resizeBy.status!==0){
                return layui.layer.msg('获取用户信息失败')
            }
            //渲染用户头像
            renderAvatar(res.data)
        },
        // complete:function(res){
        //     // console.log(res);
        //     if(res.status===0 && res.statusText=='error'){
        //         localStorage.removeItem('token')
        //         location.href='./login.html'
        //     }
        // }
    })
}
function renderAvatar(user){
    //获取用户名称
    var name=user.nickname || user.username
    //设置欢迎文本
    $('#welcome').html('欢迎&nbsp;&nbsp;'+name)
    //按需渲染用户头像
    if(user.user_pic!=null){
        $('.layui-nav-img').attr('src',user.user_pic).show()
        $('.text-avatar').hide()
    }else{
        $('.layui-nav-img').hide()
        $('.text-avatar').html(name[0].toUpperCase()).show()
    }
}