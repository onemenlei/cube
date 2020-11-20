var data = [{
    "_id": "000001",
    "schooltype": 1,
    "academiclevel": "2018级",
    "currentgrade": 6,
    "gradename": "预备班",
    "graduationtime": "2014-06-01",
    "state": 1
}, {
    "_id": "000002",
    "schooltype": 3,
    "academiclevel": "2015级",
    "currentgrade": 6,
    "gradename": "7",
    "graduationtime": "2015-06-01",
    "state": 0
}];

//这是学级/学届页面 用到其他地方，搜索academiclevel. 换成其他名称
var academiclevel = {
    //生成datatables
    create_table: function () {
        table = $('#datatable_academiclevel').DataTable({
            "data": data,
            "bAutoWidth": false, //是否自适应宽度
            "bProcessing": true, //加载时
            "bLengthChange": false, //去掉每页显示多少条数据方法
            "paging": false,   //禁止分页
            "info": false,   //去掉底部文字
            /*"ajax": {
                "url": "datatable1.json",
                //"success":function(result){alert("down");console.log(result)},
                "error":function(error){alert(error)},
                "dataSrc": "",
            },*/
            "columns": [
                {
                    data: null
		},
                {
                    data: 'academiclevel'
		},
                {
                    data: "currentgrade"
		},
                {
                    data: "gradename"
		},
                {
                    data: "graduationtime"
		},
                {
                    data: "null"
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
                        if (row.schooltype == 1) return "小学";
                        else if (row.schooltype == 2) return "初中";
                        else if (row.schooltype == 3) return "高中";
                        else return "大学";
                    }
		},
                {
                    "targets": 5,
                    "data": null,
                    "render": function (data, type, row, meta) {
                        if (row.state == 1) return "在读";
                        else if (row.state == 0) return "已毕业";
                        else return "未确定";
                    }
		},
                {
                    "targets": 6,
                    "data": null,
                    "searchable": false,
                    "render": function (data, type, row, meta) {
                        var html = `<button class="default_btn_small green_btn" onclick="academiclevel.editor_open(${data._id})"><i class="iconfont icon-bianji"></i>修改</button><button class="default_btn_small red_btn" onclick="Men.del_list({id:${data.schStuCode}},${meta.row},'../biz/sch/student/delStudent')"><i class="iconfont icon-shanchu"></i>删除</button>`;
                        return html;
                    }
		}],
            "language": {
                "url": "datatables_language.json"
            }
        });
    },
    //新建学级/学届窗口 打开
    newly_open: function () {
        var html = $("#academiclevel_template").html();
        Men.new_window('新建学级/学届', html, '取消', academiclevel.newly_btn);
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">创建</button>');
        //定义年级名称
        academiclevel.change_grade();
    },
    //点击新建学级/学届窗口中的创建按钮 创建一条记录
    newly_btn: function () {
        //校验
        $("#academiclevel").formValidator();
        var r = $("#academiclevel").validate().form();
        if (r) {
            //从input中传值 code是唯一ID，不用传，自动赋给它个
            var yearIn = $("#inputtext_01").val();
	        	var grade = $("#inputtext_02").val();
	        	var gradename = $("#inputtext_03").val();
	        	var yearOut = $("#inputtext_04").val();
	        	var status = $("#inputtext_05").val();
            var datas={schoolId:schoolId,yearIn:yearIn,grade:grade,gradename: gradename, yearOut: yearOut,status:status};
	        	// 保存新增到后台并判断正确与否        
	            Men.judge_newly('../biz/sch/grade/addAcademiclevel', datas);
        }
    },
    //编辑学级/学届窗口 打开
    editor_open: function (code) {
        var html = $("#academiclevel_template").html();
        Men.new_window('修改学级/学届', html, '取消', academiclevel.editor_btn);
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">保存</button>');
        //要用ajax找后台数据. 下一条是本地数据,程序员删掉！
        var datas = Men.list_post(code, data, '_id');
        /****ajax找后台数据 
        var data={schoolId:schoolId,id: code};
	    	var datas = Men.get_data("../biz/sch/grade/getAcademiclevelById",data);
	    	$("#inputtext_01").val(datas.yearIn).prop("disabled","disabled");
		    $("#inputtext_02").val(datas.grade);
		    $("#inputtext_03").val(datas.grdName);
		    $("#inputtext_04").val(datas.yearOut);
		    $("#inputtext_05").val(datas.status);   
        ****/
        $("#code").val(datas._id); //放唯一ID号
        $("#inputtext_01").val(datas.academiclevel);
        $("#inputtext_02").val(datas.currentgrade);
        $("#inputtext_03").val(datas.gradename);
        $("#inputtext_04").val(datas.graduationtime);
        $("#inputtext_05").val(datas.state);
    },
    //点击修改学级/学届窗口中的保存按钮 修改一条记录
    editor_btn: function () {
        //校验
        $("#academiclevel").formValidator();
        var r = $("#academiclevel").validate().form();
        if (r) {
            //从input中传值
	        	var yearIn = $("#inputtext_01").val();
	        	var grade = $("#inputtext_02").val();
	        	var gradename = $("#inputtext_03").val();
	        	var yearOut = $("#inputtext_04").val();
	        	var status = $("#inputtext_05").val();
	        	var datas={schoolId:schoolId,yearIn:yearIn,grade:grade,gradename: gradename, yearOut: yearOut,status:status};
	        	// 保存修改到后台并判断正确与否        
	            Men.judge_editor('../biz/sch/grade/saveAcademiclevel', datas);
        }
    },
    //当修改当前年级时，自动改变年级名称
    change_grade: function () {
        var grade_value = $("#inputtext_02").val();
        var x = "";
        switch (grade_value) {
            case '1':
                x = "一年级";
                break;
            case '2':
                x = "二年级";
                break;
            case '3':
                x = "三年级";
                break;
            case '4':
                x = "四年级";
                break;
            case '5':
                x = "五年级";
                break;
            case '6':
                x = "六年级";
                break;
            case '7':
                x = "七年级";
                break;
            case '8':
                x = "八年级";
                break;
            case '9':
                x = "九年级";
                break;
            default:
                x = "十年级";
        }
        $("#inputtext_03").val(x);
    },
    //设定页面一加载就运行
    init: function () {
        academiclevel.create_table();
        academiclevel.no_show_academiclevel();
    },
    //不显示已毕业学届
    no_show_academiclevel: function () {
        //当checkbox选中，不显示已毕业学届
        $("#show_academiclevel_checkbox").on("change", function () {
            if ($(this).is(':checked'))
                table.column(5).search('在读').draw(false);
            else {
                $('#datatable_academiclevel').dataTable().fnDestroy();
                $('#datatable_academiclevel').DataTable({
                    "language": {
                        "url": "datatables_language.json"
                    }
                }).draw(false);
            }
        });
        focu={
            chue: function(){console.log("套中套");}
        };
        focu.chue();
    }
};
//加载即运行
academiclevel.init();
