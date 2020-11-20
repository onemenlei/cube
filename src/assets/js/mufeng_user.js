//mufeng_user 牧分用户
var mufeng_user = {
    //生成datatables
    create_table: function () {
       table = $('#datatable_mufeng_user').DataTable({
    "data": this.data,
    "bAutoWidth": false, //是否自适应宽度
    "bProcessing": true, //加载时
    "dom": 'frtilp',        
    /*"ajax": {
		"dataType": 'json',
		"type" : "get",
        "url": "../biz/sch/school/schoolList",
        "dataSrc": "data",
    },*/
    "columns": [
        {
            data: "codCode"
        },
        {
            data: "codName"
        },
        {
            data: "codAlias"
        },
        /*{
            data: "schCodes"
        },*/
        {
            data: "phone"
        },
        {
            "data": "contact" 
        },
        {
            "data": null
        },
        {
            "data": null, //此列不绑定数据源
            "sWidth":"300px",
            "orderable": false
        }
            ],
    "columnDefs": [
        /*{
                    "targets": 3,
                    "data": null,
                    "render": function (data, type, row, meta) {
                        var html = "";
                        $.each(school_table_data, function (index, value) {
                            $.each(row.schCodes, function (i, v) {
                                if (value.code == v) {
                                    html += `${value.name}&emsp;`;
                                }
                            });
                        });
                        return html;
                    }
            },*/
        {
            "targets": 5,
            "data": null,
            "render": function (data, type, row, meta){
                var html =`${row.province}-${row.city}-${row.district}`;
                return html;
            }
        },
        {
            "targets": 6,
            "data": null,
            "bSort": false,
            "render": function (data, type, row, meta) {
                var html = `<button class="default_btn_small" onclick="link_btn_details('${data.codCode}','mufeng_user','mufeng_article')"><i class="iconfont icon-guanli"></i>管理</button>
<button class="default_btn_small green_btn" onclick="mufeng_user.editor_open('${data.codCode}')"><i class="iconfont icon-bianji"></i>修改</button>
<button class="default_btn_small yellow_btn stop_btn" onclick="mufeng_user.stop_btn('${data.codCode}',${meta.row},event)"><i class="iconfont icon-tingyong"></i>停用</button>
<button class="default_btn_small white_btn hidden" onclick="mufeng_user.start_btn('${data.codCode}',${meta.row},event)"><i class="iconfont icon-tingyong"></i>启用</button>
<button class="default_btn_small red_btn hidden" onclick="Men.del_list({id:${data.codCode}},${meta.row},'../biz/sch/student/delStudent')"><i class="iconfont icon-shanchu"></i>删除</button>`;
                return html;
            }
            }],
    "language": {
        "url": "datatables_language.json"
    }
});
    },
    //停用按钮方法
    stop_btn: function(code,row,event){
        var evn=$(event.currentTarget);
         var html='<div class="center_text_div">确实要停用此条记录吗？</div>';
        Men.new_window('停用此条记录', html, '取消');
        $(".center_popup").addClass("wid20");
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">停用</button>'); 
        $(".edit_row_btn").on("click",function(){
            evn.hide().siblings().show();
        });   
    },
    //启用按钮方法
    start_btn: function(code,row,event){
        var evn=$(event.currentTarget);
         var html='<div class="center_text_div">确实要启用此条记录吗？</div>';
        Men.new_window('启用此条记录', html, '取消');
        $(".center_popup").addClass("wid20");
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">启用</button>'); 
        $(".edit_row_btn").on("click",function(){
            evn.hide().prev().show().end().next().hide();
        });   
    },
    //点击新建窗口中的创建按钮 创建一条记录
    newly_btn: function (){
            //校验
            $("#mufeng_user").formValidator();
        var r = $("#mufeng_user").validate().form();
        if (r) {
            //从input中传值 code是唯一ID，不用传，自动赋给它个
            var stuName = $("#inputvalue_01").val();
            var stuAlias = $("#inputvalue_02").val();
            var gender = $("#inputvalue_03").val();
            var stuCode = $("#inputvalue_04").val();
            var stuNo = $("#inputvalue_05").val();

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
            mufeng_user.school_reset();
	    	document.getElementById("mufeng_user_signupForm").reset();	
        }
    },
    //编辑学校管理窗口 打开
    editor_open: function (code){
        var html = $("#mufeng_user_template").html();
	        Men.new_window('修改牧分信息', html, '取消', this.editor_btn);
	        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">保存</button>');
            //要用ajax找后台数据. 下一条是本地数据,程序员删掉！
            var datas = Men.list_post(code, this.data, 'codCode');
	    	//var datas = Men.get_data("../biz/sch/school/getSchoolById",data);
            $("#inputtext_111").val(datas.codCode);
            $("#inputtext_01").val(datas.codName);
            $("#inputtext_02").val(datas.codAlias);
	    	//搜索/选择学校   
        selectSchool_model.pop_init(this.res_data);
        selectSchool_model.pop_setdata(datas.schCodes,this.school_table_data);
        //限定只能输入数字方法
        Men.only_number();
    },
    //点击修改学校管理窗口中的保存按钮 修改一条记录
    editor_btn: function (){
	         //校验
	        $("#mufeng_user").formValidator();
	        var r = $("#mufeng_user").validate().form();
	        if (r) {
	            //从input中传值
	        	var schoolname = $("#inputtext_01").val();
	        	var schoolalias = $("#inputtext_02").val();
	        	var schooltype = $("#inputtext_03").val();
	        	var schoolGategory = $("#inputtext_04").val();
	        	var schoolcode = $("#inputtext_111").val();
	        	var gradebegin = $("#inputtext_05").val();
	        	var gradeend = $("#inputtext_06").val();
	        	var province = $("#inputtext_07").val();
	        	var city = $("#inputtext_08").val();
	        	var district = $("#inputtext_09").val();
	        	var location = $("#inputtext_10").val();
	        	var schIdentity = $("#inputtext_11").val();
	        	var schProperty = $("#inputtext_12").val();
	        	var linkman = $("#inputtext_13").val();
	        	var linkmanphone = $("#inputtext_14").val();
	        	var linkmanemail = $("#inputtext_15").val();
	        	if (linkmanemail != null && linkmanemail != "" && linkmanemail != undefined) {
	        		if (!Tomd.check.email(linkmanemail)) {
	        			Tomd.alert("错误提示", "错误的Email", "");
	        			return;
	        		}
	        	}
	        	var datas = {
	        		schProperty : schProperty,
	        		schIdentity : schIdentity,
	        		schoolname : schoolname,
	        		schoolalias : schoolalias,
	        		schooltype : schooltype,
	        		schoolGategory : schoolGategory,
	        		schoolcode : schoolcode,
	        		gradebegin : gradebegin,
	        		gradeend : gradeend,
	        		province : province,
	        		city : city,
	        		district : district,
	        		location : location,
	        		linkman : linkman,
	        		linkmanphone : linkmanphone
	        	};
	            // 保存修改到后台并判断正确与否        
	            Men.judge_editor('../biz/sch/school/modifySchool', datas);
	    };
	},  
    // 牧分管理/牧分创建第一项反白选中，内容显示第一项
    school_reset: function(){
        $("#mufeng_user_ul.label_top_menu_ul li").eq(0).addClass("selected").siblings().removeClass("selected");
        $("#mufeng_user_ul.label_top_menu_ul+div").children().eq(0).show().siblings().hide();
    },
    //把省、市、区县数据绑定在select中
    bind_selected_data: function(){
        var html1="";
        $.each(this.province_data, function(index,value){
               html1+=`<option>${value.name}</option>`;
               });
        if($(".center_popup").is(":empty")||$(".center_popup").length<1)
            $("#province").html(html1);
        else
            $("#pop_province").html(html1);
        var html2="";
        $.each(this.city_data, function(index,value){
               html2+=`<option>${value.name}</option>`;
               });
        if($(".center_popup").is(":empty")||$(".center_popup").length<1)
            $("#city").html(html2);
        else
            $("#pop_city").html(html2);
        var html3="";
        $.each(this.district_data, function(index,value){
               html3+=`<option>${value.name}</option>`;
               });
        if($(".center_popup").is(":empty")||$(".center_popup").length<1)
            $("#district").html(html3);
        else
            $("#pop_district").html(html3);
        //限定只能输入数字方法
        Men.only_number();
    },
    //一开始先读取数据表中数据
    init_table_data: function () {
        // this.province_data = Men.get_data("../biz/sch/school/getSchoolType",'');
        // this.city_data = Men.get_data("../biz/sch/school/getSchoolType",'');
        // this.school_table_data = Men.get_data("../biz/sch/school/getSchoolType",'');
        //主表数据
        this.data=[{"codCode":"010203","codName":"渠道1","codAlias":"渠道别名1","schCodes":['988872', '518746'],"phone":"126098872","contact":"黑克","province":"广东省","city":"湛江市","district":"临江县"},{"codCode":"010213","codName":"渠道2","codAlias":"渠道别名2","schCodes":['518747', '518748'],"phone":"139876652","contact":"白玫瑰","province":"湖南省","city":"长沙市","district":"永丰县"}];
        //省数据
        this.province_data = [{"name": "浙江省"}, {"name": "四川省"}, {"name": "贵州省"}, {"name": "甘肃省"}, {"name": "河北省"}, {"name": "内蒙古自治区"}, {"name": "江苏省"}, {"name": "重庆市"}];
        //市数据
        this.city_data = [{"code":"1","name": "丽水市","parentCode": "1"}, {"code": "2","name": "温州市","parentCode": "1"}, {"code": "3","name": "宁波市","parentCode": "1"}, {"code": "4","name": "绍兴市","parentCode": "1"}, {"code": "1","name": "张家口市","parentCode": "2"}, {"code": "2","name": "邯郸市","parentCode": "2"}, {"code": "3","name": "保定市","parentCode": "2"}, {"code": "1","name": "贵阳市","parentCode": "3"}, {"code": "12","name": "湛江市","parentCode": "3"}, {"code": "13","name": "长沙市","parentCode": "3"},];
        //区/县数据
        this.district_data = [{"code":"23","name":"临江县","parentCode":"4"},{"code":"24","name":"永丰县","parentCode":"7"}]
        //学校数据
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
        }, ];
        //可选择的学校表
        this.res_data = [{
            "schGategory": {
                "code": "22",
                "name": "民办",
                "id": "22"
            },
            "schIdentity": "",
            "city": {
                "parent": "130000",
                "code": "130700",
                "name": "张家口市",
                "id": "130700",
                "type": 2
            },
            "county": {
                "parent": "130700",
                "code": "130726",
                "name": "蔚县",
                "id": "130726",
                "type": 3
            },
            "schType": {
                "code": "2",
                "name": "初中",
                "id": "2"
            },
            "schCode": 112802,
            "createTime": 1530787754926,
            "schProperty": 1,
            "schAlias": "私人专用学校",
            "provice": {
                "parent": "0",
                "code": "130000",
                "name": "河北省",
                "id": "130000",
                "type": 1
            },
            "schLogo": "",
            "schName": "私人专用学校",
            "endGrade": "9",
            "location": {
                "code": "210",
                "name": "乡中心区",
                "id": "210"
            },
            "id": "112802",
            "startGrade": "7",
            "status": "E"
        }, {
            "schGategory": {
                "code": "21",
                "name": "公办",
                "id": "21"
            },
            "schIdentity": "",
            "city": {
                "parent": "510000",
                "code": "510100",
                "name": "成都市",
                "id": "510100",
                "type": 2
            },
            "county": {
                "parent": "510100",
                "code": "510113",
                "name": "青白江区",
                "id": "510113",
                "type": 3
            },
            "schType": {
                "code": "3",
                "name": "高中",
                "id": "3"
            },
            "schCode": 280010,
            "schProperty": 1,
            "schAlias": "成都七中育才学校水井坊",
            "provice": {
                "parent": "0",
                "code": "510000",
                "name": "四川省",
                "id": "510000",
                "type": 1
            },
            "schLogo": "",
            "schName": "成都七中育才学校水井坊",
            "endGrade": "9",
            "location": {
                "code": "111",
                "name": "主城区",
                "id": "111"
            },
            "id": "280010",
            "startGrade": "7",
            "status": "E"
        }, {
            "schGategory": {
                "code": "22",
                "name": "民办",
                "id": "22"
            },
            "schIdentity": "",
            "city": {
                "parent": "330000",
                "code": "331100",
                "name": "丽水市",
                "id": "331100",
                "type": 2
            },
            "county": {
                "parent": "331100",
                "code": "331124",
                "name": "松阳县",
                "id": "331124",
                "type": 3
            },
            "schType": {
                "code": "2",
                "name": "初中",
                "id": "2"
            },
            "schCode": 112801,
            "schProperty": 1,
            "schAlias": "测试",
            "provice": {
                "parent": "0",
                "code": "330000",
                "name": "浙江省",
                "id": "330000",
                "type": 1
            },
            "schLogo": "",
            "schName": "测试",
            "endGrade": "9",
            "location": {
                "code": "123",
                "name": "特殊区域",
                "id": "123"
            },
            "id": "112801",
            "startGrade": "7",
            "status": "E"
        }, {
            "schGategory": {
                "code": "21",
                "name": "公办",
                "id": "21"
            },
            "schIdentity": "",
            "city": {
                "parent": "360000",
                "code": "360100",
                "name": "南昌市",
                "id": "360100",
                "type": 2
            },
            "county": {
                "parent": "360100",
                "code": "360111",
                "name": "青山湖区",
                "id": "360111",
                "type": 3
            },
            "schType": {
                "code": "3",
                "name": "高中",
                "id": "3"
            },
            "schCode": 330201,
            "createTime": 1527134400000,
            "schProperty": 1,
            "schAlias": "莲塘一中",
            "provice": {
                "parent": "0",
                "code": "360000",
                "name": "江西省",
                "id": "360000",
                "type": 1
            },
            "schLogo": "",
            "schName": "江西南昌莲塘一中（高中） ",
            "endGrade": "12",
            "location": {
                "code": "111",
                "name": "主城区",
                "id": "111"
            },
            "id": "330201",
            "startGrade": "10",
            "status": "E"
        }];
    },
    //设定页面一加载就运行
    init: function () {
        this.school_reset();
        this.init_table_data();
        this.create_table();
        this.bind_selected_data(); 
        //可选择的学校
        selectSchool_model.init(this.res_data);
    }
};
//加载即运行
mufeng_user.init();
