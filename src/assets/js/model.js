///图片放大预览，PDF预览
//img <img src="img/girl-1.jpg" class="img_pdf_view" alt="">
//PDF <img src="img/css3.jpg" class="img_pdf_view" href="css3.pdf" alt="">
$("body").on("mouseover","img.img_pdf_view",function(){
    $('img.img_pdf_view').EZView();
});
//全局的ajax访问，处理ajax清求时sesion超时 
$.ajaxSetup({
	contentType : "application/x-www-form-urlencoded;charset=utf-8",
	complete : function(XMLHttpRequest, textStatus) {
		var sessionstatus = XMLHttpRequest.getResponseHeader("sessionstatus"); // 通过XMLHttpRequest取得响应头，sessionstatus，
		if (sessionstatus == "timeout") {
			// 如果超时就处理 ，指定要跳转的页面
			window.location.replace("../login.html");
		}
	}
});
//计算年月日
var ml_get_date=new Date();
var ml_get_year=ml_get_date.getFullYear();
var ml_get_month=ml_get_date.getMonth() + 1;
var ml_get_day=ml_get_date.getDate();
var ml_set_date=`${ml_get_year}年 ${ml_get_month}月 ${ml_get_day}日`;
var ml_get_week=['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
//左侧头像图
var ml_img_src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlGRTg1OUQ2NTFEQjExRThCNUUzRkM4MUU1QjMxNEQwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlGRTg1OUQ3NTFEQjExRThCNUUzRkM4MUU1QjMxNEQwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUZFODU5RDQ1MURCMTFFOEI1RTNGQzgxRTVCMzE0RDAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUZFODU5RDU1MURCMTFFOEI1RTNGQzgxRTVCMzE0RDAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAACAgICAgICAgICAwICAgMEAwIC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";
//左侧称号名
var ml_get_name="成都运维";
var ml_today_date=' ';
/*
var ml_today_date='<img src="${ml_img_src}">\
                <label>${ml_get_name}</label>\
                <span>${ml_set_date}</span>\
                <span>${ml_get_week[ml_get_date.getDay()]}</span>';
*/                
//顶菜单
var top_nav_menu='<li rel="${href}">${name}</li>';
//侧菜单
var lab_nav_menu='<li><i class="iconfont ${classa}"></i>${name}</li>';

///弹出窗口名变量
var popup_name;

//关闭弹出框
var close_window=function(){
    popup_name.children().slideUp();
    setTimeout(function () {
        popup_name.hide();
    }, 300);
    $(".dropify-clear").trigger("click");
};
//打开弹出框
var open_window=function(){
    //初始化上传窗口
$('.dropify-fr').dropify({
    messages: {
        'default': '点击或拖拽文件到这里',
        'replace': '点击或拖拽文件到这里来替换文件',
        'remove': '移除文件',
        'error': '对不起，你上传的文件太大了'
    }
});
    popup_name.show();
    setTimeout(function () {
        popup_name.children().slideDown()
    }, 300);
};
//新 打开弹出窗口
var open_new_popup=function(p_name){
     //初始化上传窗口
$('.dropify-fr').dropify({
    messages: {
        'default': '点击或拖拽文件到这里',
        'replace': '点击或拖拽文件到这里来替换文件',
        'remove': '移除文件',
        'error': '对不起，你上传的文件太大了'
    }
});
    $("#"+p_name).css("display","flex");
    setTimeout(function () {
    $("#"+p_name).children().slideDown()
    }, 300); 
};
//新 关闭弹出窗口
var close_new_popup=function(event){
    var window=$(event.currentTarget).parent().parent().parent();
    window.slideUp();
    setTimeout(function(){
        window.parent().hide();
    },800);    
};
//点击标题切换内容
$("body").on("click", ".label_top_menu_ul li", function () {
    $(this).addClass("selected").siblings().removeClass("selected");
    var n = $(this).index();
    $(this).parent().next().children().eq(n).show().siblings().hide();
});
//上传按钮
$("body").on("change", "input[type='file']", function () {
    $(this).prev().val($(this).val());
});
//刷新datatables这个控件 需要服务器后台
function reloadAjax(){
    table.ajax.reload();
};
//点击弹出短信窗口
var open_shortmessage=function(e){
    console.log("传递的ID号："+e);
    popup_name = $("#shortmessage_popup");
    open_window();
}
//短消息多选框 选中显示，不选中隐藏
$("body").on("change",".to_message", function(){
   if($(this).is(':checked')){
       $(this).parent().parent().parent().find("ul").show(800);
   } 
    else{$(this).parent().parent().parent().find("ul").hide(800);}
});
//点击按钮显示ID号隐藏的内容
var show_content = function(p_name){
    $("#"+p_name).show();
}
/*******datatables 表格里的按钮*******/
//配置按钮
var data_btn_config = function(id){  
    Tomd.alert("配置页面","跳到四个块的页面，已有","确定");
};
//导入按钮 弹出导入窗口
var data_btn_import=function(id){ 
    popup_name = $("#drzh_popup");
    open_window();
};
//详情按钮 跳转到school大项中某个页面 id传过来了
var data_btn_details=function(id,href,value){
    $("#schoolmanage_right").load(href + '.html',function(){
        vut_id=id;
        vut_value=value;
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = '../assets/js/' + href + '.js';
        document.body.appendChild(script);
    });
};
//详情按钮 跳转到channel大项中某个页面 id传过来了
var link_btn_details=function(id,href,content,value){ 
    $("#"+content).load(href + '.html',function(){
        vut_id=id;
        vut_value=value;
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = '../assets/js/' + href + '.js';
        document.body.appendChild(script);
    });
};
//修改按钮 打开弹出框 p_name是ID名
var data_btn_edit_open = function(id,p_name){
    //调用data_btn_edit方法，给input赋值
     data_btn_edit(id,p_name);    
    $("#"+p_name).show();
    setTimeout(function () {
    $("#"+p_name).children().slideDown()
    }, 300);     
};
//确定修改 关闭datatable弹出框
var data_edit_ok=function(p_name){
    //需要一个把input中数据存入json变量的方法
    var id='0001';
    //调用ajax 到后台修改
    $.ajax({
                type: "POST",
                url: "XXX.json?=" + id,
                data: {},
                dataType: "json",
                success: function() {
                    table.ajax.reload();  
                    console.log("成功" + data);  
                },
                fail: function(err, status) {
                    console.log(err)
                }
            });
    $("#"+p_name).children().slideUp();
    var that = $(this);
    setTimeout(function () {
    $("#"+p_name).hide();
        Tomd.toast('','',"修改成功");
    }, 300);
    $(".dropify-clear").trigger("click");    
};
//撤消 关闭datatable弹出框
var data_close_window=function(p_name){
    $("#"+p_name).children().slideUp();
    var that = $(this);
    setTimeout(function () {
    $("#"+p_name).hide();
    }, 300);
    $(".dropify-clear").trigger("click");
};
//停用按钮
var data_btn_stop = function(id,row){ 
    var i = confirm("要停用此条吗？ID号" +id+ "第" +row+ "行！");
                    if(i==true){
                        $.ajax({
                type: "POST",
                url: "XXX.json" + id,
                data: {},
                dataType: "json",
                success: function() {
                    table.ajax.reload();  
                    console.log("成功" + data);  
                },
                fail: function(err, status) {
                    console.log(err)
                }
            });
                        console.warn("table中一行的内容：");
                        console.table(table.row(row).data());
        Tomd.alert("停用","已停用此列！","确定");
                    }
};
//启用按钮
var data_btn_start = function(id){ 
    var i = confirm("要启用此条吗？ID号" +id);
                    if(i==true){
                        $.ajax({
                type: "POST",
                url: "XXX.json" + id,
                data: {},
                dataType: "json",
                success: function() {
                    table.ajax.reload();  
                    console.log("成功" + data);  
                },
                fail: function(err, status) {
                    console.log(err)
                }
            });
                        Tomd.alert("启用","已启用此列！","确定");
                    }
};
//删除按钮
var data_btn_del = function(id,row){  
    var i = confirm("要删除此条吗？ID号" +id);
    if(i==true){
       $.ajax({
                type: "POST",
                url: "XXX.json",
                data: {code:id},
                dataType: "json",
                success: function() {
                    table.ajax.reload();  
                    console.log("删除成功" + data);  
                },
                fail: function(err, status) {
                    console.log(err)
                }
            }); 
        table.row(row).remove().draw(false);
        Tomd.alert("删除","已删除此列！","确定");
    }
};
/*******datatables 表格里的按钮结束 *******/
/// 孟 
var Men={
    /* 程序版本号 */
    version:'1.0.0',
    //仅前端用： 传id给方法，返回表中一条json数据
    list_post:function(id,data,code){
        let tablelist = 0;
        $.each(data,function(index,value){
            var couom = eval(`value.${code}`);
            if(couom == id){
                tablelist = value;
                return false;
            }
        });
        return tablelist;
    },
    /**
     * Men.del_data(code,row,url,dt,table_name);
     * 功能：删除 前端 后台 一起
     * 参数：code唯一编号 row行号 url后台删除方法链接 dt表的.datatable() table_name表名
     * 实例：Men.del(${data._id},${meta.row},'../biz/sch/school/delete')
     */
    del_data:function(code,row,url,dt,table_name){
    var i = confirm("确认要删除吗？");
    if(i==true){
        //前端删除
        table_text=table_name || table;
        table_text.row(row).remove().draw(false);
        // 后端删除
        var code={code:code};
        Men.post_data(url,code);
        dt.ajax.reload();
    };    
    },
    /**
     * Men.del_list(data,row,url,td,con);
     * 功能：删除 多条件 前端 后台 一起
     * 参数：data是json数据集，如{id:id,name:name} row行号 url后台删除方法链接 table_name表名，默认table  con 传输到窗口中的值，如无默认为'确实要删除此条吗？'
     * 实例：Men.del_list('{id:${data._id},code:${data.code}}',${meta.row},'../biz/sch/school/delete',table,'删除${row._id}')
     ----例子：
删除方法是在datatables里的“删除”按钮绑定的方法  <button class="default_btn_small red_btn" onclick="Men.del_list('{id:${data._id},code:${data.code}}',${meta.row},'../biz/sch/school/delete')"><i class="iconfont icon-shanchu"></i>删除</button>
     */
     del_list:function(data,row,url,td,con){    	 
        var td = td || 'table';
        var content = con || '确实要删除此条吗？';
        var html=`<div class="center_text_div">${content}</div>`;
        Men.new_window('删除此条', html, '取消');
        $("#newwind .center_popup").addClass("wid20");
        $('#newwind .center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">删除</button>'); 
        $("#newwind .edit_row_btn").on("click",function(){
                Men.del_list_btn(data,row,url,td);            
        }); 
    },
     //删除按钮
    del_list_btn: function(data,row,url,td){
    	Tomd.wait('删除中...');
        if(url){
            //eval(td).row(row).remove().draw(false);            
            //后端删除
            var v = 1;
            $.ajax({
    			type : "post",
    			async:false,
    			url : url,
    			data : data,
    			success : function(s) {
    				v = s.code;
    				if(v >= 0)
						Tomd.toast('', '', '删除成功');
					else
						Tomd.toast('', 'error', s.message);
    			},
    			error : function(e) {
    				console.error(e.message);
    			}
    		});
            Men.close_window();
            		if(v == 0)
            		{eval(td).ajax.reload(null, false);  
            		Tomd.waitok();
            		return true;}
            		else{
            			Tomd.waitok();
            			return false;
            		} 
            }
    },
    /**
     * Men.judge_editor(url,datas,dt)
     * 功能：后台通用保存修改
     * 参数：url后台链接 datas要传输给后台的数据 dt表的.datatable(),如是table也可不填
     * 实例：Men.judge_editor('../biz/sch/school/create',datas, table)
     ----例子：
修改方法
	var code = $("#inputvalue_01").val();
	var grade = $("#inputvalue_02").val();
           	 var datas = {code:code,grade:grade};
            	// 保存修改到后台并判断正确与否        
           	 Men.judge_editor('../biz/sch/school/editSchool', datas);
     */
    judge_editor:function(url,datas,dt){
    	Men.close_window();
    	Tomd.wait('修改中...');
        var td = dt || 'table';
        var v = Men.post_data(url,datas);        
    		if(v.code==0){
    			Tomd.waitok();
        		eval(td).ajax.reload(null, false); 
        		return true;
    		}
    		else{
    			Tomd.waitok();
    			return false;
    		}    			   
    },
    /**
     * Men.judge_newly(url,datas,dt)
     * 功能：后台通用新增修改
     * 参数：url后台链接 datas要传输给后台的数据 dt表的.datatable(),如是table也可不填
     * 实例：Men.judge_newly('../biz/sch/school/create',datas, table)
     ----例子：
新增方法
	var code = $("#inputvalue_01").val();
	var grade = $("#inputvalue_02").val();
           	 var datas = {code:code,grade:grade};
            	// 保存修改到后台并判断正确与否        
           	 Men.judge_newly('../biz/sch/school/create', datas);
     */
    judge_newly:function(url,datas,dt){
    	$(".default_btn.edit_row_btn").attr("disabled","disabled");
    	Men.close_window();
    	Tomd.wait('保存中...');
        var td = dt || 'table';
        var v = Men.post_data(url,datas);        
        if(v.code==0){
			Tomd.waitok();
			eval(td).ajax.reload(null, false);   
			return true;
		}
		else{
			Tomd.waitok();
			return false;
		}       
    },
    /**
     * Men.post_data(url,data);
     * 功能：传值给后台，并返回数据 data是后台传给前台的数据。状态码stateText="success"判断正确与否
     * 参数：string;
     * 实例：Men.post_data('../biz/sch/school/create',data);
     ----例子：
	var datas={code:code,grade:grade};
	var table_data=Men.post_data('../biz/sch/school/create',datas);
	table_data就是从后台传回来的数据集
     */
    post_data : function(url, data) {
    	//Tomd.wait('加载中...');
		var datas;
		$.ajax({
			type : "post",
			async:false,
			url : url,
			data : data,
			success : function(s) {
				//Tomd.waitok();
				datas = s;
				Tomd.toast('right', 'success', s.message);
			},
			error : function(XMLHttpRequest, textStatus, errorThrown) {
				datas = XMLHttpRequest;
				console.error("XMLHttpRequest:",XMLHttpRequest);
				console.error("textStatus:",textStatus);
				console.error("errorThrown:",errorThrown);
                //Tomd.toast('right', 'error', e.data.message);
			}
		});
		return datas;
	},
    //用get传值给后台，并返回数据
	get_data : function(url, data) {
		//Tomd.wait('加载中...');
		var datas;
		$.ajax({
			type : "get",
			async:false,
			url : url,
			data : data,
			success : function(s) {
				//Tomd.waitok();
				datas = s.data;
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
				datas = XMLHttpRequest.data;
				console.error("XMLHttpRequest:",XMLHttpRequest);
				console.error("textStatus:",textStatus);
				console.error("errorThrown:",errorThrown);
			}
		});
		return datas;
	},       
    /* 传值给后台方法怎么用
    var datas=Men.post_data('../biz/sch/school/getSchoolProvinces','{{parentCode:parentCode}}');
    if(datas){
        for (var int = 0; int < datas.length; int++) {
  			$("#city").append("<option value=" + datas[int].code + ">" + datas[int].name + "</option>");
	  	}
    };*/    
    /**
     * Men.load_content(content,url);
     * 功能：用ajax加载html内容
     * 参数：content 是容器的class名(也可用ID)，url是html页面的url地址
     * 实例：Men.load_content('.cube_article','mufeng_management'); 指定类名
     * Men.load_content('schoolmanage_right','school_xxgl'); 不指定称号则自动识别为ID
     */
    load_content:function(content,url){
        let e;
        if(content.indexOf("#")<0 && content.indexOf(".")<0)
            e=`$("#${content}")`; 
        else
            e=`$("${content}")`;       
        eval(e).load(url + '.html',function(){
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = '../assets/js/' + url + '.js' + '?v=' + Men.version;
        document.body.appendChild(s);
        });
    },    
    /**
     * Men.new_window(title,content,btn,callback);
     * 功能：新建弹出窗口
     * 参数：string;
     * 实例：Men.new_window('新建学级/学届',html,'取消');
     */
    new_window:function(title,content,btn,func_ok){
    	//失去焦点
    	$(".default_btn,.default_btn_small").blur();
        Men.alert_ok = func_ok || Men.close_window;
        var s = '<div class="popup_background" id="newwind">'
            + '<div class="center_popup" >'
            + '<h3>{0}<a class="close_a iconfont icon-jiahao" onclick="Men.close_window()"></a></h3>'
            + '<div class="form_div">{1}</div>'
            + (!btn ? '' : '<div class="center_button_div"><button class="default_btn anti_btn clicked close_btn" onclick="Men.close_window()">{0}</button></div>'.format(btn))
            + '</div></div>';
        s = s.format(title, content);
        $(document.body).append(s);
        Men.open_window();
    },
    //打开
    open_window:function(){
        $('#newwind.popup_background').css("display","flex");
        setTimeout(function(){
            $('.popup_background .center_popup').slideDown();
        });
    },
    //关闭
    close_window: function () {
        $('.center_popup').slideUp();
        setTimeout(function () {
            $('#newwind.popup_background').remove();
        }, 500);
    },
    /*只有确定取消按钮，很小居中的弹出窗口
        Men.new_confirm('标题','内容','否','是',function(){Men.close_window()});
        Men.new_confirm('标题','内容','否');
        Men.new_confirm('标题','内容','否','关闭');
    */
    new_confirm: function(title,content,btn_cancel,btn_ok,callback){        
    	$(".default_btn,.default_btn_small").blur();//失去焦点
        var s = '<div class="popup_background" id="newwind">'
            + '<div class="center_popup" >'
            + '<h3>{0}<a class="close_a iconfont icon-jiahao" onclick="Men.close_window()"></a></h3>'
            + '<div class="form_div">{1}</div>'
            + '<div class="center_button_div">'
            + (!btn_ok ? '' : '<button class="default_btn alert_ok">{0}</button>'.format(btn_ok||'确定'))
            + '<button class="default_btn anti_btn clicked close_btn" onclick="Men.close_window()">{0}</button></div>'.format(btn_cancel||'取消')
            + '</div></div>';
        s = s.format(title, content);
        $(document.body).append(s);
        Men.open_window();
        $("#newwind .center_popup").addClass("wid20");
        if(callback){
            $("#newwind .alert_ok").on("click", function(){                
            var code=callback();
            if(code != false)
                Men.close_window();
        });
        }else{
            $("#newwind .alert_ok").on("click", function(){Men.close_window();});
        }
    },
    /*画中画的弹出窗口,可指定ID打开关闭
        Men.new_PIP('标题','内容','控件id名','否','是',function(){Men.close_window()});
    */
    new_PIP: function(title,content,id,btn_cancel,btn_ok,callback){        
    	$(".default_btn,.default_btn_small").blur();//失去焦点
        var s = '<div class="popup_background" id="{2}">'
            + '<div class="center_popup" >'
            + '<h3>{0}<a class="close_a iconfont icon-jiahao"></a></h3>'
            + '<div class="form_div">{1}</div>'
            + '<div class="center_button_div">'
            + (!btn_ok ? '' : '<button class="default_btn alert_ok">{0}</button>'.format(btn_ok||'确定'))
            + '<button class="default_btn anti_btn clicked close_btn">{0}</button></div>'.format(btn_cancel||'取消')
            + '</div></div>';
        s = s.format(title, content,id);
        $(document.body).append(s);
        open_PIPwindow();
        if(callback){
            $(".alert_ok").on("click", function(){               
            var code=callback();
            if(code != false)
                close_PIPwindow();
        });
        }else{
            $(".alert_ok").on("click", function(){close_PIPwindow();});
        }
        function open_PIPwindow(){ //打开窗口
            eval(`$("#${id}")`).css("display","flex");
            setTimeout(function(){
                eval(`$("#${id}")`).find('.center_popup').slideDown();
            });
        };
        function close_PIPwindow(){ //关闭窗口
            eval(`$("#${id}")`).find(".center_popup").slideUp();            
            setTimeout(function () {eval(`$("#${id}")`).remove();}, 500);
        };
        eval(`$("#${id}")`).on("click",".close_a,.close_btn", function(){
            close_PIPwindow();
        });
    },
    //初始化上传控件
    dropify: function(){
        $('.dropify-fr').dropify({
	messages : {
		'default' : '点击文件到这里',
		'replace' : '点击文件到这里来替换文件',
		'remove' : '移除文件',
		'error' : '对不起，你上传的文件太大了'
	   }
        });
    },
    /**
     * Men.clear_all_table(url,datas,td);
     * 功能：清空整个表的记录
     * 参数：url代表后端链接 datas代表传到后台的数据  td 代表datatables表名，不写则默认为table
     * 实例：
     var datas={code:code};
     Men.clear_all_table('http://',datas)
     ----例子:
清空表是外置按钮“清空”的onclick方法  <button class="default_btn red_btn" onclick="Men.clear_all_table('http://',datas)">清空(慎重)</button>
     */
    clear_all_table: function(url,datas,dt){
        var td = dt || 'table';
        var html='<div class="center_text_div">确实要清空整个表吗？</div>';
        Men.new_window('清空', html, '取消', Men.clear_table_btn);
        $(".center_popup").addClass("wid20");
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">清空</button>'); 
        $(".edit_row_btn").on("click",function(){
            Men.clear_table_btn(url,datas,td);
        });
    },   
    //清空方法 点击确定按钮
        clear_table_btn: function(url,datas,td){
            eval(td).clear().draw();            
            Men.close_window(); 
            //后台清空
            $.ajax({
                type:"post",
                async:false,
                url:url,
                data:datas,
                success: function(e){
                    if(e.code >= 0)
                        Tomd.toast('', '', '成功清空');
                    else
                        Tomd.toast('','error', e.message);
                },
                error: function(e){
                    console.error(e.message);
                }
            });
    },
    /**
     * Men.confirm(title,content,ok_name,callback);
     * 功能：confirm窗口功能
     * 参数：title代表标题，content代表内容,ok_name代表确定按钮名称,callback代表点击确定按钮后调用的方法
     * 实例：Men.confirm('标题','内容','对',function(){alert('OK')})
     */
    confirm: function(title,content,ok_name,callback){
        var conok_name = ok_name || '确定';
        var btn = '取消';
        //失去焦点
    	$(".default_btn,.default_btn_small").blur();
        var s = '<div class="popup_background" id="confirm">'
            + '<div class="center_popup" >'
            + '<h3>{0}<a class="close_a iconfont icon-jiahao" onclick="Men.close_window()"></a></h3>'.format(title)
            + '<div class="form_div"><div class="center_text_div">{0}</div></div>'.format(content)
            + (!btn ? '' : `<div class="center_button_div"><button class="default_btn bg_blue" id="btnOK">{0}</button>`.format(ok_name) + '<button class="default_btn anti_btn clicked close_btn" onclick="Men.confirm_close()">{0}</button></div>'.format(btn))
            + '</div></div>';
        s = s.format(title, content);
        $(document.body).append(s);
        $('#confirm.popup_background').css("display","flex");
        setTimeout(function(){
            $('#confirm.popup_background .center_popup').slideDown();
        });
        $("#confirm .center_popup").addClass("wid20");
        $("#btnOK").on("click", function(){
            callback();
            Men.confirm_close();
        });
    }, 
    //confirm关闭
    confirm_close: function(){
        $('#confirm .center_popup').slideUp();
        setTimeout(function () {
            $('#confirm.popup_background').remove();
        }, 500);
    },
    //在某某中屏蔽ENTER
    //例<input type="text" name="td00" id="td00" width="50px" onkeydown="Men.OnTextChanged()">
    OnTextChanged: function() {
      if ($(this).keyCode == 13) {//判断是否为回车键，Event是window对象的一个属性，是全局的。
    	  $(this).keyCode = 0;//屏蔽回车键
    	  $(this).returnValue = false;
      }
  },
    //限定只能输入数字方法 例numOnly="true"
    only_number: function(){
        $("input").each(function(){
			 if ($(this).attr("numOnly") == "true") { //只可以输入数字（整数）
				 //$(this).on('keypress',function(){this.value = this.value.replace(/\D/g,'');}); 
				 $(this).on('keyup',function(){this.value = this.value.replace(/\D/g,'');}); 
				 $(this).on("blur",function(){this.value=this.value.replace(/\D/g,'');});
			 }
			 
			 if ($(this).attr("decimalOnly") == "true") { //只可以输入数字（整数或小数）
				 $(this).on('keyup',function(){this.value = this.value.match(/^[+-]?\d*\.?\d*$/) ? this.value : checkDecimal(this.value);});  
				 $(this).on('blur',function(){this.value = this.value.match(/^[\-]?\d*?\.?\d*$/) ? this.value : checkDecimal(this.value);});  
			 }
            
            if ($(this).attr("decimalOnly2") == "true") { //只可以输入数字（整数或小数点两位）
                $(this).on('keyup',function(){this.value = this.value.match(/^[+-]?\d*\.?\d*$/) ? this.value : checkDecimal(this.value);}); 
				$(this).on('blur',function(){this.value = this.value.match(/^\\d+(\\.\\d{0,2})?$/) ? this.value : check_decimal2(this.value);});  
			 }
		 /*
		  * 把除了整数之外的去掉  
		  */
		 function checkDecimal(value){ 
			 var newValue = value[0]; 
			 var returnValue = "";
			 for (var i =1; i <= value.length; i++) {
				 if(!newValue.match(/^[\-]?\d*?\.?\d*$/)){  
					 break;
				 }
				 returnValue = newValue;
				 newValue += value[i];
			 } 
			 return returnValue;
		 }  
        /*只保留两位小数*/
         function check_decimal2(value){
             var num=Number(value).toFixed(2);
             return num;
         }
});
    },
    //html转js
        htojs: function(href){
            var js1 = href.replace('/pages/','/assets/js/');
            var js2 = js1.replace('.html','.js');
            if (js2 != "")
            return js2;
        },
};
///选择学校、搜索学校控件
var selectSchool_model = {
    init: function (res) {
        this.initAssociationSchool(res);
        this.initEditEvent();
        this.handler_schs();
        this.handClick();
    },
    isString: function (o) {
        return (o === "" || o) && (o.constructor === String);
    }, // 搜索事件
    initEditEvent : function() {
		$('#schoolSelectBox').unbind('bind', '.filter_region');
		$('#schoolSelectBox').on('keyup', 'input.filter_region', function() {
			// 获取input内容
			var content = $(this).val();
			// 判断是否是字符串
			if (selectSchool_model.isString(content)) {
				$('#schoolSelect ul li .prov-city-schs').hide();
				$('#schoolSelect').find('ul li .sch_item').each(function() {
					var name = $(this).text();
					if (name.indexOf(content) != -1) {
						$(this).parents().show();
					}
				});
			} else {
				$("#schoolSelect .prov-city-schs").hide().show();
			}
		});
	}, //添加点击事件 //收缩控制
    handler_schs: function () {
        //省
        $('#schoolSelect').on('click', '.prov-title', function () {
            if(!($(this).hasClass('active'))){
            $('#schoolSelect .prov-title').removeClass('active');
            $('#schoolSelect .prov-schs').show().hide();
            $(this).parent().find('.prov-schs').hide().show();
            $(this).addClass('active');
                }
            else{
                $('#schoolSelect .prov-title').removeClass('active');
                $('#schoolSelect .prov-schs').show().hide();
            }
        });
        //市
        $('#schoolSelect').on('click', '.prov-city h4', function () {
            $('#schoolSelect .prov-city-schs').show().hide().removeClass('expand');
            if ($(this).hasClass('expand')) {
                $(this).parent().find('.prov-city-schs').show().hide();
                $(this).removeClass('expand');
            } else {
                $(this).parent().find('.prov-city-schs[data-mark="0"]').hide().show();
                $(this).addClass('expand');
            }
        });
        //学校点击控制
        $('#schoolSelect').on('click', '.prov-city-schs', function () {
            var code = $(this).attr('data-id');
            var name = $($(this).find(".sch_item")).text();
            $(this).find('.sch_item').addClass('active').parent().siblings().find('.sch_item').removeClass('active');
            $(this).show().hide();
            $(this).attr("data-mark", "1");
            var arr = [];
            $('#schoolSelectResult li').each(function () {
                let code = $(this).attr('data-id');
                arr.push(code);
            });
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == code) return;
            }
            selectSchool_model.addSchool(name, code, $(this), $("#schoolSelectResult ul"));
        });
    },
    addSchool: function (schName, schCode, _this, node) {
        var sch_item = $("#schoolSelectResult .prov-city-schs[data-id='" + schCode + "']");
        if (sch_item.size() == 0) {
            var sch = `<li data-id="${schCode}"><i class="_close">&times;</i>${schName}<input type="hidden" class="schIds" name="schIds" value="${schCode}"></li>`;
            node.append(sch);

        }
    },
    handClick: function () {
        // $('#schoolSelectResult ._close').unbind('click');
        $(document).on('click', '#schoolSelectResult ._close', function () {
            var code = $(this).parent().attr("data-id");
            var sch_item = $(".sch_item[data-id='" + code + "']");
            sch_item.removeClass('active').parent().hide().show()
            sch_item.parent().attr("data-mark", "0");
            $(this).parent().remove();
        })
    },
    initAssociationSchool: function (res) {
        // let res = EXAM.glxx;
        var data = {};      

        function proviceArr(array) {
            let _array = [];
            array.forEach(_s => {
                if (!_array.includes(_s.provice.name)) {
                    _array.push(_s.provice.name)
                }
            });
            return _array.map(provice => {
                let obj = {
                    provice: provice,
                    data: array.filter(_s => _s.provice.name === provice)
                }
                return obj
            })
        }

        function cityArr(array) {
            let _array = [];
            array.forEach(_s => {
                if (!_array.includes(_s.city.name)) {
                    _array.push(_s.city.name)
                }
            });
            return _array.map(city => {
                let obj = {
                    city: city,
                    data: array.filter(_s => _s.city.name === city)
                }
                return obj
            })
        }
        var province = proviceArr(res);
        //console.log(province);
        var html = '';
        for (var i = 0; i < province.length; i++) {
            var dataCt = cityArr(province[i].data);
            //console.error(dataCt);
            var hcity = '';
            for (var j = 0; j < dataCt.length; j++) {
                var dataSchName = dataCt[j].data;
                //console.warn(dataSchName);
                var schName = '';
                for (var l = 0; l < dataSchName.length; l++) {
                    schName += `<div class="prov-city-schs" data-mark="0" data-id="${dataSchName[l].id}"><p class="sch_item" data-mark="0" data-id="${dataSchName[l].id}">(${dataSchName[l].id}) ${dataSchName[l].schName}</p></div>`;
                };
                hcity += `<div class="prov-city"><h4>${dataCt[j].city}</h4>${schName}</div>`;
            }
            html += `<li><h3 class="prov-title">${province[i].provice}</h3><div class="prov-schs">${hcity}</div></li>`;
        };
        $('#schoolSelect ul').html(html);
    },
    pop_initEditEvent: function () {
        $('#pop_schoolSelectBox').unbind('bind', '.filter_region');
        $('#pop_schoolSelectBox').bind('input propertychange', '.filter_region', function () {
            // 获取input内容
            var content = $(this).val();
            // 判断是否是字符串
            if (selectSchool_model.isString(content)) {
                $('#pop_schoolSelect ul li .prov-city-schs').hide();
                $('#pop_schoolSelect').find('ul li .sch_item').each(function () {
                    var name = $(this).text();
                    if (name.indexOf(content) != -1) {
                        $(this).parents().show();
                    }
                });
            } else {
                $("#pop_schoolSelect .prov-city-schs").hide().show();
            }
        });
    }, //添加点击事件 //收缩控制
    pop_handler_schs: function () {
        //省
        $('#pop_schoolSelect').on('click', '.prov-title', function () {
            if(!($(this).hasClass('active'))){
            $('#pop_schoolSelect .prov-title').removeClass('active');
            $('#pop_schoolSelect .prov-schs').show().hide();
            $(this).parent().find('.prov-schs').hide().show();
            $(this).addClass('active');}
            else{
                $('#pop_schoolSelect .prov-title').removeClass('active');
                $('#pop_schoolSelect .prov-schs').show().hide();
            }
        });
        //市
        $('#pop_schoolSelect').on('click', '.prov-city h4', function () {
            $('#pop_schoolSelect .prov-city-schs').show().hide().removeClass('expand');
            if ($(this).hasClass('expand')) {
                $(this).parent().find('.prov-city-schs').show().hide();
                $(this).removeClass('expand');
            } else {
                $(this).parent().find('.prov-city-schs[data-mark="0"]').hide().show();
                $(this).addClass('expand');
            }
        });
        //学校点击控制
        $('#pop_schoolSelect').on('click', '.prov-city-schs', function () {
            var code = $(this).attr('data-id');
            var name = $($(this).find(".sch_item")).text();
            $(this).find('.sch_item').addClass('active').parent().siblings().find('.sch_item').removeClass('active');
            $(this).show().hide();
            $(this).attr("data-mark", "1");
            var arr = [];
            $('#pop_schoolSelectResult li').each(function () {
                let code = $(this).attr('data-id');
                arr.push(code);
            });
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == code) return;
            }
            selectSchool_model.addSchool(name, code, $(this), $("#pop_schoolSelectResult ul"));
        });
    },
    pop_addSchool: function (schName, schCode, _this, node) {
        var sch_item = $("#pop_schoolSelectResult .prov-city-schs[data-id='" + schCode + "']");
        if (sch_item.size() == 0) {
            var sch = `<li data-id="${schCode}"><i class="_close">&times;</i>${schName}<input type="hidden" class="schIds" name="schIds" value="${schCode}"></li>`;
            node.append(sch);
        }
    },
    pop_handClick: function () {
        // $('#schoolSelectResult ._close').unbind('click');
        $(document).on('click', '#pop_schoolSelectResult ._close', function () {
            var code = $(this).parent().attr("data-id");
            var sch_item = $(".sch_item[data-id='" + code + "']");
            sch_item.removeClass('active').parent().hide().show()
            sch_item.parent().attr("data-mark", "0");
            $(this).parent().remove();
        })
    },
    pop_initAssociationSchool: function (res) {
        // let res = EXAM.glxx;
        var data = {};
        function proviceArr(array) {
            let _array = [];
            array.forEach(_s => {
                if (!_array.includes(_s.provice.name)) {
                    _array.push(_s.provice.name)
                }
            });
            return _array.map(provice => {
                let obj = {
                    provice: provice,
                    data: array.filter(_s => _s.provice.name === provice)
                }
                return obj
            })
        }

        function cityArr(array) {
            let _array = [];
            array.forEach(_s => {
                if (!_array.includes(_s.city.name)) {
                    _array.push(_s.city.name)
                }
            });
            return _array.map(city => {
                let obj = {
                    city: city,
                    data: array.filter(_s => _s.city.name === city)
                }
                return obj
            })
        }
        var province = proviceArr(res);
        var html = '';
        for (var i = 0; i < province.length; i++) {
            var dataCt = cityArr(province[i].data);
            var hcity = '';
            for (var j = 0; j < dataCt.length; j++) {
                var dataSchName = dataCt[j].data;
                var schName = '';
                for (var l = 0; l < dataSchName.length; l++) {
                    schName += `<div class="prov-city-schs" data-mark="0" data-id="${dataSchName[l].id}"><p class="sch_item" data-mark="0" data-id="${dataSchName[l].id}">(${dataSchName[l].id}) ${dataSchName[l].schName}</p></div>`;
                };
                hcity += `<div class="prov-city"><h4>${dataCt[j].city}</h4>${schName}</div>`;
            }
            html += `<li><h3 class="prov-title">${province[i].provice}</h3><div class="prov-schs">${hcity}</div></li>`;
        };
        $('#pop_schoolSelect ul').html(html);
    },
    //将保存的学校内容读取到弹出窗口内 code是编号数组，school_data是数据集，id是渲染容器ID号，默认不加为pop_schoolSelectResult
    pop_setdata: function (code,school_data,id) {
        var str = "";
        $.each(school_data, function (index, value) {
            $.each(code, function (i, v) {
                if (value.code == v) {
                    str += `<li data-id="${value.code}"><i class="_close">&times;</i>${value.name}<input type="hidden" class="schIds" name="schIds" value="${value.code}"></li>`;
                };
            });
        });
        var content="";
        if(!id)
            content = $("#pop_schoolSelectResult");
        else
            content = eval(`$("#${id}")`);
        content.find("ul").html(str);
    },
    pop_init: function (res) {
        this.pop_initAssociationSchool(res);
        this.pop_initEditEvent();
        this.pop_handler_schs();
        this.pop_handClick();
    }
};
//validator 校验规则
$.extend($.validator.messages, {
	required: "必填项目",
	remote: "发送ajax请求验证",
	email: "必须输入正确格式的电子邮件",
	url: "必须输入正确格式的网址",
	date: "必须输入正确格式的日期",
	dateISO: "必须输入正确格式的日期(YYYY-MM-DD)",
	number: "必须输入合法的数字",
	digits: "必须输入整数",
	creditcard: "必须输入合法的信用卡号",
	equalTo: "输入值必须和 #field 相同",
    accept: "输入拥有合法后缀名的字符串",
	extension: "延伸",
	maxlength: $.validator.format("输入长度最多是 5 {0} 的字符串"),
	minlength: $.validator.format("输入长度最小是 {0} 的字符串"),
	rangelength: $.validator.format("输入长度必须介于 {0} 和 {1} 之间的字符串"),
	range: $.validator.format("输入值介于 {0} 和 {1} 之间"),
	max: $.validator.format("输入值不能大于 {0}"),
	min: $.validator.format("输入值不能小于 {0}"),    
});
$.fn.extend({
                   formValidator:function(){
                       $(this).validate({
    errorPlacement: function(error, element) {
        $( element ).prev("label").append( error );
		}
});
                   },
    //datatables条数
                pagescount:function(){
                    $(this).html(table.rows().count());
                }
               });
