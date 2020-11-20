 //模拟表数据 后台不用
var data=[{
        "id": "000011",
        "clzCode": "112801170001", //班级编号
        "schCode": "10",  //学校编号
        "yearIn": "17",  //学级  两张表合并，现在学级就是年级！年级字段不要了
        "clzSerial": "1",  //班级序号
        "clzProperty": "10",  //班级属性
        "clzType": "112801001",  //班级类型
        "clzName": "2班", //班级名称
        "clzAlias": "(2)班", //班级别名
        "clzTags": ["01","02"] //班级标签
    }];
var classs = {    
    //生成datatables
    create_table: function () {
        table = $('#datatable_class').DataTable({
            "data": data,
            "bAutoWidth": false, //是否自适应宽度
            "bProcessing": true, //加载时
            "bLengthChange": false, //去掉每页显示多少条数据方法
            "paging": false,   //禁止分页
            "info": false,   //去掉底部文字
            /*"ajax": {
                "url": "班级管理表.json",
                "success":function(result){console.log(result)},
                "error":function(error){alert(error)},
                "dataSrc": "data",
            },*/
            "columns": [
                {
                    data: "yearIn" //学级
		},
                {
                    data: "clzSerial" //班级序号
		},
                {
                    data: "clzAlias"  //班级别名
		},
                {
                    data: "clzProperty" //班级属性
		},
                {
                    data: "clzType" //班级类型
		},
                {
                    data: "clzTags" //班级标签
		},
                {
                    "data": null //此列不绑定数据源 操作
		}
	   ],
          "columnDefs": [{
            "targets": 6,
            "data": null,
            "searchable": false,
            "render": function (data, type, row, meta) {
                var html = `<button class="default_btn_small green_btn" onclick="classs.editor_open(${data.id})"><i class="iconfont icon-bianji"></i>修改</button><button class="default_btn_small red_btn" onclick="Men.del_list({id:${data.id}},${meta.row},'../biz/sch/school/delSchool')"><i class="iconfont icon-shanchu"></i>删除</button>`;
                return html;
            }
		}],
            "language": {
                "url": "datatables_language.json"
            }
        });

    },
    //绑定其他表
    bind_other_table: function () {
        //学科表
        sbd_subject=[{"code":"01","name":"语文","id":"01"},{"code":"05","name":"化学","id":"05"},{"code":"14","name":"信息","id":"14"},{"code":"04","name":"物理","id":"04"},{"code":"06","name":"历史","id":"06"},{"code":"09","name":"政治","id":"09"},{"code":"10","name":"体育","id":"10"},{"code":"12","name":"美术","id":"12"},{"code":"03","name":"英语","id":"03"},{"code":"07","name":"地理","id":"07"}];
        //学级表
        $.getJSON('./result.json',function(result){
            year_yi=result
        });        
    },
    //设定页面一加载就运行
    init: function () {
        classs.bind_other_table();
        classs.create_table();
    },
    //批量导入班级 窗口
    import_class_window: function () {
        var html = `<div class="col-12"><input type="file" name="file" class="dropify-fr"
					data-default-file="" multiple="multiple" /></div>`;
        Men.new_window('批量导入班级', html, '取消', classs.import_class_btn);
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">导入</button>');
        //初始化上传控件
        Men.dropify();
    },
    //批量导入班级 导入按钮
    import_class_btn: function () {
        alert($("input[type='file']").val());
        Tomd.toast('center', 'warning', '导入成功！');
        Men.close_window();
    },
    //新建窗口 打开
    newly_open: function () {
        var html = $("#class_template").html();
        Men.new_window('新增班级', html, '取消', classs.newly_btn);
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">创建</button>');
        //创建班级类别checkbox内容
        classs.create_sbd_checkbox();
    },
    //新建窗口 创建按钮
    newly_btn: function () {
        //校验
        $("#class").formValidator();
        var r = $("#class").validate().form();
        if (r) {
            //从input中传值 code是唯一ID，不用传，自动赋给它个
            var yearIn = $("#inputtext_01").val(); //学级
            var clzSerial = $("#inputtext_02").val();  //班级序号
            var clzAlias = $("#inputtext_03").val();  //班级别名
            var clzProperty = $("#inputtext_04").val();  //班级属性
            var clzType = $("#inputtext_05").val();  //班级类型
            var clzTags = classs.write_name();  //班级标签
            //考试类型没字段
            var datas = {};
            // 保存新增到后台并判断正确与否        
            Men.judge_newly('../biz/sch/school/addSchool', datas, $('#datatable_class').dataTable());
        }
    },
    //编辑窗口 打开
    editor_open: function(){
        var html = $("#class_template").html();
        Men.new_window('修改班级', html, '取消', classs.editor_btn);
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">保存</button>');
        //要用ajax找后台数据. 下一条是本地数据,程序员删掉！
        var datas = Men.list_post(code, data, 'id');
        /****ajax找后台数据 
        var data={code: code};    
        var datas=Men.post_data('../biz/sch/school/addSchool',data);    
        ****/
        $("#code").val(datas.id); //放唯一ID号
        $("#inputtext_01").val(datas.schoollevel);
        $("#inputtext_02").val(datas.grade);
        $("#inputtext_03").val(datas.classs);
        $("#inputtext_04").val(datas.classalias);
        $("#stu_table").append(classs.read_name(datas.role));
        //创建班级类别checkbox内容
        classs.create_sbd_checkbox();
    },
    //编辑窗口 保存按钮
    editor_btn: function(){
        //校验
        $("#class").formValidator();
        var r = $("#class").validate().form();
        if (r) {
            //从input中传值
            var code = $("#code").val();
            var schoollevel = $("#inputtext_01").val();
            var grade = $("#inputtext_02").val();
            var classs = $("#inputtext_03").val();
            var classalias = $("#inputtext_04").val();
            var section = $("#inputtext_05").val();
            var classtype = $("#inputtext_06").val();
            var role = classs.write_name();
            var datas = {
                "schoollevel": schoollevel,
                "grade": grade,
                "classs": classs,
                "classalias": classalias,
                "section": section,
                "classtype": classtype,
                "role": role
            };
        // 保存修改到后台并判断正确与否        
        Men.judge_editor('../biz/sch/school/addSchool', datas, $('#datatable_class').dataTable());
        };
    },
    //创建班级类别checkbox内容
    create_sbd_checkbox: function(){
        var html="";
        $.each(sbd_subject,function(index,value){
            html+=`<label><input type="checkbox" value="${value.code}">${value.name}</label>`;
        $(".checkbox_group_div").html(html);    
        });
    },
    //检查是否创建的班级和数据库中已有的重复
    check_newlyclass: function(){
        var y1=$("#inputtext_02").val();        
        var e=$("#inputtext_03");
        var y2=e.val();
        $.each(data,function(index,value){
            if(value.yearIn == y1 && value.clzSerial == y2)
                {e.addClass("error").prev("label").append('<span class="error">错误，已有此班了。</span>');return false;}
            else
                {e.removeClass("error").prev("label").children(".error").remove();}
        })
    }
};

//加载即运行
classs.init();



//选择选课班 内容
$("body").on("change", ".check_checkbox", function () {
    if ($(this).is(":checked"))
        $(this).parent().parent().parent().find("select").attr("disabled", false);
    else
        $(this).parent().parent().parent().find("select").attr("disabled", true);
});
