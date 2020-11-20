//插入头像 年月日 
$(".header_message").html("");
$.tmpl(ml_today_date).appendTo('.header_message');

//index侧菜单json
var index_nav_Items = [{
    name: '整体状况',
    classa: 'icon-zhengtigaikuang',
    href : 'index_ztzk'
}, {
    name: '局端统计',
    classa: 'icon-juduantongji',
    href : 'index_jdtj'
}, {
    name: '校端统计',
    classa: 'icon-xiaoduantongji',
    href : 'index_xdtj'
}, {
    name: '学生端统计',
    classa: 'icon-xueshengduantongji',
    href : 'index_xsdtj'
}, {
    name: '渠道统计',
    classa: 'icon-qudaotongji',
    href : 'index_qdtj'
}];
$.tmpl(lab_nav_menu, menus_Items).appendTo('#indexpage_menu');
//默认显示第一项
$($("#indexpage_menu.indexItems_nav_ul li")[0]).addClass("selected");
/*
$("#index").load(('../pages/' + index_nav_Items[0].href + '.html'), function () {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = '../assets/js/' + index_nav_Items[0].href + '.js';
    document.body.appendChild(script);
});*/
//加载页面内容方法
Men.load_content('index',menus_Items[0].menuUrl);
//侧菜单切换
$("#indexpage_menu.indexItems_nav_ul").on("click", "li", function () {
    $(this).addClass("selected").siblings().removeClass("selected");
    var n = $(this).index();
    /*
    $($("#index")).load(('../pages/' + index_nav_Items[n].href + '.html'), function () {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = '../assets/js/' + index_nav_Items[n].href + '.js';
        document.body.appendChild(script);
    });*/
    //加载页面内容方法
    Men.load_content('index',menus_Items[n].menuUrl); 
});

