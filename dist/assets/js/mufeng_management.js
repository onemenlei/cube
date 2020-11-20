//插入头像 年月日 
$(".header_message").html("");
$.tmpl(ml_today_date).appendTo('.header_message');


$.tmpl(lab_nav_menu, menus_Items).appendTo('#mufeng_menu');
//菜单第一项反白选中，内容显示第一项
$($("#mufeng_menu.indexItems_nav_ul li")[0]).addClass("selected");
//加载页面内容方法
Men.load_content('mufeng_article',menus_Items[0].menuUrl);
//侧菜单切换
$("#mufeng_menu.indexItems_nav_ul").on("click", "li", function () {
    $(this).addClass("selected").siblings().removeClass("selected");
    var n = $(this).index();
    //加载页面内容方法
    Men.load_content('mufeng_article',menus_Items[n].menuUrl);
});
