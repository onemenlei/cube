//模拟数据库的数据
var data = [{"schGategory":{"code":"21","name":"公办","id":"21"},"schIdentity":"112801","city":{"parent":"510000","code":"510100","name":"成都市","id":"510100","type":2},"county":{"parent":"510100","code":"510107","name":"武侯区","id":"510107","type":3},"schType":{"code":"3","name":"高中","id":"3"},"schCode":330201,"createTime":1527134400000,"schProperty":1,"schAlias":"莲塘一中","provice":{"parent":"0","code":"510000","name":"四川省","id":"510000","type":1},"schLogo":"","schName":"江西南昌莲塘一中（高中） ","endGrade":"12","location":{"code":"111","name":"主城区","id":"111"},"id":"330201","startGrade":"10","status":"E"},{"schGategory":{"code":"21","name":"公办","id":"21"},"schIdentity":"112801","city":{"parent":"510000","code":"510100","name":"成都市","id":"510100","type":2},"county":{"parent":"510100","code":"510107","name":"武侯区","id":"510107","type":3},"schType":{"code":"2","name":"初中","id":"2"},"schCode":112801,"createTime":1527048000000,"schProperty":1,"schAlias":"演示初中修改一下","provice":{"parent":"0","code":"510000","name":"四川省","id":"510000","type":1},"schLogo":"","schName":"演示初中修改一下","endGrade":"9","location":{"code":"111","name":"主城区","id":"111"},"id":"112801","startGrade":"7","status":"E"}];
//school_xxgl 学校管理
var xxgl = {
    //生成datatables
    create_table: function () {
       table = $('#datatable_xxgl').DataTable({
    "data": data,
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
            data: null,
            "sWidth":"10%"
        },
        {
            data: "schType.name"
        },
        {
            data: null,
        },
        {
            data: "schCode"
        },
        {
            data: "provice.name"
        },
        {
            "data": null 
        },
        {
            "data": null, //此列不绑定数据源
            "sWidth":"400px",
            "orderable": false
        }
            ],
    "columnDefs": [
        {
			"targets" : 0,
			"data" : null,
			"render" : function(data, type, row, meta) {
                if(row.schProperty == 1){
                	return "正式";
                }else{
                	return "试用";
                } 
			}
		},{
            "targets":2,
            "data":null,
            "render": function (data, type, row,meta) {
                if(data.endGradeId > 6) 
                var html=`<a href="javascript:void(0)">${data.schName}</a> <span class="small_span">上级学校</span>`;
                else
                    var html=`${data.schName} <span class="small_span red_btn">升级正式版</span>`;
                return html;
        }
        },
        {
            "targets":5,
            "data":null,
            "render": function (data, type, row, meta) {
                var html=`无`;
                return html;
}
        },
        {
            "targets": 6,
            "data": null,
            "bSort": false,
            "render": function (data, type, row, meta) {
                var html = `<button class="default_btn_small" onclick="data_btn_details(${data._id},'school_basic','${row.schName}')"><i class="iconfont icon-guanli"></i>跳转</button><button class="default_btn_small purple_btn" onclick="data_btn_details(${data._id},'school_detail')"><i class="iconfont icon-guanli"></i>管理</button><button class="default_btn_small" onclick="xxgl.data_btn_details('${data.schCode}')"><i class="iconfont icon-guanli"></i>详情</button><button class="default_btn_small green_btn" onclick="xxgl.editor_open(${data.schCode})"><i class="iconfont icon-bianji"></i>修改</button><button class="default_btn_small yellow_btn stop_btn" onclick="xxgl.stop_btn(${data._id},${meta.row},event)"><i class="iconfont icon-tingyong"></i>停用</button><button class="default_btn_small white_btn hidden" onclick="data_btn_start(${data._id})"><i class="iconfont icon-tingyong"></i>启用</button><button class="default_btn_small red_btn hidden" onclick="Men.del_list({id:${data._id}},${meta.row},'../biz/sch/student/delStudent')"><i class="iconfont icon-shanchu"></i>删除</button><button class="default_btn_small white_btn" onclick="xxgl.authorize('${data.id}')"><i class="iconfont icon-jigouguanli"></i>授权</button>`;
                return html;
            }
            }],
    "language": {
        "url": "datatables_language.json"
    }
});
    },
    //点击新建窗口中的创建按钮 创建一条记录
    newly_btn: function (){
            //校验
            $("#xxgl1").formValidator();
        var r = $("#xxgl1").validate().form();
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
            xxgl.school_reset();
	    	        document.getElementById("xxgl_signupForm").reset();	
        }
    },
    //详情按钮 打开只读窗口  
	data_btn_details : function(code) {
		var html = $("#xxgl_templates").html();
		Men.new_window('学校基础信息详情', html, '关闭');
		clearSelect();
		//绑定表中数据到各select中
		xxgl.table_init();
		var data = {
			code : code
		};
		var datas = Men.get_data("../biz/sch/school/get", data);
		$("#inputtext_111").val(datas.schCode);
		$("#inputtext_01").val(datas.schName);
		$("#inputtext_02").val(datas.schAlias);
		$("#inputtext_03").val(datas.schType.code);
		$("#inputtext_04").val(datas.schCategory.code);
		$("#inputtext_05").val(datas.startGrade);
		$("#inputtext_06").val(datas.endGrade);
		$("#inputtext_07").val(datas.provice.code);
		//获取市
		getSchoolCity(datas.provice.code);
		getSchoolDistrict(datas.city.code);
		$("#inputtext_08").val(datas.city.code);
		$("#inputtext_09").val(datas.county.code);
		$("#inputtext_10").val(datas.location.code);
		$("#inputtext_11").val(datas.schIdentity);
		$("#inputtext_12").val(datas.schProperty);
		$("#inputtext_13").val(datas.contact);
		$("#inputtext_14").val(datas.telephone);
		$("#inputtext_15").val(datas.address);
		$("#xxgl input").prop("disabled", "disabled");
		$("#xxgl select").prop("disabled", "disabled");
	},
    //编辑学校管理窗口 打开
    editor_open: function (code){
        var html = $("#xxgl_template").html();
	        Men.new_window('修改学校基础信息', html, '取消', xxgl.editor_btn);
	        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">保存</button>');
	      //绑定表中数据到各select中
    		this.table_init();
	        var in_data={code: code};
	    	//var datas = Men.get_data("../biz/sch/school/getSchoolById",in_data);
            //要用ajax找后台数据. 下一条是本地数据,程序员删掉！
            var datas = Men.list_post(code, data, 'schCode');
	    	$("#inputtext_111").val(datas.schCode);
		      $("#inputtext_01").val(datas.schName);
		      $("#inputtext_02").val(datas.schAlias);
		      $("#inputtext_03").val(datas.schType.code);
		      $("#inputtext_04").val(datas.schGategory.code);
		      $("#inputtext_05").val(datas.startGrade);
		      $("#inputtext_06").val(datas.endGrade);
		      $("#inputtext_07").val(datas.provice.code);
		      //获取市
		     // getSchoolCity(datas.provice.code);
		     // getSchooldistrict(datas.city.code);
		      $("#inputtext_08").val(datas.city.code);
		      $("#inputtext_09").val(datas.county.code);
		      $("#inputtext_10").val(datas.location.code);
		      $("#inputtext_11").val(datas.schGategory.schIdentity);
		      $("#inputtext_12").val(datas.schProperty);
		      $("#inputtext_13").val(datas.linkman);
		      $("#inputtext_14").val(datas.linkmanphone);
		      $("#inputtext_15").val(datas.linkmanemail);
        //限定只能输入数字方法
        Men.only_number();
    },
    //点击修改学校管理窗口中的保存按钮 修改一条记录
    editor_btn: function (){
	         //校验
	        $("#xxgl").formValidator();
	        var r = $("#xxgl").validate().form();
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
    // 学校管理/学校创建第一项反白选中，内容显示第一项
    school_reset: function(){
        $("#xxgl_ul.label_top_menu_ul li").eq(0).addClass("selected").siblings().removeClass("selected");
        $("#xxgl_ul.label_top_menu_ul+div").children().eq(0).show().siblings().hide();
    },
    //从后台读取其他表数据，并保存到内存中
    table_init: function () {
            getSchoolType();//学校类型
	    	getSchoolGategory();//学校办别
	    	//getSchoolProvinces(null);//省市区
	    	getLocationType();//所在地城乡类型
    },
    //设定页面一加载就运行
    init: function () {
        xxgl.school_reset();
        xxgl.table_init();
        xxgl.create_table();
        //限定只能输入数字方法
        Men.only_number();
    },
    //授权窗口
    authorize: function(code){
        var html = $("#authorize_template").html();
        Men.new_window('角色功能授权', html, '取消', xxgl.authorize_btn);
	    $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">授权</button>');
        this.modelEditNode(); //假设数据库中保存着选中内容
        this.search_extend();
    },
    //确定授权
    authorize_btn: function(){
        xxgl.printSelectNode();
        Men.close_window();
    },
    //系统功能表数据
        tree_data: function() {
            var datas = [{
                    "Pid": null,
                    "id": "1",
                    "name": "应用中心"
                },
                {
                    "Pid": "1",
                    "id": "101",
                    "name": "教师管理"
                },
                {
                    "Pid": "1",
                    "id": "102",
                    "name": "学生管理"
                },
                {
                    "Pid": "1",
                    "id": "103",
                    "name": "家长管理"
                },
                       {
                    "Pid": null,
                    "id": "2",
                    "name": "报表中心"
                },{
                    "Pid": "2",
                    "id": "201",
                    "name": "全科报表"
                },
                         {
                    "Pid": "201",
                    "id": "20101",
                    "name": "学科均分比较"
                },{
                    "Pid": "201",
                    "id": "20102",
                    "name": "重点率报表"
                },{
                    "Pid": "201",
                    "id": "20103",
                    "name": "学生成绩"
                },{
                    "Pid": "201",
                    "id": "20104",
                    "name": "进线统计"
                },{
                    "Pid": "2",
                    "id": "202",
                    "name": "单科报表"
                },{
                    "Pid": "202",
                    "id": "20201",
                    "name": "学生成绩"
                },{
                    "Pid": "202",
                    "id": "20202",
                    "name": "进线统计"
                },{
                    "Pid": "2",
                    "id": "203",
                    "name": "新高考报表"
                },
            ];
            return datas;
        },
        //角色功能授权表数据
        selected_data: function() {
            var datas = ["102","20102","20103","20201"];
            return datas;
        },
        //zTree设置项
        setting: {
            check: {
                enable: true,
                autoCheckTrigger: true
            },
            data: {
                simpleData: {
                    enable: true,
                    idKey: "id", // id编号命名   
                    pIdKey: "Pid", // 父id编号命名
                    rootPId: null //根节点
                },
                key: {
                    name: "name" // 保存节点名称的属性名称
                }
            },
            edit: {
                enable: false, //单独设置为true时，可加载修改、删除图标  
                editNameSelectAll: true,
                showRemoveBtn: true,
                showRenameBtn: true,
                removeTitle: '删除',
                renameTitle: '重命名'
            },
            callback:{
                //点击复选框事件
                onCheck: function (event, treeId, treeNode){
                    xxgl.return_right();
                }
            }
        },
        //刷新左节点
        resetNode: function(datas) {
            if(!datas)
                datas = this.tree_data();
            $.fn.zTree.init($("#treeDemo"), this.setting, datas);
        },
        //刷新右节点
        resetRightNode: function(datas) {
            var html = template('treeAllright_template', {
                model: datas
            });
            $("#treeAllright").html(html);
        },
        //展开复选框选中的所有子节点
        expandSelectNode: function() {
            var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
            var nodes = treeObj.getCheckedNodes();
            if (nodes.length > 0) {
                for (i = 0; i < nodes.length; i++)
                    treeObj.expandNode(nodes[i], true, true, true);
            }
        },
        //打印选中的项目
        printSelectNode: function() {
            var content = $("#treeAllright li>div>span");
            $.each(content, function(index,value){
                console.info("name:"+ $(this).text() + "  id:" + $(this).data("id"));
            });
        },
    //摸拟修改数据时已选中项目
        modelEditNode: function() {
            var datas = [],
                self = this;
            $.each(self.tree_data(), function(index, value) {
                $.each(self.selected_data(), function(i, v) {
                    if (value.id == v) {
                        value.checked = true;
                        return false;
                    }
                });
                datas.push(value);
            });
            this.resetNode(datas);
            var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
            var nodes = treeObj.getCheckedNodes();
            for (var i = 0, l = nodes.length; i < l; i++) {
                treeObj.checkNode(nodes[i], true, true);
            }
            this.expandSelectNode();
        },
        //转化到右边
        return_right: function() {
            var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
            var nodes = treeObj.getCheckedNodes(true);
            this.resetRightNode(nodes);
        },
        //搜索并展开
        search_extend: function(){
            $("#scarch_input").on("keyup", function(){
                var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
                treeObj.expandAll(false); //折叠所有节点
                var keywords = $(this).val();
                if(keywords != null && keywords != undefined && keywords.trim() !=''){
                    var nodes = treeObj.getNodesByParamFuzzy("name", keywords, null);
　　                 for(var i = nodes.length-1; i >= 0; i--) {
                        treeObj.selectNode(nodes[i]); //会让节点自动滚到到可视区域内
                    }
                };                
            });
        },
        //删除此项内容
        delCode: function(e,id,tId){
            $(e).parent().parent().remove();
            var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
            var node = treeObj.getNodeByTId(tId);
            treeObj.checkNode(node,false,true);
        },
};

