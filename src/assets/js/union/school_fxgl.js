var SCHOOL_JGFX = {
    //标题等数据
    examTitle_data: function(code,callback){
        var res={code:0,data:{title:"高一测试考试",mechanism:"武候区教育局"}};
        callback(res);
    },
    //菜单内容数据
    menu_data: function(callback){ //菜单内容基本不变就直接写在前端写死
        var res={code:0,data:[
            {name:"结构管理",menuUrl:"union/structureManagement"},
            {name:"数据管理",menuUrl:"union/dataManagement"},
            {name:"分析配置",menuUrl:"union/analysisConfiguration"}
        ]};
        callback(res);
    },
    //创建标题
    create_texamTitle: function(){
        var fxglCode=sessionStorage.getItem('_examCode'); //传输过来的考试编号
        this.examTitle_data(fxglCode, function(res){
            if(res.code==0){
                $("#titleSpan").html(res.data.title);
                $("#titleH").html(res.data.title);
                $("#mechanismSpan").html(res.data.mechanism);
            }else{
                Tomd.alert('提示', '后台数据错误！', '确定');
            };
        })
    },
    //生成菜单和跳转
    create_menuHref: function(){
        this.menu_data(function(res){
            if(res.code==0){
                var html="";
                $.each(res.data, function(index,value){
                    html+=`<li>${value.name}</li>`;
                });
                $("#fxgl_ul").html(html);
                $("#fxgl_ul li").on("click",function(){
                    var index = $(this).index();
                    Men.load_content('FYGL_aricle', res.data[index].menuUrl);
                });
                $("#fxgl_ul li")[0].click();
            }
        });        
    },
    //回上一页
     returnHref: function(){
         $("#pagestitleHref").on("click", function(){
             Men.load_content('analysemanage_article','union/school_jgfx');
         });
     },
    //自动运行
    init: function(){
        this.create_texamTitle();
        this.create_menuHref();
        this.returnHref();
    },
};
SCHOOL_JGFX.init();