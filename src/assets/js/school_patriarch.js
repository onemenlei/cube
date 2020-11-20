//datatable数据表
var data = [
    {
        "id": "8722051600000016",
        "Name": "测试家长",
        "account": "无",
        "registrationtime": "2018-05-25",
        "telphone": "133445566",
        "role": ["王大强", "王小强", "王三强"]
	},
    {
        "id": "242523647475757",
        "Name": "测试家长",
        "account": "有",
        "registrationtime": "2014-01-05",
        "telphone": "145456675",
        "role": ["李辉", "背"]
	}
];

//这是家长页面 用到其他地方，搜索patriarch. 换成其他名称
var patriarch = {};
patriarch.create_table = function () {
    //表格生成
    table = $('#datatable_patriarch').DataTable({
        "data": data,
        "autoWidth": false,
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
                data: 'Name'
		},
            {
                data: "telphone"
		},
            {
                data: "account"
		},
            {
                data: "registrationtime"
		},
            {
                "data": null //此列不绑定数据源
		},
            {
                "data": null //此列不绑定数据源
		}
	],
        "columnDefs": [
            {
                "targets": 4,
                "data": null,
                "searchable": false,
                "render": function (data, type, row, meta) {
                    var html = "";
                    $.each(data.role, function (index, result) {
                        html = html + `${result} `;
                    });
                    return html;
                }
		},
            {
                "targets": 5,
                "data": null,
                "searchable": false,
                "render": function (data, type, row, meta) {
                    var html = `<button class="default_btn_small green_btn" onclick="patriarch.editor_open(${data.id})"><i class="iconfont float-right icon-bianji"></i>修改</button><button class="default_btn_small yellow_btn" onclick="patriarch.password_window(${data.id})"><i class="iconfont float-right icon-tingyong"></i>重置密码</button><button class="default_btn_small red_btn" onclick="Men.del_list('{id:${data.id}}',${meta.row},'../biz/sch/school/delSchool')"><i class="iconfont float-right icon-shanchu"></i>删除</button>`;
                    return html;
                }
		}],
        "language": {
            "url": "datatables_language.json"
        },
        "fnRowCallback" : function(nRow, aData, iDisplayIndex) {$("#patriarchCount").show();patriarch.count();}
    });
};
//刷新条数
patriarch.count = function() {
			$("#count").pagescount();
};
//新建窗口 打开
patriarch.newly_open = function () {
    var html = $("#patriarch_template").html();
    Men.new_window('新增家长', html, '取消', patriarch.newly_btn);
    $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">创建</button>');
    //绑定年级表
    patriarch.popup_year_table();
    //日期框绑上最新日期
    $("#inputtext_04").val(new Date().Format("yyyy-MM-dd"));
    //点击“查询”按钮，从后台导入学生名绑上左侧ul
    $("#scan_student").on("click",function(){
        patriarch.bind_student_name_table();
    });
};
//点击新建窗口中的创建按钮 创建一条记录
patriarch.newly_btn = function () {
    //校验
    $("#patriarch").formValidator();
    var r = $("#patriarch").validate().form();
    if (r) {
        //从input中传值 code是唯一ID，不用传，自动赋给它个
        var Name = $("#inputtext_01").val();
        var telphone = $("#inputtext_02").val();
        var account = $("#inputtext_03").val();
        var registrationtime = $("#inputtext_04").val();
        var role = patriarch.write_name();
        var datas = {
            Name: Name,
            telphone: telphone,
            account: account,
            registrationtime: registrationtime,
            role: role
        };
        // 保存新增到后台并判断正确与否        
        Men.judge_newly('../biz/sch/school/addSchool', datas, $('#datatable_patriarch').dataTable());
    }
};
//编辑学级/学届窗口 打开
patriarch.editor_open = function (code) {
    var html = $("#patriarch_template").html();
    Men.new_window('修改家长', html, '取消', patriarch.editor_btn);
    $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">保存</button>');
    //绑定年级表
    patriarch.popup_year_table();
    //点击“查询”按钮，从后台导入学生名绑上左侧ul
    $("#scan_student").on("click",function(){
        patriarch.bind_student_name_table();
    });
    //右ul删除
    patriarch.move_left();
    //要用ajax找后台数据. 下一条是本地数据,程序员删掉！
    var datas = Men.list_post(code, data, 'id');
    /****ajax找后台数据 
    var data={code: code};    
    var datas=Men.post_data('../biz/sch/school/addSchool',data);    
    ****/
    $("#code").val(datas.id); //放唯一ID号
    $("#inputtext_01").val(datas.Name);
    $("#inputtext_02").val(datas.telphone);
    $("#inputtext_03").val(datas.account);
    $("#inputtext_04").val(datas.registrationtime);
    $("#ul_right").append(patriarch.read_name(datas.role));
};
//点击修改学级/学届窗口中的保存按钮 修改一条记录
patriarch.editor_btn = function () {
    //校验
    $("#patriarch").formValidator();
    var r = $("#patriarch").validate().form();
    if (!Tomd.check.phone($("#inputtext_02").val())) {
		$("#inputtext_02").addClass("error");
        $("#inputtext_02").prev().append("<label class='error'>手机格式不正确!</label>");
		r = false;
	}
    if (r) {
        //从input中传值
        var code = $("#code").val();
        var Name = $("#inputtext_01").val();
        var telphone = $("#inputtext_02").val();
        var account = $("#inputtext_03").val();
        var registrationtime = $("#inputtext_04").val();
        var role = patriarch.write_name();
        var datas = {
            id: code,
            Name: Name,
            telphone: telphone,
            account: account,
            registrationtime: registrationtime,
            role: role
        };
        // 保存修改到后台并判断正确与否        
        Men.judge_editor('../biz/sch/school/addSchool', datas, $('#datatable_patriarch').dataTable());
    }
};

