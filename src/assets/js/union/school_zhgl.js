//帐号管理
var zhgl={
    //生成datatables
    create_table:function(){
        table = $('#datatable_zhgl').DataTable({
            "data": this.data,
            "bAutoWidth": false, //是否自适应宽度
            /*"ajax": {
                "url": "datatable1.json",
                //"success":function(result){alert("down");console.log(result)},
                "error":function(error){alert(error)},
                "dataSrc": "",
            },*/
            "columns": [
                {
                    data: 'account'
                },
                {
                    data: 'username'
                },
                {
                    data: 'phone'
                },
                {
                    data: 'post'
                },
                {
                    data: 'school'
                },
                {
                    data: 'subject'
                },
                {
                    data: 'schoollevel'
                },
                {
                    data: null
                }
            ],
            "columnDefs":[
                {"targets":3,
                 "data":'post',
                 "render":function(data,type,row,meta){
                     var html="";
                     $.each(zhgl.post_data,function(index,value){
                         if(row.post == value.code)
                            {html = value.name;return false;}
                     });
                     return html;
                 }
                },
                {"targets":4,
                 "data":null,
                 "render":function(data,type,row,meta){
                     var html="";
                     $.each(zhgl.school_data,function(index,value){
                         if(row.school == value.code)
                            {html = value.name;return false;}
                     });
                     return html;
                 }
                },
                {"targets":5,
                 "data":null,
                 "render":function(data,type,row,meta){
                     var html="";
                     $.each(zhgl.subject_data,function(index,value){
                         if(row.subject == value.code)
                            {html = value.name;return false;}
                     });
                     return html;
                 }
                },
                {
                "targets":7,
                "data":null,
                "searchable":false,
                "render":function(data,type,row,meta){
                    var html=`<button class="default_btn_small green_btn" onclick="zhgl.editor_open(${data.id})"><i class="iconfont icon-bianji"></i>修改</button><button class="default_btn_small red_btn" onclick="Men.del_list({id:${data.id}},${meta.row},'../biz/sch/school/delSchool')"><i class="iconfont icon-shanchu"></i>删除</button>`;
                    return html;
                }
            }],
            "language": {
                "url": "datatables_language.json"
            }
        });
    },
    //创建 按钮
    newly_btn: function(){
        //校验
        $("#zhgl1").formValidator();
        var r = $("#zhgl1").validate().form();
        if (r) {
            //从input中传值
            var account = $("#inputvalue_01").val();
            var username = $("#inputvalue_02").val();
            var phone = $("#inputvalue_03").val();
            var post = $("#inputvalue_04").val();
            var school = $("#inputvalue_05").val();
            var subject = $("#inputvalue_06").val();
            var schoollevel = $("#inputvalue_07").val();
            var mechanism = zhgl.ping_mechanism();
            var datas = {"account":account,"username":username,"phone":phone,"post":post,"school":school,"subject":subject,"schoollevel":schoollevel,"mechanism":mechanism};
            console.log(datas);
        // 保存修改到后台并判断正确与否        
        Men.judge_newly('../biz/sch/school/addSchool', datas);
            jggl.school_reset();
            document.getElementById("zhgl1").reset();
        }
    },
    //编辑窗口 打开
    editor_open: function(code){
        var html = $("#zhgl_template").html();
        Men.new_window('帐号管理', html, '取消', zhgl.editor_btn);
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">保存</button>');
        
        zhgl.post_bind_data();
        zhgl.school_bind_data();
        zhgl.subject_bind_data();
        zhgl.mechanism_bind_data();
        zhgl.pop_addordel();
        
        //要用ajax找后台数据. 下一条是本地数据,程序员删掉！
        var datas = Men.list_post(code, this.data, 'id');
        /****ajax找后台数据 
        var data={code: code};    
        var datas=Men.post_data('../biz/sch/school/addSchool',data);    
        ****/
        $("#code").val(datas.id); //放唯一ID号
        $("#inputtext_01").val(datas.account);
        $("#inputtext_02").val(datas.username);
        $("#inputtext_03").val(datas.phone);
        $("#inputtext_04").val(datas.post);
        $("#inputtext_05").val(datas.school);
        $("#inputtext_06").val(datas.subject);
        $("#inputtext_07").val(datas.schoollevel);
        //将保存的机构ID取出    
        zhgl.pop_readmechanismname(datas.mechanism);
    },
    //编辑窗口 保存按钮
    editor_btn: function(){
        //校验
        $("#zhgl").formValidator();
        var r = $("#zhgl").validate().form();
        if (r) {
            //从input中传值
            var account = $("#inputtext_01").val();
            var username = $("#inputtext_02").val();
            var phone = $("#inputtext_03").val();
            var post = $("#inputtext_04").val();
            var school = $("#inputtext_05").val();
            var subject = $("#inputtext_06").val();
            var schoollevel = $("#inputtext_07").val();
            var mechanism = zhgl.pop_ping_mechanism();
            var datas = {"account":account,"username":username,"phone":phone,"post":post,"school":school,"subject":subject,"schoollevel":schoollevel,"mechanism":mechanism};
            console.log(datas);
        // 保存修改到后台并判断正确与否             
        Men.judge_editor('../biz/sch/school/addSchool', datas);
        };
    
}, 
    // 帐号管理/学校创建第一项反白选中，内容显示第一项
    school_reset: function(){        
        $("#zhgl_ul.label_top_menu_ul li").eq(0).addClass("selected").siblings().removeClass("selected");
        $("#zhgl_ul.label_top_menu_ul+div").children().eq(0).show().siblings().hide();
    },
    //绑定职务
    post_bind_data: function(){
        if(this.post_data!=null || this.post_data!=undefined){
		  $.each(this.post_data,function(i,e){
                $("#inputvalue_04").append("<option  value=" + e.code + ">" + e.name + "</option>");	    
                $("#inputtext_04").append("<option  value=" + e.code + ">" + e.name + "</option>");	    
		  });
	   } 
    },
    //绑定学校
    school_bind_data: function(){
        if(this.school_data!=null || this.school_data!=undefined){
		  $.each(this.school_data,function(i,e){
                $("#inputvalue_05").append("<option  value=" + e.code + ">" + e.name + "</option>");	    
                $("#inputtext_05").append("<option  value=" + e.code + ">" + e.name + "</option>");	    
		  });
	   } 
    },
    //绑定学科
    subject_bind_data: function(){
        if(this.subject_data!=null || this.subject_data!=undefined){
		  $.each(this.subject_data,function(i,e){
                $("#inputvalue_06").append("<option  value=" + e.code + ">" + e.name + "</option>");	    
                $("#inputtext_06").append("<option  value=" + e.code + ">" + e.name + "</option>");	    
		  });
	   } 
    },
    //绑定机构
    mechanism_bind_data: function(code){
        if(this.mechanism_data!=null || this.mechanism_data!=undefined){
            var str="";
		$.each(this.mechanism_data,function(index,value){            
                str+=`<li data-code="${value.code}">${value.name} <i class="iconfont icon-jiahao1 icon_add_color"></i></li>`;                	    
		});
            $("#school_select_ul").html(str);
            $("#pop_school_select_ul").html(str);
	} 
    },
    //当职务改变时，后面学校/学科 就 显示/隐藏
    postshow: function(code){
        switch (code)
        {
        case '1':
        $("#inputvalue_05").val("").prop("disabled",true);
        $("#inputvalue_06").val("").prop("disabled",false);        
        break;
        case '2':
        $("#inputvalue_06").val("").prop("disabled",true);
        $("#inputvalue_05").val("").prop("disabled",false); 
        break;
        case '3':
        $("#inputvalue_05").val("").prop("disabled",true);
        $("#inputvalue_06").val("").prop("disabled",true); 
        break;
        default:
                console.log("no select");
        }
    },
    //点击内容增加，点击小图标删除
    addordel: function(){
        //点击小删除图标，删除ul里的数据，并增加回选项里
            $("#school_value_ul").on("click","li", function () {
                var code = this.dataset.code;            
                $("#school_select_ul li").each(function(index,value){
                    var ids = value.dataset.code;
                if (code == ids)
                    $(value).show();
                });
                $(this).remove();
            });
        //点击ul中的内容，增加到里面
        $("#school_select_ul").on("click","li", function(){
            var t=$(this).text();
            var v=this.dataset.code;
            var html=`<li data-code="${v}">${t} <i class="iconfont icon-shanchu1 icon_del_color"></i></li>`;
            var inset = 'true';
            //判断有无重复   
        $("#school_value_ul li").each(function(index,value){
            if(value.dataset.code == v){
                Tomd.alert('', '对不起，已有此项！', '确定');
                inset = 'false';
            }
        });
        if(inset == 'true'){
                $("#school_value_ul").append(html);
                $(this).hide();
        };
            
        });
    }, 
    //选中的机构拼数组
    ping_mechanism: function(){
        var str="[";
        $("#school_value_ul li").each(function(index,value){
            var ids = value.dataset.code;
            str+=`'${ids}',`;
        });
        str=str.slice(0,str.length-1);
        str+="]";
        return str;
    },
    //pop当职务改变时，后面学校/学科 就 显示/隐藏
    pop_postshow: function(code){
        switch (code)
        {
        case '1':
        $("#inputtext_05").val("").prop("disabled",true);
        $("#inputtext_06").val("").prop("disabled",false);        
        break;
        case '2':
        $("#inputtext_06").val("").prop("disabled",true);
        $("#inputtext_05").val("").prop("disabled",false); 
        break;
        case '3':
        $("#inputtext_05").val("").prop("disabled",true);
        $("#inputtext_06").val("").prop("disabled",true); 
        break;
        default:
                console.log("no select");
        }
    },
    //点击内容增加，点击小图标删除
    pop_addordel: function(){
        //点击小删除图标，删除ul里的数据，并增加回选项里
            $("#pop_school_value_ul").on("click","li", function () {
                var code = this.dataset.code;            
                $("#pop_school_select_ul li").each(function(index,value){
                    var ids = value.dataset.code;
                if (code == ids)
                    $(value).show();
                });
                $(this).remove();
            });
        //点击ul中的内容，增加到里面
        $("#pop_school_select_ul").on("click","li", function(){
            var t=$(this).text();
            var v=this.dataset.code;
            var html=`<li data-code="${v}">${t} <i class="iconfont icon-shanchu1 icon_del_color"></i></li>`;
            var inset = 'true';
            //判断有无重复   
        $("#pop_school_value_ul li").each(function(index,value){
            if(value.dataset.code == v){
                Tomd.alert('', '对不起，已有此项！', '确定');
                inset = 'false';
            }
        });
        if(inset == 'true'){
                $("#pop_school_value_ul").append(html);
                $(this).hide();
        };
            
        });
    }, 
    //选中的机构拼数组
    pop_ping_mechanism: function(){
        var str="[";
        $("#pop_school_value_ul li").each(function(index,value){
            var ids = value.dataset.code;
            str+=`'${ids}',`;
        });
        str=str.slice(0,str.length-1);
        str+="]";
        return str;
    },
    //将保存的机构ID取出，名字放入ul
    pop_readmechanismname: function(code){
        var str="";
        $.each(this.mechanism_data, function(index,value){
            $.each(code, function(i,v){
                if(value.code == v){
                    str+=`<li data-code="${value.code}">${value.name} <i class="iconfont icon-shanchu1 icon_del_color"></i></li>`;
                }
            });
        });
        $("#pop_school_value_ul").html(str);
    },
    //一开始先读取职务、学科、学校
    table_data: function(){        
        //模拟数据表 后台不用
        this.data=[{
        "id":"00001",  //id
		"account": "zz@110903",  //登录账号
        "username": "校长",  //用户名
		"phone": "18782918743",  //手机
		"post": "1",  //职务
		"school": "2", //学校
		"subject": "2", //学科
		"schoollevel": "17",  //学级
        "mechanism": ['102','103'], //机构
        "status": "E"  //状态
	   }];
        // post_data = Men.get_data("../biz/sch/school/getSchoolType",'');
        //职务表
        this.post_data = [{code:"1",name:"教研组长"},{code:"2",name:"校长"},{code:"3",name:"局长"}];
        //学科表
        this.subject_data = [{code:"1",name:"语文"},{code:"2",name:"数学"},{code:"3",name:"英语"},{code:"4",name:"物理"},{code:"5",name:"化学"},{code:"6",name:"历史"},{code:"7",name:"地理"},{code:"8",name:"政治"},{code:"9",name:"生物"},{code:"10",name:"体育"},{code:"11",name:"美术"},{code:"12",name:"音乐"},{code:"13",name:"信息技术"},{code:"14",name:"心理"}];
        //学校表
        this.school_data = [{code:"1",name:"成都多分测试学校one"},{code:"2",name:"成都多分测试学校two"},{code:"3",name:"河北17中分析演示学校"}];
        //机构表
        this.mechanism_data = [{code:"101",name:"南京市雨花台区（新优质初中）"},{code:"102",name:"资阳市教育局"},{code:"103",name:"成都市综北中学"},{code:"104",name:"演示学校机构"},{code:"105",name:"成都七中育才"},{code:"106",name:"泰州市教育局"},{code:"107",name:"自贡市教育局"},{code:"108",name:"焦作市温县教育局"}];
    },    
    //设定页面一加载就运行
    init: function(){
        zhgl.school_reset();
        zhgl.table_data();
        zhgl.create_table(); 
        zhgl.post_bind_data();
        zhgl.school_bind_data();
        zhgl.subject_bind_data();
        zhgl.mechanism_bind_data();
        zhgl.addordel();
    },
};
//加载即运行
zhgl.init();








