var data = [{
    "channelRoleId": "000001",
    "roleCode": "0101",
    "userCode": "136578896564",
    "schCodes": ['988872', '518746'],
    "codCode": "010203"
}, {
    "channelRoleId": "000002",
    "roleCode": "0102",
    "userCode": "12533456789",
    "schCodes": ['518747', '518748'],
    "codCode": "010213"
}];

//这是教育局角色页面 用到其他地方，搜索education_user换成其他名称
var education_user = {
    //生成datatables
    create_table: function () {
        table = $('#datatable_admin').DataTable({
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
                    data: 'channelRoleId'
		},
                {
                    data: 'roleCode'
		},
                {
                    data: "userCode"
		},
                {
                    data: null
		},
                {
                    data: "codCode"
		},
                {
                    "data": null //此列不绑定数据源
		}
	],
            "columnDefs": [
                {
                    "targets": 3,
                    "data": null,
                    "render": function (data, type, row, meta) {
                        var html = "";
                        $.each(education_user.school_table_data, function (index, value) {
                            $.each(row.schCodes, function (i, v) {
                                if (value.code == v) {
                                    html += `${value.name}&emsp;`;
                                }
                            });
                        });
                        return html;
                    }
		},
                {
                    "targets": 5,
                    "data": null,
                    "searchable": false,
                    "render": function (data, type, row, meta) {
                        var html = `<button class="default_btn_small green_btn" onclick="education_user.editor_open('${data.channelRoleId}')"><i class="iconfont icon-bianji"></i>修改</button><button class="default_btn_small red_btn" onclick="Men.del_list({id:${data.channelRoleId}},${meta.row},'../biz/sch/student/delStudent')"><i class="iconfont icon-shanchu"></i>删除</button>`;
                        return html;
                    }
		}],
            "language": {
                "url": "datatables_language.json"
            }
        });
    },
    //新建教育局角色窗口 打开
    newly_open: function () {
        var html = $("#admin_template").html();
        Men.new_window('新建教育局角色', html, '取消', this.newly_btn);
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">创建</button>');
        this.bind_roleCode_table_data();//select绑定角色编号
        //限定只能输入数字方法
        Men.only_number();
        //弹出窗口绑定学校表
        this.school_table_data();
    },
    //点击新建教育局角色窗口中的创建按钮 创建一条记录
    newly_btn: function () {
        //校验
        $("#admin").formValidator();
        var r = $("#admin").validate().form();
        if (r) {
            //从input中传值 code是唯一ID，不用传，自动赋给它个
            var yearIn = $("#inputtext_01").val();
	        	var grade = $("#inputtext_02").val();
	        	var gradename = $("#inputtext_03").val();
	        	var yearOut = $("#inputtext_04").val();
	        	var status = $("#inputtext_05").val();
            var datas={schoolId:schoolId,yearIn:yearIn,grade:grade,gradename: gradename, yearOut: yearOut,status:status};
	        	// 保存新增到后台并判断正确与否        
	            Men.judge_newly('../biz/sch/grade/addadmin', datas);
        }
    },
    //编辑教育局角色窗口 打开
    editor_open: function (code) {
        var html = $("#admin_template").html();
        Men.new_window('修改教育局角色', html, '取消', this.editor_btn);
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">保存</button>');
        //要用ajax找后台数据. 下一条是本地数据,程序员删掉！
        var datas = Men.list_post(code, data, 'channelRoleId');
        /****ajax找后台数据 
        var data={schoolId:schoolId,id: code};
	    	var datas = Men.get_data("../biz/sch/grade/getadminById",data);
        ****/
        $("#inputtext_01").val(datas.channelRoleId).prop("disabled",true); //放唯一ID号        
        $("#inputtext_02").val(datas.userCode); //用户编号-手机号码
        $("#inputtext_04").val(datas.codCode).prop("disabled",true); //教育局编号
        this.bind_roleCode_table_data();//select绑定角色编号
        $("#inputtext_03").val(datas.roleCode);//角色编号
        //限定只能输入数字方法
        Men.only_number();
        //弹出窗口绑定学校表
        this.bind_school_table_data();
        //已选择的学校放右边
        this.selected_school_data(datas.schCodes);
    },
    //点击修改教育局角色窗口中的保存按钮 修改一条记录
    editor_btn: function () {
        //校验
        $("#admin").formValidator();
        var r = $("#admin").validate().form();
        if (r) {
            //从input中传值
                var datas={};
                datas.channelRoleId = $("#inputtext_01").val();
                datas.userCode = $("#inputtext_02").val();
                datas.roleCode = $("#inputtext_03").val();
                datas.codCode = $("#inputtext_04").val();
	        	datas.schCodes = education_user.return_school_ID();
	        	// 保存修改到后台并判断正确与否        
	            Men.judge_editor('../biz/sch/grade/saveadmin', datas);
        }
    },
    //得出已选择的学校ID
    return_school_ID: function(){
        var data = $("#ul_right").find("li");
        var html = [];
        $.each(data,function(index,value){
            html.push(value.dataset.id);
        });
        return html;
    },
    //绑定用户编号表
    bind_roleCode_table_data: function(){        
        var html="";
        $.each(this.roleCode_data, function(index,value){
            html+=`<option val='${value.code}'>${value.code}</option>`;
        });
        $("select#inputtext_03").html(html);
    },
    //弹出窗口绑定学校表
    bind_school_table_data: function(){        
        var html="";
         $.each(this.school_table_data, function(index,value){
            html+=`<li data-id="${value.code}">${value.name}</li>`;
        });
        $("#ul_left").html(html);
        this.move_right();
        this.move_left();
    },
    //已选择的学校放右边
    selected_school_data: function(codeArray){
        var html="";
        $.each(this.school_table_data, function(index,value){
            $.each(codeArray, function(i,v){
                if(v == value.code)
                    html+=`<li data-id="${value.code}">${value.name}<i class="_close">×</i></li>`;
            });
        });
        $("#ul_right").html(html);
    },
    //点击左ul中的内容则转移到右边去 
    move_right: function(){
        var self = this;
    $("#ul_left li").on("click",function(){var val=this.dataset.id;
         var check =self.compare(val);                               
        if(check){
           $(this).hide().children().hide();
        var getId=$(this).attr("data-id");
    var html=`<li data-id="${getId}">${$(this).html()}<i class="_close">×</i></li>`;
        $("#ul_right").append(html); 
        }        
    });    
    },
    //比较，如果右ul中有左li的内容，则回复已有
    compare: function(val){
    var sek=true;
    $("#ul_right li").each(function(index,value){
        var name = value.dataset.id;
        if(val == name)
        {Tomd.alert("错误提示", "对不起，已有此项", "");sek=false;return false;}
    });
        return sek;
    },
    //点击右ul中的内容，删除右li内容，左ul中如隐藏则显示
    move_left: function(){
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
    },
    //表定义
    init_table_data: function(){
        //用户编号表数据
        this.roleCode_data=[{"code":"0101"},{"code":"0102"},{"code":"0103"},{"code":"0104"}];
        //学校表数据
        this.school_table_data = [{
            "code": "518746",
            "name": "(518746)李埝石寨小学",
            "parentCode": "1"
        }, {
            "code": "518747",
            "name": "(518747)三膛小学",
            "parentCode": "1"
        }, {
            "code": "518748",
            "name": "(518748)逍遥地小学",
            "parentCode": "1"
        }, {
            "code": "517748",
            "name": "(517748)深圳高中",
            "parentCode": "2"
        }, {
            "code": "988872",
            "name": "(988872)墨西哥中学",
            "parentCode": "2"
        }];
    },
    //设定页面一加载就运行
    init: function () {
        this.init_table_data();
        this.create_table();
    }
};
//加载即运行
education_user.init();