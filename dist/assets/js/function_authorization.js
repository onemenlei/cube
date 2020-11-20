var function_authorization = {
		//功能授权表数据
		function_authorization_data: function(){
			var datas = [{"_id":"102981","templateCode":"100","template":"用户功能表","schoolCode":"1001","funcCodes":[7901,7902,7904]},{"_id":"102982","templateCode":"200","template":"教师权益表","schoolCode":"1002","funcCodes":[8001,8003]}];
			return datas;
		},
		//菜单名称数据
		funcMenu_data: function(){
			var datas = [{"funcCode":"7901","funcName":"增加内容"},{"funcCode":"7902","funcName":"修改内容"},{"funcCode":"7903","funcName":"删除内容"},{"funcCode":"7904","funcName":"定义内容"},{"funcCode":"8001","funcName":"完型填空"},{"funcCode":"8002","funcName":"选择筛选"},{"funcCode":"8003","funcName":"问答类型"}];
			return datas;
		},
		//学校表数据
		school_data: function(){
			var datas = [{"schoolCode":"1001","schoolName":"成都七中育才学校汇源校区"},{"schoolCode":"1002","schoolName":"成都天府七中"},{"schoolCode":"1003","schoolName":"测试学校上海"}];
			return datas;
		},
		//创建表
		create_table: function(){
			//表格生成
			table = $('#datatable_function').DataTable({
				"searching" : true, //启用搜索功能
				"serverSize" : true, //启用服务端分页
				"bAutoWidth" : false, //是否自适应宽度
				"bProcessing" : true, //加载时
				"bLengthChange" : false, //去掉每页显示多少条数据方法
				"paging" : false, //禁止分页
				"info" : false, //去掉底部文字
				data: this.function_authorization_data(),
				/*
				"ajax" : {
					"dataType" : 'json',
					"type" : "get",
					"data" : {},
					"url" : "../list",
					"dataSrc" : "data",
				},
				*/
				"columns" : [
					{
						data : "_id"
					},
					{
						data : "templateCode"
					},
					{
						data : "template"
					},
					{
						data : "funcCodes"
					},
					{
						data : "schoolCode"
					},
					{
						"data" : null, //此列不绑定数据源
						"sWidth" : "180px",
						"orderable" : false
					}
				],
				"columnDefs" : [
					{
						"targets" : 5,
						"data" : null,
						"searchable" : false,
						"render" : function(data, type, row, meta) {
							var html = `<button class="default_btn_small green_btn" onclick="function_authorization.editor_open('${data._id}')"><i class="iconfont icon-bianji"></i>修改</button><button class="default_btn_small red_btn" onclick="Men.del_list({schCode:'${data._id}',schTchCode:'${data.templateCode}'},${meta.row},'../sch/master/function/delete')"><i class="iconfont icon-shanchu"></i>删除</button>`;
							return html;
						}
					} ],
				"language" : {
					"url" : "datatables_language.json"
				}
			});
		},
		//新建窗口
		newly_open: function(){			
			var html = template('function_template',{function_data:'',model:this.funcMenu_data()});
			Men.new_window('新增功能授权', html, '取消', function_authorization.newly_btn);
			$('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">新增</button>');
			//ul 左移右 右移左
			this.move_right();
			this.move_left();
			this.show_schoolName();
		},
		//新增按钮
		newly_btn: function(){
			var self = function_authorization;
			//校验
			$("#function_form").formValidator();
			var r = $("#function_form").validate().form();
			if (r) {
				//取值传到data
				var data = {};
				data._id = $("#function_id").val();
				data.templateCode = $("#function_templateCode").val();
				data.schoolCode = $("#function_schoolCode").val();
				data.funcCodes = self.save_funcCodes();
				// 保存新增到后台    
				//Men.judge_newly('../biz/sch/school/update', datas);
				}
		},
		//修改窗口
		editor_open: function(code){
			var data = {};
			$.each(this.function_authorization_data(), function(index,value){
				if(code == value._id){
					data = value;
					return false;
				};
			});
			var html = template('function_template',{function_data:data,model:this.funcMenu_data()});
			Men.new_window('修改功能授权', html, '取消', function_authorization.editor_btn);
			$('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">保存</button>');
			//ul 左移右 右移左
			this.move_right();
			this.move_left();
			this.show_schoolName();
			this.left_hidden(data);
		},
		//修改按钮
		editor_btn: function(){
			var self = function_authorization;
			//校验
			$("#function_form").formValidator();
			var r = $("#function_form").validate().form();
			if (r) {
				//取值传到data
				var data = {};
				data._id = $("#function_id").val();
				data.templateCode = $("#function_templateCode").val();
				data.schoolCode = $("#function_schoolCode").val();
				data.funcCodes = self.save_funcCodes();
				// 保存修改到后台    
				//Men.judge_editor('../biz/sch/school/update', datas);
			}
		},
		//存储funcCodes
		save_funcCodes: function(){
			var content = $("#ul_right li"),funcCodes=[];
			$.each(content, function(index,value){
				funcCodes.push($(this).data("id"));
			});
			return funcCodes;
		},
		//假如有学校编号，则查询出学校名
		show_schoolName: function(){
			var self = this,schoolName="";
			var schoolCode = $("#function_schoolCode").val();
			if(schoolCode == 0 && schoolCode != '' && schoolCode != undefined && schoolCode != null)
				schoolName = "不分学校";
			else if(schoolCode == 1)
				schoolName = "所有学校";
			else if(schoolCode != '' && schoolCode != undefined && schoolCode != null)
				$.each(self.school_data(), function(index,value){
					if(schoolCode == value.schoolCode){
						schoolName = value.schoolName;
						return false;
					}
					schoolName = "";
				});
			$("#function_schoolName").val(schoolName);
			$("#function_schoolCode").on("blur", function(){
				schoolCode = $(this).val();
				if(schoolCode == 0 && schoolCode != '' && schoolCode != undefined && schoolCode != null)
					schoolName = "不分学校";
				else if(schoolCode == 1)
					schoolName = "所有学校";
				else if(schoolCode != '' && schoolCode != undefined && schoolCode != null)
					$.each(self.school_data(), function(index,value){
						if(schoolCode == value.schoolCode){
							schoolName = value.schoolName;
							return false;
						}
						schoolName = "";
					});
				$("#function_schoolName").val(schoolName);
			})
		},
		//点击左ul中的内容则转移到右边去 
		move_right : function() {
			var self = this;
			$("#ul_left li").on("click", function() {
				var val = this.dataset.id;
				var check = self.compare(val);
				if (check) {
					$(this).hide().children().hide();
					var getId = $(this).attr("data-id");
					var html = `<li data-id="${getId}">${$(this).html()} <i class="iconfont float-right icon-shanchu1 icon_del_color"></i></li>`;
					$("#ul_right").append(html);
				}
			});
		},
		//比较，如果右ul中有左li的内容，则回复已有
		compare : function(val) {
			var sek = true;
			$("#ul_right li").each(function(index, value) {
				var name = value.dataset.id;
				if (val == name) {
					Tomd.alert("错误提示", "对不起，已有此项", "");
					sek = false;return false;
				}
			});
			return sek;
		},
		//点击右ul中的内容，删除右li内容，左ul中如隐藏则显示
		move_left : function() {
			$("#ul_right").on("click", "li", function() {
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
		//如果菜单项已有，左边li隐藏
		left_hidden: function(data){
			var content = $("#ul_left li");
			$.each(data.funcCodes, function(index,value){
				$.each(content, function(i,v){
					if($(this).data("id") == value)
						$(this).css("display","none");
				});
			});
		},
		//自动运行
		init: function(){
			this.create_table();
		},
};
function_authorization.init();