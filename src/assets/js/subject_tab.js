"use strict";
//gridtree专用方法，用其他方法替换
var trees;
var subject_tab={
    //拿到顶部菜单
    get_tab_data: function(){
        let datas= ['学科','考试类型','试题类型','试题类别','知识点','能力点'];
        return datas;
    },
    //渲染顶部菜单
    create_top_menu: function(){
        var html="";
        $.each(this.get_tab_data(),function(index,value){
            html+=`<li>${value}</li>`;
        });
        //默认显示第一项
        $("#subject_tab_menu").html(html).children("li:first").addClass("selected");
        $("#subject_content>div").eq(0).show().siblings().hide();
        this.create_subject_table();
        this.click_tab_content();
    },
    //当点击顶部菜单选项时，切换到相应项显示
    click_tab_content: function(){
        this.cos1=this.cos2=this.cos3=this.cos4=this.cos5=false;
        this.cos0=true;
        var self = this;
        $("#subject_tab_menu li").on("click", function(){
            let n = $(this).index();
            $("#subject_content>div").eq(n).show().siblings().hide();
            $(this).addClass("selected").siblings().removeClass("selected");
            if(eval(`self.cos${n}`)== false)
            switch (n)
            {
                case 0:
                    self.create_subject_table();
                    self.cos0 = true;
                    break;
                case 1:
                    self.create_examination_type_table();
                    self.cos1 = true;
                    break;
                case 2:
                    self.create_test_type_table();
                    self.cos2 = true;
                    break;
                case 3:
                    self.create_test_category_table();
                    self.cos3 = true;
                    break;
                case 4:
                    self.bind_knowledgePoints_zsd_select();
                    self.bind_subject_type_zsd_select();
                    self.reset_treegrid5();
                    self.cos4 = true;
                    break; 
                case 5:
                    self.bind_subject_type_zsd_select();
                    self.bind_capabilityPoints_nld_select();
                    self.reset_treegrid6();
                    self.cos5 = true;
                    break;     
            }                
        });
    },
/*学科内容 开始*/
    subject_data: function(){
        //用Ajax读取 loadSubjects(sce.getServletContext());
        let datas=[{"_id":"001","code":"1","name":"语文"},{"_id":"002","code":"2","name":"数学"},{"_id":"003","code":"3","name":"英语"},{"_id":"004","code":"4","name":"物理"},{"_id":"005","code":"5","name":"化学"},{"_id":"006","code":"6","name":"历史"},{"_id":"007","code":"7","name":"地理"},{"_id":"008","code":"8","name":"政治"},{"_id":"009","code":"9","name":"生物"},{"_id":"010","code":"A","name":"信息"},{"_id":"011","code":"B","name":"通用"},{"_id":"012","code":"C","name":"科学"},{"_id":"013","code":"D","name":"奥数"}];
        return datas;
    },   
    //创建表
    create_subject_table:function(){
        this.table1 = $('#datatable_subject').DataTable({
            "data":this.subject_data(),
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
                    data: 'code'
                },
                {
                    data: 'name'
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
                    var html=`<button class="default_btn_small green_btn" onclick="subject_tab.editor_open1('${data._id}')"><i class="iconfont icon-bianji"></i>修改</button><button class="default_btn_small red_btn" onclick="Men.del_list({id:${data._id}},${meta.row},'../biz/sch/student/delStudent','subject_tab.table1')"><i class="iconfont icon-shanchu"></i>删除</button>`;
                    return html;
                }
            }],
            "language": {
                "url": "datatables_language.json"
            }
        })
    },
    //学科窗口 新建窗口
    newly_open1: function(){
        var html = $("#subject_template").html();
        Men.new_window('创建学科',html,'取消',this.newly_btn1);
        $(".center_popup").addClass("wid20");
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">创建</button>');
    },
    //点击新建学科窗口中的创建按钮 创建一条记录
    newly_btn1: function (){
        //校验
        $("#subject_form").formValidator();
        var r = $("#subject_form").validate().form();
        if (r) {
            //从input中传值 code是唯一ID，不用传，自动赋给它个
            var datas={};
            datas.code = $("#inputtext_01").val();
            datas.name = $("#inputtext_02").val();            
            // 保存新增到后台并判断正确与否        
            Men.judge_newly('../biz/sch/school/addSchool', datas);
        }
    }, 
    //学科窗口 打开编辑
    editor_open1: function(code){
        var html = $("#subject_template").html();
        Men.new_window('修改学科',html,'取消',this.editor_btn1);
        $(".center_popup").addClass("wid20");
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">保存</button>');
        //要用ajax找后台数据. 下一条是本地数据,程序员删掉！
        var datas = Men.list_post(code, this.subject_data(), '_id');
        console.info(datas);
        $("#code").val(datas._id); //放唯一ID号
        $("#inputtext_01").val(datas.code);
        $("#inputtext_02").val(datas.name);
    },
    //点击修改学科窗口中的保存按钮 修改一条记录
    editor_btn1: function (){
        //校验
        $("#subject_form").formValidator();
        var r = $("#subject_form").validate().form();
        if (r) {
            //从input中传值 code是唯一ID，不用传，自动赋给它个
            var datas={};
            datas._id = $("#code").val();
            datas.code = $("#inputtext_01").val();
            datas.name = $("#inputtext_02").val();            
            // 保存新增到后台并判断正确与否        
            Men.judge_editor('../biz/sch/school/addSchool', datas);
        }
    }, 
