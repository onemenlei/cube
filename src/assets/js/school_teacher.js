var data_btn_edit = function (id) {
    //要用ajax找后台数据. 现在是本地数据
    $.each(data, function (index, value) {
        if (value.id == id) { //弹出窗口绑上数据
            //console.log(value);
            $("#input_value_01").val(value.Name);
            $("#input_value_02").val(value.Alias);
            $("#input_value_03").val(value.sex);
            $("#input_value_04").val(value.telphone);
            $("#input_value_05").val(value.type);
            var main = value.role;
            $.each(main, function (index, value) {
                //console.log(value);
                var html = `<li>${value}<i class="iconfont icon-shanchu1 icon_del_color"></i></li>`;
                $("#edit_content_teacher_role>ul").append(html);
            });
            return false;
        }
    });
};

//最后加个关闭方法
var tess = function (event) {
    //先处理内容
    close_new_popup(event);
};

///点击"切换"按钮切换内容
$("#switching_content").on("click", function () {
    $("#switched_content>div").toggle();
    teacher.draw();
	teacher.teacher_list_init();
	teacher.teacher_check_list(10);
});

//点击小删除图标，删除ul里的数据
$("body").on("click", "#content_teacher_role ul .icon_del_color,#edit_content_teacher_role ul .icon_del_color", function () {
    $(this).parent().remove();
});


//模拟数据
var data = [
    {
        "stuGid": "1151091048400001",
        "id": "8722051600000016",
        "Name": "测试老师",
        "Alias": "别名罗",
        "sex": "男",
        "telphone": "133445566",
        "type": "正式",
        "role": [{"roleCode":"50","clzCode":"16","subCode":"112801170001","lessonCode":"1"},{"roleCode":"41","clzCode":"16","subCode":"","lessonCode":"5"}]
	},{
        "stuGid": "1151091048400001",
        "id": "11111116",
        "Name": "测试老师",
        "Alias": "别名罗",
        "sex": "男",
        "telphone": "133445566",
        "type": "正式",
        "role": [{"roleCode":"50","clzCode":"16","subCode":"112801170001","lessonCode":"1"}]
	}
];
//这是教师页面
var teacher={
    //生成datatables
    create_table: function(){
    //表格生成
  table = $('#datatable_teacher').DataTable({
    "data": data,
    "bAutoWidth" : false, //是否自适应宽度  
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
            data: "Alias"
		},
        {
            data: "sex"
		},
        {
            data: "telphone"
		},
        {
            data: "type"
		},
        {
            data: null
		},
        {
            "data": null //此列不绑定数据源
		}
	],
    "columnDefs": [
        {
            "targets": 5,
            "data": null,
            "searchable": false,
            "render": function (data, type, row, meta) {
                var html = "",co1="",co2="",co3="",co4="";
                $.each(row.role,function(index,value){
                        $.each(roles_data,function(i,v){ 
                        if(v.code == value.roleCode)
                            {co1=v.name;
                         return false;}
                        });
                        $.each(grade_data,function(i,v){ 
                            if(v.year == value.clzCode)
                                {co2=v.grdName;
                            return false;}
                            });
                        $.each(clazz_data,function(i,v){ 
                            if(v.clzCode == value.subCode)
                                {co3=v.clzName;
                            return false;}
                            });
                        $.each(lesson_data,function(i,v){ 
                            if(v.id == value.lessonCode)
                                {co4=v.name;
                            return false;}
                            });
                    html+=co1+" "+co2+" "+co3+" "+co4+' <span class="default_btn_small green_btn">SMS授权</span>&emsp;';
                });
                return html;
            }
		},
        {
            "targets": 6,
            "data": null,
            "searchable": false,
            "render": function (data, type, row, meta) {
                var html = `<button class="default_btn_small green_btn" onclick="teacher.editor_open(${data.id})"><i class="iconfont icon-bianji"></i>修改</button><button class="default_btn_small red_btn" onclick="Men.del_list({id:${data.id}},${meta.row},'../biz/sch/school/delSchool')"><i class="iconfont icon-shanchu"></i>删除</button><button class="default_btn_small" onclick="teacher.open_shortmessage('${data.id}')"><i class="iconfont icon-wj-wjtg"></i>SMS授权</button>`;
                return html;
            }
		}],
    "language": {
        "url": "datatables_language.json"
    }
});

},
    //验证 如无角色则不能保存
    check_teacher_role: function(){
        $("#add_teacher_role").on("click",function(){
            $("#content_teacher_role").removeClass("error").prev("span.error").remove();
        });
        if($("#content_teacher_role ul").children().length === 0)
            {$("#content_teacher_role").addClass("error").before('<span class="error">不能为空！</span>');return false;}
        else
            {return true;}        
    },
    //页面一加载就运行
    init: function(){
        //一开始预先绑定后台表
        teacher.table_init();
        //紧接着生成datatables表
        teacher.create_table();
        //查出datatables条数,并放入#count中
        $("#count").pagescount();
        teacher.count();
        //教师详细列表
        teacher.bind_teacher_role();
        //teacher.draw();
        //teacher.teacher_list_init();
        //teacher.teacher_check_list(10);
    },
    //增删时 count条数改变
    count: function(){
        $("body").on("click",".default_btn.edit_row_btn",function(){
        $("#count").pagescount();
        });
    }
};