//批量导入家长 窗口
patriarch.import_patriarch_window = function () {
    var html = `<div class="col-12 text-right" style="margin-bottom:.5rem"><button class="default_btn white_btn" onclick="patriarch.clear()">清空</button><button class="default_btn" onclick="downTemplate()">下载模板</button></div><div class="col-12"><input type="file" name="file" class="dropify-fr"
					data-default-file="" /></div>`;
    Men.new_window('批量导入家长', html, '取消', patriarch.import_patriarch_btn);
    $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">导入</button>');
    //初始化上传控件
    Men.dropify();
};
//批量导入家长 导入按钮
patriarch.import_patriarch_btn = function () {
    alert($("input[type='file']").val());
    Tomd.toast('center', 'warning', '导入成功！');
    Men.close_window();
};
//清空
patriarch.clear = function(){$(".dropify-clear").trigger("click");};

//从后台读取年级表、班级表数据
patriarch.table_init = function () {
    //模拟年级数据，实际做时用ajax读后台，smi中是后台学级表的json数据
    /****
    smi_table=Men.post_data('查后台学科表','');
    ****/
    smi_table = [{
        "_id": "0001",
        "yearIn": "2017"
    }, {
        "_id": "0002",
        "yearIn": "2016"
    }, {
        "_id": "0003",
        "yearIn": "2015"
    }];
    //模拟班级表数据
    /****
    class_table=Men.post_data('查后台学科表','');
    ****/
    class_table = [{
        "_id": "201701",
        "clzCode": "11280120170001",
        "clzName": "1班",
        "yearIn": "2017"
    }, {
        "_id": "201702",
        "clzCode": "11280120170002",
        "clzName": "2班",
        "yearIn": "2017"
    }, {
        "_id": "201601",
        "clzCode": "11300120170001",
        "clzName": "1中塔班",
        "yearIn": "2016"
    }, {
        "_id": "201602",
        "clzCode": "11300120170002",
        "clzName": "2上飞班",
        "yearIn": "2016"
    }, {
        "_id": "201603",
        "clzCode": "11300120170003",
        "clzName": "3下单班",
        "yearIn": "2016"
    }, {
        "_id": "201501",
        "clzCode": "11120120170001",
        "clzName": "1音乐班",
        "yearIn": "2015"
    }, {
        "_id": "201502",
        "clzCode": "11120120170002",
        "clzName": "2美术班",
        "yearIn": "2015"
    }];
    //模拟学生表
    /****
    student_name_table=Men.post_data('查后台学生表','');
    ****/
    student_name_table=[{"id":"0001","name":"李三才"},{"id":"0002","name":"李四光"},{"id":"0003","name":"王沁"},{"id":"0004","name":"阿涮"}];
};
//新增/修改时学生表绑定
patriarch.bind_student_name_table = function(){
    var html="";
    $.each(student_name_table,function(index,value){
        html+=`<li data-id="${value.id}">${value.name} <i class="iconfont float-right icon-jiahao1 icon_add_color"></i></li>`;
    });
    $("#ul_left").html(html);
    patriarch.move_right();
    patriarch.move_left();
};
//点击左ul中的内容则转移到右边去 
patriarch.move_right = function(){
    $("#ul_left li").on("click",function(){var val=this.dataset.id;
         var check =patriarch.compare(val);                               
        if(check){
           $(this).hide().children().hide();
        var getId=$(this).attr("data-id");
    var html=`<li data-id="${getId}">${$(this).html()} <i class="iconfont float-right icon-shanchu1 icon_del_color"></i></li>`;
        $("#ul_right").append(html); 
        }        
    });    
};
//比较，如果右ul中有左li的内容，则回复已有
patriarch.compare = function(val){
    var sek=true;
    $("#ul_right li").each(function(index,value){
        var name = value.dataset.id;
        if(val == name)
        {Tomd.alert("错误提示", "对不起，已有此项", "");sek=false;return false;}
    });
        return sek;
};
//点击右ul中的内容，删除右li内容，左ul中如隐藏则显示
patriarch.move_left = function(){
    $("#ul_right").on("click","li", function(){
        var getId = $(this).attr('data-id');
        $('#ul_left li').each(function(index, value) {
                var ids = $(value).attr('data-id');
                if (getId == ids) {
                    $(value).show().children().show();
                }
            });
        $(this).remove();
    });
};
//年级表绑定
patriarch.year_table = function () {
    var nou = "";
    ///学级表绑定
    $.each(smi_table, function (index, value) {
        nou += `<option value="${value.yearIn}">${value.yearIn}级</option>`;
    });
    $("#year_value").html(nou);
    //班级表预定义
    var boot = $("#year_value :selected").val();
    patriarch.change_year_value(boot);
};

