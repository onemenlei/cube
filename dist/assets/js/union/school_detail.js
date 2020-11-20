//顶部标签
var school_tab_Items = [
    {
    name: '学校管理',
    href: 'union/school_manage'
},{
    name: '学级/学届',
    href: 'union/school_academiclevel'
},{
    name: '班级管理',
    href: 'union/school_class'
},{
    name: '教师管理',
    href: 'union/school_teacher'
},{
    name: '学生管理',
    href: 'union/school_student'
},{
    name: '家长管理',
    href: 'union/school_patriarch'
},{
    name: '配置',
    href: 'union/school_config'
}/*,{
    name: '晓羊免登录用户',
    href: 'school_xiaoyang'
},{
    name: '显示当前知识点体系',
    href: 'school_knowledge'
},{
    name: '显示当前能力点体系',
    href: 'school_capacity'
},{
    name: '导入知识点体系',
    href: 'school_import_knowledge'
}*/
];
$.tmpl(top_nav_menu, school_tab_Items).appendTo('#school_tab_menu');
//默认显示第一项
$($("#school_tab_menu li")[0]).addClass("selected");
//加载页面内容方法
Men.load_content('school_tab_iframe',school_tab_Items[0].href);
/*
$("#school_tab_iframe").load(('../pages/' + school_tab_Items[0].href + '.html'), function () {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = '../assets/js/' + school_tab_Items[0].href + '.js';
    document.body.appendChild(script);
});*/
//顶部标签切换
$("#school_tab_menu").on("click", "li", function () {
    $(this).addClass("selected").siblings().removeClass("selected");
    var n = $(this).index();
    /*
    $($("#school_tab_iframe")).load(('../pages/' + school_tab_Items[n].href + '.html'), function () {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = '../assets/js/' + school_tab_Items[n].href + '.js';
        document.body.appendChild(script);
    });*/
    //加载页面内容方法
    Men.load_content('school_tab_iframe',school_tab_Items[n].href);
});
/*点击返回 返回上一页
$("#return_btn").on("click",function(){
  $("#schoolmanage_right").load('school_xxgl.html',function(){
      var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = '../assets/js/' + 'school_xxgl.js';
  document.body.appendChild(script);
  });
});
*/
//点击返回 返回上一页
$("#return_btn").on("click",function(){
    //加载页面内容方法
    Men.load_content('schoolmanage_right','school_xxgl');
});

//学校名
$("#schoolname").html("没必要肖");