//datatable中文化
$.extend(true, $.fn.dataTable.defaults, {
        'emptyTable': '没有数据',
        'loadingRecords': '加载中...',
        //过滤功能
        'bFilter': true,
        //不排序
        //'ordering': false,
        // 禁止分页
        "paging": false,
        //页脚信息
        "bInfo": false,
        //不显示分页下拉列表
        'lengthChange': false,
        //是否自适应宽度
        'bAutoWidth': false,
        'oLanguage': {
            'oAria': {
                'sSortAscending': ': 升序排列',
                'sSortDescending': ': 降序排列'
            },
            'oPaginate': {
                'sLast': '末页',
                'sFirst': '首页',
                'sNext': '下一页',
                'sPrevious': '上一页'
            },
            'sSearch': '搜索:',
            'sSearchPlaceholder': '',
            'sInfo': '第 _START_ 到 _END_ 条记录，共 _TOTAL_ 条',
            'sProcessing': '加载中...',
            'sLengthMenu': '显示 _MENU_ 项结果',
            'sInfoFiltered': '(从 _MAX_ 条记录中检索)',
            'sInfoEmpty': '第 0 到 0 条记录，共 0 条',
            'sLoadingRecords': '加载中...',
            'sZeroRecords': '没有匹配结果',
            'sEmptyTable': '没有相关记录'
        }
    });