/*学科内容 结束*/    
/*考试类型内容 开始*/
    examination_type_data: function(){
        //用Ajax读取 loadExaminationTypes(sce.getServletContext());
        let datas=[{"_id":"001","code":"1","name":"单元测试"},{"_id":"002","code":"2","name":"月考"},{"_id":"003","code":"3","name":"模拟考试"},{"_id":"004","code":"4","name":"期中考试"},{"_id":"005","code":"5","name":"期末考试"},{"_id":"006","code":"6","name":"期初考试"}];
        return datas;
    },    
    //创建表
    create_examination_type_table:function(){
        this.table2 = $('#datatable_examination_type').DataTable({
            "data":this.examination_type_data(),
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
                    data: 'code'
                },
                {
                    data: 'name'
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
                    var html=`<button class="default_btn_small green_btn" onclick="subject_tab.editor_open2('${data._id}')"><i class="iconfont icon-bianji"></i>修改</button><button class="default_btn_small red_btn" onclick="Men.del_list({id:${data._id}},${meta.row},'../biz/sch/student/delStudent','subject_tab.table2')"><i class="iconfont icon-shanchu"></i>删除</button>`;
                    return html;
                }
            }],
            "language": {
                "url": "datatables_language.json"
            }
        })
    },
    //考试类型窗口 新建窗口
    newly_open2: function(){
        var html = $("#examination_type_template").html();
        Men.new_window('创建考试类型',html,'取消',this.newly_btn2);
        $(".center_popup").addClass("wid20");
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">创建</button>');
    },
    //点击新建考试类型窗口中的创建按钮 创建一条记录
    newly_btn2: function (){
        //校验
        $("#subject_form").formValidator();
        var r = $("#subject_form").validate().form();
        if (r) {
            //从input中传值 code是唯一ID，不用传，自动赋给它个
            var datas={};
            datas.code = $("#inputtext_01").val();
            datas.name = $("#inputtext_02").val();            
            // 保存新增到后台并判断正确与否        
            Men.judge_newly('../biz/sch/school/addSchool', datas);
        }
    }, 
    //考试类型窗口 打开编辑
    editor_open2: function(code){
        var html = $("#examination_type_template").html();
        Men.new_window('修改考试类型',html,'取消',this.editor_btn2);
        $(".center_popup").addClass("wid20");
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">保存</button>');
        //要用ajax找后台数据. 下一条是本地数据,程序员删掉！
        var datas = Men.list_post(code, this.examination_type_data(), '_id');
        console.info(datas);
        $("#code").val(datas._id); //放唯一ID号
        $("#inputtext_01").val(datas.code);
        $("#inputtext_02").val(datas.name);
    },
    //点击修改考试类型窗口中的保存按钮 修改一条记录
    editor_btn2: function (){
        //校验
        $("#subject_form").formValidator();
        var r = $("#subject_form").validate().form();
        if (r) {
            //从input中传值 code是唯一ID，不用传，自动赋给它个
            var datas={};
            datas._id = $("#code").val();
            datas.code = $("#inputtext_01").val();
            datas.name = $("#inputtext_02").val();            
            // 保存新增到后台并判断正确与否        
            Men.judge_editor('../biz/sch/school/addSchool', datas);
        }
    }, 
