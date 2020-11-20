var job_manage = {
    //文件管理表数据
    job_manage_data: function(code,callback){
        var res={code:0};
        res.data={title:"第一周数学作业",subject:"数学",list:[{code:"01",task_id:"1312129",task_name:"1.1有理数的加法",date:"2019-12-2",task_structure:"未导入",fraction:"未导入",analysis:"未分析",total_score:100}, //title 试卷标题，subject 科目，code 作业编号，task_id 试卷编号，task_name 试卷名，date 日期，task_structure 作业结构导入与否，fraction 分数导入与否，analysis 分析与否，total_score 总分
                                                        {code:"02",task_id:"1321021",task_name:"1.2有理数的加法",date:"2019-12-3",task_structure:"已导入",fraction:"已导入-100人",analysis:"未分析",total_score:100},
                                                        {code:"03",task_id:"2521021",task_name:"1.3有理数的乘法",date:"2019-12-4",task_structure:"已导入",fraction:"已导入-120人",analysis:"未分析",total_score:120}
                                                    ]};
        if(res.code == 0)
            callback(res.data);
    },
    //分析数据
    analysis_data: function(code,callback){
        var res={code:0};
        res.data=[{code:"1001",subject:"数学",task_name:"1.1有理数的加法",analysis:"未分析"},{code:"1002",subject:"数学",task_name:"1.2有理数的减法",analysis:"未分析"}];
        if(res.code == 0)
            callback(res.data);
    },
    //导入分数数据
    price_data: function(callback){
        var res={code:0,data:[{code:"1",name:"1.1有理数的加法"},{code:"2",name:"1.2有理数的减法"},{code:"3",name:"1.3有理数的乘法"}]};
        if(res.code == 0)
            callback(res.data);
    },
    //生成标题和内容
    create_titleMain: function(){
        var self=this;
        var code = sessionStorage.getItem("manage_code"); //code是job_content页传过来的试卷编号
        this.job_manage_data(code,function(res){
            $("#title_span").html(res.title);
            $("#title_h").html(res.title);
            $("#subject_span").html(res.subject);
            self.create_job_manage_table(res.list);
        });
    },
    //创建表格
    create_job_manage_table: function(data){
        table = $('#datatable_job').DataTable({
            "data": data,
            "bAutoWidth": false, //是否自适应宽度
            "bProcessing": true, //加载时
            "dom": 'tp',
            /*"ajax": {
                "url": "datatable1.json",
                //"success":function(result){alert("down");console.log(result)},
                "error":function(error){alert(error)},
                "dataSrc": "",
            },*/
            "columns": [
                {
                    data: 'code'
                },
                {
                    data: "task_id"
                },
                {
                    data: "task_name"
                },
                {
                    data: "date"
                },
                {
                    data: "task_structure"
                },
                {
                    data: "fraction"
                },
                {
                    "data": null, //此列不绑定数据源
                   // "sWidth": "360px",
                    "orderable": false
                }
            ],
            "columnDefs": [
                { //分数  已导入和未导入
                    "targets": 4,
                    "data": null,
                    "render": function (data, type, row, meta) {
                        var html = "";
                        if(row.task_structure == "未导入")
                            html=`<span class="red-color">未导入</span>`;
                        else
                            html=row.task_structure;
                        return html;
                    }
                },
                { //作业结构  已导入和未导入
                    "targets": 5,
                    "data": null,
                    "render": function (data, type, row, meta) {
                        var html = "";
                        if(row.fraction == "未导入")
                            html=`<span class="red-color">未导入</span>`;
                        else
                            html=row.fraction;
                        return html;
                    }
                },
                {
                    "targets": 6,
                    "data": null,
                    "searchable": false,
                    "render": function (data, type, row, meta) {
                        var html = `<button class="default_btn_small yellow_btn" onclick="job_manage.editor_open('${data.code}')"><i class="iconfont icon-bianji"></i>编辑</button>
                        <button class="default_btn_small red_btn" onclick="Men.del_list({id:${data.code}},${meta.row},'../biz/sch/school/delSchool')"><i class="iconfont icon-shanchu"></i>删除</button>`;
                        return html;
                    }
            }],
            "language": {
                "url": "datatables_language.json"
            }
        });
    },    
    //分析窗口
    analysis_open: function(){
        var self=this;
        var code = sessionStorage.getItem("manage_code"); //code是job_content页传过来的试卷编号
        this.analysis_data(code,function(res){
            var html= template('analysis_template', {model:res});
            Men.new_window('作业分析',html,'取消',function(){//分析窗口确定按钮
                Tomd.toast('center', '', '分析成功！');
                Men.close_window();
            });
            $('.center_popup .center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">确定</button>');
            self.all_checkbox_btn();
        });        
    },
    //清空窗口
    empty_open: function(){
        var self=this;
        var code = sessionStorage.getItem("manage_code"); //code是job_content页传过来的试卷编号
        this.analysis_data(code,function(res){
            var html= template('clear_template', {model:res});
            Men.new_window('选择需要清空的作业分析数据',html,'取消',function(){//分析窗口确定按钮
                Tomd.toast('center', '', '清空成功！');
                Men.close_window();
            });
            $('.center_popup .center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">清空</button>');
            self.all_checkbox_btn();
        });        
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
    //导入分数窗口
    import_price_window: function(){
        var html = `<div class="col-12 text-right" style="margin-bottom:.5rem"><button class="default_btn" onclick="job_manage.downTemplate()">下载模板</button></div>
        <div class="col-12 mb10"><select class="default_input" id="price_select"><option>全部</option></select></div>
        <div class="col-12"><input type="file" name="file" class="dropify-fr"
					data-default-file="" /></div>`;
        Men.new_window('导入分数', html, '取消', function(){
        Tomd.toast('center', '', '导入成功！');
        Men.close_window();
    });
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">导入</button>');
        this.price_data(function(res){
            $.each(res,function(index,value){
                $("#price_select").append(`<option value=${value.code}>${value.name}</option>`);
            });
        });
        
    //初始化上传控件
    Men.dropify();
    },
    //下载模板按钮
    downTemplate: function(){
        alert("下载模板！");
    },
    //导入结构窗口
    importStructure: function(){
			var html = template('structure_template');
			Men.new_window('作业试卷结构管理', html, '关闭');
			$('#newwind .center_button_div').prepend('<button class="width_btn blue_btn" onclick="job_manage.onImportDataOK()" id="importDataButton">导入分数</button>');
			$('#newwind .center_button_div').prepend('<button class="width_btn green_btn" onclick="job_manage.save_structure()">保存试卷结构</button>');
			$("#newwind .center_popup").addClass("wid85");
			this.create_jobnumber();
			this.radio_check();
            this.create_netExamSection();
            this.create_netExamSchool();
            this.create_netExamProject();
            this.create_netExamPaper();
            this.create_schoolGrade();
            this.create_classStructure();
            this.create_table();
    },
    //导入分数按钮
    onImportDataOK: function(){
        alert("导入分数！");
    },
	//保存考试结构按钮
	save_structure : function() {
		alert("已保存！");
        Men.close_window();
	},
    //生成标题和作业编号等
    create_jobnumber: function(){
        var code = sessionStorage.getItem("manage_code"); //code是job_content页传过来的试卷编号
        this.job_manage_data(code, function(res){
            $("#structure_title").html(res.title);  //放进标题
            let html="";
            $.each(res.list, function(index,value){
                html+=`<li data-taskid="${value.task_id}" data-taskname="${value.task_name}" data-totalscore="${value.total_score}">${value.code}</li>`;
            });
            $("#structureul").html(html);
            $("#structureul li").on("click", function(){
                $(this).addClass("hover").siblings().removeClass("hover");
                $("#paperCode").html($(this).data("taskid")); //放进试卷编号
                $("#paperName").html($(this).data("taskname")); //放进试卷名称
                $("#paperScore").html($(this).data("totalscore")); //放进总分
            });
            $("#structureul li").eq(0).click();
        });        
    },    
    //用一组radio切换显示网阅同步/手动上传内容
	radio_check : function() {
		$("input:radio[name='sources']").on("change", function(){
            var n = $(this).val();
            if(n==1){
                $("#netExamSection").show();
			     $("#importDataButton").show();
            }else{
                $("#netExamSection").hide();
			     $("#importDataButton").hide();
            }                
        })
	},	
    //生成网阅服务器内容
    create_netExamSection: function(){
        var html="";
        this.netExamSection_data(function(res){
            $.each(res,function(index,value){
                html+=`<option value="${value.code}">${value.name}</option>`;
            });
            $("#netExamServer").html(html);
        });
    },
    //网阅服务器数据
    netExamSection_data: function(callback){
        var res={code:0,data:[{code:"0011",name:"牧分网阅"},{code:"0012",name:"多分网阅"},{code:"0013",name:"怀宇网阅"}]};
        if(res.code==0)
            callback(res.data);
    },
    //生成网阅学校
    create_netExamSchool: function(){
        this.netExamSchool_data(function(res){            
            $("#netExamSchCode").val(res.code);
        });
    },
    //网阅学校数据
    netExamSchool_data: function(callback){
        var res={code:0,data:{code:"280010"}};
        if(res.code==0)
            callback(res.data);
    },
    //生成网阅项目内容
    create_netExamProject: function(){
        var html="";
        this.netExamProject_data(function(res){
            $.each(res,function(index,value){
                html+=`<option value="${value.code}">${value.name}</option>`;
            });
            $("#examProjectList").html(html);
        });
    },
    //网阅项目数据
    netExamProject_data: function(callback){
        var res={code:0,data:[{code:"0011",name:"七中育才-九年级-月考"},{code:"0012",name:"水井坊-八年级-周考"}]};
        if(res.code==0)
            callback(res.data);
    }, 
    //生成网阅试卷内容
    create_netExamPaper: function(){
        var html="";
        this.netExamPaper_data(function(res){
            $.each(res,function(index,value){
                html+=`<option value="${value.code}">${value.name}</option>`;
            });
            $("#examPaperList").html(html);
        });
    },
    //网阅试卷数据
    netExamPaper_data: function(callback){
        var res={code:0,data:[{code:"0011",name:"语文"},{code:"0012",name:"数学"},{code:"0013",name:"英语"}]};
        if(res.code==0)
            callback(res.data);
    },     
    //生成当前学校，年级
    create_schoolGrade: function(){
        this.schoolGrade_data(function(res){            
            $("#current_school").html(res.school+"("+res.code+")");
            $("#current_grade").html(res.grade);
        });
    },
    //当前学校年级数据
    schoolGrade_data: function(callback){
        var res={code:0,data:{school:"七中育才汇源校区",code:"280011",grade:"七年级"}};
        if(res.code==0)
            callback(res.data);
    },     
	//生成班级结构内容，并按不同选择变化下面班级
    create_classStructure: function(){
        var self=this;
        this.classStructure_data(function(res){
            var html="";
            $.each(res, function(index,value){
                let clazz= JSON.stringify(value.clazz);
                html+=`<option data-code="${value.code}" data-clazz='${clazz}'>${value.name}</option>`;
            });
            $("#select_class").html(html);
            $("#select_class").on("change", function(){
                var clazz = JSON.stringify($(this).find("option:selected").data("clazz")),html1="";
                $.each(JSON.parse(clazz), function(index,value){
                    html1+=`<label class="class_label float-left"><input type="checkbox" value="${value.code}" />${value.name}</label>`;
                });
                $("#checkbox_select").html(html1);
                $("#all_checkbox").prop("checked",false);
            });
            $("#select_class").change();
            self.all_checkbox_class();
        });
    },
    //班级结构数据
    classStructure_data: function(callback){
        var res={code:0,data:[{code:"0000",name:"全部",clazz:[{code:"1",name:"1班"},{code:"2",name:"3班"},{code:"3",name:"3班"},{code:"4",name:"4班"},{code:"5",name:"5班"},{code:"6",name:"6班"},{code:"7",name:"7班"}]},
                              {code:"0001",name:"理科班",clazz:[{code:"1",name:"1班"},{code:"2",name:"3班"},{code:"3",name:"3班"},{code:"4",name:"4班"},{code:"5",name:"5班"}]},
                              {code:"0002",name:"文科班",clazz:[{code:"1",name:"1班"},{code:"2",name:"3班"},{code:"3",name:"3班"},{code:"4",name:"4班"},{code:"5",name:"5班"},{code:"6",name:"6班"},{code:"7",name:"7班"},{code:"8",name:"8班"},{code:"9",name:"9班"},{code:"7",name:"10班"}]}
                             ]};
        if(res.code==0)
            callback(res.data);
    },  
    //班级全选
	all_checkbox_class : function() {
		$("#all_checkbox").on("click", function() {
			if ($(this).is(":checked")) {
				$("#checkbox_select input:checkbox").prop("checked", true);
			} else {
				$("#checkbox_select input:checkbox").prop("checked", false);
			}
		});
	},
    //获取网阅考试项目
	gain_netexam : function(examItem) {
        alert("获取网阅考试项目");
    },
    //获取试卷结构
	gain_structure : function() {
        alert("获取试卷结构");
    },
    //生成表格
    create_table: function(){
        this.table_data(function(res){
            $("#netExamItem").html(template('paper_item_template',{data:res.paper.items}));
        });
    },
    //表格数据 数据格式来源于CUBE端 分析管理--校本分析--试卷--结构
    table_data: function(callback){
        var res={"code":0,"message":"请求成功","data":{"categorys":[{"code":"101","id":"101","name":"基础知识","subject":{"code":"1","id":"1","name":"语文"}},{"code":"102","id":"102","name":"文言文阅读","subject":{"code":"1","id":"1","name":"语文"}},{"code":"103","id":"103","name":"古诗歌阅读鉴赏","subject":{"code":"1","id":"1","name":"语文"}},{"code":"104","id":"104","name":"默写","subject":{"code":"1","id":"1","name":"语文"}},{"code":"105","id":"105","name":"现代文阅读","subject":{"code":"1","id":"1","name":"语文"}},{"code":"106","id":"106","name":"名著阅读","subject":{"code":"1","id":"1","name":"语文"}},{"code":"107","id":"107","name":"语言运用","subject":{"code":"1","id":"1","name":"语文"}},{"code":"108","id":"108","name":"作文","subject":{"code":"1","id":"1","name":"语文"}},{"code":"109","id":"109","name":"选择题","subject":{"code":"1","id":"1","name":"语文"}}],"types":[{"code":"C","id":"C","name":"选择题"},{"code":"F","id":"F","name":"填空题"},{"code":"Q","id":"Q","name":"问答题"},{"code":"S","id":"S","name":"综合题"},{"code":"T","id":"T","name":"判断题"},{"code":"W","id":"W","name":"写作题"}],"paper":{"paperType":1,"paperCode":1001576820911030,"year":2019,"subject":{"code":"1","name":"语文"},"owners":[{"ownerType":3,"ownerName":"(112802) 演示学校初中部","ownerCode":"112802"},{"ownerType":1,"ownerName":"Moofen","ownerCode":"0"}],"publicStatus":false,"questionStatus":true,"schType":{"code":"2","name":"初中"},"difficulty":3,"score":15000,"createTime":1576820911030,"paperName":"演示学校初中_八年级_期中考试_20191022_语文","itemStatus":true,"scope":{"grade":{"code":"8","name":"八年级"},"term":{"code":"1","name":"上学期"}},"id":"1001576820911030","items":[{"netExamPicNo":"","aps":[{"apId":"2111","apCode":"111","apName":"识记常用汉字"}],"netExamNo":"1","paperCode":1001576820911030,"questionNo":1,"childNo":0,"itemCode":1567505889820000,"apCodes":"111","section":"A","type":{"code":"C","name":"选择题"},"kps":[{"kpCode":"111","kpId":"2111","kpName":"字音 字形"},{"kpCode":"11101","kpId":"211101","kpName":"多音字"}],"score":300,"answer":"C","isSpecial":0,"id":"1567505889820000","category":{"code":"101","name":"基础知识"},"choices":"","kpCodes":"111,11101","remarks":"","scoreNo":"1"},{"netExamPicNo":"","aps":[{"apId":"2111","apCode":"111","apName":"识记常用汉字"}],"netExamNo":"2","paperCode":1001576820911030,"questionNo":2,"childNo":0,"itemCode":1567505889820001,"apCodes":"111","section":"A","type":{"code":"C","name":"选择题"},"kps":[{"kpCode":"143042","kpId":"2143042","kpName":"名著写作背景或目的"}],"score":300,"answer":"D","isSpecial":0,"id":"1567505889820001","category":{"code":"101","name":"基础知识"},"choices":"","kpCodes":"143042","remarks":"","scoreNo":"2"},{"netExamPicNo":"","aps":[{"apId":"2122","apCode":"122","apName":"理解文中词句"}],"netExamNo":"3","paperCode":1001576820911030,"questionNo":3,"childNo":0,"itemCode":1567505889820002,"apCodes":"122","section":"A","type":{"code":"C","name":"选择题"},"kps":[{"kpCode":"143043","kpId":"2143043","kpName":"名著内容概括"}],"score":300,"answer":"B","isSpecial":0,"id":"1567505889820002","category":{"code":"101","name":"基础知识"},"choices":"","kpCodes":"143043","remarks":"","scoreNo":"3"},{"netExamPicNo":"","aps":[{"apId":"2153","apCode":"153","apName":"辨析修改病句"}],"netExamNo":"4","paperCode":1001576820911030,"questionNo":4,"childNo":0,"itemCode":1567505889820003,"apCodes":"153","section":"A","type":{"code":"C","name":"选择题"},"kps":[{"kpCode":"143044","kpId":"2143044","kpName":"名著主题思想"}],"score":300,"answer":"B","isSpecial":0,"id":"1567505889820003","category":{"code":"101","name":"基础知识"},"choices":"","kpCodes":"143044","remarks":"","scoreNo":"4"},{"netExamPicNo":"","aps":[{"apId":"2122","apCode":"122","apName":"理解文中词句"}],"netExamNo":"5","paperCode":1001576820911030,"questionNo":5,"childNo":0,"itemCode":1567505889820004,"apCodes":"122","section":"A","type":{"code":"C","name":"选择题"},"kps":[{"kpCode":"143045","kpId":"2143045","kpName":"名著作者的观点与态度"}],"score":300,"answer":"C","isSpecial":0,"id":"1567505889820004","category":{"code":"102","name":"文言文阅读"},"choices":"","kpCodes":"143045","remarks":"","scoreNo":"5"},{"netExamPicNo":"","aps":[{"apId":"2124","apCode":"124","apName":"理解文言虚词"}],"netExamNo":"6","paperCode":1001576820911030,"questionNo":6,"childNo":0,"itemCode":1567505889820005,"apCodes":"124","section":"A","type":{"code":"C","name":"选择题"},"kps":[{"kpCode":"143046","kpId":"2143046","kpName":"名著文学价值"}],"score":300,"answer":"B","isSpecial":0,"id":"1567505889820005","category":{"code":"102","name":"文言文阅读"},"choices":"","kpCodes":"143046","remarks":"","scoreNo":"6"},{"netExamPicNo":"","aps":[{"apId":"2123","apCode":"123","apName":"理解不同句式"}],"netExamNo":"7","paperCode":1001576820911030,"questionNo":7,"childNo":0,"itemCode":1567505889820006,"apCodes":"123","section":"A","type":{"code":"C","name":"选择题"},"kps":[{"kpCode":"143047","kpId":"2143047","kpName":"名著艺术特色"}],"score":300,"answer":"B","isSpecial":0,"id":"1567505889820006","category":{"code":"102","name":"文言文阅读"},"choices":"","kpCodes":"143047","remarks":"","scoreNo":"7"},{"netExamPicNo":"","aps":[{"apId":"2131","apCode":"131","apName":"整合文中信息"}],"netExamNo":"8","paperCode":1001576820911030,"questionNo":8,"childNo":0,"itemCode":1567505889820007,"apCodes":"131","section":"A","type":{"code":"C","name":"选择题"},"kps":[{"kpCode":"143048","kpId":"2143048","kpName":"名著经典情节"}],"score":300,"answer":"B","isSpecial":0,"id":"1567505889820007","category":{"code":"102","name":"文言文阅读"},"choices":"","kpCodes":"143048","remarks":"","scoreNo":"8"},{"netExamPicNo":"","aps":[{"apId":"2112","apCode":"112","apName":"背诵名篇名句"}],"netExamNo":"9","paperCode":1001576820911030,"questionNo":9,"childNo":1,"itemCode":1567505889820008,"apCodes":"112","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"143049","kpId":"2143049","kpName":"名著精彩名句"}],"score":200,"answer":"","isSpecial":0,"id":"1567505889820008","category":{"code":"104","name":"默写"},"choices":"","kpCodes":"143049","remarks":"","scoreNo":"9-1"},{"netExamPicNo":"","aps":[{"apId":"2112","apCode":"112","apName":"背诵名篇名句"}],"netExamNo":"10","paperCode":1001576820911030,"questionNo":9,"childNo":2,"itemCode":1567505889820009,"apCodes":"112","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"14105","kpId":"214105","kpName":"文言虚词"}],"score":400,"answer":"","isSpecial":0,"id":"1567505889820009","category":{"code":"104","name":"默写"},"choices":"","kpCodes":"14105","remarks":"","scoreNo":"9-2"},{"netExamPicNo":"","aps":[{"apId":"2134","apCode":"134","apName":"分析作者观点"}],"netExamNo":"11","paperCode":1001576820911030,"questionNo":10,"childNo":0,"itemCode":1567505889820010,"apCodes":"134","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"14106","kpId":"214106","kpName":"判断句式"}],"score":300,"answer":"","isSpecial":0,"id":"1567505889820010","category":{"code":"105","name":"现代文阅读"},"choices":"","kpCodes":"14106","remarks":"","scoreNo":"10"},{"netExamPicNo":"","aps":[{"apId":"2133","apCode":"133","apName":"归纳内容要点"}],"netExamNo":"12","paperCode":1001576820911030,"questionNo":11,"childNo":0,"itemCode":1567505889820011,"apCodes":"133","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"14107","kpId":"214107","kpName":"被动句式"}],"score":300,"answer":"","isSpecial":0,"id":"1567505889820011","category":{"code":"105","name":"现代文阅读"},"choices":"","kpCodes":"14107","remarks":"","scoreNo":"11"},{"netExamPicNo":"","aps":[{"apId":"2132","apCode":"132","apName":"分析文章结构"}],"netExamNo":"13","paperCode":1001576820911030,"questionNo":12,"childNo":0,"itemCode":1567505889820012,"apCodes":"132","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"14108","kpId":"214108","kpName":"倒装句式"}],"score":400,"answer":"","isSpecial":0,"id":"1567505889820012","category":{"code":"105","name":"现代文阅读"},"choices":"","kpCodes":"14108","remarks":"","scoreNo":"12"},{"netExamPicNo":"","aps":[{"apId":"2157","apCode":"157","apName":"语言表达准确、鲜明、生动、简明、连贯、得体"},{"apId":"2158","apCode":"158","apName":"作文符合题意、思想健康，语言通顺，结构完整"}],"netExamNo":"14","paperCode":1001576820911030,"questionNo":13,"childNo":0,"itemCode":1567505889820013,"apCodes":"157,158","section":"A","type":{"code":"W","name":"写作题"},"kps":[{"kpCode":"15201","kpId":"215201","kpName":"命题作文"}],"score":6000,"answer":"","isSpecial":0,"id":"1567505889820013","category":{"code":"108","name":"作文"},"choices":"","kpCodes":"15201","remarks":"","scoreNo":"13"},{"netExamPicNo":"","aps":[{"apId":"2142","apCode":"142","apName":"评价文章的思想内容和作者的观点态度"}],"netExamNo":"15","paperCode":1001576820911030,"questionNo":14,"childNo":0,"itemCode":1567505889820014,"apCodes":"142","section":"B","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"14206","kpId":"214206","kpName":"诗歌意境鉴赏"},{"kpCode":"14209","kpId":"214209","kpName":"诗歌思想情感"}],"score":200,"answer":"","isSpecial":0,"id":"1567505889820014","category":{"code":"103","name":"古诗歌阅读鉴赏"},"choices":"","kpCodes":"14206,14209","remarks":"","scoreNo":"B1"},{"netExamPicNo":"","aps":[{"apId":"2141","apCode":"141","apName":"鉴赏文学作品的形象、语言和表达技巧"}],"netExamNo":"16","paperCode":1001576820911030,"questionNo":15,"childNo":0,"itemCode":1567505889820015,"apCodes":"141","section":"B","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"15103","kpId":"215103","kpName":"公文类"}],"score":200,"answer":"","isSpecial":0,"id":"1567505889820015","category":{"code":"103","name":"古诗歌阅读鉴赏"},"choices":"","kpCodes":"15103","remarks":"","scoreNo":"B2"},{"netExamPicNo":"","aps":[{"apId":"2112","apCode":"112","apName":"背诵名篇名句"}],"netExamNo":"17","paperCode":1001576820911030,"questionNo":16,"childNo":0,"itemCode":1567505889820016,"apCodes":"112","section":"B","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"15104","kpId":"215104","kpName":"宣传类"}],"score":200,"answer":"","isSpecial":0,"id":"1567505889820016","category":{"code":"102","name":"文言文阅读"},"choices":"","kpCodes":"15104","remarks":"","scoreNo":"B3"},{"netExamPicNo":"","aps":[{"apId":"2112","apCode":"112","apName":"背诵名篇名句"}],"netExamNo":"18","paperCode":1001576820911030,"questionNo":17,"childNo":1,"itemCode":1567505889820017,"apCodes":"112","section":"B","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"15105","kpId":"215105","kpName":"告示类"}],"score":300,"answer":"","isSpecial":0,"id":"1567505889820017","category":{"code":"102","name":"文言文阅读"},"choices":"","kpCodes":"15105","remarks":"","scoreNo":"B4-1"},{"netExamPicNo":"","aps":[{"apId":"2112","apCode":"112","apName":"背诵名篇名句"}],"netExamNo":"19","paperCode":1001576820911030,"questionNo":17,"childNo":2,"itemCode":1567505889820018,"apCodes":"112","section":"B","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"14224","kpId":"214224","kpName":"羁旅诗"}],"score":300,"answer":"","isSpecial":0,"id":"1567505889820018","category":{"code":"102","name":"文言文阅读"},"choices":"","kpCodes":"14224","remarks":"","scoreNo":"B4-2"},{"netExamPicNo":"","aps":[{"apId":"2141","apCode":"141","apName":"鉴赏文学作品的形象、语言和表达技巧"},{"apId":"2142","apCode":"142","apName":"评价文章的思想内容和作者的观点态度"}],"netExamNo":"20","paperCode":1001576820911030,"questionNo":18,"childNo":0,"itemCode":1567505889820019,"apCodes":"141,142","section":"B","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"143","kpId":"2143","kpName":"名著阅读"}],"score":400,"answer":"","isSpecial":0,"id":"1567505889820019","category":{"code":"102","name":"文言文阅读"},"choices":"","kpCodes":"143","remarks":"","scoreNo":"B5"},{"netExamPicNo":"","aps":[{"apId":"2113","apCode":"113","apName":"判断名著情节"}],"netExamNo":"21","paperCode":1001576820911030,"questionNo":19,"childNo":0,"itemCode":1567505889820020,"apCodes":"113","section":"B","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"14301","kpId":"214301","kpName":"名著人物"}],"score":200,"answer":"","isSpecial":0,"id":"1567505889820020","category":{"code":"106","name":"名著阅读"},"choices":"","kpCodes":"14301","remarks":"","scoreNo":"B6"},{"netExamPicNo":"","aps":[{"apId":"2141","apCode":"141","apName":"鉴赏文学作品的形象、语言和表达技巧"}],"netExamNo":"22","paperCode":1001576820911030,"questionNo":20,"childNo":0,"itemCode":1567505889820021,"apCodes":"141","section":"B","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"14302","kpId":"214302","kpName":"名著情节"}],"score":200,"answer":"","isSpecial":0,"id":"1567505889820021","category":{"code":"106","name":"名著阅读"},"choices":"","kpCodes":"14302","remarks":"","scoreNo":"B7"},{"netExamPicNo":"","aps":[{"apId":"2133","apCode":"133","apName":"归纳内容要点"}],"netExamNo":"23","paperCode":1001576820911030,"questionNo":21,"childNo":0,"itemCode":1567505889820022,"apCodes":"133","section":"B","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"14303","kpId":"214303","kpName":"名著评价"}],"score":400,"answer":"","isSpecial":0,"id":"1567505889820022","category":{"code":"105","name":"现代文阅读"},"choices":"","kpCodes":"14303","remarks":"","scoreNo":"B8"},{"netExamPicNo":"","aps":[{"apId":"2141","apCode":"141","apName":"鉴赏文学作品的形象、语言和表达技巧"}],"netExamNo":"24","paperCode":1001576820911030,"questionNo":22,"childNo":0,"itemCode":1567505889820023,"apCodes":"141","section":"B","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"14304","kpId":"214304","kpName":"名著综合"}],"score":400,"answer":"","isSpecial":0,"id":"1567505889820023","category":{"code":"105","name":"现代文阅读"},"choices":"","kpCodes":"14304","remarks":"","scoreNo":"B9"},{"netExamPicNo":"","aps":[{"apId":"2141","apCode":"141","apName":"鉴赏文学作品的形象、语言和表达技巧"}],"netExamNo":"25","paperCode":1001576820911030,"questionNo":23,"childNo":0,"itemCode":1567505889820024,"apCodes":"141","section":"B","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"143041","kpId":"2143041","kpName":"作家作品"}],"score":400,"answer":"","isSpecial":0,"id":"1567505889820024","category":{"code":"105","name":"现代文阅读"},"choices":"","kpCodes":"143041","remarks":"","scoreNo":"B10"},{"netExamPicNo":"","aps":[{"apId":"2142","apCode":"142","apName":"评价文章的思想内容和作者的观点态度"}],"netExamNo":"26","paperCode":1001576820911030,"questionNo":24,"childNo":0,"itemCode":1567505889820025,"apCodes":"142","section":"B","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"143042","kpId":"2143042","kpName":"名著写作背景或目的"}],"score":600,"answer":"","isSpecial":0,"id":"1567505889820025","category":{"code":"105","name":"现代文阅读"},"choices":"","kpCodes":"143042","remarks":"","scoreNo":"B11"},{"netExamPicNo":"","aps":[{"apId":"2131","apCode":"131","apName":"整合文中信息"},{"apId":"2154","apCode":"154","apName":"扩展语句，压缩语段"}],"netExamNo":"27","paperCode":1001576820911030,"questionNo":25,"childNo":0,"itemCode":1567505889820026,"apCodes":"131,154","section":"B","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"143043","kpId":"2143043","kpName":"名著内容概括"}],"score":400,"answer":"","isSpecial":0,"id":"1567505889820026","category":{"code":"107","name":"语言运用"},"choices":"","kpCodes":"143043","remarks":"","scoreNo":"B12"},{"netExamPicNo":"","aps":[{"apId":"2157","apCode":"157","apName":"语言表达准确、鲜明、生动、简明、连贯、得体"}],"netExamNo":"28","paperCode":1001576820911030,"questionNo":26,"childNo":0,"itemCode":1567505889820027,"apCodes":"157","section":"B","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"143044","kpId":"2143044","kpName":"名著主题思想"}],"score":400,"answer":"","isSpecial":0,"id":"1567505889820027","category":{"code":"107","name":"语言运用"},"choices":"","kpCodes":"143044","remarks":"","scoreNo":"B13"},{"netExamPicNo":"","aps":[{"apId":"2157","apCode":"157","apName":"语言表达准确、鲜明、生动、简明、连贯、得体"}],"netExamNo":"29","paperCode":1001576820911030,"questionNo":27,"childNo":0,"itemCode":1567505889820028,"apCodes":"157","section":"B","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"143045","kpId":"2143045","kpName":"名著作者的观点与态度"}],"score":400,"answer":"","isSpecial":0,"id":"1567505889820028","category":{"code":"107","name":"语言运用"},"choices":"","kpCodes":"143045","remarks":"","scoreNo":"B14"}]},"examItem":{"examCode":2001576820911059,"paperCode":1001576820911030,"netExamCode":"","netExamName":"","netPaperName":"","schCode":112802,"examNos":"","clzType":"","netPaperCode":"","itemSource":"2","id":"1567505902020000","netExamCompany":"","selClazzs":[]}}};
        if(res.code == 0)
            callback(res.data);
    },
    //结构导入
	structure_import : function() {
		var html = `<div class="col-12"><div class="col-12 text-right" style="margin-bottom:.5rem"><button class="default_btn" onclick="SCHOOL.downBaseTemplate()">下载模板</button></div><input id="input-file-max-fs" type="file" name="file" class="dropify-fr" data-default-file="" /></div>`;
		Men.new_confirm('结构导入', html,'取消', '导入', function() { //导入按钮
            alert("已导入！");
        });
        $(".center_popup").removeClass("wid20").addClass("wid30");		
		Men.dropify();  //初始化上传控件
		$(".dropify-wrapper .dropify-message").css("min-width", "auto");
    },
    //结构导出
	structure_export : function() {
        alert("结构导出方法写在这！");
    },
    //删除试卷结构
	structure_clear : function() {
		var html = `<div class="center_text_div">确定删除结构吗？</div>`;
		Men.new_confirm('删除试卷结构', html,'取消','删除', function() { //删除按钮
            alert("删除试卷结构")
        });
    },
    //导入分数
	onImportDataOK : function() {
        alert("参照 分析管理--校本分析--试卷--结构 的内容");
    },
    //保存试卷结构
    save_structure: function(){
        alert("参照 分析管理--校本分析--试卷--结构 的内容");
        Men.close_window();
    },
    //编辑按钮
    editor_open: function(){
        alert("还没有设计");
    },
    //自动运行
    init: function(){
        this.create_titleMain();
    },
};
job_manage.init();