/*********************************************************************************************************/
/// 丁 common.js
var Tomd = {
    config:{
        lazy_pic:'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MDE5MjA4NzREQUYxMUU4ODYzNUFBREE2RUI5NUUyNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4MDE5MjA4ODREQUYxMUU4ODYzNUFBREE2RUI5NUUyNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjgwMTkyMDg1NERBRjExRTg4NjM1QUFEQTZFQjk1RTI3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjgwMTkyMDg2NERBRjExRTg4NjM1QUFEQTZFQjk1RTI3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAcQCWAwERAAIRAQMRAf/EAGgAAQADAQEAAAAAAAAAAAAAAAACAwQBCAEBAQAAAAAAAAAAAAAAAAAAAAEQAAICAQIFAwEJAAAAAAAAAAABEQIDEgQhMUEiE1FxFGGRobEyUoKyUzQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APTZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMubLmW5xKtHHdw1JK3ADvysl/GsdUrXdk1Z8tHsBLDnva+WmRJPFEusuZUgZr7nN5scX4LVMY8iXLquoD5OTy5EsjVtNXXsvplTPbDakDWtxXwPK04qpsoa4pcY1QBRutzd7W7riyVmsq/ao+xgWX3eiuq+HJWqiX29XH6gNAAAAAAAAAAAAAZ792+xr+ulrP8Ac0gKNvOvbt9bZn97Auwf69170/iBltTPTMrXrkm1nWr1r8sTCc/iBK9slctVjnXmo6J2srNNWmW0/Rga8tNe2vjo9dtLpM9YjiBRuVuVs7qyppVYcNyBPc493lwukU4tcm54NPqBqAAAAAAAAAAAACj4z1XtXJat72l2UckoVeKA58LFpx1cuuOeD66vUCeHbY8VsjryyR2+kKAIW2O3dqWVKrS5someEQwI/Axw2rNZZ1VyJJRHRLlAF2DF4qaZ1Nt2tZ9W3LAZ8Xlw3xzp1KJ5gWARvjpd1dlLo5r9GAeOjurtd9U0n7gFjosjyR3tQ39AJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/2Q=='
    }
    //type类型判断
    ,isString: function(o) { //是否字符串
        return Object.prototype.toString.call(o).slice(8, -1) === 'String'
    }
    // 获取、设置滚动条位置-
    , top: function (o) {
        if (typeof o == 'undefined') return $(window).scrollTop();
        $(window).scrollTop(o);
    }
    // log打印
    ,log: function(s) {
        if (typeof s == 'object') {
            var s1 = '';
            for (var a in s) {
                s1 += '{0}:{1}, '.format(a, s[a]);
            }
            s = s1;
        }
        var d = $('#dlog');
        if (d.length == 0) {
            $('body').append('<div id="dlog" style="position:fixed;z-index:888;left:0;top:0;background:rgba(0,0,0,0.3);"></div>');
            d = $('#dlog');
        }
        d.append('<p>' + s + '</p>');
    }
    // 一些常用的正则验证-
    , check: {
        // 手机号码
        phone: function(s) {
            return /^1\d{10}$/.test(s);
        },
        // 座机
        tel: function(s) {
            return /(\d{3}[\s\-]?\d{8})|(\d{4}[\s\-]?\d{7})/.test(s);
        },
        // 邮箱
        email: function(s) {
            return /^([a-z0-9][a-z0-9_\-\.]*)@([a-z0-9][a-z0-9\.\-]{0,20})\.([a-z]{2,4})$/i.test(s);
        },
        // 中文
        namecn: function(s) {
            return /^[\u4e00-\u9fa5]{2,5}$/.test(s);
        },
        // 英文
        nameen: function(s) {
            return /^[a-z]{2,20}(\s[a-z]{1,20})*$/i.test(s);
        },
        // QQ号
        qq:function(s){
            return /^[1-9][0-9]{4,9}$/.test(s);
        },
        // 数字
        number: function(s){
            return /^[0-9]$/.test(s);
        },
        // 身份证简易校验
        card: function(s) {
            return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(s);
        },
        // 严格的身份证校验
        isCardID:function (sId) {
            if(!Tomd.isString(sId)){
                Tomd.alert('','我只接收字符串','好吧！');
                return false;
            };
            console.log(sId);
            if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
                Tomd.alert('','你输入的身份证长度或格式错误','好吧！');
                return false
            }
            //身份证城市
            var aCity = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" };
            if (!aCity[parseInt(sId.substr(0, 2))]) {
                Tomd.alert('','你的身份证地区非法','好吧！')
                return false
            }

            // 出生日期验证
            var sBirthday = (sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2))).replace(/-/g, "/"),
                d = new Date(sBirthday)
            if (sBirthday != (d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate())) {
                Tomd.alert('','身份证上的出生日期非法','好吧！')
                return false
            }

            // 身份证号码校验
            var sum = 0,
                weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
                codes = "10X98765432"
            for (var i = 0; i < sId.length - 1; i++) {
                sum += sId[i] * weights[i];
            }
            var last = codes[sum % 11]; //计算出来的最后一位身份证号码
            if (sId[sId.length - 1] != last) {
                Tomd.alert('','你输入的身份证号非法','好吧！')
                return false
            }

            return true
        }
    }
    
    // 动态加载js并支持回调-
    , loadJs: function (src, callback) {
        var sc = document.createElement('script');
        sc.type = 'text/javascript';
        sc.src = src;
        if (callback) {
            if (document.addEventListener) {
                sc.addEventListener("load", callback, false);
            } else {
                sc.onreadystatechange = function () {
                    if (/loaded|complete/.test(sc.readyState)) {
                        sc.onreadystatechange = null;
                        callback();
                    }
                };
            }
        }
        document.body.appendChild(sc);
    }
    // insertCSSCode
    , loadStyle: function(src, callback) {
        var t = document.createElement('link');
        if (src.indexOf('http') == 0 || src.indexOf('/') == 0) {
            t.rel = 'stylesheet';
            t.type = 'text/css';
            t.href = src;
            if (!!callback) {
                t.onload = callback;
                if (navigator.userAgent.indexOf('Safari') != -1) {
                    var inta = setInterval(function () {
                        if (!!t.sheet) {
                            callback();
                            clearInterval(inta);
                        }
                    }, 100);
                }
            }
        } else {
            t = document.createElement("style");
            t.type = "text/css";
            t.media = "screen";
            t.styleSheet ? t.styleSheet.cssText = src : t.appendChild(document.createTextNode(src));
        }
        document.getElementsByTagName("head")[0].appendChild(t);
    }
    /**
     * Tomd.alert(title, msg, btn, func_ok);
     * 功能：弹出框
     * 参数：string;
     * 实例：Tomd.alert('标题','content','取消', callback);
     */
    ,alert: function (title, msg, btn, func_ok) {
    	//失去焦点
    	$(".btn").blur();
        Tomd.alert_ok = func_ok || Tomd.delmodal;
        var doc = document;
        var s = '<div class="T-modal">'
            //+ '<div class="T-mask"></div>'
            + '<div class="T-dialog">'
            + '<div class="T-header"><a class="T-close" onclick="Tomd.alert_ok();">&times;</a><p class="T-title">{0}</p></div>'
            + '<div class="T-body"><div class="T-content">{1}</div></div>'
            + (!btn ? '' : '<div class="T-foot"><a class="T-btn" onclick="Tomd.alert_ok();">{0}</a></div>'.format(btn))
            + '</div></div>';
        s = s.format(title, msg);
        $('.T-dialog').show();
        setTimeout(function () {
            $('.T-dialog').slideDown()
        }, 200);
        $(doc.body).append(s);
        if ($('.T-modal .T-dialog input').length == 0) {
            $('.T-modal').on('click', function (event) {
                if ($(event.target || event.srcElement).hasClass('T-modal')) {
                    Tomd.delmodal();
                }
            });
        }
    }
    , delmodal: function () {
        $('.T-modal').hide();
        setTimeout(function () {
            $('.T-modal').remove();
        }, 100);
    }
    /**
     * Tomd.wait(msg);
     * 功能：加载效果Loading
     * 参数：string;
     * 实例：Tomd.wait('数据加载中...');
     */
    , wait:function (msg){
        var doc = document;
        var c = '<div class="T-wait"><div class="T-loading"><i class="T-loading-icon"></i><p class="T-loading-content">{0}</p></div></div>'.format(msg || '加载中...');
        $(doc.body).append(c);
    }
    //关闭加载效果
    , waitok:function (){
        $('.T-wait').hide();
        setTimeout(function () {
            $('.T-wait').remove();
        }, 100);
    }
    /* 
     * img/background懒加载-
     * 图片：<img data-original="img_url" />
     * 背景：<div class="lazy" data-original="img_url">
     * 新增元素：$('selector').lazy()
     * 强制加载：$('selector').load()
    */
    , lazyload: function () {
        var selector = 'img[data-original],.lazy';
        var imgs = $(selector).attr('src', Tomd.config.lazy_pic);

        $.fn.lazy = function () {
            this.each(function (i, e) {
                if (e.tagName == 'IMG') {
                    $(e).attr('data-original', e.src).attr('src', Tomd.config.lazy_pic);
                }
            });
            imgs = $(selector);
            return this;
        };
        $.fn.load = function () {
            if (this.length == 0) return this;
            this.each(function (i, e) {
                var $e = $(e);
                var osrc = $e.data('original');
                if (!osrc) return true;
                if (e.tagName == 'IMG') {
                    if (osrc != e.src) {
                        e.src = osrc;
                    }
                } else if ($e.hasClass('lazy')) {
                    $e.css('background-image', 'url({0})'.format(osrc)).removeClass('lazy');
                }
                $e.removeAttr('data-original');
            });
            imgs = $(selector);
            return this;
        };
        // 设置定时器，加载可见区域内图片-
        var int = setInterval(function () {
            var t = Tomd.top();
            var h = $(window).height() + t + 100;
            var arr = $('#_000');
            imgs.each(function (i, e) {
                var offset = $(e).offset(), ht = e.offsetHeight;
                if ((offset.top + ht > t) &&
                    (offset.top < h) &&
                    (ht > 0)) {
                    arr.push(e);
                }
            });
            arr.load();
        }, 100);
    }
    // 固定表格头部
    , fixedThead:function(str_id, thead){
        var doc = document;
        var tableCont = doc.getElementById(str_id);
        function scrollHead(e) {
            var scrollTop = this.scrollTop;
            this.getElementsByTagName(thead)[0].style.transform = 'translateY(' + scrollTop + 'px)';
        }
        tableCont.addEventListener('scroll', scrollHead);
    }
    /******十进制转码*****/
    // Tomd.decode(num, key)
    // 功能:将一个无符号整数进行10进制解码，解析成类似二进制的数组 [1, 1, 1, 1, 1, 0, 1, 0]
    // 参数:num,无符号整数;key,位数，js 最高支持64
    // 实例:Tomd.decode(250, 8) 输出[1, 1, 1, 1, 1, 0, 1, 0]
    , decode: function(num, key) {
        // 合规性检测 js 最高支持 64位数字
        if (key > 64) {
            console.log('JavaScript最大只支持64位，不能超过64位，无法往下进行，请修改参数key值');
            return;
        }
        var res = [];
        var i, latest;
        // 因为要返回根据 用户输入 key 参数的长度，所以，根据key做遍历
        // 根据 位运算符号 << & de 特性 检测 某一位是否为 1 ，
        // 如果为1  push 到空数组1 ，为0 也是如此
        for (i = key; i > 0; i--) {
            latest = (1 << (i - 1)) & num;
            res.push(latest > 0 ? 1 : 0);
        };
        return res;
    }
    // Tomd.encode(arr)
    // 功能:将一组类似二进制的数组[1, 1, 1, 1, 1, 0, 1, 0]进行10进制编码，编译成一个无符号整数
    // 参数:arr,数组
    // 实例:Tomd.encode([1, 1, 1, 1, 1, 0, 1, 0])   输出  250
    , encode: function(arr) {
        var res = 0;
        var i, len = arr.length;
        // 注意 for 循环从数组左侧开始循环，
        // 而位运算是右边是 高位，所以 对其 arr[i] != 0 的 index i 进行倒叙处理，
        // 当然 reveser() 可能更加方便
        for (i = 0; i < len; i++) {
            if (arr[i] != 0) {
                res |= (1 << (len - i - 1));
            }
        };
        return res;
    }
    // 是否为手机
    ,isIos: function() {
        var u = navigator.userAgent;
        if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) { //安卓手机
            // return "Android";
            return false
        } else if (u.indexOf('iPhone') > -1) { //苹果手机
            // return "iPhone";
            return true
        } else if (u.indexOf('iPad') > -1) { //iPad
            // return "iPad";
            return false
        } else if (u.indexOf('Windows Phone') > -1) { //winphone手机
            // return "Windows Phone";
            return false
        } else {
            return false
        }
    }
    //是否为PC端
    , isPC: function() { 
        var u = navigator.userAgent;
        var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (u.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }
    // 截取字符串长度
    , cutstr: function (str, len) {
        var temp,
            icount = 0,
            patrn = /[^\x00-\xff]/,
            strre = "";
        for (var i = 0; i < str.length; i++) {
            if (icount < len - 1) {
                temp = str.substr(i, 1);
                if (patrn.exec(temp) == null) {
                    icount = icount + 1
                } else {
                    icount = icount + 2
                }
                strre += temp
            } else {
                break;
            }
        }
        return strre;
    }

    /**
     * 返回顶部
     * @method goTop
     * @param 如果在执行该方法的时候，回调函数将立刻执行
     * @example
     * ```javascript
     * Tomd.goTop();
     * ```
     **/
    , goTop: function() {
        var e = $("body"),
        t = $(document),
        n = $(window);
        e.append('<a href="javascript:;" id="T-gotop"><i class="icon-top"></i><span class="hide-text">返回<br>顶部</span></a>');
        n.scroll(function() {
                $("#T-gotop").toggle(n.scrollTop() > 200)
            }),
            e.on("click", "#T-gotop", function(event) {
                $("html,body").animate({ scrollTop: 0 }, 1);
                event.preventDefault();
                return false;
            })
    }
    /**
     * 删除字符串str的首尾空格
     * @method trim
     * @param { String } str 需要删除首尾空格的字符串
     * @return { String } 删除了首尾的空格后的字符串
     * @example
     * ```javascript
     *
     * var str = " UEdtior ";
     *
     * //output: 9
     * console.log( str.length );
     *
     * //output: 7
     * console.log( UE.utils.trim( " UEdtior " ).length );
     *
     * //output: 9
     * console.log( str.length );
     *
     *  ```
     */
    ,trim: function(str) {
        return str.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g, '');
    }
}
/**
 * [信息提示]
 * @param  {位置} position 有二个参数可选 right:右,left:左
 * @param  {状态} status   有三个参数可选 success:成功, error:错误, warning:警告
 * @param  {内容} msg      需要提示的内容
 * @return {无}            false
 */