/*考试类型内容 结束*/
/*试题类型内容 开始*/
    test_type_data: function(){
        //用Ajax读取  loadQuestionTypes(sce.getServletContext());
        let datas=[{"_id":"001","code":"F","name":"填空题"},{"_id":"002","code":"T","name":"判断题"},{"_id":"003","code":"Q","name":"问答题"},{"_id":"004","code":"C","name":"选择题"},{"_id":"005","code":"S","name":"综合题"},{"_id":"006","code":"W","name":"写作题"}];
        return datas;
    },    
    //创建表
    create_test_type_table:function(){
        this.table3 = $('#datatable_test_type').DataTable({
            "data":this.test_type_data(),
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
                    data: 'code'
                },
                {
                    data: 'name'
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
                    var html=`<button class="default_btn_small green_btn" onclick="subject_tab.editor_open3('${data._id}')"><i class="iconfont icon-bianji"></i>修改</button><button class="default_btn_small red_btn" onclick="Men.del_list({id:${data._id}},${meta.row},'../biz/sch/student/delStudent','subject_tab.table3')"><i class="iconfont icon-shanchu"></i>删除</button>`;
                    return html;
                }
            }],
            "language": {
                "url": "datatables_language.json"
            }
        })
    },
    //试题类型窗口 新建窗口
    newly_open3: function(){
        var html = $("#test_type_template").html();
        Men.new_window('创建试题类型',html,'取消',this.newly_btn3);
        $(".center_popup").addClass("wid20");
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">创建</button>');
    },
    //点击新建试题类型窗口中的创建按钮 创建一条记录
    newly_btn3: function (){
        //校验
        $("#subject_form").formValidator();
        var r = $("#subject_form").validate().form();
        if (r) {
            //从input中传值 code是唯一ID，不用传，自动赋给它个
            var datas={};
            datas.code = $("#inputtext_01").val();
            datas.name = $("#inputtext_02").val();            
            // 保存新增到后台并判断正确与否        
            Men.judge_newly('../biz/sch/school/addSchool', datas);
        }
    }, 
    //试题类型窗口 打开编辑
    editor_open3: function(code){
        var html = $("#test_type_template").html();
        Men.new_window('修改试题类型',html,'取消',this.editor_btn3);
        $(".center_popup").addClass("wid20");
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">保存</button>');
        //要用ajax找后台数据. 下一条是本地数据,程序员删掉！
        var datas = Men.list_post(code, this.test_type_data(), '_id');
        console.info(datas);
        $("#code").val(datas._id); //放唯一ID号
        $("#inputtext_01").val(datas.code);
        $("#inputtext_02").val(datas.name);
    },
    //点击修改试题类型窗口中的保存按钮 修改一条记录
    editor_btn3: function (){
        //校验
        $("#subject_form").formValidator();
        var r = $("#subject_form").validate().form();
        if (r) {
            //从input中传值 code是唯一ID，不用传，自动赋给它个
            var datas={};
            datas._id = $("#code").val();
            datas.code = $("#inputtext_01").val();
            datas.name = $("#inputtext_02").val();            
            // 保存新增到后台并判断正确与否        
            Men.judge_editor('../biz/sch/school/addSchool', datas);
        }
    }, 
