//配置切换，内容显示第一项
$($("#config_left_ul>li")[0]).addClass("selected");
$($("#config_right_content>div")[0]).show().siblings().hide();
//点击li进行学科项目切换
$("#config_left_ul").on("click","li",function(){
    $(this).addClass("selected").siblings().removeClass("selected");
    var n = $(this).index();
    $($("#config_right_content>div")[n]).show().siblings().hide();
});
//模拟班级类型的数据
var data1=[{
        "_id":"00001",
        "clzTypeCode":"10",  //班级类型编号
        "clzTypeName":"文科班", //班级类型名称
        "schCode":"112801" //学校编号
	}];
//模拟班级标签的数据
var data2=[{
        "_id":"00001",
        "clzCatgCode":"XKJ110",  //班级标签编号
        "clzCatgNo":"1",         //班级标签序号
        "clzCatgValue":10,      //班级标签值
        "clzCatgName":"自招班", //班级标签名称
        "schCode":"112231" //学校编号
	}];
//模拟班级组的数据 ----------- 因为班级组表还没建立，我自己模拟写一个，字段是不对的！
var data3=[{
        "_id":"000001",
        "clzGroupCode":"XKJ110",  //班级组编号
        "clzGroupgName":"自招班", //班级标签名称
	}];

///school_config 配置
var config = {
    //生成第一个datatables 班级类型表格
    create_table1: function (){
        table1 = $('#datatable_bjlx').DataTable({
            "data":data1,
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
                    data: 'clzTypeCode'
                },
                {
                    data: 'clzTypeName'
                },
                {
                    data: 'schCode'
                },
                {
                    data: null
                }
            ],
            "columnDefs":[
                {
                "targets":3,
                "data":null,
                "searchable":false,
                "render":function(data,type,row,meta){
                    var html=`<button class="default_btn_small green_btn" onclick="config.editor_open1(${data._id})"><i class="iconfont icon-bianji"></i>修改</button><button class="default_btn_small red_btn" onclick="Men.del_list({id:${data._id}},${meta.row},'../biz/sch/student/delStudent','table1')"><i class="iconfont icon-shanchu"></i>删除</button>`;
                    return html;
                }
            }],
            "language": {
                "url": "datatables_language.json"
            }
        });
    },
    //生成第一个datatables 班级标签表格
    create_table2: function (){
        table2 = $('#datatable_bjbq').DataTable({
            "data":data2,
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
                    data: 'clzCatgCode'
                },
                {
                    data: 'clzCatgNo'
                },
                {
                    data: 'clzCatgValue'
                },
                {
                    data: 'clzCatgName'
                },
                {
                    data: 'schCode'
                },
                {
                    data: null
                }
            ],
            "columnDefs":[
                {
                "targets":5,
                "data":null,
                "searchable":false,
                "render":function(data,type,row,meta){
                    var html=`<button class="default_btn_small green_btn" onclick="config.editor_open2(${data._id})"><i class="iconfont icon-bianji"></i>修改</button><button class="default_btn_small red_btn" onclick="Men.del_list({id:${data._id}},${meta.row},'../biz/sch/student/delStudent','table2')"><i class="iconfont icon-shanchu"></i>删除</button>`;
                    return html;
                }
            }],
            "language": {
                "url": "datatables_language.json"
            }
        });
    },
    //生成第一个datatables 班级组表格
    create_table3: function (){
        table3 = $('#datatable_bjz').DataTable({
            "data":data3,
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
                    data: 'clzGroupCode'
                },
                {
                    data: 'clzGroupgName'
                },
                {
                    data: null
                }
            ],
            "columnDefs":[
                {
                "targets":2,
                "data":null,
                "searchable":false,
                "render":function(data,type,row,meta){
                    var html=`<button class="default_btn_small green_btn" onclick="config.editor_open3(${data._id})"><i class="iconfont icon-bianji"></i>修改</button><button class="default_btn_small red_btn" onclick="Men.del_list({id:${data._id}},${meta.row},'../biz/sch/student/delStudent','table3')"><i class="iconfont icon-shanchu"></i>删除</button>`;
                    return html;
                }
            }],
            "language": {
                "url": "datatables_language.json"
            }
        });
    },
    //班级类型表窗口 新建窗口
    newly_open1: function (){
        var html = $("#bjlx_template").html();
        Men.new_window('新增班级类型', html, '取消', config.newly_btn1);
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">创建</button>');
    },
    //点击新建班级类型窗口中的创建按钮 创建一条记录
    newly_btn1: function (){
        //校验
        $("#bjlx").formValidator();
        var r = $("#bjlx").validate().form();
        if (r) {
            //从input中传值 code是唯一ID，不用传，自动赋给它个
            var clzTypeCode = $("#inputtext_01").val();
            var clzTypeName = $("#inputtext_02").val();
            var schCode = $("#inputtext_03").val();
            var datas={clzTypeCode:clzTypeCode,clzTypeName:clzTypeName,schCode:schCode};
            // 保存新增到后台并判断正确与否        
            Men.judge_newly('../biz/sch/school/addSchool', datas);
        }
    }, 
    //班级类型表窗口 打开编辑
    editor_open1: function (code){
        var html = $("#bjlx_template").html();
        Men.new_window('修改班级类型', html, '取消', config.editor_btn1);
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">保存</button>');
        //要用ajax找后台数据. 下一条是本地数据,程序员删掉！
        var datas = Men.list_post(code, data1, '_id');
        /****ajax找后台数据 
        var data={code: code};    
        var datas=Men.post_data('../biz/sch/school/addSchool',data);    
        ****/
        $("#code").val(datas._id); //放唯一ID号
        $("#inputtext_01").val(datas.clzTypeCode);
        $("#inputtext_02").val(datas.clzTypeName);
        $("#inputtext_03").val(datas.schCode);
    },
    //班级类型表窗口 保存按钮
    editor_btn1: function () {
        //校验
        $("#bjlx").formValidator();
        var r = $("#bjlx").validate().form();
        if (r) {
            //从input中传值
            var code = $("#code").val();
            var clzTypeCode = $("#clzTypeCode").val();
            var clzTypeName = $("#clzTypeName").val();
            var schCode = $("#schCode").val();
            var datas = {};
            // 保存修改到后台并判断正确与否        
            Men.judge_editor('../biz/sch/school/addSchool', datas);
        };
    },
    //班级标签表窗口 新建窗口
    newly_open2: function (){
        var html = $("#bjbq_template").html();
        Men.new_window('新增班级标签', html, '取消', config.newly_btn2);
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">创建</button>');
    },
    //点击新建班级标签窗口中的创建按钮 创建一条记录
    newly_btn2: function (){
        //校验
        $("#bjbq").formValidator();
        var r = $("#bjbq").validate().form();
        if (r) {
            //从input中传值 code是唯一ID，不用传，自动赋给它个
            var clzCatgCode = $("#inputtext_01").val();
            var clzCatgNo = $("#inputtext_02").val();
            var clzCatgValue = $("#inputtext_03").val();
            var clzCatgName = $("#inputtext_04").val();
            var schCode = $("#inputtext_05").val();
            var datas={};
            // 保存新增到后台并判断正确与否        
            Men.judge_newly('../biz/sch/school/addSchool', datas);
        }
    }, 
    //班级标签表窗口 打开编辑
    editor_open2: function (code){
        var html = $("#bjbq_template").html();
        Men.new_window('修改班级标签', html, '取消', config.editor_btn2);
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">保存</button>');
        //要用ajax找后台数据. 下一条是本地数据,程序员删掉！
        var datas = Men.list_post(code, data2, '_id');
        /****ajax找后台数据 
        var data={code: code};    
        var datas=Men.post_data('../biz/sch/school/addSchool',data);    
        ****/
        $("#code").val(datas._id); //放唯一ID号
        $("#inputtext_01").val(datas.clzCatgCode);
        $("#inputtext_02").val(datas.clzCatgNo);
        $("#inputtext_03").val(datas.clzCatgValue);
        $("#inputtext_04").val(datas.clzCatgName);
        $("#inputtext_05").val(datas.schCode);
    },
    //班级标签表窗口 保存按钮
    editor_btn2: function () {
        //校验
        $("#bjbq").formValidator();
        var r = $("#bjbq").validate().form();
        if (r) {
            //从input中传值
            var code = $("#code").val();
            var clzCatgCode = $("#inputtext_01").val();
            var clzCatgNo = $("#inputtext_02").val();
            var clzCatgValue = $("#inputtext_03").val();
            var clzCatgName = $("#inputtext_04").val();
            var schCode = $("#inputtext_05").val();
            var datas = {};
            // 保存修改到后台并判断正确与否        
            Men.judge_editor('../biz/sch/school/addSchool', datas);
        };
    },
    //班级组表窗口 新建窗口
    newly_open3: function (){
        var html = $("#bjz_template").html();
        Men.new_window('新增班级组', html, '取消', config.newly_btn3);
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">创建</button>');
    },
    //点击新建班级组窗口中的创建按钮 创建一条记录
    newly_btn3: function (){
        //校验
        $("#bjz").formValidator();
        var r = $("#bjz").validate().form();
        if (r) {
            //从input中传值 code是唯一ID，不用传，自动赋给它个
            var clzGroupCode = $("#inputtext_01").val();
            var clzGroupgName = $("#inputtext_02").val();
            var datas={};
            // 保存新增到后台并判断正确与否        
            Men.judge_newly('../biz/sch/school/addSchool', datas);
        }
    }, 
    //班级组表窗口 打开编辑
    editor_open3: function (code){
        var html = $("#bjz_template").html();
        Men.new_window('修改班级组', html, '取消', config.editor_btn3);
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">保存</button>');
        //要用ajax找后台数据. 下一条是本地数据,程序员删掉！
        var datas = Men.list_post(code, data3, '_id');
        /****ajax找后台数据 
        var data={code: code};    
        var datas=Men.post_data('../biz/sch/school/addSchool',data);    
        ****/
        $("#code").val(datas._id); //放唯一ID号
        $("#inputtext_01").val(datas.clzGroupCode);
        $("#inputtext_02").val(datas.clzGroupgName);
    },
    //班级组表窗口 保存按钮
    editor_btn3: function () {
        //校验
        $("#bjz").formValidator();
        var r = $("#bjz").validate().form();
        if (r) {
            //从input中传值
            var code = $("#code").val();
            var clzGroupCode = $("#inputtext_01").val();
            var clzGroupgName = $("#inputtext_02").val();
            var datas = {};
            // 保存修改到后台并判断正确与否        
            Men.judge_editor('../biz/sch/school/addSchool', datas);
        };
    },
    //设定页面一加载就运行
    init: function () {
        config.create_table1();
        config.create_table2();
        config.create_table3();
        this.create_linedraw();
    },
    ///分析配置 -- 创建进线和踩线
    create_linedraw: function(){
        var data ={};
       /* var res =[{"schCode":"0001","grdCode":"001","yearIn":"17","cozCode":"理科","subCode":"语文","items":[{"lineName":"前10%","lineType":1,"lineValue":100,"lineDown":3,"lineUp":5},{"lineName":"前20%","lineType":2,"lineValue":80,"lineDown":3,"lineUp":5}]},
               {"schCode":"0002","grdCode":"002","yearIn":"17","cozCode":"理科","subCode":"英语","items":[{"lineName":"前10%","lineType":1,"lineValue":100,"lineDown":1,"lineUp":2},{"lineName":"前20%","lineType":2,"lineValue":75,"lineDown":2,"lineUp":4}]},
                 {"schCode":"0002","grdCode":"002","yearIn":"17","cozCode":"文科","subCode":"数学","items":[{"lineName":"前10%","lineType":1,"lineValue":100,"lineDown":1,"lineUp":2},{"lineName":"前20%","lineType":2,"lineValue":75,"lineDown":2,"lineUp":4}]},
                 {"schCode":"0002","grdCode":"002","yearIn":"16","cozCode":"理科","subCode":"英语","items":[{"lineName":"前10%","lineType":1,"lineValue":100,"lineDown":1,"lineUp":2},{"lineName":"前20%","lineType":2,"lineValue":75,"lineDown":2,"lineUp":4}]}];
                 */
        var res =[{"schCode":280010,"yearIn":17,"subject":{"code":"01","name":"语文","id":"01"},"course":{"code":"1","name":"文科","id":"1"},"id":"1134792000650000","items":[{"lineDown":1,"lineType":2,"lineValue":100,"lineName":"前10%","lineUp":5}]},{"schCode":280010,"yearIn":17,"subject":{"code":"01","name":"语文","id":"01"},"course":{"code":"0","name":"全科","id":"0"},"id":"1134814766980000","items":[{"lineDown":1,"lineType":1,"lineValue":100,"lineName":"前10%","lineUp":5},{"lineDown":5,"lineType":1,"lineValue":100,"lineName":"前20%","lineUp":10}]}];
        //生成学级
    function yearInArr(array) {
            let _array = [];
            array.forEach(_s => {
                if (!_array.includes(_s.yearIn)) {
                    _array.push(_s.yearIn)
                }
            });
            return _array.map(yearIn => {
                let obj = {
                    yearIn: yearIn,
                    data: array.filter(_s => _s.yearIn === yearIn)
                }
                return obj
            })
        };
    //生成文理科
    function cozCodeArr(array) {
            let _array = [];
            array.forEach(_s => {
                if (!_array.includes(_s.course.name)) {
                    _array.push(_s.course.name)
                }
            });
            return _array.map(cozCode => {
                let obj = {
                    cozCode: cozCode,
                    data: array.filter(_s => _s.course.name === cozCode)
                }
                return obj
            })
        };
    //生成科目
    function subCodeArr(array) {
            let _array = [];
            array.forEach(_s => {
                if (!_array.includes(_s.subject.name)) {
                    _array.push(_s.subject.name)
                }
            });
            return _array.map(subCode => {
                let obj = {
                    subCode: subCode,
                    data: array.filter(_s => _s.subject.name === subCode)
                }
                return obj
            })
        };   
        var yearIn = yearInArr(res);
        //console.log(yearIn);
        var html = '';
        for (var i = 0; i < yearIn.length; i++) {
            var cozCode = cozCodeArr(yearIn[i].data);
            //console.error(cozCode);
            var hcity = '';
            for (var j = 0; j < cozCode.length; j++) {
                var subCode = subCodeArr(cozCode[j].data);
                //console.warn(subCode);
                var schName = '';
                for (var l = 0; l < subCode.length; l++) {
                    var nitem='';
                    var items=subCode[l].data[0].items;
                    //console.warn(items);
                    for (var n = 0; n < items.length;n++){
                        var pud = (items[n].lineType>1?'按分数':'按名次');
                        nitem += `<tr><td>${items[n].lineName}</td><td>${pud}</td><td>${items[n].lineValue}</td><td>${items[n].lineUp}</td><td>${items[n].lineDown}</td></tr>`;
                    }
                        schName += `<div class="tree_table2"><h5>${subCode[l].subCode}</h5><div class="tree_table3"><table><tr><th>线名称</th><th>类型</th><th>线值</th><th>上线</th><th>下线</th></tr>${nitem}</table></div></div>`;
                }
                hcity += `<div class="tree_table1"><h4>${cozCode[j].cozCode}</h4>${schName}</div>`;
            }
            html += `<li><h3>${yearIn[i].yearIn}</h3>${hcity}</li>`;
        };
        $('#Select ul').html(html);
        //当点击年级，则展开/折叠所有下面内容
        $(".tree_view h3").on("click",function(){
            if(!($(this).hasClass("hover"))){
                $(".tree_view h3,.tree_view h4,.tree_view h5").removeClass("hover");
                $(".tree_view div").hide();
                $(this).siblings("div").show();
                $(this).addClass("hover");
            }else{
                $(".tree_view h3,.tree_view h4,.tree_view h5").removeClass("hover");
                $(".tree_view div").hide();
            }
        });
        //当点击文理科，则展开/折叠下面内容
        $(".tree_view h4").on("click",function(){
            if(!($(this).hasClass("hover"))){
                $(this).siblings("div").show();
                $(this).addClass("hover");
            }else{
                $(this).removeClass("hover");
                $(this).siblings("div").hide();
            }
        });
        //当点击科目，则展开/折叠下面内容
        $(".tree_view h5").on("click",function(){
            if(!($(this).hasClass("hover"))){
                $(this).siblings("div").show();
                $(this).addClass("hover");
            }else{
                $(this).removeClass("hover");
                $(this).siblings("div").hide();
            }
        });
    },
    //分析配置 新建进线和踩线
    line_newly_open: function(){
        var html= $("#line_template").html();
        Men.new_window('新增进线和踩线', html, '取消', config.line_newly_btn);
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">创建</button>');
        //限定只能输入数字方法
        Men.only_number();
        //生成一列表
        config.add_line_row();
    },
    //点击新建窗口中的创建按钮 创建一条记录
    line_newly_btn: function(){
        //校验
    $("#line").formValidator();
    var r = $("#line").validate().form();
    if (r) {
        var Name = $("#inputtext_01").val();
        var datas = {Name:Name};
        // 保存新增到后台并判断正确与否        
        Men.judge_newly('../biz/sch/school/addline', datas);
        }
    },
    //添加新建窗口中一行表
    add_line_row: function(){
        var len = $(".line_table tr").length;
        if(len<7){
            var new_row =`<tr>
                                    <td>${len}</td>
                                    <td>
                                        <input type="text" class="default_input" style="width:90%" name="b${len}1" required />
                                    </td>
                                    <td>
                                        <select class="default_select" style="width:90%">
                                            <option value="1">按名次</option>
                                            <option value="2">按分数</option>
                                        </select>
                                    </td>
                                    <td>
                                        <input type="text" class="default_input" decimalOnly2="true" name="b${len}2" required />
                                    </td>
                                    <td>
                                        <input type="text" class="default_input" decimalOnly2="true" name="b${len}3" required />
                                    </td>
                                    <td>
                                        <input type="text" class="default_input" decimalOnly2="true" name="b${len}4" required />
                                    </td>
                                    <td>
                                        <button class="default_btn_small red_btn" onclick="config.del_line_row(event)"><i class="iconfont icon-shanchu"></i>删除</button>
                                    </td>
                                </tr>`;
        $(".line_table").append(new_row);
        //限定只能输入数字方法
        Men.only_number();
        }
        else{
            Tomd.alert("不能再增加行数","行数已达到最大限制")
        }  
        $(".default_btn").blur();
        //限制输入两位小数
        //config.check_decimal2();       
    },
    //限制输入两位小数
    check_decimal2: function(){
         $(".decimal2").on("blur", function(){  
        var reg = new RegExp("^\\d+(\\.\\d{0,2})?$");
             var value=$(this).val();
        if(!reg.test(value) && value){
            var num=Number(value).toFixed(2);
            $(this).val(num);
        }
         });
    },
    //删除行
    del_line_row: function(event){
        $(event.currentTarget).parent().parent().remove();
    },
    //分析配置 导入进线和踩线
    import_line: function(){
        var html = `<div class="col-12 text-right" style="margin-bottom:.5rem"><button class="default_btn" onclick="downTemplate()">下载模板</button></div><div class="col-12"><input type="file" name="file" class="dropify-fr"
					data-default-file="" /></div>`;
    Men.new_window('导入进线和踩线', html, '取消', config.import_line_btn);
    $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">导入</button>');
    //初始化上传控件
    Men.dropify();
    },
    //导入进线和踩线 导入按钮
    import_line_btn: function(){
        alert($("input[type='file']").val());
        Tomd.toast('', 'warning', '导入成功！');
        Men.close_window();
    }
};

//加载即运行
config.init();