Tomd.toast= function(position, status, msg) {
    var doc = document;
    var c = '<div class="T-toast T-toast-{0} T-toast-{1}"><a class="T-close">&times;</a><p>{2}</p></div>'.format(position || 'middle', status || 'success', msg || '操作信息提示');
    $(doc.body).append(c);
    $(".T-toast").fadeToggle(500);
    setTimeout(function () {
        $(".T-toast").fadeToggle(500);
        setTimeout(function () {
            $('.T-toast').remove();
        }, 600);
    },6000);
    $('.T-toast .T-close').on('click', function(){
        $(".T-toast").fadeToggle(500);
        setTimeout(function () {
            $('.T-toast').remove();
        }, 600);
        return false;
    })
}
/*
 * 格式化字符串
 * 用法：'my name is {0}, age {1}'.format('xianzhi', 30)
 */
String.prototype.format = function() {
    var _this = this;
    for (var i = 0; i < arguments.length; i++) {
        _this = _this.replace(new RegExp('\\{' + i + '\\}', 'g'), arguments[i]);
    }
    return _this;
};

/*
 * 日期格式化函数
 * usage: 
 *  var _date = new Date( param).Format("yyyy-MM-dd");
 *
 */
/**
 * [Format description]
 * @param {[type]} num [description]
 */