/*试题类型内容 结束*/   
/*试题类别内容 开始*/
    test_category_data: function(){
        //用Ajax读取  loadQuestionTypes(sce.getServletContext());
        let datas=[{"_id":"001","code":"F","name":"填空题"},{"_id":"002","code":"T","name":"判断题"},{"_id":"003","code":"Q","name":"问答题"},{"_id":"004","code":"C","name":"选择题"},{"_id":"005","code":"S","name":"综合题"},{"_id":"006","code":"W","name":"写作题"}];
        return datas;
    },    
    //创建表
    create_test_category_table:function(){
        this.table4 = $('#datatable_category_type').DataTable({
            "data":this.test_category_data(),
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
                    data: 'code'
                },
                {
                    data: 'name'
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
                    var html=`<button class="default_btn_small green_btn" onclick="subject_tab.editor_open4('${data._id}')"><i class="iconfont icon-bianji"></i>修改</button><button class="default_btn_small red_btn" onclick="Men.del_list({id:${data._id}},${meta.row},'../biz/sch/student/delStudent','subject_tab.table4')"><i class="iconfont icon-shanchu"></i>删除</button>`;
                    return html;
                }
            }],
            "language": {
                "url": "datatables_language.json"
            }
        })
    },
    //试题类别窗口 新建窗口
    newly_open4: function(){
        var html = $("#test_type_template").html();
        Men.new_window('创建试题类别',html,'取消',this.newly_btn4);
        $(".center_popup").addClass("wid20");
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">创建</button>');
    },
    //点击新建试别类型窗口中的创建按钮 创建一条记录
    newly_btn4: function (){
        //校验
        $("#subject_form").formValidator();
        var r = $("#subject_form").validate().form();
        if (r) {
            //从input中传值 code是唯一ID，不用传，自动赋给它个
            var datas={};
            datas.code = $("#inputtext_01").val();
            datas.name = $("#inputtext_02").val();            
            // 保存新增到后台并判断正确与否        
            Men.judge_newly('../biz/sch/school/addSchool', datas);
        }
    }, 
    //试题类型窗口 打开编辑
    editor_open4: function(code){
        var html = $("#test_category_template").html();
        Men.new_window('修改试题类别',html,'取消',this.editor_btn4);
        $(".center_popup").addClass("wid20");
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">保存</button>');
        //要用ajax找后台数据. 下一条是本地数据,程序员删掉！
        var datas = Men.list_post(code, this.test_category_data(), '_id');
        console.info(datas);
        $("#code").val(datas._id); //放唯一ID号
        $("#inputtext_01").val(datas.code);
        $("#inputtext_02").val(datas.name);
    },
    //点击修改试题类别窗口中的保存按钮 修改一条记录
    editor_btn4: function (){
        //校验
        $("#subject_form").formValidator();
        var r = $("#subject_form").validate().form();
        if (r) {
            //从input中传值 code是唯一ID，不用传，自动赋给它个
            var datas={};
            datas._id = $("#code").val();
            datas.code = $("#inputtext_01").val();
            datas.name = $("#inputtext_02").val();            
            // 保存新增到后台并判断正确与否        
            Men.judge_editor('../biz/sch/school/addSchool', datas);
        }
    }, 
