var ANALYSISCONFIGURATION = {
    //设置的后台数据
	confingData : function(examCode, callback) {		
        var res={
				"absence" : {
					"define" : {
						"noscore" : {
							"checked" : 1
						},
						"zero" : {
							"checked" : 1
						},
						"range" : {
							"checked" : 0,
							"scope" : []
						}
					},
					"handle" : 1
				},
				"cheater" : {
					"students" : [],
					"handle" : 1
				},
				"special" : {
					"students" : []
				},
				"publish": 1
			};
        callback(res);
	},
    //点击折叠/展开子项目
	toggle_children_ul : function() {
		$(".config_parent_ul .flex_between").on("click", function() {
			$(this).next(".config_children_ul").fadeToggle();
		});
	},
    //生成内容
    create_main: function(){
        var self=this;
        var examCode = sessionStorage.getItem('_examCode'); //传输过来的考试编号
        this.confingData(examCode, function(res){
           $("#configScore").html(template('configScoreTemplate', res));
            self.toggle_children_ul(); 
            $('#subjectSelect').multiSelect({'noneText': '此处项目可多选'}); //多选下拉
            self.switchDisplay(); //切换显示
        });        
    },
    //作弊学生添加一行
    addcheatRow: function(){
        var obj={};
        obj.grade="7";
        obj.class="1";
        obj.name="张三";
        obj.studentCode=$("#studentCode").val().trim(); //学号
        obj.cheat = $("#subjectSelect").val(); //科目
        $("#subject_table tbody").append(template('subjectTemplate',{data:obj}));
    },
    //删除一行
    delRow: function(e){
        $(e).parent().parent().remove();
    },
    //不计入学生分析添加一行
    addAnalyseRow: function(){
        var obj={};
        obj.grade="7";
        obj.class="1";
        obj.name="张三";
        obj.studentCode="113455"; //学号
        $("#analyse_table tbody").append(template('analyseTemplate',{data:obj}));
    },
    //手动/按标签切换显示功能
    switchDisplay: function(){
        $("#switchDisplayDiv>div").eq(0).hide();
        $("input[type='radio'][name='imports']").off("change").on("change", function(){
            if($(this).val()==1){
                $("#switchDisplayDiv>div").eq(0).show().siblings().hide();
            }else{
                $("#switchDisplayDiv>div").eq(1).show().siblings().hide();
            }
        });
    },
    //保存页面
    saveForm: function(){
        alert("把页面上的可修改内容存起来传到后台");
    },
    //自动运行
    init: function(){
        this.create_main();        
    },
};
ANALYSISCONFIGURATION.init();