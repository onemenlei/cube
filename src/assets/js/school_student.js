var data = [
  {
    "stuName" : "张三",
    "stuAlias" : "张三",
    "gender" : 1,
    "stuNo" : 123,
    "examNo" : 123,
    "schStuCode" : "01",
    "stuCode" : "01",
    "clzCode" : "01",
    "examCategory" : 0
  },
  {
    "stuName" : "李四",
    "stuAlias" : "李四",
    "gender" : 1,
    "stuNo" : 123,
    "examNo" : 123,
    "schStuCode" : "02",
    "stuCode" : "02",
    "clzCode" : "21",
    "examCategory" : 1
  },
  {
   "stuName" : "王五",
    "stuAlias" : "王五",
    "gender" : 0,
    "stuNo" : 123,
    "examNo" : 123,
    "schStuCode" : "03",
    "stuCode" : "03",
    "clzCode" : "22",
    "examCategory" : 1
  },
  {
    "stuName" : "赵六",
    "stuAlias" : "赵六",
    "gender" : 0,
    "stuNo" : 123,
    "examNo" : 123,
    "schStuCode" : "04",
    "stuCode" : "04",
    "clzCode" : "23",
    "examCategory" : 1
  },
  {
     "stuName" : "7",
    "stuAlias" : "7",
    "gender" : 0,
    "stuNo" : 123,
    "examNo" : 123,
    "schStuCode" : "05",
    "stuCode" : "05",
    "clzCode" : "24",
    "examCategory" : 0
  },
  {
    "stuName" : "8",
    "stuAlias" : "8",
    "gender" : 1,
    "stuNo" : 123,
    "examNo" : 123,
    "schStuCode" : "06",
    "stuCode" : "06",
    "clzCode" : "21",
    "examCategory" : 1
  },
  {
     "stuName" : "9",
    "stuAlias" : "9",
    "gender" : 1,
    "stuNo" : 123,
    "examNo" : 123,
    "schStuCode" : "07",
    "stuCode" : "07",
    "clzCode" : "01",
    "examCategory" : 0
  }
];
///school_student 学生管理
var student = {
    //生成datatables
    create_table: function () {
        table = $('#datatable_student').DataTable({
            "data" : data,
            "bAutoWidth": false, //是否自适应宽度
            "bProcessing": true, //加载时
            /*
            "ajax": {
                "url": "table1.json",
                //"success":function(result){alert("down");console.log(result)},
                "error": function (error) {
                    alert(error)
                },
                "dataSrc": "",
            },*/
            "columns": [
                {
                    data: 'stuName'
		},
                {
                    data: "stuAlias"
		},
                {
                    data: "gender"
		},
                {
                    data: "stuCode"
		},
                {
                    data: "examNo"
		},
                {
                    data: "schStuCode"
		},
                {
                    data: "examCategory"
		},
                {
                    "data": null //此列不绑定数据源
		}
	],
            "columnDefs": [
                {
                    "targets": 2,
                    "data": null,
                    "render": function(data,type,row,meta){
                        if( `${data.gender}` == '1')
                            return "男";
                        else
                            return "女";
                    }
                },
                {
                    "targets": 7,
                    "data": null,
                    "searchable": false,
                    "render": function (data, type, row, meta) {
                        var html = `<button class="default_btn_small green_btn" onclick="student.editor_open(${data.schStuCode})"><i class="iconfont icon-bianji"></i>修改</button><button class="default_btn_small red_btn" onclick="Men.del_list({id:${data.schStuCode}},${meta.row},'../biz/sch/student/delStudent')"><i class="iconfont icon-shanchu"></i>删除</button>`;
                        return html;
                    }
		}],
            fnDrawCallback: function () {},
            "language": {
                "url": "datatables_language.json"
            }
        });
    },
    //新建窗口 打开
    newly_open: function () {
        var html = $("#student_template").html();
        Men.new_window('新增学生', html, '取消', student.newly_btn);
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">创建</button>');
        //读取年级表建立年级下拉选择框
        student.create_yearIn_select();
        //读取学科表建立学科复选框
        student.create_checkbox_student();
    },
    //点击新建窗口中的创建按钮 创建一条记录
    newly_btn: function () {
        //选课班拼接
        student.xkb_link();
        //校验
        $("#student").formValidator();
        var r = $("#student").validate().form();
        if (r) {
            //从input中传值 code是唯一ID，不用传，自动赋给它个
            var stuName = $("#inputtext_01").val();
            var stuAlias = $("#inputtext_02").val();
            var gender = $("#inputtext_03").val();
            var stuCode = $("#inputtext_04").val();
            var stuNo = $("#inputtext_05").val();

            var datas = {
                stuName: stuName,
                stuAlias: stuAlias,
                gender: gender,
                stuCode: stuCode,
                kid: kid,
                selection: selection
            };

            // 保存新增到后台并判断正确与否        
            Men.judge_newly('../biz/sch/school/addSchool', datas);
        }
    },
    //编辑学级/学届窗口 打开
    editor_open: function (code) {
        var html = $("#student_template").html();
        Men.new_window('修改学生', html, '取消', student.editor_btn);
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">保存</button>');
        //读取年级表建立年级下拉选择框
        student.create_yearIn_select();
        //读取学科表建立学科复选框
        student.create_checkbox_student();
        //要用ajax找后台数据. 下一条是本地数据,程序员删掉！
        var datas = Men.list_post(code, data, 'schStuCode');
        /****ajax找后台数据 
        var data={code: code};    
        var datas=Men.post_data('../biz/sch/school/addSchool',data);    
        ****/
        $("#code").val(datas.schStuCode); //放唯一ID号
        $("#inputtext_01").val(datas.stuName);
        $("#inputtext_02").val(datas.stuAlias);
        $("#inputtext_03").val(datas.gender);
        $("#inputtext_04").val(datas.stuCode).prop("required","required");
        $("#inputtext_05").val(datas.stuNo).prop("required","required");
        //查出年级
        var exam;
        $.each(stul_data,function(index,value){
            if(datas.schStuCode == value.schStuCode){
                exam = value;
            }
        });
        $("#inputtext_06").val(exam.yearIn);
        student.create_xzbclazz_select(exam.yearIn);      
    },
    //点击修改学级/学届窗口中的保存按钮 修改一条记录
    editor_btn: function () {
        //校验
        $("#student").formValidator();
        var r = $("#student").validate().form();
        if (r) {
            //从input中传值
            var code = $("#code").val();
            var stuName = $("#inputtext_01").val();
            var stuAlias = $("#inputtext_02").val();
            var gender = $("#inputtext_03").val();
            var stuCode = $("#inputtext_04").val();
            var stuNo = $("#inputtext_05").val();
            //var selection = $("#inputtext_06").val();
            var datas = {};
            // 保存修改到后台并判断正确与否        
            Men.judge_editor('../biz/sch/school/addSchool', datas);
        }
    },
    //选课班拼接出来
    xkb_link: function(){
        var trbody=$("#stu_table tbody tr");
        var html=`"setdate":[`;
        $.each(trbody,function(){
            var tdArr = $(this).children();
            var ohtml="";
            if(tdArr.eq(0).find('input[type="checkbox"]').is(":checked")){
                var c1=tdArr.eq(0).find('input[type="checkbox"]').val();
                var c2=tdArr.eq(1).find('select :selected').val();
                var c3=tdArr.eq(2).find('select :selected').val();
                ohtml+=`{"code1":"${c1}","code2":"${c2}","code3":"${c3}"}`;
            };
            html+=ohtml;
        });
        html+="]";
        console.warn(html);
    },
    //读取学科表建立学科复选框
	create_checkbox_student : function() {
		var html = "";
		$.each(subject_data, function(index, value) {
			html += `<tr><td><label><input type="checkbox" class="check_checkbox" value="${value.code}">${value.name}</label></td><td><select class="default_select select_class" disabled="">`;
			var ohtml = "";
			$.each(xkclazz_data, function(i, v) {
				if (($("#grade_value :selected").val() == v.clazz.yearIn) && (v.clazz.clzProperty == 20)) {
					$.each(v.subjects, function(n, m) {
						if (m.code == value.code) {
							ohtml += `<option value="${v.clazz.clzCode}">${v.clazz.clzAlias}</option>`;
						}
					});
				}
			});
			if (ohtml == "")
				ohtml = "<option></option>";
			html += `${ohtml}</select></td><td>
                                <select class="default_select" disabled>
                                <option value="0">必考</option>
                                <option value="1">选考</option>
                                <option value="2">学考</option>
                                </select>
                            </td>`;
		});
		$("#stu_table tbody").html(html);
		//先绑定第一个行政班
		student.change_checkbox_student($("#adminClazz").val());
		//改变选考类型
		student.change_class_exam();
	},
    //当行政班改变，则变更，新增学生里读取后台表数据建立学科
	change_checkbox_student : function(clzCode) {
		var count = 0;
		$.each(xkclazz_data, function(index, value) {
			if (clzCode == value.clazz.clzCode) {
				count = value;
				return false;
			}
		});
		var trbody = $("#stu_table tbody").find("tr");
		if (count != 0) {
			$.each(trbody, function() {
				var tdArr = $(this).children();
				//恢复 班级绑定行政班                   
				tdArr.eq(0).find('input[type="checkbox"]').prop("checked", false).attr("disabled", false);
				tdArr.eq(0).find('label').removeClass("text-muted");
				tdArr.eq(1).find('select').val(0);
				tdArr.eq(2).find('select').val(0);
				/*重新绑定选课班班级*/
				var ohtml = "";
				$.each(xkclazz_data, function(i, v) {
					if ($("#grade_value :selected").val() == v.clazz.yearIn && v.clazz.clzProperty == "20") {
						$.each(v.subjects, function(n, m) {
							if (m.code == tdArr.eq(0).find('input[type="checkbox"]').val())
								ohtml += `<option value="${v.clazz.clzCode}" examCategory="${v.examCategory}">${v.clazz.clzAlias}</option>`;
						});
					}
					;
				});
				if (ohtml == "")
					ohtml = "<option></option>";
				tdArr.eq(1).find('select').html(ohtml);
				setTimeout(function() {
					$.each(count.subjects, function(index, value) {
						if (value.code == tdArr.eq(0).find('input[type="checkbox"]').val()) {
							tdArr.eq(1).find('select :selected').val(count.clazz.clzCode);
							tdArr.eq(1).find('select :selected').text(count.clazz.clzAlias); 
							tdArr.eq(0).find('input[type="checkbox"]').prop("checked", true);
							tdArr.eq(1).find('select').attr("disabled", true);
							tdArr.eq(0).find('label').addClass("text-muted").attr("disabled", true);
							tdArr.eq(0).find('input[type="checkbox"]').prop("checked", true).attr("disabled", true);
							tdArr.eq(2).find('select').val(count.examCategory).attr("disabled", true);
							//return false;
						}
						;
					});
				}, 100);

			});
		}
		;
	},
	//班级下拉列表改变时，选考类型下拉列表也变
	change_class_exam: function(){
		$(".select_class").on("change",function(){
			var value = $(this).find(":selected").attr("examcategory");
			$(this).parent().next().find("select").val(value);
		});
	},
    //批量导入学生 窗口
    import_student_window: function () {
        var html = `<div class="col-12"><input type="file" name="file" class="dropify-fr"
					data-default-file="" multiple="multiple" /></div>`;
        Men.new_window('批量导入学生', html, '取消', student.import_student_btn);
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">导入</button>');
        //初始化上传控件
        Men.dropify();
    },
    //批量导入学生 导入按钮
    import_student_btn: function () {
        alert($("input[type='file']").val());
        Tomd.toast('', 'warning', '导入成功！');
        Men.close_window();
    },
    //批量更新 导入按钮
    import_BatchUpdate_btn: function () {
        alert($("input[type='file']").val());
        Tomd.toast('', 'warning', '导入成功！');
        Men.close_window();
    },
    //建立年级下拉选择框
    create_yearIn_select: function(){
        var html="";
        $.each(grade_data, function(index, value){
        html += `<option value="${value.yearIn}">${value.grdName}</option>`;
        });
        $("#inputtext_06").html(html);
        var yearIn=$("#inputtext_06 :selected").val();
        //绑定行政班
        student.create_xzbclazz_select(yearIn);
        //改变选课班
        //student.change_checkbox_student($("#inputtext_07 :selected").val());
        $("#inputtext_06").on("change",function(){
            var boot=$(this).find("option:selected").val();
            student.create_xzbclazz_select(boot);
            //改变选课班
            student.change_checkbox_student($("#inputtext_07 :selected").val());
        });
        $("#inputtext_07").on("change",function(){
            //改变选课班
            student.change_checkbox_student($("#inputtext_07 :selected").val());
        });
    },
    //建立行政班下拉选择框
    create_xzbclazz_select: function(code){
        var html="";
        $.each(xzbclazz_data,function(index,value){
            if(code == value.yearIn)
                html+= `<option value="${value.clzCode}">${value.clzAlias}</option>`;            
        });
        $("#inputtext_07").html(html);
    },
    //从后台读取学级表、班级表数据
    table_init: function () {
        ///年级表
        grade_data = [{"schCode":112801,"grdName":"七年级","yearIn":17,"yearOut":20,"grade":7,"id":"11280117","grdCode":11280117,"status":"1"},{"schCode":112801,"grdName":"八年级","yearIn":18,"yearOut":21,"grade":8,"id":"11280118","grdCode":11280118,"status":"1"}];
        ///行政班表
        xzbclazz_data = [{"clzSerial":1,"schCode":112801,"clzAlias":"一班","clzProperty":"10","clzCode":11280117001,"yearIn":17,"grade":{"schCode":112801,"grdName":"七年级","yearIn":17,"yearOut":20,"grade":7,"id":"11280117","grdCode":11280117,"status":"1"},"clzType":{"schCode":112801,"clzTypeCode":112801005,"clzTypeName":"全科班","id":"112801005"},"clzTags":[{"tagCode":112801005,"tagName":"自考班"}],"id":"11280117001","clzName":"1班"},{"clzSerial":2,"schCode":112801,"clzAlias":"二班","clzProperty":"10","clzCode":11280117002,"yearIn":17,"grade":{"schCode":112801,"grdName":"七年级","yearIn":17,"yearOut":20,"grade":7,"id":"11280117","grdCode":11280117,"status":"1"},"clzType":{"schCode":112801,"clzTypeCode":112801005,"clzTypeName":"全科班","id":"112801005"},"clzTags":[{"tagCode":112801005,"tagName":"自考班"}],"id":"11280117002","clzName":"2班"}];
        ///学科表
        xzclazz_data = [

            {
                "code": "01",
                "name": "语文"
  },

            {
                "code": "02",
                "name": "数学"
  },
            {
                "code": "03",
                "name": "英语"
  },

            {
                "code": "04",
                "name": "物理"
  },
            {
                "code": "05",
                "name": "化学"
  },

            {
                "code": "06",
                "name": "历史"
  },
            {
                "code": "07",
                "name": "地理"
  },

            {
                "code": "08",
                "name": "生物"
  },
            {
                "code": "09",
                "name": "政治"
  },

            {
                "code": "10",
                "name": "体育"
  },
            {
                "code": "11",
                "name": "心理"
  },

            {
                "code": "12",
                "name": "美术"
  },
            {
                "code": "13",
                "name": "音乐"
  },

            {
                "code": "14",
                "name": "信息"
  },
            {
                "code": "15",
                "name": "技术"
  }];
        ///选课班表
        xkclazz_data = [{"examCategory":0,"schCode":112801,"grade":7,"subjects":[{"code":"01","name":"语文","id":"01"},{"code":"02","name":"数学","id":"02"},{"code":"03","name":"英语","id":"03"}],"clzSubCode":112801170017,"id":"112801170017","clazz":{"clzSerial":1,"schCode":112801,"clzAlias":"一班","clzProperty":"10","clzCode":11280117001,"yearIn":17,"clzType":{"schCode":112801,"clzTypeCode":112801005,"clzTypeName":"全科班","id":"112801005"},"clzTags":[{"tagCode":112801005,"tagName":"自考班"}],"id":"11280117001","clzName":"1班"}},{"examCategory":0,"schCode":112801,"grade":7,"subjects":[{"code":"01","name":"语文","id":"01"},{"code":"02","name":"数学","id":"02"},{"code":"03","name":"英语","id":"03"},{"code":"04","name":"物理","id":"04"},{"code":"05","name":"化学","id":"05"}],"clzSubCode":112801170027,"id":"112801170027","clazz":{"clzSerial":2,"schCode":112801,"clzAlias":"二班","clzProperty":"10","clzCode":11280117002,"yearIn":17,"clzType":{"schCode":112801,"clzTypeCode":112801005,"clzTypeName":"全科班","id":"112801005"},"clzTags":[{"tagCode":112801005,"tagName":"自考班"}],"id":"11280117002","clzName":"2班"}},{"examCategory":0,"schCode":112801,"grade":7,"subjects":[{"code":"04","name":"物理","id":"04"},{"code":"05","name":"化学","id":"05"},{"code":"08","name":"生物","id":"08"}],"clzSubCode":112801170217,"id":"112801170217","clazz":{"clzSerial":21,"schCode":112801,"clzAlias":"选课一班","clzProperty":"20","clzCode":11280117021,"yearIn":17,"clzType":{"schCode":112801,"clzTypeCode":112801005,"clzTypeName":"全科班","id":"112801005"},"clzTags":[{"tagCode":112801005,"tagName":"自考班"}],"id":"11280117021","clzName":"21班"}},{"examCategory":0,"schCode":112801,"grade":7,"subjects":[{"code":"04","name":"物理","id":"04"},{"code":"05","name":"化学","id":"05"},{"code":"06","name":"历史","id":"06"},{"code":"07","name":"地理","id":"07"},{"code":"08","name":"生物","id":"08"},{"code":"09","name":"政治","id":"09"}],"clzSubCode":112801170227,"id":"112801170227","clazz":{"clzSerial":22,"schCode":112801,"clzAlias":"选课二班","clzProperty":"20","clzCode":11280117022,"yearIn":17,"clzType":{"schCode":112801,"clzTypeCode":112801005,"clzTypeName":"全科班","id":"112801005"},"clzTags":[{"tagCode":112801005,"tagName":"自考班"}],"id":"11280117022","clzName":"22班"}}];
        ///学校班级表
        schclazz_data = [
            {
                "yearIn": 16, "clzCode": 01, "clzAlias": "一班"
  },
            {
                "yearIn": 16, "clzCode": 02, "clzAlias": "二班"
  },
            {
                "yearIn": 18, "clzCode": 03, "clzAlias": "三班"
  },
            {
                "yearIn": 16, "clzCode": 21, "clzAlias": "选课一班"
  },
            {
                "yearIn": 16, "clzCode": 22, "clzAlias": "选课二班"
  },
            {
                "yearIn": 17, "clzCode": 23, "clzAlias": "选课三班"
  },
            {
                "yearIn": 18, "clzCode": 24, "clzAlias": "选课四班"
  }
];
        ///学生表
        stulist_data = [
            {
                "stuName": "张三",
                "stuAlias": "张三",
                "gender": 1,
                "stuNo": 123,
                "examNo": 123,
                "schStuCode": "01",
                "stuCode": "01",
                "clzCode": "01",
                "examCategory": 0
  },
            {
                "stuName": "李四",
                "stuAlias": "李四",
                "gender": 1,
                "stuNo": 123,
                "examNo": 123,
                "schStuCode": "02",
                "stuCode": "02",
                "clzCode": "21",
                "examCategory": 1
  },
            {
                "stuName": "王五",
                "stuAlias": "王五",
                "gender": 0,
                "stuNo": 123,
                "examNo": 123,
                "schStuCode": "03",
                "stuCode": "03",
                "clzCode": "22",
                "examCategory": 1
  },
            {
                "stuName": "赵六",
                "stuAlias": "赵六",
                "gender": 0,
                "stuNo": 123,
                "examNo": 123,
                "schStuCode": "04",
                "stuCode": "04",
                "clzCode": "23",
                "examCategory": 1
  },
            {
                "stuName": "7",
                "stuAlias": "7",
                "gender": 0,
                "stuNo": 123,
                "examNo": 123,
                "schStuCode": "05",
                "stuCode": "05",
                "clzCode": "24",
                "examCategory": 0
  },
            {
                "stuName": "8",
                "stuAlias": "8",
                "gender": 1,
                "stuNo": 123,
                "examNo": 123,
                "schStuCode": "06",
                "stuCode": "06",
                "clzCode": "21",
                "examCategory": 1
  },
            {
                "stuName": "9",
                "stuAlias": "9",
                "gender": 1,
                "stuNo": 123,
                "examNo": 123,
                "schStuCode": "07",
                "stuCode": "07",
                "clzCode": "01",
                "examCategory": 0
  }
];
        ///修改选课表
        stul_data = [
             {
  "student": {
    "stu1stName": "张",
    "stu2ndName": "三",
    "stuAlias": "张三",
    "gender": 1,
    "stuNo": "123",
    "examNo": "123"

  },
  "clazz": [{
    "subCode": "04",
    "subName": "物理",
    "clzAlias": "选课一班",
    "clzCode": "21",
    "examCategory" : 1
  }, {
    "subCode": "05",
    "subName": "化学",
    "clzAlias": "选课二班",
    "clzCode": "22",
    "examCategory" : 1
  }],
  "grdName": "初三",
  "yearIn": 16,
  "adminClazz": "01",
  "clzAlias": "一班",
  "schStuCode": "01"
},
             {
  "student": {
    "stu1stName": "李",
    "stu2ndName": "四",
    "stuAlias": "李四",
    "gender": 1,
    "stuNo": "123",
    "examNo": "123"
  },
  "clazz": [{
    "subCode": "04",
    "subName": "物理",
    "clzAlias": "选课一班",
    "clzCode": "21",
    "examCategory" : 1
  }, {
    "subCode": "05",
    "subName": "化学",
    "clzAlias": "选课二班",
    "clzCode": "22",
    "examCategory" : 1
  }],
  "grdName": "初三",
  "yearIn": 17,
  "adminClazz": "02",
  "clzAlias": "二班",
  "schStuCode": "02"
}
        ];
    },
    //年级表绑定
    year_table: function () {
        var nou = "";
        $.each(grade_data, function (index, value) {
            nou += `<option value="${value.yearIn}">${value.yearIn}级</option>`;
        });
        $("#year_value").html(nou);
        //班级表预定义
        var boot = $("#year_value :selected").val();
        student.change_year_value(boot);
    },
    //用选中年级表的值改变班级方法
    change_year_value: function (boot) {        
        var cou = "";
        $.each(schclazz_data, function (index, value) {
            if (boot == value.yearIn)
                cou += `<option value="${value.clzCode}">第${value.clzAlias}</option>`;
        });
        //console.log(cou);
        $("#class_value").html(cou);
    },
    //设定页面一加载就运行
    init: function () {        
        student.table_init();
        student.year_table();
        student.create_table();
        //查出datatables条数,并放入#count中
        $("#count").pagescount();
        student.count();
    },
    //显示 查询
    show_search: function(con){
        show_content(con);
        var clzCode = $("#class_value :selected").val();
	    table.ajax.url('../biz/sch/student/studentList/' + clzCode).load(function(){$("#count").pagescount();},false);
    },
    //增删时 count条数改变
    count: function(){
        $("body").on("click",".default_btn.edit_row_btn",function(){
        $("#count").pagescount();
        });
    }
    
};

//加载即运行
student.init();


//批量更新
$("#student_import_BatchUpdate").on("change", function () {
    var title = '批量更新' + $(this).find("option:selected").text();
    var html = `<div class="col-12"><input type="file" name="file" class="dropify-fr"
					data-default-file="" multiple="multiple" /></div>`;
    Men.new_window(title, html, '取消', student.import_BatchUpdate_btn);
    $(".center_popup").addClass("wid50");
    $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">导入</button>');
    //初始化上传控件
    Men.dropify();
});

//选择选课班 内容
$("body").on("change", ".check_checkbox", function () {
    if ($(this).is(":checked"))
        $(this).parent().parent().parent().find("select").attr("disabled", false);
    else
        $(this).parent().parent().parent().find("select").attr("disabled", true);
});

//当年级改变时
$("#year_value").on("change", function () {
    boot = $(this).val();
    student.change_year_value(boot);
});
