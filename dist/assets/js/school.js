//插入头像 年月日 
$(".header_message").html("");
$.tmpl(ml_today_date).appendTo('.header_message');

//左侧菜单
var lab_nav_Items = [{
    name: '学校管理',
    classa: 'icon-xuexiaoguanli',
    href : 'school_xxgl'
}, {
    name: '机构管理',
    classa: 'icon-jigouguanli',
    href : 'school_jggl'
},{
    name: '一人一本',
    classa: 'icon-xuexiaoguanli',
    href : 'school_yryb'
}, {
    name: '考试报告',
    classa: 'icon-jigouguanli',
    href : 'school_ksbg'
}, {
    name: '新建菜单',
    classa: 'icon-xuexiaoguanli',
    href : 'menu_new'
}, {
    name: '角色配置',
    classa: 'icon-jigouguanli',
    href : 'role_configuration'
}, {
    name: '功能授权',
    classa: 'icon-jigouguanli',
    href : 'function_authorization'
}];
$.tmpl(lab_nav_menu, menus_Items).appendTo('#schoolmanage_menu');
//默认显示第一项
$($("#schoolmanage_menu.indexItems_nav_ul li")[0]).addClass("selected");
/*
$("#schoolmanage_right").load(('../pages/' + lab_nav_Items[0].href + '.html'), function () {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = '../assets/js/' + lab_nav_Items[0].href + '.js';
    document.body.appendChild(script);
});*/
//加载页面内容方法
Men.load_content('schoolmanage_right',menus_Items[0].menuUrl);
//侧菜单切换
$("#schoolmanage_menu.indexItems_nav_ul").on("click", "li", function () {
    $(this).addClass("selected").siblings().removeClass("selected");
    var n = $(this).index();
    /*
    $($("#schoolmanage_right")).load(('../pages/' + lab_nav_Items[n].href + '.html'), function () {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = '../assets/js/' + lab_nav_Items[n].href + '.js';
        document.body.appendChild(script);
    });*/
    //加载页面内容方法
    Men.load_content('schoolmanage_right',menus_Items[n].menuUrl);
});


