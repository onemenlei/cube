//插入头像 年月日 
$(".header_message").html("");
$.tmpl(ml_today_date).appendTo('.header_message');

//左侧菜单
var querycount_nav_Items = [{
    name: '学生查询',
    classa: 'icon-xuexiaoguanli',
    href : 'school_xscx'
}, {
    name: '手机查询',
    classa: 'icon-jigouguanli',
    href : 'school_sjcx'
}, {
    name: '短信审计',
    classa: 'icon-jigouguanli',
    href : 'querycount_dxsj'
}, {
    name: '登陆查询',
    classa: 'icon-jigouguanli',
    href : 'querycount_dlcx'
}, {
    name: '考试报告',
    classa: 'icon-jigouguanli',
    href : 'querycount_ksbg'
}, {
    name: '教师帐户中心',
    classa: 'icon-jigouguanli',
    href : 'querycount_jszhzx'
}, {
    name: '家长帐户中心',
    classa: 'icon-jigouguanli',
    href : 'querycount_jzzhzx'
}, {
    name: '分析统计',
    classa: 'icon-jigouguanli',
    href : 'querycount_fxtj'
}];
$.tmpl(lab_nav_menu, menus_Items).appendTo('#querycount_menu');
//菜单第一项反白选中，内容显示第一项
$($("#querycount_menu.indexItems_nav_ul li")[0]).addClass("selected");
/*
$("#querycount_article").load(('../pages/' + analyse_nav_Items[0].href + '.html'), function () {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = '../assets/js/' + analyse_nav_Items[0].href + '.js';
    document.body.appendChild(script);
});*/
//加载页面内容方法
Men.load_content('querycount_article',menus_Items[0].menuUrl);
//侧菜单切换
$("#querycount_menu.indexItems_nav_ul").on("click", "li", function () {
    $(this).addClass("selected").siblings().removeClass("selected");
    var n = $(this).index();
    /*
    $($("#querycount_article")).load(('../pages/' + analyse_nav_Items[n].href + '.html'), function () {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = '../assets/js/' + analyse_nav_Items[n].href + '.js';
        document.body.appendChild(script);
    });*/
    //加载页面内容方法
    Men.load_content('querycount_article',menus_Items[n].menuUrl);
});
