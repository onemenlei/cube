var job_create = {
    //年级数据
    grade_data: function(callback){
        var res={code:0,data:[
            {code:"7",name:"七年级"},{code:"8",name:"八年级"},{code:"9",name:"九年级"},{code:"10",name:"十年级"},{code:"11",name:"十一年级"}
        ]};
        if(res.code == 0)
            callback(res.data);
        /*
        $.get(url, function(res){
            if(res.code == 0)
            callback(res.data);
        });
        */        
    },
    //学期数据
    term_data: function(callback){
        var res={code:0,data:[
            {code:"001",name:"上学期"},{code:"002",name:"下学期"}
        ]};
        if(res.code == 0)
            callback(res.data);
    },
    //科目数据
    subject_data: function(callback){
        var res={code:0,data:[
            {code:"101",subject_name:"语文"},{code:"102",subject_name:"数学"},{code:"103",subject_name:"英语"},{code:"104",subject_name:"物理"},{code:"105",subject_name:"化学"},{code:"106",subject_name:"生物"},{code:"107",subject_name:"历史"},{code:"108",subject_name:"政治"},{code:"109",subject_name:"技术"},{code:"110",subject_name:"信息"},{code:"111",subject_name:"通用"},{code:"112",subject_name:"文科综合"},{code:"113",subject_name:"理科综合"}
        ]};
        if(res.code == 0)
            callback(res.data);
    },
    //作业教辅数据
    teachingAssistant_data: function(callback){
        var res={code:0,data:[
            {code:"101",name:"育才经典"},{code:"102",name:"学习纲要"},{code:"103",name:"儿童教育"}
        ]};
        if(res.code == 0)
            callback(res.data);
    },
    //作业小节数据
    operationSection_data: function(callback){
        var res={code:0,data:[
            {code:"001",name:"1.1有理数的加法"},{code:"002",name:"1.2无理数的减法"},{code:"003",name:"有理数与无理数"}
        ]};
        if(res.code == 0)
            callback(res.data);
    },
    //试卷数据
    testPaper_data: function(callback){
        var res={code:0,data:[
            {code:"20191201",name:"1.1语文试卷"},{code:"20191202",name:"1.2数学试卷"}
        ]};
        if(res.code == 0)
            callback(res.data);
    },
    //当天时间
    get_currentDate: function(callback){
        let time = new Date();
        let day = ("0" + time.getDate()).slice(-2);
        let month = ("0" + (time.getMonth() + 1)).slice(-2);
        let today = time.getFullYear() + "-" + (month) + "-" + (day);
        return today;
    },
    //生成创建作业内容
    create_job: function(){
        $("#start_date").val(this.get_currentDate()); //当前日期
        $("#end_date").val(this.get_currentDate()); //当前日期
        var html1="",html2="";
        this.grade_data(function(res){ //创建年级选项
            $.each(res, function(index,value){
                html1+=`<option val="${value.code}">${value.name}</option>`;
            });
            $("#grade_select").html(html1);
        });
        this.term_data(function(res){ //创建学期选项
            $.each(res, function(index,value){
                html2+=`<option val="${value.code}">${value.name}</option>`;
            });
            $("#term_select").html(html2);
        });
        this.subject_data(function(res){ //创建科目管理
            $("#subject_dd").html(template('subject_template',{model:res}));
        });
        $("input[type='radio'][name='system']").on("change", function(){
            $("#paper_frame").empty();
        });
        this.paper_truly();
        Men.only_number();
    },
    paper_num:0,
    //生成试卷方法
    create_paper: function(num){
        var number = num || 1,html="",self=this;
        self.teachingAssistant_data(function(e1){
            self.operationSection_data(function(e2){
                self.testPaper_data(function(e3){
                    let date = self.get_currentDate();
                    if(num){
            for(i=0;i<number;i++){
            let model=template('paper_model',{n:i,teach:e1,operation:e2,testpaper:e3,date});
            html+=model;
        };
             $("#paper_frame").html(html);
            self.paper_num=number;
        }           
        else{
            $("#paper_frame").append(template('paper_model',{n:self.paper_num,teach:e1,operation:e2,testpaper:e3,date}));
            self.paper_num++;
        } 
                });
            });
        });
                   
        var type = $("input:radio[name='system']:checked").val();
        if(type==1)
            $("#paper_frame .price").remove();
        this.paper_truly();
    },
    //生成试卷按钮
    create_btn: function(){
        var num = $("#paper_num").val();        
        this.create_paper(num);
    },
    //试卷切换
    paper_truly: function(){
        $("input:radio.paper_create").on("change", function(){
            var n = $(this).val();
            $(this).parent().parent().next("aside").find("main").eq(n).show().siblings().hide();
        });
    },
    //试卷删除
    paper_delete: function(e){
        var r=confirm("要删除此项？");
        if(r)
            $(e).parent().remove();
    },
    //创建整个内容
    create_content: function(){
        //校验
	        $("#job_form").formValidator();
	        var r = $("#job_form").validate().form();
	        if (r) {
                alert("整个页面内容存入后台");
                this.href_content();
            }        
    },
    //转回job_content页
    href_content: function(){
        Men.load_content('#job_article','job_content');
    },
    //自动运行
    init: function(){
        this.create_job();
    },
};

job_create.init();