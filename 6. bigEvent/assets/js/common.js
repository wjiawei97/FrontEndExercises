//顶部个人信息菜单栏的显示与隐藏
var personal_info = document.querySelector('.pb-layout-right>li');
var personal_items = document.querySelector('.pb-layout-right .pb-nav-child');
personal_info.addEventListener('mouseenter', function (e) {
    //移入显示具体信息
    personal_items.style.display = 'block'
})
personal_info.addEventListener('mouseleave', function (e) {
    //移除则不显示具体信息
    personal_items.style.display = 'none'
})


//左侧侧边栏的显示与隐藏
//移除pb-nav-itemed类
var nav_lis = document.querySelectorAll('.pb-nav-tree li');
// console.log(nav_tree);
for (var i = 0; i < nav_lis.length; i++) {
    nav_lis[i].addEventListener('click', function (e) {
        if (this.className.indexOf('pb-nav-itemed')!=-1) {
            this.className = this.className.replace(' pb-nav-itemed', '')
        } else {
            this.className += ' pb-nav-itemed'
        }

    })
}

