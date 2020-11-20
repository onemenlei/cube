//mufeng_user 牧分用户
var job_content = {
    /*其他作业*/
    //常规作业列表数据
    job_content_data: function(val,callback){ // val就是传输到后台的值，再取回后台传前台的数据。如没有，可用null代替
        var res={code:0,data:[   // code 作业编号，title 作业标题, analysis 待分析/已分析， grade 年级， subject 科目， operation 作业小节 
            {"code":"109872","title":"周一数学作业分析","analysis":false,"grade":"高三","subject":"数学","operation":"7"},
            {"code":"129837","title":"周二数学作业分析","analysis":true,"grade":"高二","subject":"语文","operation":"4"},
        ]};
        if(res.code == 0)
            callback(res.data);
    },
    //生成常规作业列表
    create_job_content: function(){
        this.job_content_data(null, function(res){
            $("#job_content").html(template('job_content_template',{model:res}));
        });
    },
    //搜索按钮
    search_job(e){
        var value = $(e).prev("input").val().trim(),self=this;
        if(value != '' && value != null){
            alert("搜索内容："+ value);
            self.job_content_data(value, function(res){  // 这一步是把搜索框内的值传输到后台，再由后台生成数据返回前端，显示符合条件的作业
                $("#job_content").html(template('job_content_template',{model:res}));
            });
        }
            
    },
    //新建作业按钮
    newly_btn: function(){
        Men.load_content('#job_article','job_create');
    },
    //管理按钮
    manager_btn: function(code){
        alert("管理："+code);
        sessionStorage.setItem('manage_code',code);
        Men.load_content('#job_article','job_manage');
    },
    //删除按钮
    delete_btn: function(code,e){
        //alert("删除："+code);
        var r = confirm("删除此项？"+code);
        if(r)
            $(e).parents(".job_sontent_style").remove();
    },
    // 常规作业/教辅作业第一项反白选中，内容显示第一项
    school_reset: function(){
        $("#job_content_ul.label_top_menu_ul li").eq(0).addClass("selected").siblings().removeClass("selected");
        $("#job_content_ul.label_top_menu_ul+div").children().eq(0).show().siblings().hide();
    },
    
    /*教辅作业*/
    //教辅学级数据
    academicLevelTeaching_data: function(callback){
        var res = {code:0,message:"返回数据正确!", data:[
            {code:"2019",name:"19级"},
            {code:"2018",name:"18级"},
            {code:"2017",name:"17级"},
            {code:"2016",name:"16级"}
        ]};
        if(res.code == 0)
            callback(res.data);
        else
            alert(res.message);
    },
    //教辅科目数据
    subjectTeaching_data: function(code, callback){ //code 学级编号
        var res = {code:0,message:"返回数据正确!", data:[
            {code:"0001",name:"语文"},
            {code:"0002",name:"数学"},
            {code:"0003",name:"英语"},
            {code:"0004",name:"物理"},
            {code:"0005",name:"化学"},
            {code:"0006",name:"历史"},
            {code:"0007",name:"地理"},
            {code:"0008",name:"生物"},
            {code:"0009",name:"信息"},
            {code:"0010",name:"通用"},
            {code:"0011",name:"科学"},
            {code:"0012",name:"奥数"},
            {code:"0013",name:"技术"},
            {code:"0014",name:"音乐"},
            {code:"0015",name:"体育"},
            {code:"0016",name:"心理"},
            {code:"0017",name:"教育学(小学)"},
            {code:"0018",name:"教育学(中学)"}
        ]};
        if(res.code == 0)
            callback(res.data);
        else
            alert(res.message);
    },
    //生成学级
    academicLevelTeaching_create: function(){
        var self=this;
        self.academicLevelTeaching_data(function(res){
            var html="";
            $.each(res, function(index,value){
                html+=`<span data-code="${value.code}">${value.name}</span>`;
            });
            $("#academicLevelTeaching").html(html);
            $("#academicLevelTeaching>span").on("click", function(){
                $(this).addClass("hover").siblings().removeClass("hover");
                self.subjectTeaching_create();
            });
            $("#academicLevelTeaching>span").eq(0).click();            
        });
    },
    //生成科目
    subjectTeaching_create: function(){
        var self=this;
        var academicLevelCode = $("#academicLevelTeaching>span.hover").data("code"); //学级编号
        self.subjectTeaching_data(academicLevelCode, function(res){
            var html="";
            $.each(res, function(index,value){
                html+=`<span data-code="${value.code}">${value.name}</span>`;
            });
            $("#subjectTeaching").html(html);
            $("#subjectTeaching>span").on("click", function(){
                $(this).addClass("hover").siblings().removeClass("hover");
                self.teaching_create();
            });
            $("#subjectTeaching>span").eq(0).click();            
        });
    },
    //生成教辅内容
    teaching_create: function(){
        var academicLevelCode = $("#academicLevelTeaching>span.hover").data("code"); //学级编号
        var subjectCode = $("#subjectTeaching>span.hover").data("code"); //科目编号
        var self=this;
        self.teachingAssistant_data(academicLevelCode,subjectCode,function(res){
            $("#teachingAssistant").html(template('teachingAssistantTemplate',{model:res}));
        });
    },
    //教辅书数据
    teachingAssistant_data: function(code1,code2,callback){ //code1 学级编号, code2 科目编号
        var res = {code:0,data:[
                {code:"110981",name:"育才经典训练七年级上册",imgsrc:"../assets/img/cover.jpg"},
                {code:"110982",name:"解题研究七年级上册",imgsrc:"../assets/img/cover_02.jpg"}
            ]};
        if(res.code == 0)
            callback(res.data);
        else
            alert(res.message);
    },
    //添加新书
    addBook: function(){
        var html=`<div class="col-12"><label class="PA05">输入教辅编号：</label><input class="default_input" id="teachercode" type="text" /></div>`;
        Men.new_window('新增教辅作业',html,'取消',function(){//分析窗口确定按钮
                alert("教辅编号"+$("#teachercode").val()); //教辅编号
                Tomd.toast('center', '', '添加成功！');
                Men.close_window();
            });
        $(".center_popup").addClass("wid20");
        $('.center_popup .center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">添加</button>');
    },
    //删除新书
    delBook: function(e,bookId){
        event.stopPropagation();
        Men.confirm('删除','要删除编号为：'+bookId+'的书吗？','删除', function(c){if(c){
            $(e).parent().parent().remove();            
        }});        
    },
    //跳转到教辅章节
    chaptersHref: function(code){
        sessionStorage.setItem('chapters_code',code); //存储教辅作业code
        Men.load_content('#job_article', 'job_chapters'); //跳转到教辅章节页
    },
    //设定页面一加载就运行
    init: function () {
        this.school_reset();
        this.create_job_content();
        this.academicLevelTeaching_create();
    }
};
//加载即运行
job_content.init();
