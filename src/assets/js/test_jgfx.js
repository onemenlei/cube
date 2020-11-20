var ORGS = {
	_tempOrgsArr : [],
	_orgsId : null,
	init : function() {
		ORGS.firstRenderExam();
		ORGS.selectExamTypeAnalysis(0);
		ORGS.selectGradeTypeAnalysis(0);
	},

	firstRenderExam : function() {
		document.getElementById("orgsAlyExams").innerHTML = '<div style="  font-size:24px; color: red; text-align: center;">暂无数据，您需要首先在左侧选择一个机构！</div>';
	},

	// 选择机构进行页面刷新
	orgAnalysis : function(boeCode) {
		var examType = $("#examType").find(".active").attr("data-id");
		var grade = $("#gradeType").find(".active").attr("data-id");
        /*
		Tomd.wait('加载中...');
		$.ajax({
			url : '../dae/raw/org/list',
			type : 'GET',
			dataType : 'json',
			data : {
				boeCode : boeCode,
				examType : examType,
				grade : grade
			},
			success : function(data) {
				Tomd.waitok();
				// 重新加载
				ORGS.setOrgsArr(data);
				ORGS.renderExam(data);
			},
			error : function(data) {
				if (data) {
					Tomd.waitok();
					Men.new_confirm('提示', '数据加载失败，请稍候再试！', '确定');
				} else if (data) {
					Tomd.waitok();
					Men.new_confirm('提示', '网络不给力，请稍候再试！', '确定');
				}
			}
		});
        */
        var data = {"code":0,"data":[{"examination":{"examCategory":2,"examCode":2001596079292241,"examDate":1595952000000,"bureaus":[{"boeName":"测试初中教育局","boeCode":112899,"boeAlias":"测试初中教育局"}],"examName":"测试区统考_八年级_区统考_20200729","subjects":[{"code":"1","name":"语文"},{"code":"2","name":"数学"},{"code":"3","name":"英语"}],"examType":{"code":"7","name":"区统考"},"papers":[{"paperType":1,"paper":{"score":15000,"paperCode":1001596079292118,"paperName":"测试区统考_八年级_区统考_20200729_语文"},"subject":{"code":"1","name":"语文"}},{"paperType":1,"paper":{"score":15000,"paperCode":1001596079292177,"paperName":"测试区统考_八年级_区统考_20200729_数学"},"subject":{"code":"2","name":"数学"}},{"paperType":1,"paper":{"score":15000,"paperCode":1001596079292207,"paperName":"测试区统考_八年级_区统考_20200729_英语"},"subject":{"code":"3","name":"英语"}}],"schType":{"code":"2","name":"初中"},"createTime":1596079291581,"schools":[{"schCode":112008,"schAlias":"演示学校初中校区（初中部）","schName":"演示学校初中校区（初中部）"},{"schCode":112802,"schAlias":"演示学校初中部","schName":"演示学校初中部"}],"grade":{"code":"8","name":"八年级"},"term":{"code":"2","name":"下学期"},"id":"2001596079292241","netExamCompany":"0","netExamBySchool":0},"examinationStatus":[{"detailScoreStatus":0,"answerStatus":0,"analyzeStatus":0,"exceptionsStatus":0,"paper":{"paperType":1,"paperCode":1001596079292118,"year":2020,"subject":{"code":"1","name":"语文","id":"1"},"owners":[{"ownerType":1,"ownerName":"Moofen","ownerCode":"0"}],"publicStatus":false,"questionStatus":false,"schType":{"code":"2","name":"初中"},"difficulty":3,"score":15000,"createTime":1596079292118,"paperName":"测试区统考_八年级_区统考_20200729_语文","itemStatus":false,"scope":{"grade":{"code":"8","name":"八年级"},"term":{"code":"2","name":"下学期"}},"id":"1001596079292118","items":[]},"examination":{"examCode":2001596079292241},"boeCode":112899,"totalScoreStatus":0,"id":"1759224926720000","errataStatus":0},{"detailScoreStatus":0,"answerStatus":0,"analyzeStatus":0,"exceptionsStatus":0,"paper":{"paperType":1,"paperCode":1001596079292177,"year":2020,"subject":{"code":"2","name":"数学","id":"2"},"owners":[{"ownerType":1,"ownerName":"Moofen","ownerCode":"0"}],"publicStatus":false,"questionStatus":false,"schType":{"code":"2","name":"初中"},"difficulty":3,"score":15000,"createTime":1596079292177,"paperName":"测试区统考_八年级_区统考_20200729_数学","itemStatus":false,"scope":{"grade":{"code":"8","name":"八年级"},"term":{"code":"2","name":"下学期"}},"id":"1001596079292177","items":[]},"examination":{"examCode":2001596079292241},"boeCode":112899,"totalScoreStatus":0,"id":"1759224926710000","errataStatus":0},{"detailScoreStatus":0,"answerStatus":0,"analyzeStatus":0,"exceptionsStatus":0,"paper":{"paperType":1,"paperCode":1001596079292207,"year":2020,"subject":{"code":"3","name":"英语","id":"3"},"owners":[{"ownerType":1,"ownerName":"Moofen","ownerCode":"0"}],"publicStatus":false,"questionStatus":false,"schType":{"code":"2","name":"初中"},"difficulty":3,"score":15000,"createTime":1596079292207,"paperName":"测试区统考_八年级_区统考_20200729_英语","itemStatus":false,"scope":{"grade":{"code":"8","name":"八年级"},"term":{"code":"2","name":"下学期"}},"id":"1001596079292207","items":[]},"examination":{"examCode":2001596079292241},"boeCode":112899,"totalScoreStatus":0,"id":"1759224926740000","errataStatus":0}]}],"message":"请求成功"};
            // 重新加载
			ORGS.setOrgsArr(data);
			ORGS.renderExam(data);
	},
	// 选择考试类型
	requestExam : function(id) {
		var boeCode = ORGS.getOrgsId();
		var examType = $("#examType").find(".active").attr("data-id");
		var grade = $("#gradeType").find(".active").attr("data-id");
		if (boeCode == null) {
			Men.new_confirm("错误提示", "请在左侧选择一个机构！", "确定");
		} else {
			Tomd.wait('加载中...');            
			$.ajax({
				url : '../dae/raw/org/list',
				type : 'GET',
				dataType : 'json',
				data : {
					boeCode : boeCode,
					examType : examType,
					grade : grade
				},
				success : function(data) {
					Tomd.waitok();
					// 重新加载
					ORGS.setOrgsArr(data);
					ORGS.renderExam(data);
				},
				error : function(data) {
					if (data) {
						Tomd.waitok();
						Men.new_confirm('提示', '数据加载失败，请稍候再试！', '确定');
					} else if (data) {
						Tomd.waitok();
						Men.new_confirm('提示', '网络不给力，请稍候再试！', '确定');
					}
				}
			});
		}
	},
	// 选择年级
	requestGradeType : function(id) {
		var boeCode = ORGS.getOrgsId();
		var examType = $("#examType").find(".active").attr("data-id");
		var grade = $("#gradeType").find(".active").attr("data-id");
		if (boeCode == null) {
			Men.new_confirm("错误提示", "请在左侧选择一个机构！", "确定");
		} else {
			Tomd.wait('加载中...');
			$.ajax({
				url : '../dae/raw/org/list',
				type : 'GET',
				dataType : 'json',
				data : {
					boeCode : boeCode,
					examType : examType,
					grade : grade
				},
				success : function(data) {
					Tomd.waitok();
					// 重新加载
					ORGS.setOrgsArr(data);
					ORGS.renderExam(data);
				},
				error : function(data) {
					if (data) {
						Tomd.waitok();
						Men.new_confirm('提示', '数据加载失败，请稍候再试！', '确定');
					} else if (data) {
						Tomd.waitok();
						Men.new_confirm('提示', '网络不给力，请稍候再试！', '确定');
					}
				}
			});
		}
	},
	// 导入总分数据
	onClickOrgsScoreOk : function(id) {
		var formData = new FormData();
		var name = $("#import_excel").val();
		var examCode = id;
		var paperCode = $("#subject").val();
		var boeCode = ORGS.getOrgsId();
		formData.append("file", $("#import_excel")[0].files[0]);
		formData.append("name", name);
		formData.append("examCode", examCode);
		formData.append("paperCode", paperCode);
		if (name.substr(name.indexOf(".") + 1, name.length) != "xlsx" && name.substr(name.indexOf(".") + 1, name.length) != "xls") {
			Men.new_confirm("错误提示", "请选择excel", "");
			return;
		}
		Tomd.wait('导入中...');
		$.ajax({
			url : '../dae/raw/ts/create',
			type : 'POST',
			cache : false,
			data : formData,
			// 告诉jQuery不要去处理发送的数据  
			processData : false,
			// 告诉jQuery不要去设置Content-Type请求头  
			contentType : false,
			beforeSend : function() {},
			success : function(s) {
				Tomd.waitok();
				if (s.code == 0) {
					Tomd.delmodal();
					Tomd.toast('right', '', "导入成功");
					ORGS.orgAnalysis(boeCode);
				} else {
					$(".dropify-clear").trigger("click"); //上传区域清空
					var datas = s.data;
					$(".error").remove();
					$.each(datas, function(index, value) {
						var text = index + "、" + value;
						$("#error_info").append(`<label class="error col-4">${text}</label>`); //把错误信息显示在上传控件上方
					});
				}
			},
			error : function(e) {
				Tomd.waitok();
				Men.new_confirm("失败提示", "导入失败", "");
			}
		});
	},
	
	
	// 导入调分数据
		onClickOrgsAnswerOk : function(id) {
			var formData = new FormData();
			var name = $("#import_excel").val();
			var examCode = id;
			var paperCode = $("#subject").val();
			var boeCode = ORGS.getOrgsId();
			formData.append("file", $("#import_excel")[0].files[0]);
			formData.append("name", name);
			formData.append("examCode", examCode);
			formData.append("paperCode", paperCode);
			formData.append("sheetName", "调分");
			if (name.substr(name.indexOf(".") + 1, name.length) != "xlsx" && name.substr(name.indexOf(".") + 1, name.length) != "xls") {
				Men.new_confirm("错误提示", "请选择excel", "");
				return;
			}
			Tomd.wait('导入中...');
			$.ajax({
				url : '../dae/raw/errata/create',
				type : 'POST',
				cache : false,
				data : formData,
				// 告诉jQuery不要去处理发送的数据  
				processData : false,
				// 告诉jQuery不要去设置Content-Type请求头  
				contentType : false,
				beforeSend : function() {},
				success : function(s) {
					Tomd.waitok();
					if (s.code == 0) {
						Tomd.delmodal();
						Tomd.toast('right', '', "导入成功");
						ORGS.orgAnalysis(boeCode);
					} else {
						$(".dropify-clear").trigger("click"); //上传区域清空
						var datas = s.data;
						$(".error").remove();
						$.each(datas, function(index, value) {
							var text = index + "、" + value;
							$("#error_info").append(`<label class="error col-4">${text}</label>`); //把错误信息显示在上传控件上方
						});
					}
				},
				error : function(e) {
					Tomd.waitok();
					Men.new_confirm("失败提示", "导入失败", "");
				}
			});
		},
	
	
	
	// 导入分数数据
	onClickOrgsDetailsOk : function(id) {
		var formData = new FormData();
		var name = $("#import_excel").val();
		var examCode = id;
		var paperCode = $("#subject").val();
		var boeCode = ORGS.getOrgsId();
		formData.append("file", $("#import_excel")[0].files[0]);
		formData.append("name", name);
		formData.append("examCode", examCode);
		formData.append("paperCode", paperCode);
		formData.append("sheetName", "分数");
		if (name.substr(name.indexOf(".") + 1, name.length) != "xlsx" && name.substr(name.indexOf(".") + 1, name.length) != "xls") {
			Men.new_confirm("错误提示", "请选择excel", "");
			return;
		}
		Tomd.wait('导入中...');
		$.ajax({
			url : '../dae/raw/ds/create',
			type : 'POST',
			cache : false,
			data : formData,
			// 告诉jQuery不要去处理发送的数据  
			processData : false,
			// 告诉jQuery不要去设置Content-Type请求头  
			contentType : false,
			beforeSend : function() {},
			success : function(s) {
				Tomd.waitok();
				if (s.code == 0) {
					Tomd.delmodal();
					Tomd.toast('right', '', "导入成功");
					ORGS.orgAnalysis(boeCode);
				} else {
					$(".dropify-clear").trigger("click"); //上传区域清空
					var datas = s.data;
					$(".error").remove();
					$.each(datas, function(index, value) {
						var text = index + "、" + value;
						$("#error_info").append(`<label class="error col-4">${text}</label>`); //把错误信息显示在上传控件上方
					});
				}
			},
			error : function(e) {
				Tomd.waitok();
				Men.new_confirm("失败提示", "导入失败", "");
			}
		});
	},

	// 导入客观题数据
	onClickOrgsSelectOk : function(id) {
		var formData = new FormData();
		var name = $("#import_excel").val();
		var examCode = id;
		var paperCode = $("#subject").val();
		var boeCode = ORGS.getOrgsId();
		formData.append("file", $("#import_excel")[0].files[0]);
		formData.append("name", name);
		formData.append("examCode", examCode);
		formData.append("paperCode", paperCode);
		formData.append("sheetName", "客观题");
		if (name.substr(name.indexOf(".") + 1, name.length) != "xlsx" && name.substr(name.indexOf(".") + 1, name.length) != "xls") {
			Men.new_confirm("错误提示", "请选择excel", "");
			return;
		}
		Tomd.wait('导入中...');
		$.ajax({
			url : '../dae/raw/answer/create',
			type : 'POST',
			cache : false,
			data : formData,
			// 告诉jQuery不要去处理发送的数据  
			processData : false,
			// 告诉jQuery不要去设置Content-Type请求头  
			contentType : false,
			beforeSend : function() {},
			success : function(s) {
				Tomd.waitok();
				if (s.code == 0) {
					Tomd.delmodal();
					Tomd.toast('right', '', "导入成功");
					ORGS.orgAnalysis(boeCode);
				} else {
					$(".dropify-clear").trigger("click"); //上传区域清空
					var datas = s.data;
					$(".error").remove();
					$.each(datas, function(index, value) {
						var text = index + "、" + value;
						$("#error_info").append(`<label class="error col-4">${text}</label>`); //把错误信息显示在上传控件上方
					});
				}
			},
			error : function(e) {
				Tomd.waitok();
				Men.new_confirm("失败提示", "导入失败", "");
			}
		});
	},
	
	addCheckbox : function() { //jquery获取复选框值 
		var chk_value = "";
		$('#orgsAnySubject').find('input[name="subjects"]:checked').each(function() {
			chk_value += $(this).val() + ",";
		});
		return chk_value;
	},
	// 分析
	onClickOrgAnyOk : function(id) {
		var anytype = $("input[name='analy_type']:checked").val();
		var paperCodes = ORGS.addCheckbox();
		var boeCode = ORGS.getOrgsId();
		Tomd.wait('分析中...');
		if($('#orgsAnySubject').find('input[name="subjects"]:checked').length==0){
			Tomd.waitok();
			Men.new_confirm('提示', '你还未选择学科，请选择！', '确定');
				return;
			}
		$.ajax({
			url : '../dae/raw/org/Analysis',
			type : 'POST',
			dataType : 'json',
			data : {
				examCode : id,
				anytype : anytype,
				paperCodes :paperCodes
			},
			success : function(data) {
				if(data.code == '0'){
					Tomd.waitok();
					Men.new_confirm('提示', '分析成功！', '确定');
					ORGS.orgAnalysis(boeCode);
				}else{
					Tomd.waitok();
					Men.new_confirm('提示', '分析失败！', '确定');
					ORGS.orgAnalysis(boeCode);
				}
				
			},
			error : function(data) {
				if (data) {
					Tomd.waitok();
					Men.new_confirm('提示', '分析失败，请稍候再试！', '确定');
				} else if (data) {
					Tomd.waitok();
					Men.new_confirm('提示', '网络不给力，请稍候再试！', '确定');
				}
			}
		});
	},
	
	
	addCheckboxZT : function() { //jquery获取清除状态
		var chk_value = "";
		$('#clearZT').find('input[name="ZT"]:checked').each(function() {
			chk_value += $(this).val() + ",";
		});
		return chk_value;
	},
	
	addCheckboxXK : function() { //jquery获取清除学科
		var chk_value = "";
		$('#orgsClearSubject').find('input[name="subjects"]:checked').each(function() {
			chk_value += $(this).val() + ",";
		});
		return chk_value;
	},
	
	// 清理本校考试
	onClickOrgsClearOk : function(id) {
		var states = ORGS.addCheckboxZT();
		var paperCodes = ORGS.addCheckboxXK();
		
		
		if($('#clearZT').find('input[name="ZT"]:checked').length==0){
			Tomd.waitok();
			Men.new_confirm('提示', '您还未选择要清理的内容，请选择！', '确定');
				return;
			}
		
		if($('#orgsClearSubject').find('input[name="subjects"]:checked').length==0){
			Tomd.waitok();
			Men.new_confirm('提示', '您还未选择学科，请选择！', '确定');
				return;
			}
		
		var boeCode = ORGS.getOrgsId();
		Tomd.wait('清理中...');
		
		$.ajax({
			url : '../dae/raw/org/clear',
			type : 'POST',
			dataType : 'json',
			data : {
				examCode:id,
				states:states,
				paperCodes:paperCodes
			},
			success : function(datas) {
				if(datas.code == '0'){
					Tomd.waitok();
					Men.new_confirm('提示', datas.message, '确定');
					ORGS.orgAnalysis(boeCode);
				}else{
					Tomd.waitok();
					Men.new_confirm('提示', datas.message, '确定');
					ORGS.orgAnalysis(boeCode);
				}	
			},
			error : function(data) {
				if (data) {
					Tomd.waitok();
					Men.new_confirm('提示', '清理失败，请稍候再试！', '确定');
				} else if (data) {
					Tomd.waitok();
					Men.new_confirm('提示', '网络不给力，请稍候再试！', '确定');
				}
			}
		});
			
	},
	// 选择考试类型进行分析
	selectExamTypeAnalysis : function() {
		$('#examType li').click(function() {
			$(this).addClass('active').siblings().removeClass('active');
			var id = $(this).attr('data-id');
			ORGS.requestExam(id);
		});
	}, // 选择年级类型进行分析
	selectGradeTypeAnalysis : function() {
		$('#gradeType li').click(function() {
			$(this).addClass('active').siblings().removeClass('active');
			var id = $(this).attr('data-id');
			ORGS.requestGradeType(id);
		});
	},
	// 分析列表
	renderExam : function(res) {
		ORGS.setOrgsArr(res.data);
		template.defaults.imports.dateFormat = function(date, format) {
			if (typeof date === "string") {
				var mts = date.match(/(\/Date\((\d+)\)\/)/);
				if (mts && mts.length >= 3) {
					date = parseInt(mts[2]);
				}
			}
			date = new Date(date);
			if (!date || date.toUTCString() == "Invalid Date") {
				return "";
			}

			var map = {
				"M" : date.getMonth() + 1, //月份 
				"d" : date.getDate(), //日 
				"h" : date.getHours(), //小时 
				"m" : date.getMinutes(), //分 
				"s" : date.getSeconds(), //秒 
				"q" : Math.floor((date.getMonth() + 3) / 3), //季度 
				"S" : date.getMilliseconds() //毫秒 
			};


			format = format.replace(/([yMdhmsqS])+/g, function(all, t) {
				var v = map[t];
				if (v !== undefined) {
					if (all.length > 1) {
						v = '0' + v;
						v = v.substr(v.length - 2);
					}
					return v;
				} else if (t === 'y') {
					return (date.getFullYear() + '').substr(4 - all.length);
				}
				return all;
			});
			return format;
		};

		// 渲染模板
		if (res.data != "") {
			document.getElementById("orgsAlyExams").innerHTML = template('orgsAlyExamsListTemplate', res);
		} else {
			document.getElementById("orgsAlyExams").innerHTML = '<div style="  font-size:24px; color: red; text-align: center;">对不起，您此条件下查询的数据不存在！请您核对此条件下是否创建了考试。</div>';
		}


	},
	// 导入总分数据
	onClickOrgsScore : function(_this) {
		let id = _this.parentNode.getAttribute('data-id');
		let name = _this.parentNode.getAttribute('data-grade-nane');
		/*
		Tomd.alert('导入' + name + '-总分数据', '<div class="text-right" style="margin-bottom:.5rem"><button class="default_btn" onclick="ORGS.totalScoreTemplate()">下载模板</button></div><div id="orgsImportDataHtml"></div>', '取消');
		$('.T-modal').off('click');
		$('.T-dialog').addClass('T-dialog-lg');
		$('.T-foot').prepend(`<a onclick="ORGS.onClickOrgsScoreOk(${id})">确定</a>`);
		*/
		Men.new_confirm('导入' + name + '-总分数据', '<div class="text-right" style="margin-bottom:.5rem"><button class="default_btn" onclick="ORGS.totalScoreTemplate()">下载模板</button></div><div id="orgsImportDataHtml"></div>', '取消','确定',function(){ORGS.onClickOrgsScoreOk(id)})
		$("#newwind .center_popup").removeClass("wid20");
		// 渲染模板
		ORGS.initOrgsSelect(id);
	},
	// 总分下载模板
	totalScoreTemplate : function() {
		window.open('../template/总分导入模板.xlsx', '_blank');
	},
	
	
	
	// 导入调分数据
	onClickOrgsAnswer : function(_this) {
		let id = _this.parentNode.getAttribute('data-id');
		let name = _this.parentNode.getAttribute('data-grade-nane');
		num = 1;
		/*
		Tomd.alert('导入' + name + '-调分数据', '<div class="text-right" style="margin-bottom:.5rem"><button class="default_btn" onclick="ORGS.AnswerTemplate()">下载模板</button></div><div id="orgsImportDataHtml"></div>', '取消');
		$('.T-modal').off('click');
		$('.T-dialog').addClass('T-dialog-lg');
		$('.T-foot').prepend(`<a onclick="ORGS.onClickOrgsAnswerOk(${id})">确定</a>`);
		*/
		Men.new_confirm('导入' + name + '-调分数据', '<div class="text-right" style="margin-bottom:.5rem"><button class="default_btn" onclick="ORGS.AnswerTemplate()">下载模板</button></div><div id="orgsImportDataHtml"></div>', '取消','确定',function(){ORGS.onClickOrgsAnswerOk(id)})
		$("#newwind .center_popup").removeClass("wid20");
		// 渲染模板
		ORGS.initOrgsSelect(id);
	},

	// 调分下载模板
	AnswerTemplate : function() {
		window.open('../template/调分导入模板.xlsx', '_blank');
	},
	

	// 导入详分数据
	onClickOrgsDetails : function(_this) {
		let id = _this.parentNode.getAttribute('data-id');
		let name = _this.parentNode.getAttribute('data-grade-nane');
		/*
		Tomd.alert('导入' + name + '-分数数据', '<div class="text-right" style="margin-bottom:.5rem"><button class="default_btn" onclick="ORGS.detailScoreTemplate()">下载模板</button></div><div id="orgsImportDataHtml"></div>', '取消');
		$('.T-modal').off('click');
		$('.T-dialog').addClass('T-dialog-lg');
		$('.T-foot').prepend(`<a onclick="ORGS.onClickOrgsDetailsOk(${id})">确定</a>`);
		*/
		Men.new_confirm('导入' + name + '-分数数据', '<div class="text-right" style="margin-bottom:.5rem"><button class="default_btn" onclick="ORGS.detailScoreTemplate()">下载模板</button></div><div id="orgsImportDataHtml"></div>', '取消','导入',function(){ORGS.onClickOrgsDetailsOk(id)});
		$("#newwind .center_popup").removeClass("wid20");
		// 渲染模板
		ORGS.initOrgsSelect(id);
	},

	// 详分下载模板
	detailScoreTemplate : function() {
		window.open('../template/分数导入模板.xlsx', '_blank');
	},

	// 导入客观题数据
	onClickOrgsSelect : function(_this) {
		let id = _this.parentNode.getAttribute('data-id');
		let name = _this.parentNode.getAttribute('data-grade-nane');
		/*
		Tomd.alert('导入' + name + '-客观题数据', '<div class="text-right" style="margin-bottom:.5rem"><button class="default_btn" onclick="ORGS.choiceTemplate()">下载模板</button></div><div id="orgsImportDataHtml"></div>', '取消');
		$('.T-modal').off('click');
		$('.T-dialog').addClass('T-dialog-lg');
		$('.T-foot').prepend(`<a onclick="ORGS.onClickOrgsSelectOk(${id})">确定</a>`);
		*/
		Men.new_confirm('导入' + name + '-客观题数据', '<div class="text-right" style="margin-bottom:.5rem"><button class="default_btn" onclick="ORGS.choiceTemplate()">下载模板</button></div><div id="orgsImportDataHtml"></div>', '取消','导入',function(){ORGS.onClickOrgsSelectOk(id)});
		$("#newwind .center_popup").removeClass("wid20");
		// 渲染模板
		ORGS.initOrgsSelect(id);

	},

	// 客观题下载模板
	choiceTemplate : function() {
		window.open('../template/客观题导入模板.xlsx', '_blank');
	},

	// 考试分析
	onClickOrgsAnalysis : function(_this) {
		var isChecked = true;
		let id = _this.parentNode.getAttribute('data-id');
		/*
		Tomd.alert('考试分析', '<div id="orgsAnalysisHtml"></div>', '取消');
		$('.T-foot').prepend(`<a onclick="ORGS.onClickOrgAnyOk(${id})">确定</a>`);
		$('.T-dialog').addClass('T-dialog-lg');
		$('.T-modal').off('click');
		*/
		Men.new_confirm('考试分析', '<div id="orgsAnalysisHtml"></div>', '取消','确定',function(){ORGS.onClickOrgAnyOk(id)});
		$("#newwind .center_popup").removeClass("wid20");
		// 渲染模板
		ORGS.initOrgsSelect(id, isChecked);
		$('#orgsAllAny').on('click',function(){
            if(this.checked) {
                $("#orgsAnySubject input[name='subjects']").prop('checked',true);
            }else {
                $("#orgsAnySubject input[name='subjects']").prop('checked',false);
            }
        });
	},
	// 清理本校考试
	onClickOrgsClear : function(_this) {
		let id = _this.parentNode.getAttribute('data-id');
		let name = _this.parentNode.getAttribute('data-grade-nane');
		/*
		Tomd.alert('你确定要清理当前选择的考试数据吗？', '<div id="orgsClearHtml"></div>', '取消');
		$('.T-modal').off('click');
		$('.T-dialog').addClass('T-dialog-lg');
		$('.T-foot').prepend(`<a onclick="ORGS.onClickOrgsClearOk(${id})">确定</a>`);
		*/
		Men.new_confirm('你确定要清理当前选择的考试数据吗？', '<div id="orgsClearHtml"></div>', '取消','确定',function(){ORGS.onClickOrgsClearOk(id)});
		$("#newwind .center_popup").removeClass("wid20");
		ORGS.initOrgsClear(id);
		
	},
	// 内部接口
	setOrgsArr : function(res) {
		this._tempOrgsArr = res;
	},
	getOrgsArr : function() {
		return this._tempOrgsArr;
	},
	setOrgsId : function(id) {
		this._orgsId = id;
	},
	getOrgsId : function() {
		return this._orgsId;
	},
	
	// 清空
	initOrgsClear : function(srtId) {
		let id = parseInt(srtId);
		let OrgsArr = ORGS.getOrgsArr();
		let subjectObj = {},
			subjectArr = [];
		for (let i = 0; i < OrgsArr.length; i++) {
			if (id == OrgsArr[i].examination.examCode) {
				subjectArr = OrgsArr[i].examinationStatus;
			}
		};
		subjectObj.examinationStatus = subjectArr;
		document.getElementById('orgsClearHtml').innerHTML = template('orgsClearTemplaet', subjectObj);
		$('#orgAllClear').on('click',function(){
            if(this.checked) {
                $("#orgsClearSubject input[name='subjects']").prop('checked',true);
            }else {
                $("#orgsClearSubject input[name='subjects']").prop('checked',false);
            }
        });
	},
		
	// 导入
	initOrgsSelect : function(srtId, isChecked) {
		let id = parseInt(srtId);
		let OrgsArr = ORGS.getOrgsArr();
		let subjectObj = {},
			subjectArr = [];
		for (let i = 0; i < OrgsArr.length; i++) {
			if (id == OrgsArr[i].examination.examCode) {
				subjectArr = OrgsArr[i].examinationStatus;
			}
		};
		subjectObj.examinationStatus = subjectArr;
		if (isChecked) {
			document.getElementById('orgsAnalysisHtml').innerHTML = template('orgsAnalysisTemplate', subjectObj);
		} else {
			document.getElementById('orgsImportDataHtml').innerHTML = template('orgsImportDataTemplaet', subjectObj);
			Men.dropify();
		}
	}
}
ORGS.init();