//当年级改变时
$("#year_value").on("change", function () {
    boot = $(this).val();
    patriarch.change_year_value(boot);
});
//用年级值改变班级方法
patriarch.change_year_value = function (boot) {
    var cou = "";
    $.each(class_table, function (index, value) {
        if (boot == value.yearIn)
            cou += `<option value="${value.clzCode}">第${value.clzName}</option>`;
    });
    //console.log(cou);
    $("#class_value").html(cou);
};
//弹出窗口中 年级表绑定
patriarch.popup_year_table = function () {
    var nou = "";
    ///学级表绑定
    $.each(smi_table, function (index, value) {
        nou += `<option value="${value.yearIn}">${value.yearIn}级</option>`;
    });
    $("#inputtext_05").html(nou);
    //班级表预定义
    var boot = $("#year_value :selected").val();
    patriarch.change_year_value(boot);
    //当年级改变时
    $("#inputtext_05").on("change", function () {
        boot = $(this).val();
        patriarch.popup_change_year_value(boot);
    });
};
//用年级值改变班级方法
patriarch.popup_change_year_value = function (boot) {
    var cou = "";
    $.each(class_table, function (index, value) {
        if (boot == value.yearIn)
            cou += `<option value="${value.clzCode}">第${value.clzName}</option>`;
    });
    //console.log(cou);
    $("#inputtext_06").html(cou);
};
//循环读出role里的姓名
patriarch.read_name = function (role) {
    var html = "";
    $.each(role, function (index, value) {
        html += `<li>${value} <i class="iconfont float-right icon-shanchu1 icon_del_color"></i></li>`;
    });
    return html;
};
//把右ul里的姓名读出来 准备写到role
patriarch.write_name = function () {
    var main = $("#patriarch ul#ul_right li");
    var html = "";
    $.each(main, function (index, value) {
        $(this).children().remove();
        var name = $.trim($(this).html());
        html += name + ',';
    });
    console.log(html);
    return html;
};
//一开始先定义表数据 
patriarch.table_init();
//再绑定学级表/班级表
patriarch.year_table();
//生成datatables
patriarch.create_table();

