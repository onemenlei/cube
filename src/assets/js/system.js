//插入头像 年月日 
$(".header_message").html("");
$.tmpl(ml_today_date).appendTo('.header_message');

//system侧菜单json
var system_nav_Items = [{
    name: '帐户管理',
    classa: 'icon-zhengtigaikuang',
    href : 'system_zhgl'
}, {
    name: '审计记录',
    classa: 'icon-juduantongji',
    href : 'system_sjjl'
}, {
    name: '系统检测',
    classa: 'icon-xiaoduantongji',
    href : 'system_xtjc'
}, {
    name: 'License',
    classa: 'icon-xueshengduantongji',
    href : 'system_license'
}];
$.tmpl(lab_nav_menu, menus_Items).appendTo('#systempage_menu');
//默认显示第一项
$($("#systempage_menu.indexItems_nav_ul li")[0]).addClass("selected");
/*
$("#system_article").load(('../pages/' + system_nav_Items[0].href + '.html'), function () {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = '../assets/js/' + system_nav_Items[0].href + '.js';
    document.body.appendChild(script);
});*/
//加载页面内容方法
Men.load_content('system_article',menus_Items[0].menuUrl);
//侧菜单切换
$("#systempage_menu.indexItems_nav_ul").on("click", "li", function () {
    $(this).addClass("selected").siblings().removeClass("selected");
    var n = $(this).index();
    /*
    $($("#system_article")).load(('../pages/' + system_nav_Items[n].href + '.html'), function () {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = '../assets/js/' + system_nav_Items[n].href + '.js';
        document.body.appendChild(script);
    });*/
    //加载页面内容方法
    Men.load_content('system_article',menus_Items[n].menuUrl);
});