//切换tab显示/隐藏
$($(".task_menu_ul li")[0]).addClass("selected");
$($(".task_menu_div>div")[0]).show();

$(".task_menu_ul li").on("click",function(){
    $(this).addClass("selected").siblings().removeClass("selected");
    var n=$(this).index();
    $($(".task_menu_div>div")[n]).show().siblings().hide();
});

//切换tab显示/隐藏
$($(".today_count_ul li")[0]).addClass("selected");
$($(".today_count_div>div")[0]).show();

$(".today_count_ul li").on("click",function(){
    $(this).addClass("selected").siblings().removeClass("selected");
    var n=$(this).index();
    $($(".today_count_div>div")[n]).show().siblings().hide();
});