//新建窗口 打开
teacher.newly_open=function(){
    var html=$("#teacher_template").html();
    Men.new_window('新增教师',html,'取消',teacher.newly_btn);
    $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">创建</button>');
    //绑定角色表
    teacher.relation_role();
    //绑定年级表
    teacher.relation_grade();
    //绑定班级表
    teacher.relation_class($("#teacher_role02 select").val());
    //绑定课程表
    teacher.relation_lesson();
    //当角色改变时 显示/隐藏后面选项
    $("#teacher_role01 select").on("change", function () {
    teacher.role_isshow($(this).val());});
    //当年级改变时 班级也改变
    $("#teacher_role02 select").on("change", function () {
    teacher.relation_class($(this).val());});
    //点击添加按钮则添加角色
    $("#add_teacher_role").on("click",function(){
        teacher.addto_mode($("#teacher_role01 select").val());
    });
};
//点击新建窗口中的创建按钮 创建一条记录
teacher.newly_btn=function(){
    //验证 无角色情况
    var n = teacher.check_teacher_role();console.log(n);
    //校验
    $("#teacher").formValidator();
    var r = $("#teacher").validate().form();
    if(r && n){
        //从input中传值 code是唯一ID，不用传，自动赋给它个
        var Name=$("#inputtext_01").val();
        var Alias=$("#inputtext_02").val();
        var sex=$("#inputtext_03").val();
        var telphone=$("#inputtext_04").val();
        var type=$("#inputtext_05").val();
        var role=teacher.mode_todata();
        var datas={"Name":Name,"Alias":Alias,"sex":sex,"telphone":telphone,"type":type,"role":role};
        console.log(datas);
        // 保存新增到后台并判断正确与否        
        Men.judge_newly('../biz/sch/school/addSchool',datas, $('#datatable_teacher').dataTable());
    }    
};
//编辑学级/学届窗口 打开
teacher.editor_open=function(code){
    var html=$("#teacher_template").html();
    Men.new_window('修改教师',html,'取消',teacher.editor_btn);
    $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">保存</button>');
    //绑定角色表
    teacher.relation_role();
    //绑定年级表
    teacher.relation_grade();
    //绑定班级表
    teacher.relation_class($("#teacher_role02 select").val());
    //绑定课程表
    teacher.relation_lesson();
    //当角色改变时 显示/隐藏后面选项
    $("#teacher_role01 select").on("change", function () {
    teacher.role_isshow($(this).val());});
    //当年级改变时 班级也改变
    $("#teacher_role02 select").on("change", function () {
    teacher.relation_class($(this).val());});
    //要用ajax找后台数据. 下一条是本地数据,程序员删掉！
    var datas=Men.list_post(code,data,'id');
    /****ajax找后台数据 
    var data={code: code};    
    var datas=Men.post_data('../biz/sch/school/addSchool',data);    
    ****/
    $("#code").val(datas.id);  //放唯一ID号
    $("#inputtext_01").val(datas.Name);
    $("#inputtext_02").val(datas.Alias);
    $("#inputtext_03").val(datas.sex);
    $("#inputtext_04").val(datas.telphone);
    $("#inputtext_05").val(datas.type);
    $("#ul_right").append(teacher.read_name(datas.role));
    //点击添加按钮则添加角色
    $("#add_teacher_role").on("click",function(){
        teacher.addto_mode($("#teacher_role01 select").val());
    });
};
//点击修改学级/学届窗口中的保存按钮 修改一条记录
teacher.editor_btn=function(){  
    //验证 无角色情况
    var n = teacher.check_teacher_role();console.log(n);
    //校验
    $("#teacher").formValidator();
    var r = $("#teacher").validate().form();
    if(r && n){
        //从input中传值
    var code = $("#code").val();
    var Name=$("#inputtext_01").val();
    var Alias=$("#inputtext_02").val();
    var sex=$("#inputtext_03").val();
    var telphone=$("#inputtext_04").val();
    var type=$("#inputtext_05").val();
    var role=teacher.mode_todata();
    var datas={"Name":Name,"Alias":Alias,"sex":sex,"telphone":telphone,"type":type,"role":role};
    console.log(datas);
    // 保存修改到后台并判断正确与否        
    Men.judge_editor('../biz/sch/school/addSchool',datas, $('#datatable_teacher').dataTable()); 
    }    
};
//批量导入教师 窗口
teacher.import_teacher_window=function(){
    var html=`<div class="col-12"><input type="file" name="file" class="dropify-fr"
					data-default-file="" mulpiple /></div>`;
    Men.new_window('批量导入教师',html,'取消',teacher.import_teacher_btn);
    $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">导入</button>');
    //初始化上传控件
    Men.dropify();
};
//批量导入教师 导入按钮
teacher.import_teacher_btn=function(){
    alert($("input[type='file']").val());
    Tomd.toast('','warning','导入成功！');
    Men.close_window();
};
//批量导入教师手机 窗口
teacher.import_teacher_phone_window=function(){
    var html=`<div class="col-12"><input type="file" name="file" class="dropify-fr"
					data-default-file="" mulpiple /></div>`;
    Men.new_window('批量导入教师手机',html,'取消',teacher.import_teacher_phone_btn);
    $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">导入</button>');
    //初始化上传控件
    Men.dropify();
};
//批量导入教师手机 导入按钮
teacher.import_teacher_phone_btn=function(){
    alert($("input[type='file']").val());
    Tomd.toast('','warning','导入成功！');
    Men.close_window();
};
//批量关联教师角色 窗口
teacher.import_teacher_relation_window=function(){
    var html=`<div class="col-12"><input type="file" name="file" class="dropify-fr"
					data-default-file="" mulpiple /></div>`;
    Men.new_window('批量关联教师角色',html,'取消',teacher.import_teacher_relation_btn);
    $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">导入</button>');
    //初始化上传控件
    Men.dropify();
};
//批量关联教师角色 导入按钮
teacher.import_teacher_relation_btn=function(){
    alert($("input[type='file']").val());
    Tomd.toast('','warning','导入成功！');
    Men.close_window();
};