/*试题类型内容 结束*/      
/*知识点内容 开始*/
    //system_code知识点体系编号，subject_code科目编号
    knowledgePoints_data: function(){
        //用Ajax读取  loadQuestionTypes(sce.getServletContext());
        let datas=[{"_id":"001","kpId":"211","kpSetId":"2","subCode":"1","kpCode":"11","kpName":"基础知识与运用","kpLevel":"1","parKpId":""},{"_id":"002","kpId":"2111","kpSetId":"2","subCode":"1","kpCode":"111","kpName":"拼音与汉字","kpLevel":"2","parKpId":"211"},{"_id":"003","kpId":"211101","kpSetId":"2","subCode":"1","kpCode":"11101","kpName":"字音拼读","kpLevel":"3","parKpId":"2111"},{"_id":"004","kpId":"211102","kpSetId":"2","subCode":"1","kpCode":"11102","kpName":"字音辨析","kpLevel":"3","parKpId":"2111"},{"_id":"005","kpId":"211103","kpSetId":"2","subCode":"1","kpCode":"11103","kpName":"汉字书写","kpLevel":"3","parKpId":"2111"},{"_id":"006","kpId":"211104","kpSetId":"2","subCode":"1","kpCode":"11104","kpName":"字形辨析与改正","kpLevel":"3","parKpId":"2111"},{"_id":"007","kpId":"211000","kpSetId":"2","subCode":"1","kpCode":"21","kpName":"XXXXXX","kpLevel":"1","parKpId":""},{"_id":"008","kpId":"212100","kpSetId":"2","subCode":"1","kpCode":"121","kpName":"XXXX","kpLevel":"2","parKpId":"211"},{"_id":"009","kpId":"212101","kpSetId":"2","subCode":"1","kpCode":"12101","kpName":"XXXXX","kpLevel":"3","parKpId":"2111"},{"_id":"011","kpId":"211","kpSetId":"1","subCode":"1","kpCode":"114","kpName":"只显示小学-语文","kpLevel":"1","parKpId":""},{"_id":"012","kpId":"211","kpSetId":"1","subCode":"3","kpCode":"115","kpName":"只显示小学-英语","kpLevel":"1","parKpId":""}];
        //这些是前端筛选，程序员不用复制。只要把知识点体系编号和科目编号传输给数据库筛选，返回筛选后的数据就行
        var system_code = $("#zsd_select1").val();
        var subject_code = $("#zsd_select2").val();
        var new_datas=[];
        $.each(datas,function(index,value){
            if(value.kpSetId == system_code && value.subCode == subject_code)
                new_datas.push(value);
        });
        return new_datas;
    },   
    //知识点体系表
    knowledgePoints_system_data: function(){
        let datas=[{"id":"1","name":"小学"},{"id":"2","name":"初中"},{"id":"3","name":"高中"}];
        return datas;
    },
    //科目类型表
    subject_type_data:function(){
        let datas=[{"id":"1","name":"语文"},{"id":"2","name":"数学"},{"id":"3","name":"英语"},{"id":"4","name":"生物"},{"id":"5","name":"物理"},{"id":"6","name":"化学"}];
        return datas;
    },
    //将知识点体系表的内容读入页面select中
    bind_knowledgePoints_zsd_select: function(){
        let html="";
        $.each(this.knowledgePoints_system_data(), function(index,value){
            html+=`<option value='${value.id}'>${value.name}</option>`;
        });
        $("#zsd_select1").html(html);
    },
    //将科目表的内容读入页面select中
    bind_subject_type_zsd_select: function(){
        let html="";
        $.each(this.subject_type_data(), function(index,value){
            html+=`<option value='${value.id}'>${value.name}</option>`;
        });
        $("#zsd_select2").html(html);
        $("#nld_select2").html(html);
    },
    //创建表
    create_knowledgePoints_table:function(){
        trees=this.crea_zsd;
        //程序员直接用url加知识点体系编号、科目编号返回数据库内容        
        $('#treegrid_knowledgePoints').treegridData({
            id: 'kpId',
            parentColumn: 'parKpId',
            data: this.knowledgePoints_data(),
            //type: "GET", //请求数据的ajax类型                
            //url: 'getdata.json',   //请求数据的ajax的url
            ajaxParams: {}, //请求数据的ajax的data属性
            animate: true, //是否开启动画
            expandColumn: null, //在哪一列上面显示展开按钮
            fitColumns: true, //设置为true，则会自动扩大或缩小列的尺寸以适应网格的宽度并且防止水平滚动。
            striped: true, //是否各行渐变色
            bordered: true, //是否显示边框
            //expandAll: false,  //是否全部展开
            columns: [
                {
                    title: '知识点名称',
                    field: 'kpName'
                    },
                {
                    title: 'ID',
                    field: 'kpId'
                    },
                {
                    title: '知识点体系',
                    field: 'kpSetId'
                    },
                {
                    title: '科目',
                    field: 'subCode'
                    },
                {
                    title: '知识点编号',
                    field: 'kpCode'
                    },
                {
                    title: '知识点层级',
                    field: 'kpLevel'
                    },
                {
                    title: '父知识点ID',
                    field: 'parKpId'
                    },
                {
                    title: '编辑'
                    }
                ]
        });
    },
    crea_zsd:function(treeNode){
        var htmlStr = '';
    htmlStr += `<button class="default_btn_small green_btn" title="修改" onclick="subject_tab.editor_open5('${treeNode.kpId}')"><i class="iconfont icon-bianji"></i>修改</button>`;
    htmlStr += `<button class="default_btn_small red_btn" title="删除" onclick="subject_tab.del_btn5('${treeNode.kpId}')"><i class="iconfont icon-shanchu"></i>删除</button>`;
    htmlStr += `<button class="default_btn_small gray_btn" title="增加子层级" onclick="subject_tab.addchildren_open5('${treeNode.kpId}')"><i class="iconfont icon-guanli"></i>增加子层级</button>`;
   // htmlStr += `<button class="default_btn_small purple_btn" title="增加角色" onclick="treegrid.addrole_btn('${treeNode.id}', '${treeNode.menuName}')"><i class="iconfont icon-guanli"></i>增加角色</button>`;
    return htmlStr;
    },
    //将知识点体系表的内容读入窗口select中
    bind_knowledgePoints_select: function(){
        let html="";
        $.each(this.knowledgePoints_system_data(), function(index,value){
            html+=`<option value='${value.id}'>${value.name}</option>`;
        });
        $("#inputtext_02").html(html);
    },
    //将科目表的内容读入窗口select中
    bind_subject_type_select: function(){
        let html="";
        $.each(this.subject_type_data(), function(index,value){
            html+=`<option value='${value.id}'>${value.name}</option>`;
        });
        $("#inputtext_03").html(html);
    },
    //知识点窗口 新建窗口
    newly_open5: function(){
        var html = $("#knowledgePoints_template").html();
        Men.new_window('创建知识点',html,'取消',this.newly_btn5);
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">创建</button>');
        this.bind_knowledgePoints_select();
        this.bind_subject_type_select();
    },    
    //点击新建知识点窗口中的创建按钮 创建一条记录
    newly_btn5: function (){
        //校验
        $("#subject_form").formValidator();
        var r = $("#subject_form").validate().form();
        if (r) {
            //从input中传值 code是唯一ID，不用传，自动赋给它个
            var datas={};
            datas.code = $("#inputtext_01").val();
            datas.name = $("#inputtext_02").val();            
            // 保存新增到后台并判断正确与否        
            Men.judge_newly('../biz/sch/school/addSchool', datas);
            subject_tab.reset_treegrid5();
        }
    }, 
    //知识点窗口 打开编辑
    editor_open5: function(code){
        var html = $("#knowledgePoints_template").html();
        Men.new_window('修改知识点',html,'取消',this.editor_btn5);
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">保存</button>');
        this.bind_knowledgePoints_select();
        this.bind_subject_type_select();
        //要用ajax找后台数据. 下一条是本地数据,程序员删掉！
        var datas = Men.list_post(code, this.knowledgePoints_data(), 'kpId');
            console.info(datas);
            $("#code").val(datas._id); //放唯一ID号
            $("#inputtext_01").val(datas.kpName);
            $("#inputtext_02").val(datas.kpSetId);
            $("#inputtext_03").val(datas.subCode);
            $("#inputtext_04").val(datas.kpCode);
        
    },
    //点击修改知识点窗口中的保存按钮 修改一条记录
    editor_btn5: function (){
        //校验
        $("#subject_form").formValidator();
        var r = $("#subject_form").validate().form();
        if (r) {
            //从input中传值 code是唯一ID，不用传，自动赋给它个
            var datas={};
            datas._id = $("#code").val();
            datas.code = $("#inputtext_01").val();
            datas.name = $("#inputtext_02").val();            
            // 保存新增到后台并判断正确与否        
            Men.judge_editor('../biz/sch/school/addSchool', datas);
            subject_tab.reset_treegrid5();
        }
    }, 
    //增加子层级窗口
    addchildren_open5: function(code){
        var html = $("#knowledgePoints_template").html();
        Men.new_window('增加知识点子层级',html,'取消',this.addchildren_btn5);
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">创建</button>');
        this.bind_knowledgePoints_select();
        this.bind_subject_type_select();
        // code 是当前菜单ID，也就是新建的层级的父层ID！ 把它放入隐藏域，等会创建时再读取
        $("#Parentcode").val(code);
    },    
    //点击新建知识点窗口中的创建按钮 创建一条记录
    addchildren_btn5: function (){
        //读取父层ID
        var PID = $("#Parentcode").val();
        //校验
        $("#subject_form").formValidator();
        var r = $("#subject_form").validate().form();
        if (r) {
            //从input中传值 code是唯一ID，不用传，自动赋给它个
            var datas={};
            datas.code = $("#inputtext_01").val();
            datas.name = $("#inputtext_02").val();            
            // 保存新增到后台并判断正确与否        
            Men.judge_newly('../biz/sch/school/addSchool', datas);
            subject_tab.reset_treegrid5();
        }
    }, 
    //删除按钮
    del_btn5: function (code) {
        alert("用Ajax传值到后台删除数据库中这一条数据，再重新读取数据库渲染表！");
        /**** ajax删除
        Men.del_list({id:`${code}`},0,'../biz/sch/school/delSchool');
        ****/
        this.reset_treegrid5();
    },
    //刷新treegrid
    reset_treegrid5: function () {    	
       $("#treegrid_knowledgePoints").empty();
       var self = this;
       setTimeout(function(){self.create_knowledgePoints_table();},500);       
    },
    //筛选知识点名称
    search_zsd: function(e){
        var search_text = $(e).val();
        var trs = $("#treegrid_knowledgePoints tbody>tr");
        $.each(trs, function(index,value){
            if($(this).children().eq(0).text().indexOf(search_text)>-1)
                $(this).show();
            else
                $(this).hide();
        });
    },
