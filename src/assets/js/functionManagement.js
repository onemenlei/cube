var functionManagement = {
		//模拟表格数据
		modeltable_data: function(){
			var datas = [{"_id":"0101","sysCode":"9010","menuCode":"792","funcCode":"9827001","funcName":"功能名称","funcUrl":"sync/paper_sync","funcType":"0","funcTypeItem":"00"},{"_id":"0102","sysCode":"7810","menuCode":"153","funcCode":"6322001","funcName":"3功能名称","funcUrl":"sync/gtr442_sync","funcType":"0","funcTypeItem":"01"}];
			return datas;
		},
		//拿取数据
		for_function: function(code){
			var data={};
			$.each(this.modeltable_data(), function(index,value){
				if(code == value._id){
					data = value;
					return false;
				}
			});
	      //限定只能输入数字方法
	      	 Men.only_number();
	        $("#_id").val(data._id);
	        $("#sysCode").val(data.sysCode); 
	        $("#menuCode").val(data.menuCode); 
	        $("#funcCode").val(data.funcCode); 
	        $("#funcName").val(data.funcName);
	        $("#funcUrl").val(data.funcUrl);
	        $("#funcType").val(data.funcType);
	        $("#funcTypeItem").val(data.funcTypeItem);
	        
	        $(".saveschool").attr("disabled",false);
		},
		//保存按钮
		save_btn: function(){
			var data = {};
			//校验
	        $("#add_form").formValidator();
	        var r = $("#add_form").validate().form();
	             if(r){
			data._id = $("#_id").val();
			data.sysCode = $("#sysCode").val();
			data.menuCode = $("#menuCode").val();
			data.funcCode = $("#funcCode").val();
			data.funcName = $("#funcName").val();
			data.funcUrl = $("#funcUrl").val();
			data.funcType = $("#funcType").val();
			data.funcTypeItem = $("#funcTypeItem").val();
			console.log(data);
			alert("修改后内容放入数据库");
	             }
		},
		//点击返回 返回上一页
		return_href: function(){
			$("#return_btn").on("click",function(){
			    //加载页面内容方法
			    Men.load_content('schoolmanage_right','menu_new');
			});
		},				
		//生成表格
		create_modeltable: function(){
			var datas = this.modeltable_data();
			var html = template('modeltable_template',{model:datas});
			$("#modeltable").html(html);
		},		
		//弹出窗口
		//自动运行
		init: function(){
			this.return_href();
			this.create_modeltable();
		},
};
functionManagement.init();