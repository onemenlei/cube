var job_operationData = {
    // 按班级查看/按学生查看第一项反白选中，内容显示第一项
    school_reset: function(){
        $("#job_operationData_ul.label_top_menu_ul li").eq(0).addClass("selected").siblings().removeClass("selected");
        $("#job_operationData_ul.label_top_menu_ul+div").children().eq(0).show().siblings().hide();
    },
    //表头数据
    header_data: function(callback){
        var code = sessionStorage.getItem('subsection_code'); //教辅作业小章的code
        var res = {code:0, data:{largeName:"育才经典七年级数学上册",smallName:"有理数的加法"}}; //largeName 大项标题， smallName 小项标题        
        if(res.code == 0)
            callback(res.data);
        else
            alert(res.message);
    },
    //按班级数据
    class_data: function(callback){
        var code = sessionStorage.getItem('subsection_code'); //教辅作业小章的code
        var res = {code:0, data:{
                            classNum:10,submittedNum:300,noSubmittedNum:30, //classNum 班级数量，submittedNum 已提交人数，noSubmittedNum 未提交人数，
                            list:[ // class 班级， classNum 班级人数， submittedNum 已提交人数， noSubmittedNum 未提交人数， state 状态（true为已分析，false为未分析）
                                {class:1,classNum:45,submittedNum:40,noSubmittedNum:5,state:false},
                                {class:2,classNum:50,submittedNum:41,noSubmittedNum:3,state:true}
                            ]}};
        if(res.code == 0)
            callback(res.data);
        else
            alert(res.message);
    },
    //生成表头
    create_header: function(){
        this.header_data(function(res){            
            $("#large_span").html(res.largeName);
            $("#small_span").html(res.smallName);
            $("#importStudentTask").attr("onclick",`job_operationData.import_task_window("${res.smallName}")`);
        });
    },
    //生成按班级查看标题与内容
    create_class: function(){
        var self=this;
        self.class_data(function(res){  
            $("#classNum").html(res.classNum);
            $("#submittedNum").html(res.submittedNum);
            $("#noSubmittedNum").html(res.noSubmittedNum);
            self.create_class_table(res.list);
        });
    },
    //按班级查看表
    create_class_table: function (data) {
    //表格生成
    table = $('#operationClassTable').DataTable({
        "data": data,
        "searching":false,  //不显示搜索框
        "bAutoWidth": false, //是否自适应宽度
        "bProcessing": true, //加载时
        "dom": 'frtilp',
        "columns": [
            {
                data: null
		},
            {
                data: null
		},
            {
                data: null
		},
            {
                data: null
		},
            {
                "data": null //此列不绑定数据源
		}
	   ],
        "columnDefs": [
            {
                "targets": 0,
                "data": null,
                "render": function (data, type, row, meta) {
                    return row.class + "班";
                }
		    },
            {
                "targets": 1,
                "data": null,
                "render": function (data, type, row, meta) {
                    return row.classNum + "人";
                }
		    },
            {
                "targets": 2,
                "data": null,
                "render": function (data, type, row, meta) {
                    return row.submittedNum + "人";
                }
		    },
            {
                "targets": 3,
                "data": null,
                "render": function (data, type, row, meta) {
                    return row.noSubmittedNum + "人";
                }
		    },
            {
                "targets": 4,
                "data": null,
                "render": function (data, type, row, meta) {
                    if(row.state == true)
                    return "已分析";
                    else
                        return `<span class="red-color">未分析</span>`;
                }
		    }
		],
        "language": {
            "url": "datatables_language.json"
        }
    });
},    
    //分析按钮
    analysis: function(){
        alert("未设计");
    },
    //要清空的表格数据
    clear_table_data: function(callback){
        var code = sessionStorage.getItem('subsection_code'); //教辅作业小章的code
        var res = {code:0, data:[
            {classCode:1},
            {classCode:2},
            {classCode:3},
            {classCode:4},
            {classCode:5},
            {classCode:6},
            {classCode:7},
            {classCode:8}
        ]};
        if(res.code == 0)
            callback(res.data);
        else
            alert(res.message);
    },
    //清空按钮
    clear: function(){
        var self=this;
        this.clear_table_data(function(res){
            var html = template('clearTableTemplate',{model:res});
            Men.new_window('选择需要清空的作业分析数据',html,'取消',function(){
                Tomd.toast('center', '', '清空成功！');
                Men.close_window();
            });
            $(".center_popup").addClass("wid50");
            $('.center_popup .center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">确定</button>');
            self.allcheck();
        });
    },
    //全选事件
    allcheck: function(){
        $(".form_div input[type='checkbox']").parent("label").css("cursor","pointer");
        $("#allcheck").on("change", function(){
            if($(this).is(':checked'))
                $(".cleartype_dl dd input[type='checkbox']").prop("checked",true);
            else
                $(".cleartype_dl dd input[type='checkbox']").prop("checked",false);
        });
    },
    /*按学生查看*/
    //按学生查看数据
    student_data: function(callback){
        var code = sessionStorage.getItem('subsection_code'); //教辅作业小章的code
        var res = {code:0, data:{
            submittedNum:300,noSubmittedNum:30,  // submittedNum 已提交人数，noSubmittedNum 未提交人数
            list1:[ // 已提交列表  class 班级， studentID 学号， name 姓名，state 作业状态（true为已提交，false为未提交）
                {class:1,studentID:"200020219",name:"王璐璐",state:true},
                {class:6,studentID:"200020221",name:"雷火",state:true},
                {class:7,studentID:"200020222",name:"黑兽",state:true}
            ],
            list2:[ // 未提交列表  class 班级， studentID 学号， name 姓名，state 作业状态（true为已提交，false为未提交）
                {class:2,studentID:"200020228",name:"李欣桐",state:false},
                {class:4,studentID:"200020229",name:"尖仍",state:false},
                {class:3,studentID:"200020226",name:"粮食局",state:false}
            ]
        }};
        if(res.code == 0)
            callback(res.data);
        else
            alert(res.message);
    },
    //生成按学生查看内容
    create_student: function(){
        var self=this;
        self.student_data(function(res){
            $("#SubmittedNum_radio").html(res.submittedNum);
            $("#noSubmittedNum_radio").html(res.noSubmittedNum);
            self.create_student_table(res.list1);
            self.radio_switch();
        });
    },
    //生成按学生查看表
    create_student_table: function(data){
        //表格生成
    table1 = $('#operationStudentTable').DataTable({
        "data": data,
        "bAutoWidth": false, //是否自适应宽度
        "bProcessing": true, //加载时
        "dom": 'frtilp',
        "columns": [
            {
                data: null
		},
            {
                data: 'studentID'
		},
            {
                data: 'name'
		},
            {
                data: null
		},
            {
                "data": null //此列不绑定数据源
		}
	   ],
        "columnDefs": [
            {
                "targets": 0,
                "data": null,
                "render": function (data, type, row, meta) {
                    return row.class + "班";
                }
		    },
            {
                "targets": 3,
                "data": null,
                "render": function (data, type, row, meta) {
                    if(row.state == true)
                    return "已提交";
                    else
                        return `<span class="red-color">未提交</span>`;
                }
		    },
            {
                "targets": 4,
                "data": null,
                "searchable": false,
                "render": function (data, type, row, meta) {
                    var html = `<button class="default_btn_small" onclick="job_operationData.viewDetails('${row.studentID}')">查看详情</button>`;
                    return html;
                }
		    }
		],
        "language": {
            "url": "datatables_language.json"
        }
    });
    },
    //查看详情按钮
    viewDetails: function(code){
        alert("学生编号："+code);
    },
    //radio切换时载入不同的表
    radio_switch: function(){
        var self = this;
        $('input:radio[name="submit"]').on("change", function(){
            var code = $('input:radio[name="submit"]:checked').val();
            self.student_data(function(res){
                if(code == 1){
                    table1.clear().rows.add(res.list1).draw();
                }
                else{
                table1.clear().rows.add(res.list2).draw();
                }
            });   
        }); 
    },
    //导出Excel按钮
    exportExcel: function(){
        alert("未设计");
    },
    //导入作业数据窗口
    import_task_window: function(name){
        var html = `<div class="col-12 text-right fl" style="margin-bottom:.5rem"><button class="default_btn" onclick="job_manage.downTemplate()">下载模板</button></div>
        <div class="PA05 t_c" id="task_title"></div>
        <div class="col-12 fl"><input type="file" name="file" class="dropify-fr"
					data-default-file="" /></div>`;
        Men.new_window('导入作业数据', html, '取消', function(){
        Tomd.toast('center', '', '导入成功！');
        Men.close_window();
    });
        $('.center_popup .center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">导入</button>');
        $("#task_title").html(name);
    //初始化上传控件
    Men.dropify();
    },
    //设定页面一加载就运行
    init: function () {
        this.school_reset();
        this.create_header();
        this.create_class();
        this.create_student();
    }
};
//加载即运行
job_operationData.init();