//从后台读取角色关联表等
teacher.table_init=function(){
    //模拟教师角色数据，实际做时用ajax读后台，smi中是后台学级表的json数据
    /****
    roles_data=Men.post_data('url','');
    ****/
    roles_data=[{"code":"10","name":"管理员"},{"code":"20","name":"校长"},{"code":"21","name":"教务"},{"code":"30","name":"年级组长"},{"code":"31","name":"班主任"},{"code":"40","name":"教研组长"},{"code":"41","name":"备课组长"},{"code":"50","name":"任课教师"},{"code":"90","name":"教职工"}];
    //模拟教师年级数据，实际做时用ajax读后台，smi中是后台学级表的json数据
    /****
    roles_data=Men.post_data('url','');
    ****/
    grade_data=[{"year":"16","grdCode":"01","grdName":"一年级"},{"year":"17","grdCode":"02","grdName":"二年级"},{"year":"18","grdCode":"03","grdName":"三年级"}];
    //模拟班级表
    /****
    clazz_data=Men.post_data('url','');
    ****/
    clazz_data=[{"clzCode":"112801170001","clzName":"1班","yearIn":"16"},{"clzCode":"112801170005","clzName":"5班","yearIn":"16"},{"clzCode":"112801170002","clzName":"2班","yearIn":"17"},{"clzCode":"112801170003","clzName":"3班","yearIn":"18"},{"clzCode":"112801170004","clzName":"4班","yearIn":"18"}];
    //模拟课程表
    /****
    lesson_data=Men.post_data('url','');
    ****/
    lesson_data=[{"id":"1","name":"语文"},{"id":"2","name":"数学"},{"id":"3","name":"英语"},{"id":"4","name":"物理"},{"id":"5","name":"化学"},{"id":"6","name":"生物"},{"id":"7","name":"历史"},{"id":"8","name":"政治"},{"id":"9","name":"地理"}];
};
//角色选择方法
teacher.relation_role=function(){
    var html="";
    $.each(roles_data,function(index,value){
        html+=`<option value="${value.code}">${value.name}</option>`;
    });
    $("#teacher_role01 select").html(html);
};
//年级绑定方法
teacher.relation_grade=function(){
    var html="";
    $.each(grade_data,function(index,value){
        html+=`<option value="${value.year}">${value.grdName}</option>`;
    });
    $("#teacher_role02 select").html(html);
};
//班级绑定方法
teacher.relation_class=function(year){
    var html="";
    $.each(clazz_data,function(index,value){
        if(year == value.yearIn)
        html+=`<option value="${value.clzCode}">${value.clzName}</option>`;
    });
    $("#teacher_role03 select").html(html);
};
//课程绑定方法
teacher.relation_lesson=function(){
    var html="";
    $.each(lesson_data,function(index,value){
        html+=`<option value="${value.id}">${value.name}</option>`;
    });
    $("#teacher_role04 select").html(html);
};
//角色不同判断显示与否
teacher.role_isshow=function(t_value){
    if (t_value <= 21) {
        $("#teacher_role02").hide();
        $("#teacher_role03").hide();
        $("#teacher_role04").hide();
    } else if (t_value <= 30) {
        $("#teacher_role02").show();
        $("#teacher_role03").hide();
        $("#teacher_role04").hide();
    } else if (t_value <= 31) {
        $("#teacher_role02").show();
        $("#teacher_role03").show();
        $("#teacher_role04").hide();
    } else if (t_value <= 40) {
        $("#teacher_role02").hide();
        $("#teacher_role03").hide();
        $("#teacher_role04").show();
    } else if (t_value <= 41) {
        $("#teacher_role02").show();
        $("#teacher_role03").hide();
        $("#teacher_role04").show();
    } else if (t_value <= 50) {
        $("#teacher_role02").show();
        $("#teacher_role03").show();
        $("#teacher_role04").show();
    } else {
        $("#teacher_role02").hide();
        $("#teacher_role03").hide();
        $("#teacher_role04").hide();
    }
};
//导入框架方法
teacher.addto_mode=function(t_value){
    var inset = true;
    var co1="",co2="",co3="",co4="",html="";
    if (t_value <= 21)
        {html = `${$("#teacher_role01 select").find("option:selected").text()}`;
         co1=`${$("#teacher_role01 select").find("option:selected").val()}`;
        }
    else if (t_value <= 30)
        {html = `${$("#teacher_role01 select").find("option:selected").text()} ${$("#teacher_role02 select").find("option:selected").text()}`;
          co1=`${$("#teacher_role01 select").find("option:selected").val()}`;
          co2=`${$("#teacher_role02 select").find("option:selected").val()}`;
        }
    else if (t_value <= 31)
        {html = `${$("#teacher_role01 select").find("option:selected").text()} ${$("#teacher_role02 select").find("option:selected").text()} ${$("#teacher_role03 select").find("option:selected").text()}`;
          co1=`${$("#teacher_role01 select").find("option:selected").val()}`;
          co2=`${$("#teacher_role02 select").find("option:selected").val()}`;
          co3=`${$("#teacher_role03 select").find("option:selected").val()}`;
        }
    else if (t_value <= 40)
        {html = `${$("#teacher_role01 select").find("option:selected").text()} ${$("#teacher_role04 select").find("option:selected").text()}`;
          co1=`${$("#teacher_role01 select").find("option:selected").val()}`;
          co4=`${$("#teacher_role04 select").find("option:selected").val()}`;
        }
    else if (t_value <= 41)
        {html = `${$("#teacher_role01 select").find("option:selected").text()} ${$("#teacher_role02 select").find("option:selected").text()} ${$("#teacher_role04 select").find("option:selected").text()}`;
          co1=`${$("#teacher_role01 select").find("option:selected").val()}`;
          co2=`${$("#teacher_role02 select").find("option:selected").val()}`;
          co4=`${$("#teacher_role04 select").find("option:selected").val()}`;
        }
    else if (t_value <= 50)
        {html = `${$("#teacher_role01 select").find("option:selected").text()} ${$("#teacher_role02 select").find("option:selected").text()} ${$("#teacher_role03 select").find("option:selected").text()} ${$("#teacher_role04 select").find("option:selected").text()}`;
          co1=`${$("#teacher_role01 select").find("option:selected").val()}`;
          co2=`${$("#teacher_role02 select").find("option:selected").val()}`;
          co3=`${$("#teacher_role03 select").find("option:selected").val()}`;
          co4=`${$("#teacher_role04 select").find("option:selected").val()}`;
        }
    else
        {html = `${$("#teacher_role01 select").find("option:selected").text()}`;
          co1=`${$("#teacher_role01 select").find("option:selected").val()}`;
        }
    /*var lens = new Array();
    lens=html.trim().split(" ");
    if(!lens[1]) lens[1]="";
    if(!lens[2]) lens[2]="";*/
    $("#content_teacher_role ul li").each(function (index, value) {
        if ($(this).text() == html) {
            Tomd.alert('', '对不起，已有此项！', '确定');
            inset = false;
            return false;
        }
    });
    if (inset == true) {
        html = `<li data-co1="${co1}" data-co2="${co2}" data-co3="${co3}" data-co4="${co4}">${html}<i class="iconfont icon-shanchu1 icon_del_color"></i></li>`;
        //console.log(html);
        $("#content_teacher_role ul").append(html);
    }
};
//角色关联写入后台方法
teacher.mode_todata=function(){
    var hue=$("#content_teacher_role ul li");
    var lists='[';
    var lengths=false;
    $.each(hue,function(index,value){
        var getId=$(this).prop("outerHTML");
        var obj=$(getId).get(0);      lists+=`{"roleCode":"${obj.dataset.co1}","clzCode":"${obj.dataset.co2}","subCode":"${obj.dataset.co3}","lessonCode":"${obj.dataset.co4}"},`;
        lengths=true;
    });
    if(lengths)
    lists=lists.substring(0,lists.length - 1)+']';
    else
        lists="";
    //角色关联 出来了
    console.log(lists);
    return lists;
};
//把数据库中角色关联内容 放入ul
teacher.read_name=function(role){
    var html = "",co1="",co2="",co3="",co4="";
    $.each(role,function(index,value){
                        $.each(roles_data,function(i,v){ 
                        if(v.code == value.roleCode)
                            {co1=v.name;
                         return false;}
                        });
                        $.each(grade_data,function(i,v){ 
                            if(v.year == value.clzCode)
                                {co2=" "+v.grdName;
                            return false;}
                            });
                        $.each(clazz_data,function(i,v){ 
                            if(v.clzCode == value.subCode)
                                {co3=" "+v.clzName;
                            return false;}
                            });
                        $.each(lesson_data,function(i,v){ 
                            if(v.id == value.lessonCode)
                                {co4=" "+v.name;
                            return false;}
                            });
        html=`<li data-co1="${value.roleCode}" data-co2="${value.clzCode}" data-co3="${value.subCode}" data-co4="${value.lessonCode}">${co1}${co2}${co3}${co4}<i class="iconfont icon-shanchu1 icon_del_color"></i></li>`;
        $("#content_teacher_role ul").append(html);
    });
};

