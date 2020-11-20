//插入头像 年月日 
$(".header_message").html("");
$.tmpl(ml_today_date).appendTo('.header_message');

//左侧菜单
var analyse_nav_Items = [{
    name: '渠道1',
    classa: 'icon-xiaoduantongji',
    href : 'channel_one'
}, {
    name: '渠道2',
    classa: 'icon-xueshengduantongji',
    href : 'channel_two'
}];
$.tmpl(lab_nav_menu, menus_Items).appendTo('#channel_menu');
//菜单第一项反白选中，内容显示第一项
$($("#channel_menu.indexItems_nav_ul li")[0]).addClass("selected");
//加载页面内容方法
Men.load_content('channel_article',menus_Items[0].menuUrl);
//侧菜单切换
$("#channel_menu.indexItems_nav_ul").on("click", "li", function () {
    $(this).addClass("selected").siblings().removeClass("selected");
    var n = $(this).index();
    //加载页面内容方法
    Men.load_content('channel_article',menus_Items[n].menuUrl);
});
