var job_chapters = {
    //教辅章节数据
    job_chapters_data: function(callback){ 
        var code = sessionStorage.getItem("chapters_code"); //code是job_content页传过来的教辅编号
        var res={code:0};
        res.data={title:"育才经典七年级数学上册",subject:"数学",list:[ //paperCode 大章编号,paperName 大章名称，paperTitle 大章标题， children.code 小章编号， children.name 小章名称， children.task 作业结构 已导入/未导入，children.importClass 班级数据导入， children.importPeople 人数数据导入， anaylzedClass 分析状态班级数量， anaylzed 分析状态 已分析/未分析
            {paperCode:'101198',paperName:"第一章",paperTitle:"有理数的运算",children:[{code:'102910',codeName:"1.1",name:"有理数的加法",task:true,importClass:8,importPeople:300,anaylzedClass:8,analyzed:true},{code:'102911',codeName:"1.2",name:"绝对值",task:true,importClass:9,importPeople:301},{code:'102912',codeName:"1.5",name:"有理数减法",task:false}]}
                                                    ]};
        if(res.code == 0)
            callback(res.data);
        else
            alert(res.message);
    },  
    //分析数据
    analysis_data: function(code,callback){
        var res={code:0};
        res.data=[{code:"1001",subject:"数学",task_name:"1.1有理数的加法",analysis:"未分析"},{code:"1002",subject:"数学",task_name:"1.2有理数的减法",analysis:"未分析"}];
        if(res.code == 0)
            callback(res.data);
        else
            alert(res.message);
    },
    //生成标题和内容
    create_titleMain: function(){
        var self=this;        
        this.job_chapters_data(function(res){
            $("#title_span").html(res.title);
            $("#title_h").html(res.title);
            $("#subject_span").html(res.subject);
            self.create_chapters_table(res.list);
        });
    },
    //创建表格
    create_chapters_table: function(data){
        $("#chaptersTable tbody").html(template('chaptersTableTemplate',{model:data}));
    },
    //导入分数窗口
    import_price_window: function(){
        var html = `<div class="col-12 text-right fl" style="margin-bottom:.5rem"><button class="default_btn" onclick="job_manage.downTemplate()">下载模板</button></div>
        <div class="col-12 mb10 fl">
            <div class="col-6 fl">
            章节：<select class="default_input" id="chapter_select"></select>
            </div>
            <div class="col-6 fl">
            小节：<select class="default_input selectpicker col-12" multiple id="subsection_select"></select>
            </div>
        </div>
        <div class="col-12 fl"><input type="file" name="file" class="dropify-fr"
					data-default-file="" /></div>`;
        Men.new_window('导入作业数据', html, '取消', function(){
        Tomd.toast('center', '', '导入成功！');
        Men.close_window();
    });
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">导入</button>');
        this.importExam_data(function(res){
            $.each(res.data,function(index,value){
                var val = JSON.stringify(value.children);
                $("#chapter_select").append(`<option value='${value.chapterId}' data-json='${val}'>${value.chapterName} ${value.title}</option>`);
            });
            $("#chapter_select").on("change", function(){
                var json = $(this).find("option:selected").data("json");
                var html = "<option value='00'>全部</option>";
                $.each(json, function(index,value){
                    html+=`<option value='${value.chapterId}'>${value.chapterName} ${value.title}</option>`;
                });
                $("#subsection_select").html(html).selectpicker('refresh').selectpicker({"noneSelectedText" : "请选择多选内容"});
            });
            $("#subsection_select").selectpicker({"noneSelectedText" : "请选择多选内容"});
            $("#chapter_select").change(); 
        });
        
    //初始化上传控件
    Men.dropify();
    },
    //批量导入作业数据章节和小节数据
    importExam_data(callback){
        var res={code:0,data:[
            {chapterId:100,chapterName:"第一章",title:"有理数运算",children:[{chapterId:121,chapterName:"第1.1章",title:"有理数加法"},{chapterId:122,chapterName:"第1.2章",title:"有理数减法"}]},
            {chapterId:200,chapterName:"第二章",title:"求幂运算",children:[{chapterId:221,chapterName:"第2.1章",title:"求幂加法"},{chapterId:222,chapterName:"第2.2章",title:"求幂减法"}]}
            ]};
        callback(res);
    },
    //结构管理
    structureManagement: function(code){
        sessionStorage.setItem('subsection_code',code); //存储教辅作业小章的code
        Men.load_content('#job_article', 'job_structureManagement'); //跳转到结构管理页
    },
    //作业数据
    operationData: function(code,codeName,name){
        sessionStorage.setItem('subsection_code',code); //存储教辅作业小章的code
        Men.load_content('#job_article', 'job_operationData'); //跳转到作业数据页
    },
    //分析窗口
    analysis_open: function(code,codeName,name){        
        var self=this;
        this.analysis_data(code,function(res){
            var html= template('analysis_template', {model:res});
            Men.new_window('作业分析',html,'取消',function(){//分析窗口确定按钮
                Tomd.toast('center', '', '分析成功！');
                Men.close_window();
            });
            $('.center_popup .center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">确定</button>');
            $("#title_Div").html(codeName+name);
            self.all_checkbox_btn();
        });        
    },
    //清空窗口
    clear_open: function(code){
        alert("未设计！");
    },
    //全选按钮
    all_checkbox_btn: function(){
        $("#all_checkbox").on("change", function(){
            if($(this).is(":checked")){
            $(this).parent().next("ul").find("input:checkbox").prop("checked",true);}
        else
            $(this).parent().next("ul").find("input:checkbox").prop("checked",false);
        });        
    },
    //自动运行
    init: function(){
        this.create_titleMain();
    },
};
job_chapters.init();