//绑定教师角色表
teacher.bind_teacher_role = function(){
    /****  年级表
    teacher_grade_data=Men.post_data('../sch/master/student/getSchGrade','data:{"schCode":schoolId}');
    ****/
    teacher_grade_data=[{"grdName":"九年级","school":{"schGategory":{"code":"22","name":"民办","id":"22"},"schIdentity":"","city":{"parent":"330000","code":"331100","name":"丽水市","id":"331100","type":2},"county":{"parent":"331100","code":"331124","name":"松阳县","id":"331124","type":3},"schType":{"code":"2","name":"初中","id":"2"},"schCode":112801,"schProperty":1,"schAlias":"测试","provice":{"parent":"0","code":"330000","name":"浙江省","id":"330000","type":1},"schLogo":"","schName":"测试","endGrade":"9","location":{"code":"123","name":"特殊区域","id":"123"},"id":"112801","startGrade":"7","status":"E"},"yearIn":15,"yearOut":18,"grade":9,"id":"11280115","grdAlias":"9","grdCode":11280115,"status":"1"},{"grdName":"八年级","school":{"schGategory":{"code":"22","name":"民办","id":"22"},"schIdentity":"","city":{"parent":"330000","code":"331100","name":"丽水市","id":"331100","type":2},"county":{"parent":"331100","code":"331124","name":"松阳县","id":"331124","type":3},"schType":{"code":"2","name":"初中","id":"2"},"schCode":112801,"schProperty":1,"schAlias":"测试","provice":{"parent":"0","code":"330000","name":"浙江省","id":"330000","type":1},"schLogo":"","schName":"测试","endGrade":"9","location":{"code":"123","name":"特殊区域","id":"123"},"id":"112801","startGrade":"7","status":"E"},"yearIn":16,"yearOut":19,"grade":8,"id":"11280116","grdAlias":"8","grdCode":11280116,"status":"1"},{"grdName":"七年级","school":{"schGategory":{"code":"22","name":"民办","id":"22"},"schIdentity":"","city":{"parent":"330000","code":"331100","name":"丽水市","id":"331100","type":2},"county":{"parent":"331100","code":"331124","name":"松阳县","id":"331124","type":3},"schType":{"code":"2","name":"初中","id":"2"},"schCode":112801,"schProperty":1,"schAlias":"测试","provice":{"parent":"0","code":"330000","name":"浙江省","id":"330000","type":1},"schLogo":"","schName":"测试","endGrade":"9","location":{"code":"123","name":"特殊区域","id":"123"},"id":"112801","startGrade":"7","status":"E"},"yearIn":17,"yearOut":20,"grade":7,"id":"11280117","grdAlias":"7","grdCode":11280117,"status":"1"}];
    /****  教师详细列表
    teacher_list_data=Men.post_data('../sch/master/schTeacher/teacherListDetail','data:{"schCode":schoolId}');
    ****/
    teacher_list_data=[{"teacher":{"tch2ndName":"34","gender":1,"createTime":1530157944004,"tchName":"f4r34","mobile":"2342252","tch1stName":"f4r","tchCode":15,"id":"15"},"roles":[{"schCode":112801,"schTeacher":{"teacher":{"tch2ndName":"34","gender":1,"createTime":1530157944004,"tchName":"f4r34","mobile":"2342252","tch1stName":"f4r","tchCode":15,"id":"15"},"school":{"schGategory":22,"schIdentity":"","city":"331100","county":"331124","schType":2,"schCode":112801,"schProperty":1,"schAlias":"测试","provice":"330000","schLogo":"","schName":"测试","endGrade":"9","location":123,"id":"112801","startGrade":"7","status":"E"},"tchType":1,"tchAlias":"355","id":"11280115","schTchCode":"11280115"},"teacherRole":{"code":"10","name":"学校管理员","id":"10"},"id":"21","tchRoleCode":21}],"tchType":1,"tchAlias":"355","id":"11280115","schTchCode":"11280115"},{"teacher":{"tch2ndName":"让","gender":2,"createTime":1530164533219,"tchName":"珠让","mobile":"44545554","tch1stName":"珠","tchCode":16,"id":"16"},"roles":[{"schCode":112801,"schTeacher":{"teacher":{"tch2ndName":"让","gender":2,"createTime":1530164533219,"tchName":"珠让","mobile":"44545554","tch1stName":"珠","tchCode":16,"id":"16"},"school":{"schGategory":22,"schIdentity":"","city":"331100","county":"331124","schType":2,"schCode":112801,"schProperty":1,"schAlias":"测试","provice":"330000","schLogo":"","schName":"测试","endGrade":"9","location":123,"id":"112801","startGrade":"7","status":"E"},"tchType":1,"tchAlias":"皇后","id":"11280116","schTchCode":"11280116"},"teacherRole":{"code":"50","name":"任课教师","id":"50"},"subject":{"code":"12","name":"美术","id":"12"},"grade":{"schCode":112801,"grdName":"八年级","yearIn":16,"yearOut":19,"grade":8,"id":"11280116","grdAlias":"8","grdCode":11280116,"status":"1"},"id":"23","clazz":{"clzSerial":4,"schCode":112801,"clzAlias":"日","clzProperty":"10","clzCode":112801160005,"yearIn":16,"clzType":"112801001","clzTags":[{"tagCode":"112801010","tagName":"裸考班"}],"id":"112801160005","clzName":"4班"},"tchRoleCode":23},{"schCode":112801,"schTeacher":{"teacher":{"tch2ndName":"让","gender":2,"createTime":1530164533219,"tchName":"珠让","mobile":"44545554","tch1stName":"珠","tchCode":16,"id":"16"},"school":{"schGategory":22,"schIdentity":"","city":"331100","county":"331124","schType":2,"schCode":112801,"schProperty":1,"schAlias":"测试","provice":"330000","schLogo":"","schName":"测试","endGrade":"9","location":123,"id":"112801","startGrade":"7","status":"E"},"tchType":1,"tchAlias":"皇后","id":"11280116","schTchCode":"11280116"},"teacherRole":{"code":"50","name":"任课教师","id":"50"},"subject":{"code":"13","name":"音乐","id":"13"},"grade":{"schCode":112801,"grdName":"七年级","yearIn":17,"yearOut":20,"grade":7,"id":"11280117","grdAlias":"7","grdCode":11280117,"status":"1"},"id":"24","clazz":{"clzSerial":21,"schCode":112801,"clzAlias":"选课一班","clzProperty":"20","clzCode":112801170003,"yearIn":17,"clzType":"112801001","clzTags":[{"tagCode":"112801009","tagName":"自招班"}],"id":"112801170003","clzName":"21班"},"tchRoleCode":24}],"tchType":1,"tchAlias":"皇后","id":"11280116","schTchCode":"11280116"},{"teacher":{"tch2ndName":"1","gender":1,"createTime":1530152408590,"tchName":"11","mobile":"1","tch1stName":"1","tchCode":1,"id":"1"},"roles":[{"schCode":112801,"schTeacher":{"teacher":{"tch2ndName":"1","gender":1,"createTime":1530152408590,"tchName":"11","mobile":"1","tch1stName":"1","tchCode":1,"id":"1"},"school":{"schGategory":22,"schIdentity":"","city":"331100","county":"331124","schType":2,"schCode":112801,"schProperty":1,"schAlias":"测试","provice":"330000","schLogo":"","schName":"测试","endGrade":"9","location":123,"id":"112801","startGrade":"7","status":"E"},"tchType":1,"tchAlias":"1","id":"1128011","schTchCode":"1128011"},"teacherRole":{"code":"10","name":"学校管理员","id":"10"},"id":"1","tchRoleCode":1},{"schCode":112801,"schTeacher":{"teacher":{"tch2ndName":"1","gender":1,"createTime":1530152408590,"tchName":"11","mobile":"1","tch1stName":"1","tchCode":1,"id":"1"},"school":{"schGategory":22,"schIdentity":"","city":"331100","county":"331124","schType":2,"schCode":112801,"schProperty":1,"schAlias":"测试","provice":"330000","schLogo":"","schName":"测试","endGrade":"9","location":123,"id":"112801","startGrade":"7","status":"E"},"tchType":1,"tchAlias":"1","id":"1128011","schTchCode":"1128011"},"teacherRole":{"code":"50","name":"任课教师","id":"50"},"subject":{"code":"01","name":"语文","id":"01"},"grade":{"schCode":112801,"grdName":"七年级","yearIn":17,"yearOut":20,"grade":7,"id":"11280117","grdAlias":"7","grdCode":11280117,"status":"1"},"id":"2","clazz":{"clzSerial":1,"schCode":112801,"clzAlias":"行政一班","clzProperty":"10","clzCode":112801170001,"yearIn":17,"clzType":"112801001","clzTags":[{"tagCode":"112801009","tagName":"自招班"}],"id":"112801170001","clzName":"1班"},"tchRoleCode":2}],"tchType":1,"tchAlias":"1","id":"1128011","schTchCode":"1128011"}];
};
///生成教师绘图
teacher.draw = function() {	
	//teacher.relation_grade();
	//teacher.relation_class();
	//teacher.relation_subject();
	$($("#subject_project_ul>li")[0]).addClass("selected").siblings().removeClass("selected");
	$("#subject_project_article").html("");
	//教师详细列表
	teacher.bind_teacher_role();
	var obj = "",
		obb = "",
		title = "",
		content = "",
		obt = "";
	//年级表循环
	$.each(teacher_grade_data, function(m, n) {
		obj = "";
		//教师详细列表
		$.each(teacher_list_data, function(index, value) {
			$.each(value.roles, function(i, v) {
				if (v.grade) {
					//有年级
					if (n.yearIn == v.grade.yearIn) {
						title = `<span class="title">${n.grdName}</span>`;
						//有年级有班级有科目，为任课教师
						if (typeof(v.clazz)!="undefined" && typeof(v.subject)!="undefined")
							obb += `<li data-subjectname="${v.subject.name}" data-subjectcode="${v.subject.code}" data-teacherrolename="${v.teacherRole.name}" data-teacherrolecode="${v.teacherRole.code}"><h5>${value.teacher.tchName}</h5><div>${v.teacherRole.name}</div><div>${v.clazz.clzName} ${v.subject.name}</div></li>`;
						//有年级无班级有科目，为备课组长
						else if (typeof(v.clazz)=="undefined" && typeof(v.subject)!="undefined")
							obb += `<li data-subjectname="${v.subject.name}" data-subjectcode="${v.subject.code}" data-teacherrolename="${v.teacherRole.name}" data-teacherrolecode="${v.teacherRole.code}"><h5>${value.teacher.tchName}</h5><div>${v.teacherRole.name}</div><div>${v.subject.name}</div></li>`;
						//有年级有班级无科目，为班主任
						else if (typeof(v.clazz)!="undefined" && typeof(v.subject)=="undefined")
							obb += `<li data-teacherrolename="${v.teacherRole.name}" data-teacherrolecode="${v.teacherRole.code}"><h5>${value.teacher.tchName}</h5><div>${v.teacherRole.name}</div><div></div>${v.clazz.clzName}</li>`;
						//无班级无科目，年级组长
						else if (typeof(v.clazz)=="undefined" && typeof(v.subject)=="undefined")
							obb += `<li data-teacherrolename="${v.teacherRole.name}" data-teacherrolecode="${v.teacherRole.code}"><h5>${value.teacher.tchName}</h5><div>${v.teacherRole.name}</div></li>`;
					}
				} else {
					//无年级无班级有科目，为教研组长
					if (typeof(v.clazz)=="undefined" && typeof(v.subject)!="undefined")
						obj += `<li data-teacherrolename="${v.teacherRole.name}" data-teacherrolecode="${v.teacherRole.code}"><h5>${value.teacher.tchName}</h5><div>${v.teacherRole.name}</div><div>${v.subject.name}</div></li>`;
					//无年级无科目，则为校长、教务、管理员、教职工等
					else
						obj += `<li data-teacherrolename="${v.teacherRole.name}" data-teacherrolecode="${v.teacherRole.code}"><h5>${value.teacher.tchName}</h5><div>${v.teacherRole.name}</div></li>`;
				}
			});
		});
		content = `<div class="subject_content_div">${title}<ul>${obb}</ul></div>`;
		$("#subject_project_article").append(content);
		title = "";
		obb = "";
	});
	$("#subject_project_article").append(`<div class="subject_content_div all-yearIn"><ul>${obj}</ul></div>`);
};
//教师学科项目定义及点击后切换项目
teacher.teacher_list_init = function(){
    $($("#subject_project_ul>li")[0]).addClass("selected");
    //点击li进行学科项目切换
    $("#subject_project_ul").on("click", "li", function () {
        $(this).addClass("selected").siblings().removeClass("selected");
        var n = $(this).index();
        var code = this.dataset.code;
        var subjectcode = this.dataset.subjectcode;
        teacher.teacher_check_list(code,subjectcode);
});
};
//切换项目方法
teacher.teacher_check_list = function(code, subjectcode) {
	var content = $(".subject_content_div ul").children();
	//如果是学校管理员、校长、教职工、教研组长或教务，则不显示年级内容，显示总内容
	if (code == '10' || code == '20' || code == '21' || code == '40' || code == '90') {
		$(".subject_content_div.all-yearIn").show().siblings().hide();
		$.each(content, function(index, value) {
			if (code == value.dataset.teacherrolecode)
				$(this).show();
			else
				$(this).hide();
		});
	} else {
		$(".subject_content_div.all-yearIn").hide().siblings().show();
		//如果是年级组长、备课组长、班主任。则只需要显示它们自己的内容
		if (code == '30' || code == '31' || code == '41')
			$.each(content, function(index, value) {
				if (code == value.dataset.teacherrolecode)
					$(this).show();
				else
					$(this).hide();
			});
		//最后就是各课老师了
		else if(code == '50'){
			$.each(content, function(index, value) {
				if (subjectcode == value.dataset.subjectcode && value.dataset.teacherrolecode == '50')
					$(this).show();
				else
					$(this).hide();
			});
		}
	}
	;
};
//短信后台数据--学生
teacher.shortmessage_student_data=function(callback){
	var res={code:0,data:[ //grdCode 年级编号, grdAlias 年级别名
	                    {grdCode:28716514,grdAlias:"2014级",checked:true},
	                    {grdCode:28716515,grdAlias:"2015级"},
	                    {grdCode:28716516,grdAlias:"2016级"},
	                    {grdCode:28716517,grdAlias:"2017级",checked:true},
	                    {grdCode:28716518,grdAlias:"2018级"},
	                    {grdCode:28716519,grdAlias:"2019级"}
]};
	if(res.code==0)
		callback(res.data);
};
//短信后台数据--教师
teacher.shortmessage_teacher_data=function(callback){
	var res={code:0,data:[ //grdCode 年级编号, grdAlias 年级别名
	                    {grdCode:28716514,grdAlias:"2014级"},
	                    {grdCode:28716515,grdAlias:"2015级",checked:true},
	                    {grdCode:28716516,grdAlias:"2016级"},
	                    {grdCode:28716517,grdAlias:"2017级"},
	                    {grdCode:28716518,grdAlias:"2018级"},
	                    {grdCode:28716519,grdAlias:"2019级",checked:true}
]};
	if(res.code==0)
		callback(res.data);
};
//发短信
teacher.open_shortmessage=function(code){ //code是编号
	teacher.shortmessage_student_data(function(res){
        teacher.shortmessage_teacher_data(function(tes){
            var html=template('shortmessage_template',{model:res,tmodel:tes});
            Men.new_window('短信功能授权',html,'取消');
		    $('#newwind .center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">提交</button>'); 
	        $("#newwind .edit_row_btn").on("click",function(){ //点击“提交”
            var student_code=[];
	        var student_content = $("#student_select input[type='checkbox']:checked");
            $.each(student_content,function(index,value){
                student_code.push($(this).val());
            });
            console.log("选中学生代码：",student_code);
            var teacher_code=[];
	        var teacher_content = $("#teacher_select input[type='checkbox']:checked");  
            $.each(teacher_content,function(){
                teacher_code.push($(this).val());
            });
            console.log("选中教师代码：",teacher_code);
	    }); 
        teacher.shortmessage_select();
        });		
	});	
};
//短信选中
teacher.shortmessage_select=function(){
    //允许选择短信
    $(".allow").on("change", function(){
        if($(this).is(":checked"))
            $(this).parent().parent().next("section").find("input[type='checkbox']").prop("disabled",false);
        else
            $(this).parent().parent().next("section").find("input[type='checkbox']").prop("disabled",true).prop("checked",false);
    });
    //全选短信
    $(".all_check").on("change", function(){
        if($(this).is(":checked"))
            $(this).parent().parent().next().next(".alert").find("input[type='checkbox']").prop("checked",true);
        else
            $(this).parent().parent().next().next(".alert").find("input[type='checkbox']").prop("checked",false);
    });
    //如一个选中短信都没有，则全选框去掉
    $(".alert input[type='checkbox']").on("change", function(){
        var all_length = $(this).parent().parent(".alert").find("input[type='checkbox']").length;
        var content = $(this).parent().parent(".alert").find("input[type='checkbox']:checked");
        if(content.length < all_length)
            $(this).parent().parent().prev().prev().find("input[type='checkbox']").prop("checked",false);
        else if(content.length == all_length)
            $(this).parent().parent().prev().prev().find("input[type='checkbox']").prop("checked",true);
    });
};
//加载即运行
teacher.init();

