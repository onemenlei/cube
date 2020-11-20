"use strict";

//模拟数据库的数据
var data = [{
    "_id": "0001",
    "name": "演示教育局1",
    "node": "110901",
    "c_name": "演示教育局",
    "school": ['988872', '518746'],
    "status": "E"
}, {
    "_id": "0002",
    "name": "演示学校机构",
    "node": "230901",
    "c_name": "演示机构",
    "school": ['518747', '518748'],
    "status": "D"
}];
//可选择的学校表
var res_data = [{
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

//机构管理页面
var jggl = {
    //生成datatables
    create_table: function () {
        table = $('#datatable_jggl').DataTable({
            "data": data,
            "bAutoWidth": false, //是否自适应宽度
            "bProcessing": true, //加载时
            "dom": 'frtilp',
            /*"ajax": {
                "url": "datatable1.json",
                //"success":function(result){alert("down");console.log(result)},
                "error":function(error){alert(error)},
                "dataSrc": "",
            },*/
            "columns": [
                {
                    data: 'name'
                },
                {
                    data: "node"
                },
                {
                    data: "c_name"
                },
                {
                    data: "school"
                },
                {
                    "data": null, //此列不绑定数据源
                    "sWidth": "360px",
                    "orderable": false
                }
            ],
            "columnDefs": [
                {
                    "targets": 3,
                    "data": null,
                    "render": function (data, type, row, meta) {
                        var html = "";
                        $.each(school_data, function (index, value) {
                            $.each(row.school, function (i, v) {
                                if (value.code == v) {
                                    html += `${value.name}&emsp;`;
                                }
                            });
                        });
                        return html;
                    }
            },
                {
                    "targets": 4,
                    "data": null,
                    "searchable": false,
                    "render": function (data, type, row, meta) {
                        var html = ``;
                        if (data.status == "E") {
                            //  html+=`<button class="default_btn_small" onclick="data_btn_details(${data._id},'school_zhgl')"><i class="iconfont icon-guanli"></i>详情</button>`;
                            html += `<button class="default_btn_small green_btn" onclick="jggl.data_btn_manage('${data._id}','${data.name}')"><i class="iconfont icon-guanli"></i>管理</button>`;
                            html += `<button class="default_btn_small" onclick="jggl.editor_open('${data._id}')"><i class="iconfont icon-bianji"></i>修改</button>`;
                            html += `<button class="default_btn_small yellow_btn" onclick="jggl.data_btn_stop(${data._id},${meta.row})"><i class="iconfont icon-tingyong"></i>停用</button>`;
                            html += `<button class="default_btn_small red_btn" onclick="Men.del_list({id:${data._id}},${meta.row},'../biz/sch/school/delSchool')"><i class="iconfont icon-shanchu"></i>删除</button>`;
                        }
                        if (data.status == "D") {
                            html += `<button class="default_btn_small white_btn" onclick="jggl.data_btn_start(${data._id})"><i class="iconfont icon-tingyong"></i>启用</button>`;
                            html += `<button class="default_btn_small red_btn" onclick="Men.del_list({code:${data._id}},${meta.row},'../biz/sch/org/delete')"><i class="iconfont icon-shanchu"></i>删除</button>`;
                        }
                        return html;
                    }
            }],
            "language": {
                "url": "datatables_language.json"
            }
        });
    },
    //管理按钮
  	data_btn_manage : function(id, name) {		
  		//加载页面内容方法
  		Men.load_content('schoolmanage_right', 'union/school_detail');
        /*
  		schoolId = id;
  		schoolname = name;
  		var datas = Men.get_data("../biz/sch/school/get", {code : id});
  		roleCode = datas.currentUser.roleCode;
        */
  	},
    //停用按钮
    data_btn_stop: function (code) {
        var html = '<div class="center_text_div">确实要停用吗？</div>';
        Men.new_window('停用此条记录', html, '取消');
        $(".center_popup").addClass("wid20");
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">停用</button>');
        $(".edit_row_btn").on("click", function () {
            var data = {
                boeCode: code
            };
            var datas = Men.post_data("../biz/sch/org/disable", data);
            if (datas.code == 0) {
                $('#datatable_jggl').dataTable().fnReloadAjax();
            }
        });
    },
    //启用按钮
    data_btn_start: function (code) {
        var html = '<div class="center_text_div">确实要启用吗？</div>';
        Men.new_window('启用此条记录', html, '取消');
        $(".center_popup").addClass("wid20");
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">启用</button>');
        $(".edit_row_btn").on("click", function () {
            var data = {
                boeCode: code
            };
            var datas = Men.post_data("../biz/sch/org/enable", data);
            if (datas.code == 0) {
                $('#datatable_jggl').dataTable().fnReloadAjax();
            }
        });
    },
    //修改机构信息窗口 打开
    editor_open: function (code) {
        var self=this;
        var html = $("#jggl_template").html();
        Men.new_window('修改机构信息', html, '取消', jggl.editor_btn);
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">保存</button>');
        //要用ajax找后台数据. 下一条是本地数据,程序员删掉！
        var datas = Men.list_post(code, data, '_id');
        /****ajax找后台数据 
        var data={code: code};    
        var datas=Men.post_data('../biz/sch/school/addSchool',data);    
        ****/
        $("#code").val(datas._id); //放唯一ID号
        $("#inputtext_01").val(datas.name);
        $("#inputtext_02").val(datas.node);
        $("#inputtext_03").val(datas.c_name);
        //搜索/选择学校   
        selectSchool_model.pop_init(res_data);
        selectSchool_model.pop_setdata(datas.school, school_data);
        self.getThreeLevelLinkage('jg_se','jg_si','jg_xu'); //三级联动
        self.organizationType('jglx'); //机构类型
        //限定只能输入数字方法
        Men.only_number();
    },
    //点击修改机构信息窗口中的保存按钮 修改一条记录
    editor_btn: function () {
        //校验
        $("#jggl").formValidator();
        var r = $("#jggl").validate().form();
        if (r) {
            //从input中传值
            var code = $("#code").val();
            var name = $("#inputtext_01").val();
            var node = $("#inputtext_02").val();
            var c_name = $("#inputtext_03").val();
            var school = $("#inputtext_04").val();
            var datas = {
                id: code,
                name: name,
                node: node,
                c_name: c_name,
                school: school
            };
            // 保存修改到后台并判断正确与否        
            Men.judge_editor('../biz/sch/school/addSchool', datas);
        };
    },
    //导入 窗口
    import_jggl_window: function (id) {
        console.log("一条数据编号为：" + id);
        var html = `<div class="col-12"><input type="file" name="file" class="dropify-fr"
					data-default-file="" /></div>`;
        Men.new_window('文件上传', html, '取消', jggl.import_jggl_btn);
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">导入</button>');
        //初始化上传控件
        Men.dropify();
    },
    //导入 导入按钮
    import_jggl_btn: function () {
        alert($("input[type='file']").val());
        Tomd.toast('', 'warning', '导入成功！');
        Men.close_window();
    },
    //创建新数据方法按钮
    newly_btn: function () {
        //校验
        $("#jggl1").formValidator();
        var r = $("#jggl1").validate().form();
        if (r) {
            var name = $("#inputvalue_01").val();
            var node = $("#inputvalue_02").val();
            var c_name = $("#inputvalue_03").val();
            var school = $("#inputvalue_04").val();
            var datas = {
                id: code,
                name: name,
                node: node,
                c_name: c_name,
                school: school
            };
            // 保存修改到后台并判断正确与否        
            Men.judge_newly('../biz/sch/school/addSchool', datas);
            jggl.school_reset();
            document.getElementById("jggl1").reset();
        };
    },
    // 机构管理/机构创建第一项反白选中，内容显示第一项
    school_reset: function () {
        $("#jggl_ul.label_top_menu_ul li").eq(0).addClass("selected").siblings().removeClass("selected");
        $("#jggl_ul.label_top_menu_ul+div").children().eq(0).show().siblings().hide();
    },
    //绑定省
    province_bind_data: function () {
        if (province_data != null || province_data != undefined) {
            $.each(province_data, function (i, e) {
                $("#province").append("<option  value=" + e.code + ">" + e.name + "</option>");
            });
        }
    },
    //绑定市
    city_bind_data: function (code) {
        if (city_data != null || city_data != undefined) {
            $("#city").html(`<option value="">请选择</option>`);
            $.each(city_data, function (i, e) {
                if (code == e.parentCode) {
                    $("#city").append("<option  value=" + e.code + ">" + e.name + "</option>");
                };
            });
            $("#school").html(`<option value="">请选择</option>`);
        }
    },
    //绑定学校
    school_bind_data: function (code) {
        if (school_data != null || school_data != undefined) {
            var str = "";
            $.each(school_data, function (index, value) {
                if (code == value.parentCode) {
                    str += `<li data-code="${value.code}">${value.name} <i class="iconfont icon-jiahao1 icon_add_color"></i></li>`;
                };
            });
            $("#school_select_ul").html(str);
        }
    },
    //input中内容模糊搜索
    search_value: function () {
        $("#search_input").on("keyup", function (e) {
            if (1) {
                var search_value = $(this).val();
                var str = "";
                $.each(school_data, function (index, value) {
                    if (value.code.indexOf(search_value) >= 0 || value.name.indexOf(search_value) >= 0)
                        str += `<li data-code="${value.code}">${value.name} <i class="iconfont icon-jiahao1 icon_add_color"></i></li>`;
                });
                $("#school_select_ul").html(str);
            }
        })
    },
    //点击内容增加，点击小图标删除
    addordel: function () {
        //点击小删除图标，删除ul里的数据，并增加回选项里
        $("#school_value_ul").on("click", "li", function () {
            var code = this.dataset.code;
            $("#school_select_ul li").each(function (index, value) {
                var ids = value.dataset.code;
                if (code == ids)
                    $(value).show();
            });
            $(this).remove();
        });
        //点击ul中的内容，增加到里面
        $("#school_select_ul").on("click", "li", function () {
            var t = $(this).text();
            var v = this.dataset.code;
            var html = `<li data-code="${v}">${t} <i class="iconfont icon-iconless icon_del_color"></i></li>`;
            var inset = 'true';
            //判断有无重复   
            $("#school_value_ul li").each(function (index, value) {
                if (value.dataset.code == v) {
                    Tomd.alert('', '对不起，已有此项！', '确定');
                    inset = 'false';
                }
            });
            if (inset == 'true') {
                $("#school_value_ul").append(html);
                $(this).hide();
            };

        });
    },
    //绑定省
    pop_province_bind_data: function () {
        if (province_data != null || province_data != undefined) {
            $.each(province_data, function (i, e) {
                $("#pop_province").append("<option  value=" + e.code + ">" + e.name + "</option>");
            });
        }
    },
    //绑定市
    pop_city_bind_data: function (code) {
        if (city_data != null || city_data != undefined) {
            $("#pop_city").html(`<option value="">请选择</option>`);
            $.each(city_data, function (i, e) {
                if (code == e.parentCode) {
                    $("#pop_city").append("<option  value=" + e.code + ">" + e.name + "</option>");
                };
            });
            $("#pop_school").html(`<option value="">请选择</option>`);
        }
    },
    //绑定学校
    pop_school_bind_data: function (code) {
        if (school_data != null || school_data != undefined) {
            var str = "";
            $.each(school_data, function (index, value) {
                if (code == value.parentCode) {
                    str += `<li data-code="${value.code}">${value.name} <i class="iconfont icon-jiahao1 icon_add_color"></i></li>`;
                };
            });
            $("#pop_school_select_ul").html(str);
        }
    },
    //input中内容模糊搜索
    pop_search_value: function () {
        $("#pop_search_input").on("keyup", function (e) {
            if (1) {
                var search_value = $(this).val();
                var str = "";
                $.each(school_data, function (index, value) {
                    if (value.code.indexOf(search_value) >= 0 || value.name.indexOf(search_value) >= 0)
                        str += `<li data-code="${value.code}">${value.name} <i class="iconfont icon-jiahao1 icon_add_color"></i></li>`;
                });
                $("#pop_school_select_ul").html(str);
            }
        })
    },
    //点击内容增加，点击小图标删除
    pop_addordel: function () {
        //点击小删除图标，删除ul里的数据，并增加回选项里
        $("#pop_school_value_ul").on("click", "li", function () {
            var code = this.dataset.code;
            $("#pop_school_select_ul li").each(function (index, value) {
                var ids = value.dataset.code;
                if (code == ids)
                    $(value).show();
            });
            $(this).remove();
        });
        //点击ul中的内容，增加到里面
        $("#pop_school_select_ul").on("click", "li", function () {
            var t = $(this).text();
            var v = this.dataset.code;
            var html = `<li data-code="${v}">${t} <i class="iconfont icon-iconless icon_del_color"></i></li>`;
            var inset = true;
            //判断有无重复
            $("#pop_school_value_ul li").each(function (index, value) {
                if (value.dataset.code == v) {
                    Tomd.alert('', '对不起，已有此项！', '确定');
                    inset = false;
                    return false;
                }
            });
            if (inset == true) {
                $("#pop_school_value_ul").append(html);
                $(this).hide();
            }
        });
    },
    //将保存的学校内容读取到弹出窗口内
    pop_readschoolname: function (code) {
        var str = "";
        $.each(school_data, function (index, value) {
            $.each(code, function (i, v) {
                if (value.code == v) {
                    str += `<li data-code="${value.code}">${value.name} <i class="iconfont icon-iconless icon_del_color"></i></li>`;
                }
            });
        });
        $("#pop_school_value_ul").html(str);
    },
    //一开始先读取省、市、学校
    bind_table_data: function () {
        // province_data = Men.get_data("../biz/sch/school/getSchoolType",'');
        // city_data = Men.get_data("../biz/sch/school/getSchoolType",'');
        // school_data = Men.get_data("../biz/sch/school/getSchoolType",'');
        province_data = [{
            "code": "1",
            "name": "浙江省"
        }, {
            "code": "2",
            "name": "四川省"
        }, {
            "code": "3",
            "name": "贵州省"
        }, {
            "code": "4",
            "name": "甘肃省"
        }, {
            "code": "5",
            "name": "河北省"
        }, {
            "code": "6",
            "name": "内蒙古自治区"
        }, {
            "code": "7",
            "name": "江苏省"
        }, {
            "code": "8",
            "name": "重庆市"
        }];
        city_data = [{
            "code": "1",
            "name": "丽水市",
            "parentCode": "1"
        }, {
            "code": "2",
            "name": "温州市",
            "parentCode": "1"
        }, {
            "code": "3",
            "name": "宁波市",
            "parentCode": "1"
        }, {
            "code": "4",
            "name": "绍兴市",
            "parentCode": "1"
        }, {
            "code": "1",
            "name": "张家口市",
            "parentCode": "2"
        }, {
            "code": "2",
            "name": "邯郸市",
            "parentCode": "2"
        }, {
            "code": "3",
            "name": "保定市",
            "parentCode": "2"
        }, {
            "code": "1",
            "name": "贵阳市",
            "parentCode": "3"
        }, ];
        school_data = [{
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
    },
    //机构类型
    organizationType: function(object){
        this.organizationType_data(function(res){            
            if(res.code==0){
                let html="";
               $.each(res.data,function(index,value){
                   html+=`<option value="${value.code}">${value.name}</option>`;
               }); 
                var content = object || "organizationType";
                eval(`$("#${content}")`).html(html);
            }else{
                alert("机构类型数据错误！");
            }
            
        });
    },
    //机构数据
    organizationType_data: function(callback){
        var res={code:0,data:[
            {code:11012,name:"本市教育局"},
            {code:110122,name:"邻市教育局"},
            {code:11015,name:"区县教育局"}
        ]};
        callback(res);
    },
    //省市区三级联动
    getThreeLevelLinkage: function (se,si,xu) {
        var self = this;
        self.getProvinces_data(function (res) {
            if (res.code == 0) {
                let html = `<option value="0">请选择</option>`;
                $.each(res.data, function (index, value) {
                    html += `<option value="${value.code}">${value.name}</option>`;
                });
                var content1 = se || "province";
                eval(`$("#${content1}")`).html(html);
                var provinceCode = $("#province option:selected").val();                
                self.getCity_data(provinceCode, function (res) {
                    if (res.code == 0) {
                        let html = `<option value="0">请选择</option>`;
                        if(provinceCode!='0')
                        $.each(res.data, function (index, value) {
                            html += `<option value="${value.code}">${value.name}</option>`;
                        });
                        var content2 = si || "city";
                        eval(`$("#${content2}")`).html(html);
                        var cityCode = $("#city option:selected").val();                        
                        self.getDistrict_data(cityCode, function (res) {
                            if (res.code == 0) {
                                let html = `<option value="0">请选择</option>`;
                                if(cityCode!='0')
                                $.each(res.data, function (index, value) {
                                    html += `<option value="${value.code}">${value.name}</option>`;
                                });
                                var content3 = xu || "district";
                                eval(`$("#${content3}")`).html(html);
                            } else {
                                alert("区县数据错误！");
                            }
                        });
                    } else {
                        alert("城市数据错误！");
                    }
                });
            } else {
                alert("省份数据错误！");
            }
        });
        $("#province").on("change", function () { //当省份改变时，联动
            var provinceCode = $(this).val();            
            self.getCity_data(provinceCode, function (res) {
                if (res.code == 0) {
                    let html = `<option value="0">请选择</option>`;
                    if(provinceCode!='0')
                    $.each(res.data, function (index, value) {
                        html += `<option value="${value.code}">${value.name}</option>`;
                    });
                    $("#city").html(html);
                    var cityCode = $("#city option:selected").val();                    
                    self.getDistrict_data(cityCode, function (res) {
                        if (res.code == 0) {
                            let html = `<option value="0">请选择</option>`;
                            if(cityCode!='0')
                            $.each(res.data, function (index, value) {
                                html += `<option value="${value.code}">${value.name}</option>`;
                            });
                            $("#district").html(html);
                        } else {
                            alert("区县数据错误！");
                        }
                    });
                } else {
                    alert("城市数据错误！");
                }
            });
        });
        $("#city").on("change", function () { //当市改变时，联动
            var cityCode = $(this).val();            
            self.getDistrict_data(cityCode, function (res) {
                if (res.code == 0) {
                    let html = `<option value="0">请选择</option>`;
                    if(cityCode!='0')
                    $.each(res.data, function (index, value) {
                        html += `<option value="${value.code}">${value.name}</option>`;
                    });
                    $("#district").html(html);
                } else {
                    alert("区县数据错误！");
                }
            });
        });
        $("#jg_se").on("change", function () { //当省份改变时，联动
            var provinceCode = $(this).val();            
            self.getCity_data(provinceCode, function (res) {
                if (res.code == 0) {
                    let html = `<option value="0">请选择</option>`;
                    if(provinceCode!='0')
                    $.each(res.data, function (index, value) {
                        html += `<option value="${value.code}">${value.name}</option>`;
                    });
                    $("#jg_si").html(html);
                    var cityCode = $("#city option:selected").val();                    
                    self.getDistrict_data(cityCode, function (res) {
                        if (res.code == 0) {
                            let html = `<option value="0">请选择</option>`;
                            if(cityCode!='0')
                            $.each(res.data, function (index, value) {
                                html += `<option value="${value.code}">${value.name}</option>`;
                            });
                            $("#jg_xu").html(html);
                        } else {
                            alert("区县数据错误！");
                        }
                    });
                } else {
                    alert("城市数据错误！");
                }
            });
        });
        $("#jg_si").on("change", function () { //当市改变时，联动
            var cityCode = $(this).val();            
            self.getDistrict_data(cityCode, function (res) {
                if (res.code == 0) {
                    let html = `<option value="0">请选择</option>`;
                    if(cityCode!='0')
                    $.each(res.data, function (index, value) {
                        html += `<option value="${value.code}">${value.name}</option>`;
                    });
                    $("#jg_xu").html(html);
                } else {
                    alert("区县数据错误！");
                }
            });
        });
    },
    //获取省
    getProvinces_data: function (callback) {
        var res = {
            code: 0,
            data: [{
                code: '1011',
                name: '浙江省'
            }, {
                code: '1012',
                name: '湖北省'
            }, {
                code: '1013',
                name: '河南省'
            }, {
                code: '1014',
                name: '陕西省'
            }]
        };
        callback(res);
    },
    //获取市
    getCity_data: function (code, callback) { //code是省名
        console.log("传入省名" + code);
        var res = {
            code: 0,
            data: [{
                code: '101',
                name: '熔市'
            }, {
                code: '102',
                name: '熊市'
            }, {
                code: '103',
                name: '黄市'
            }, {
                code: '104',
                name: '粉市'
            }]
        };
        callback(res);
    },
    //获取区县
    getDistrict_data: function (code, callback) { //code是市名
        console.log("传入市名" + code);
        var res = {
            code: 0,
            data: [{
                code: '1',
                name: '一县'
            }, {
                code: '2',
                name: '二县'
            }, {
                code: '3',
                name: '三县'
            }, {
                code: '4',
                name: '四县'
            }]
        };
        callback(res);
    },
    //批量导入关联
    leadingIn: function(fileName){
        var html = `<div class="col-12 text-right" style="margin-bottom:.5rem"><button class="default_btn" onclick="jggl.downTemplate()">下载模板</button></div><div class="col-12"><div id="error_info"></div><input type="file" id="input-file-now" name="file" class="dropify-fr" data-default-file="" multiple="multiple" accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"/></div>`;
        Men.new_PIP('批量导入关联',html,'import','取消','上传',function(){ //点击导入按钮后执行
            var formData = new FormData();
	var name = $("#input-file-now").val();
	formData.append("file", $("#input-file-now")[0].files[0]);
	formData.append("name", name);
	if (name.substr(name.indexOf(".") + 1, name.length) != "xlsx" && name.substr(name.indexOf(".") + 1, name.length) !=
		"xls") {
		Tomd.alert("错误提示", "请选择excel", "");
		return;
	}
            if(fileName==1){
                    //控件在机构创建页面中 #schoolSelectResult
                let schools=['518747', '518748'];
                selectSchool_model.pop_setdata(schools, school_data,'schoolSelectResult');
                }else{
                    //控件在弹出窗口中 #pop_schoolSelectResult
                    let schools=['518747', '518748'];
                selectSchool_model.pop_setdata(schools, school_data);
                }
            return;
	Tomd.wait('导入中...');
	$.ajax({
		url : '../sch/master/patriarch/import',
		type : 'POST',
		cache : false,
		async : false,
		data : formData,
		processData : false,
		contentType : false,
		beforeSend : function() {},
		success : function(s) {
			Tomd.waitok();
			if (s.code == 0) {
				Men.close_window();
				Tomd.toast('right', '', '导入成功');
                if(fileName==1){
                    //控件在机构创建页面中 #schoolSelectResult
                let schools=['518747', '518748'];
                selectSchool_model.pop_setdata(schools, school_data,'schoolSelectResult');
                }else{
                    //控件在弹出窗口中 #pop_schoolSelectResult
                    let schools=['518747', '518748'];
                selectSchool_model.pop_setdata(schools, school_data);
                }
			} else {
				$(".dropify-clear").trigger("click"); //上传区域清空
				var datas = s.data;
				$(".error").remove();
				$.each(datas, function(index, value) {
					var text = index + 1 + "、" + value;
					$("#error_info").append(`<label class="error col-4">${text}</label>`); //把错误信息显示在上传控件上方
				});
			}
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			Tomd.waitok();
			Tomd.toast('right', 'error', '导入失败');
		}
	});
        });        
	Men.dropify(); //初始化上传控件
    },
    //导入模板
    downTemplate: function(){
        window.open('../template/机构导入模板.xlsx', '_blank');
    },
    //设定页面一加载就运行
    init: function () {
        jggl.school_reset();
        jggl.bind_table_data();
        jggl.create_table();
        //限定只能输入数字方法
        Men.only_number();
        //可选择的学校
        selectSchool_model.init(res_data);
        this.getThreeLevelLinkage(); //三级联动
        this.organizationType(); //机构类型
    },
};
var province_data, city_data, school_data;
//加载即运行
jggl.init();