//弹出重置密码窗口
patriarch.password_window = function(id){
    var html = $("#patriarch_password_template").html();
    Men.new_window('重置密码', html, '取消', function(){  //重置密码保存按钮
        var pass = $("#passtext_01").val() || '123456';
	   var confirmpass = $("#passtext_02").val() || '123456';
	   if (pass != confirmpass) {
		  Tomd.alert("错误提示", "两次密码不一致", "");
		  return;
	   }
       // var r = $("#patriarch_password").validate().form();
        if(1){ alert(pass)
            // id在#code输入框中 password在inputtext1或2中
            //Ajax 传值入后台
            //Men.post_data(url,code);
            alert("密码为："+pass);
            Men.close_window();
        }
    });
    $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">保存</button>');
    $(".center_popup").addClass("wid30");
    $("#code").val(id); //放唯一ID号
    var select_name = `重置的家长ID号为：${id}`;
    $("#password_title").html(select_name);
};

//弹出批量重置密码窗口
patriarch.all_password_window = function(){
    var html = $("#patriarch_password_template").html();
    Men.new_window('批量重置密码', html, '取消', patriarch.all_editor_password_btn);
    $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">保存</button>');
    var select_name = `所有重置的家长为${$("#year_value :selected").text()} ${$("#class_value :selected").text()}`;
    $("#password_title").html(select_name);
};
//批量重置密码保存按钮
patriarch.all_editor_password_btn = function(){
    //校验
    if($("#inputtext_01").val() != $("#inputtext_02").val())
        Tomd.alert("错误","两次输入的内容不符！");
    else{
        $("#patriarch_password").formValidator();
        var r = $("#patriarch_password").validate().form();
        if(r){
            // id在#code输入框中 password在inputtext1或2中
            //Ajax 传值入后台
            //Men.post_data(url,code);
            Men.close_window();
        }
    };
};
//清空(慎重)
patriarch.clearAll=function(){
	var clzCode = $("#class_value").val();
	if(clzCode==null || clzCode=="" || clzCode==undefined){
		Tomd.alert("错误提示","请选择班级","");
		return;
	}
	var data={schCode:schoolId,clzCode:clzCode,clazz:clzCode};
	var listdata = Men.get_data("../biz/sch/patriarch/list",data);
	if(!$.isEmptyObject(listdata)){
		var html='<div class="center_text_div">确认全部清除?</div>';
	    Men.new_window('清空', html, '取消');
	    $("#newwind .center_popup").addClass("wid20");
	    $('#newwind .center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">删除</button>'); 
	    $("#newwind .edit_row_btn").on("click",function(){
	      	var datas = Men.post_data("../biz/sch/patriarch/clearAll",data);
	    	if (datas.code == '0') {
	    		$('#datatable_patriarch').dataTable().fnReloadAjax();
	    	}        
	    }); 
	}else{
		Tomd.alert("错误提示","数据为空！");
	}
}