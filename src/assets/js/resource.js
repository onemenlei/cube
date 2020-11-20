//插入头像 年月日 
$(".header_message").html("");
$.tmpl(ml_today_date).appendTo('.header_message');

//左侧菜单
var resouce_nav_Items = [{
    name: '行政区划',
    classa: 'icon-xuexiaoguanli',
    href : 'resource_xzqh'
}, {
    name: '试题类型',
    classa: 'icon-jigouguanli',
    href : 'resource_stlx'
}, {
    name: '试题类别',
    classa: 'icon-jigouguanli',
    href : 'resource_stlb'
}, {
    name: '知识点体系',
    classa: 'icon-jigouguanli',
    href : 'resource_zsdtx'
}];
$.tmpl(lab_nav_menu, menus_Items).appendTo('#resource_menu');
//菜单第一项反白选中，内容显示第一项
$($("#resource_menu.indexItems_nav_ul li")[0]).addClass("selected");
/*
$("#resource_article").load(('../pages/' + resouce_nav_Items[0].href + '.html'), function () {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = '../assets/js/' + resouce_nav_Items[0].href + '.js';
    document.body.appendChild(script);
});*/
//加载页面内容方法
Men.load_content('resource_article',menus_Items[0].menuUrl);
//侧菜单切换
$("#resource_menu.indexItems_nav_ul").on("click", "li", function () {
    $(this).addClass("selected").siblings().removeClass("selected");
    var n = $(this).index();
    /*
    $($("#resource_article")).load(('../pages/' + resouce_nav_Items[n].href + '.html'), function () {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = '../assets/js/' + resouce_nav_Items[n].href + '.js';
        document.body.appendChild(script);
    });*/
    //加载页面内容方法
    Men.load_content('resource_article',menus_Items[n].menuUrl);
});
