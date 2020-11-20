//插入头像 年月日 
$.tmpl(ml_today_date).appendTo('#ml_date');

//test侧菜单json
var test_nav_Items = [{
    name: '考试管理',
    classa: 'icon-zhengtigaikuang',
    href : 'test_ksgl'
}, {
    name: '试卷管理',
    classa: 'icon-juduantongji',
    href : 'test_sjgl'
}, {
    name: '答题管理',
    classa: 'icon-qudaotongji',
    href : 'test_dtgl'
},{
    name: '考试分数导入',
    classa: 'icon-qudaotongji',
    href : 'test_fsdr'
}];
$.tmpl(lab_nav_menu, menus_Items).appendTo('#testpage_menu');
//默认显示第一项
$($("#testpage_menu.indexItems_nav_ul li")[0]).addClass("selected");
/*
$("#test_article").load(('../pages/' + test_nav_Items[0].href + '.html'), function () {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = '../assets/js/' + test_nav_Items[0].href + '.js';
    document.body.appendChild(script);
});*/
//加载页面内容方法
Men.load_content('test_article',menus_Items[0].menuUrl);
//侧菜单切换
$("#testpage_menu.indexItems_nav_ul").on("click", "li", function () {
    $(this).addClass("selected").siblings().removeClass("selected");
    var n = $(this).index();
    /*
    $($("#test_article")).load(('../pages/' + test_nav_Items[n].href + '.html'), function () {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = '../assets/js/' + test_nav_Items[n].href + '.js';
        document.body.appendChild(script);
    });*/
    //加载页面内容方法
    Men.load_content('test_article',menus_Items[n].menuUrl);
});