//加载即运行
xxgl.init();


//获取学校类型
function getSchoolType(){
	var data={};
	//var datas = Men.get_data("../biz/sch/school/getSchoolType",data);
    //本地假数据
    var datas=[{"code":"1","name":"小学"},{"code":"2","name":"初中"},{"code":"3","name":"高中"}];
	if(datas!=null || datas!=undefined){
        var html="";
		$.each(datas,function(i,e){
            html+="<option value=" + e.code + ">" + e.name + "</option>";
		});
        if($(".center_popup").length>0)
            $("inputtext_03").html(html);            
        else
            $("#schooltype").html(html);            
	}
}
//获取学校办别
function getSchoolGategory(){
	var data={};
	//var datas = Men.get_data("../biz/sch/school/getSchoolGategory",data);
    //本地假数据
    var datas=[{"code":"01","name":"民办"},{"code":"01","name":"公办"}];
	if(datas!=null || datas!=undefined){
        var html="";
		$.each(datas,function(i,e){
            html+="<option value=" + e.code + ">" + e.name + "</option>";
		});
        if($(".center_popup").length>0)
            $("inputtext_04").html(html);            
        else
            $("#schoolGategory").html(html);
            
	}
}
//获取省
function getSchoolProvinces(parentCode){
	var data={parentCode:parentCode};
	//var datas = Men.get_data("../biz/sch/school/getSchoolProvinces",data);
	if(datas!=null || datas!=undefined){
		$.each(datas,function(i,e){
  			$("#province").append("<option value=" + e.code + ">" + e.name + "</option>");
  			$("#inputtext_07").append("<option value=" + e.code + ">" + e.name + "</option>");
		});
	}
}
//获取市
function getSchoolCity(parentCode,str){
	if(str=="add"){
		var text1=$("#city option:first").text();  
		var text2=$("#district option:first").text();  
		$("#city").val("");
		$("#district").val("");
	    //$("#city").html('<option>'+text1+'</option>');  
	    //$("#district").html('<option>'+text2+'</option>');
	}else{
		var text1=$("#inputtext_08 option:first").text();  
		var text2=$("#inputtext_09 option:first").text();  
		$("#inputtext_08").val("");
		$("#inputtext_09").val("");
	    //$("#inputtext_08").html('<option>'+text1+'</option>');  
	    //$("#inputtext_09").html('<option>'+text2+'</option>');  
	}
    var data={parentCode:parentCode};
	//var datas = Men.get_data("../biz/sch/school/getSchoolProvinces",data);
	if(datas!=null || datas!=undefined){
		$.each(datas,function(i,e){
			if(str=="add"){
				$("#city").append("<option value=" + e.code + ">" + e.name + "</option>");
			}else{
				$("#inputtext_08").append("<option value=" + e.code + ">" + e.name + "</option>");
			}
  			
		});
	}    
}
//获取区县
function getSchooldistrict(parentCode,str){
	if(str=="add"){
		var text=$("#district option:first").text();  
		$("#district").empty();
	    $("#district").html('<option>'+text+'</option>');
	}else{
		var text=$("#inputtext_09 option:first").text();  
		$("#inputtext_09").empty();
	    $("#inputtext_09").html('<option>'+text+'</option>');  
	}
    var data={parentCode:parentCode};
	//var datas = Men.get_data("../biz/sch/school/getSchoolProvinces",data);
	if(datas!=null || datas!=undefined){
		$.each(datas,function(i,e){
			if(str=="add"){
				$("#district").append("<option value=" + e.code + ">" + e.name + "</option>");
			}else{
				$("#inputtext_09").append("<option value=" + e.code + ">" + e.name + "</option>");
			}
  			
		});
	}
}
//获取所在地城乡类型
function getLocationType(){
	var data={};
	//var datas = Men.get_data("../biz/sch/school/getLocationType",data);
    //本地假数据
    var datas=[{"code":"001","name":"主城区"},{"code":"002","name":"城乡结合部"},{"code":"003","name":"村庄"}];
	if(datas!=null || datas!=undefined){
        var html="";
		$.each(datas,function(i,e){
            html+="<option value=" + e.code + ">" + e.name + "</option>";
		});
        if($(".center_popup").length>0)
            $("#inputtext_10").html(html);
        else            
            $("#location").html(html);
	}
}
