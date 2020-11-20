// 学校管理/学校创建第一项反白选中，内容显示第一项
$("#basic_ul.label_top_menu_ul li").eq(0).addClass("selected").siblings().removeClass("selected");
$("#basic_ul.label_top_menu_ul+div").children().eq(0).show().siblings().hide();

//点击返回 返回上一页
$("#return_btn").on("click",function(){
  $("#schoolmanage_right").load('school_xxgl.html',function(){
      var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = '../assets/js/' + 'school_xxgl.js';
  document.body.appendChild(script);
  });
});