/*知识点内容 结束*/      
/*能力点内容 开始*/
    capabilityPoints_data: function(){
        //用Ajax读取  loadQuestionTypes(sce.getServletContext());
        let datas=[{"_id":"001","apId":"211","apSetId":"2","subCode":"1","apCode":"11","apName":"识记能力","apLevel":"1","parApId":""},{"_id":"002","apId":"212","apSetId":"2","subCode":"1","apCode":"12","apName":"理解能力","apLevel":"1","parApId":""},{"_id":"003","apId":"2111","apSetId":"2","subCode":"1","apCode":"111","apName":"识记常用汉字","apLevel":"2","parApId":"211"},{"_id":"004","apId":"2121","apSetId":"2","subCode":"1","apCode":"121","apName":"理解中文概念","apLevel":"2","parApId":"212"},{"_id":"005","apId":"2122","apSetId":"1","subCode":"1","apCode":"121","apName":"弱-语文","apLevel":"1","parApId":""}];
        //这些是前端筛选，程序员不用复制。只要把能力点体系编号和科目编号传输给数据库筛选，返回筛选后的数据就行
        var system_code = $("#nld_select1").val();
        var subject_code = $("#nld_select2").val();
        var new_datas=[];
        $.each(datas,function(index,value){
            if(value.apSetId == system_code && value.subCode == subject_code)
                new_datas.push(value);
        });
        return new_datas;
    },    
    //能力点体系表
    capabilityPoints_system_data: function(){
        let datas=[{"id":"1","name":"弱"},{"id":"2","name":"中"},{"id":"3","name":"强"}];
        return datas;
    },
    //将能力点体系表的内容读入页面select中
    bind_capabilityPoints_nld_select: function(){
        let html="";
        $.each(this.capabilityPoints_system_data(), function(index,value){
            html+=`<option value='${value.id}'>${value.name}</option>`;
        });
        $("#nld_select1").html(html);
    },
    //创建表
    create_capabilityPoints_table:function(){
        trees=this.crea_nld;
        $('#treegrid_capabilityPoints').treegridData({
            id: 'apId',
            parentColumn: 'parApId',
            data: this.capabilityPoints_data(),
            //type: "GET", //请求数据的ajax类型                
            //url: 'getdata.json',   //请求数据的ajax的url
            ajaxParams: {}, //请求数据的ajax的data属性
            animate: true, //是否开启动画
            expandColumn: null, //在哪一列上面显示展开按钮
            fitColumns: true, //设置为true，则会自动扩大或缩小列的尺寸以适应网格的宽度并且防止水平滚动。
            striped: true, //是否各行渐变色
            bordered: true, //是否显示边框
            //expandAll: false,  //是否全部展开
            columns: [
                {
                    title: '能力点名称',
                    field: 'apName'
                    },
                {
                    title: 'ID',
                    field: 'apId'
                    },
                {
                    title: '能力点体系',
                    field: 'apSetId'
                    },
                {
                    title: '科目',
                    field: 'subCode'
                    },
                {
                    title: '能力点编号',
                    field: 'apCode'
                    },
                {
                    title: '能力点层级',
                    field: 'apLevel'
                    },
                {
                    title: '父能力点ID',
                    field: 'parApId'
                    },
                {
                    title: '编辑'
                    }
                ]
        });
    },
    crea_nld:function(treeNode){
        var htmlStr = '';
    htmlStr += `<button class="default_btn_small green_btn" title="修改" onclick="subject_tab.editor_open6('${treeNode.apId}')"><i class="iconfont icon-bianji"></i>修改</button>`;
    htmlStr += `<button class="default_btn_small red_btn" title="删除" onclick="subject_tab.del_btn6('${treeNode.apId}')"><i class="iconfont icon-shanchu"></i>删除</button>`;
    htmlStr += `<button class="default_btn_small gray_btn" title="增加子层级" onclick="subject_tab.addchildren_open6('${treeNode.apId}')"><i class="iconfont icon-guanli"></i>增加子层级</button>`;
   // htmlStr += `<button class="default_btn_small purple_btn" title="增加角色" onclick="treegrid.addrole_btn('${treeNode.id}', '${treeNode.menuName}')"><i class="iconfont icon-guanli"></i>增加角色</button>`;
    return htmlStr;
    },
    //将能力点体系表的内容读入窗口select中
    bind_capabilityPoints_select: function(){
        let html="";
        $.each(this.capabilityPoints_system_data(), function(index,value){
            html+=`<option value='${value.id}'>${value.name}</option>`;
        });
        $("#inputtext_02").html(html);
    },
    //能力点窗口 新建窗口
    newly_open6: function(){
        var html = $("#capabilityPoints_template").html();
        Men.new_window('创建能力点',html,'取消',this.newly_btn6);
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">创建</button>');
        this.bind_capabilityPoints_select();
        this.bind_subject_type_select();
    },
    //点击新建能力点窗口中的创建按钮 创建一条记录
    newly_btn6: function (){
        //校验
        $("#subject_form").formValidator();
        var r = $("#subject_form").validate().form();
        if (r) {
            //从input中传值 code是唯一ID，不用传，自动赋给它个
            var datas={};
            datas.code = $("#inputtext_01").val();
            datas.name = $("#inputtext_02").val();            
            // 保存新增到后台并判断正确与否        
            Men.judge_newly('../biz/sch/school/addSchool', datas);
        }
    }, 
    //能力点窗口 打开编辑
    editor_open6: function(code){
        var html = $("#capabilityPoints_template").html();
        Men.new_window('修改能力点',html,'取消',this.editor_btn6);
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">保存</button>');
        this.bind_capabilityPoints_select();
        this.bind_subject_type_select();
        //要用ajax找后台数据. 下一条是本地数据,程序员删掉！
        var datas = Men.list_post(code, this.capabilityPoints_data(), 'apId');
        console.info(datas);
        $("#code").val(datas._id); //放唯一ID号
        $("#inputtext_01").val(datas.apName);
        $("#inputtext_02").val(datas.apSetId);
        $("#inputtext_03").val(datas.subCode);
        $("#inputtext_04").val(datas.apCode);
    },
    //点击修改试题类别窗口中的保存按钮 修改一条记录
    editor_btn6: function (){
        //校验
        $("#subject_form").formValidator();
        var r = $("#subject_form").validate().form();
        if (r) {
            //从input中传值 code是唯一ID，不用传，自动赋给它个
            var datas={};
            datas._id = $("#code").val();
            datas.code = $("#inputtext_01").val();
            datas.name = $("#inputtext_02").val();            
            // 保存新增到后台并判断正确与否        
            Men.judge_editor('../biz/sch/school/addSchool', datas);
        }
    }, 
    //增加子层级窗口
    addchildren_open6: function(code){
        var html = $("#capabilityPoints_template").html();
        Men.new_window('增加能力点子层级',html,'取消',this.addchildren_btn6);
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">创建</button>');
        this.bind_capabilityPoints_select();
        this.bind_subject_type_select();
        // code 是当前菜单ID，也就是新建的层级的父层ID！ 把它放入隐藏域，等会创建时再读取
        $("#Parentcode").val(code);
    },    
    //点击新建能力点窗口中的创建按钮 创建一条记录
    addchildren_btn6: function (){
        //读取父层ID
        var PID = $("#Parentcode").val();
        //校验
        $("#subject_form").formValidator();
        var r = $("#subject_form").validate().form();
        if (r) {
            //从input中传值 code是唯一ID，不用传，自动赋给它个
            var datas={};
            datas.code = $("#inputtext_01").val();
            datas.name = $("#inputtext_02").val();            
            // 保存新增到后台并判断正确与否        
            Men.judge_newly('../biz/sch/school/addSchool', datas);
        }
    }, 
    //删除按钮
    del_btn6: function (code) {
        alert("用Ajax传值到后台删除数据库中这一条数据，再重新读取数据库渲染表！");
        /**** ajax删除
        Men.del_list({id:`${code}`},0,'../biz/sch/school/delSchool');
        ****/
        this.reset_treegrid6();
    },
    //刷新treegrid
    reset_treegrid6: function () {
        $("#treegrid_capabilityPoints").empty();
        var self = this;
        setTimeout(function(){self.create_capabilityPoints_table();},500);   
    },
    //筛选能力点名称
    search_nld: function(e){
        var search_text = $(e).val();
        var trs = $("#treegrid_capabilityPoints tbody>tr");
        $.each(trs, function(index,value){
            if($(this).children().eq(0).text().indexOf(search_text)>-1)
                $(this).show();
            else
                $(this).hide();
        });
    },
/*能力点内容 结束*/    
    //自动运行
    init: function(){
        this.create_top_menu();      
    },   
};
subject_tab.init();
