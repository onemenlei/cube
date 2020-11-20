//顶部标签
var channel_tab_Items = [{
    name: '渠道角色',
    href: 'channel_admin'
},{
    name: '牧分角色',
    href: 'channel_mufeng'
},{
    name: '局用户',
    href: 'channel_teacher'
},{
    name: '学生管理',
    href: 'channel_student'
},{
    name: '家长管理',
    href: 'channel_patriarch'
}
];
$.tmpl(top_nav_menu, channel_tab_Items).appendTo('#channel_tab_menu');
//默认显示第一项
$($("#channel_tab_menu li")[0]).addClass("selected");
//加载页面内容方法
Men.load_content('channel_tab_iframe',channel_tab_Items[0].href);

//顶部标签切换
$("#channel_tab_menu").on("click", "li", function () {
    $(this).addClass("selected").siblings().removeClass("selected");
    var n = $(this).index();
    //加载页面内容方法
    Men.load_content('channel_tab_iframe',channel_tab_Items[n].href);
});
//点击返回 返回上一页
$("#return_btn").on("click",function(){
    //加载页面内容方法
    Men.load_content('channel_article','channel_one');
});

//渠道名称
$("#channelname").html("渠道名称");