Date.prototype.Format = function(num) {
    var o = {
        "M+": this.getMonth() + 1, //月份   
        "d+": this.getDate(), //日   
        "h+": this.getHours(), //小时   
        "m+": this.getMinutes(), //分   
        "s+": this.getSeconds(), //秒   
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
        "S": this.getMilliseconds() //毫秒   
    };
    if (num == null || num.length == 0 || num == 'undefined') {
        num = 'yyyy-MM-dd';
    }
    if (/(y+)/.test(num)) {
        num = num.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(num)) {
            num = num.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return num;
};

/**
 * 用法：{{1533571200000 | dateFormat 'yyyy-MM-dd'}}
 * [dateFormat 时间格式化]
 * @param  {[type]} date   [时间戳]
 * @param  {[type]} format [格式化 'yyyy-MM-dd' or 'yyyy/MM/dd']
 * @return {[type]}        [0000-00-00]
 */
template.defaults.imports.dateFormat = function (date, format) {
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
        "M": date.getMonth() + 1, //月份 
        "d": date.getDate(), //日 
        "h": date.getHours(), //小时 
        "m": date.getMinutes(), //分 
        "s": date.getSeconds(), //秒 
        "q": Math.floor((date.getMonth() + 3) / 3), //季度 
        "S": date.getMilliseconds() //毫秒 
    };


    format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
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