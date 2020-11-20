//数据集
var treeData = [{
    "menuCode": "101",
    "Name": "百度科技",
    "sys":{"sysCode":"TK"},
    "parent": {
        "giad": "中间1"
    },
    "Desc": "搜索巨头"
}, {
    "menuCode": "102",
    "Name": "百度事业部",
    "sys":{"sysCode":"TK"},
    "parent": {
        "giad": "中间2"
    },
    "Desc": "搜索巨头1",
    "parentCode": "101"
}, {
    "menuCode": "103",
    "Name": "百度人事部",
    "sys":{"sysCode":"UN"},
    "parent": {
        "giad": "中间3"
    },
    "Desc": "搜索巨头1",
    "parentCode": "101"
}, {
    "menuCode": "104",
    "Name": "百度三层部",
    "sys":{"sysCode":"UN"},
    "parent": {
        "giad": "中间4"
    },
    "Desc": "搜索巨头1",
    "parentCode": "102"
}, {
    "menuCode": "105",
    "Name": "百度5部",
    "sys":{"sysCode":"TK"},
    "parent": {
        "giad": "中间5"
    },
    "Desc": "搜索巨头5",
    "parentCode": "103"
}, {
    "menuCode": "106",
    "Name": "百度6部",
    "sys":{"sysCode":"EN"},
    "parent": {
        "giad": "中间6"
    },
    "Desc": "搜索巨头6",
    "parentCode": "102"
}, {
    "menuCode": "107",
    "Name": "百度7部",
    "sys":{"sysCode":"EN"},
    "parent": {
        "giad": "中间7"
    },
    "Desc": "搜索巨头7",
    "parentCode": "105"
}, {
    "menuCode": "108",
    "Name": "百度8部",
    "sys":{"sysCode":"EN"},
    "parent": {
        "giad": "中间8"
    },
    "Desc": "搜索巨头8",
    "parentCode": "105"
}];
var treegrid = {
    //添加按钮
    add_btn: function () {
        //校验
        $("#add_form").formValidator();
        var r = $("#add_form").validate().form();
        if (r) {
            var list = {};
            list.Id = $("#tree_Id").val();
            list.Name = $("#tree_Name").val();
            list.Desc = $("#tree_Desc").val();
            list.parentCode = $("#tree_parentCode").val();
            treeData.push(list);
            treegrid.reset_treegrid();
            treegrid.clearError();
        }
    },
    //清空错误提示和校验
    clearError: function () {
        document.getElementById("add_form").reset();
        setTimeout(function () {
            $("#add_form input").removeClass("error");
            $("#add_form label.error").remove();
        }, 100);
    },
    //生成treeTable
    create_treeTable: function () {
        $('#tb').treegridData({
            id: 'menuCode',
            parentColumn: 'parentCode',
            data: treeData,
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
                    title: '机构名称',
                    field: 'Name'
                    },
                {
                    title: '编号',
                    field: 'menuCode'
                    },
                {
                    title: '系统编号',
                    field: 'sys.sysCode'
                    },
                {
                    title: '机构描述',
                    field: 'Desc'
                    },
                {
                    title: '父编号',
                    field: 'parentCode'
                    },
                {
                    title: '编辑'
                    }
                ]
        });
        var table = $("#tb").DataTable({
                "paging": false,
                "ordering":false, 
                "dom": '', 
                language: {
                    "url": "datatables_language.json"
                }
            });
            $("#menu_sysCode").on("change", function(){
            	var html = $(this).val();
            	table.column(2).search(html).draw();
            });
    },
    //修改窗口 打开
    editor_open: function (code) {
        var html = $("#menu_template").html();
        Men.new_window('修改菜单信息', html, '取消', this.editor_btn);
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">保存</button>');
        //要用ajax找后台数据. 下一条是本地数据,程序员删掉！
        var datas = Men.list_post(code, treeData, 'Id');
        /****ajax找后台数据 
        var data={code: code};    
        var datas=Men.post_data('../biz/sch/school/addSchool',data);    
        ****/
        $("#inputtext_01").val(datas.Id); //放唯一ID号
        $("#inputtext_02").val(datas.Name);
        $("#inputtext_03").val(datas.Desc);
        $("#inputtext_04").val(datas.parentCode);
    },
    //修改窗口 按钮
    editor_btn: function () {
        //校验
        $("#menu").formValidator();
        var r = $("#menu").validate().form();
        if (r) {
            //从input中传值
            var datas = {};
            datas.Id = $("#inputtext_01").val();
            datas.Name = $("#inputtext_02").val();
            datas.Desc = $("#inputtext_03").val();
            datas.parentCode = $("#inputtext_04").val();
            /***** ajax保存修改到后台并判断正确与否        
            Men.judge_editor('../biz/sch/school/addSchool', datas);
           *****/
            //------------专用前端 == 专用前端，后端请把这段删掉
            $.each(treeData, function (index, value) {
                if (value.Id == datas.Id) {
                    treeData.splice(index, 1, datas);
                    Men.close_window();
                    return;
                }
            });
            //------------专用前端
            treegrid.reset_treegrid();
        }
    },
    //删除按钮
    del_btn: function (code) {
        alert(code);
        /**** ajax删除
        Men.del_list({id:`${code}`},0,'../biz/sch/school/delSchool');
        ****/
        //---- 专用前端，后端不要
        $.each(treeData, function (index, value) {
            if (value.Id == code) {
                treeData.splice(index, 1);
                return false;
            }
        });
        //------------专用前端结束
        this.reset_treegrid();
    },
    //刷新treegrid
    reset_treegrid: function () {
        Men.load_content('schoolmanage_right','menu_new');
    },
    //增加子菜单按钮
    addmenu_btn: function (code) {
        $("#tree_parentCode").val(code);
    },
    //打开导入数据窗口
    import_menu_data: function(){
        var html=`<div class="col-12"><div class="text-right" style="margin-bottom:.5rem"><button class="default_btn" onclick="treegrid.downTemplate()">下载模板</button></div><input type="file" name="file" class="dropify-fr"
					data-default-file="" mulpiple /></div>`;
        Men.new_window('导入数据',html,'取消',treegrid.import_data_btn);
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">导入</button>');
        //初始化上传控件
        Men.dropify();
    },
    //导入数据窗口 导入按钮
    import_data_btn: function(){
       alert($("input[type='file']").val());
        Tomd.toast('','warning','导入成功！');
        Men.close_window(); 
    },
    //下载模板按钮
    downTemplate: function(){
        alert("下载模板");
    },
    //导出数据按钮
    export_menu_data: function(){
        alert("导出的数据已在打印窗口中！");
        var export_data = [];
        var trs = $("#tb").find("tr");
        $.each(trs, function(){
            var chk = $(this).find("input[type='checkbox']");
            if(chk.is(":checked"))
                {
                    var kid = chk.attr("data-id");
                    $.each(treeData, function(index,value){
                        if(kid == value.Id)
                            export_data.push(value);
                    });
                }
        });
        console.log(export_data);
    },
    //增加角色按钮，弹出窗口
    addrole_btn: function(code){
        var html = $("#addrole_template").html();
        Men.new_window('添加角色',html,'取消',treegrid.create_role_btn);
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">创建</button>');
        this.false_role();
    },
    //创建角色按钮
    create_role_btn: function(){
        let self = treegrid;
        var role_children = $(".create_role_div").find("input[type='checkbox']");
        var role_data = [];
        var nums =[];
        $.each(role_children, function(){
            var obj = $(this);
            if(obj.is(":checked")){
                var obj_data = {};
                obj_data.code = obj.val();
                obj_data.name =obj.parent().text();
                role_data.push(obj_data);
                nums.push(parseInt(obj.val()))
            }
        });
        alert("选中的角色已在打印窗口中！");
        /*console.info("以下为窗口中选中的角色json");
        console.log(role_data);
        console.info("以下为窗口中选中的角色数组");
        console.log(nums);*/
        let nums1 = self.role_select_nums;        
        let max = self.check_array(nums,nums1);
        console.warn("新增的角色"+max);        
        let min = self.check_array(nums1,nums);
        console.warn("减少的角色"+min);
        Men.close_window();
    },    
    //假设数据库里选中了这几个角色
    role_select_nums:[10,11],
    //数据库里的角色选中的方法
    false_role: function(){
        var role_children = $(".create_role_div").find("input[type='checkbox']");
        var nums = this.role_select_nums;
       $.each(role_children, function(){
            var code = parseInt($(this).val());
            if(nums.indexOf(code)>-1)
                {$(this).prop("checked",true);
                }
        }); 
    },
    //比较数组
    check_array: function(a,b){
        let c=[];
        $.each(a, function(index,value){
            if(b.indexOf(value)<=-1)
                c.push(value);
        });
        return c;
    },
    //增加子菜单按钮
         addchildren_btn: function(code){
        	 $("#parentCode").val(code);
         },
    //功能管理链接跳转
         management_href: function (menuCode,menuName){
             sessionStorage.setItem('menuCode',menuCode);
             sessionStorage.setItem('menuName',menuName);
        	 Men.load_content('schoolmanage_right','functionManagement');
         },
    //自动运行
    init: function () {
        this.create_treeTable();
    }
};
treegrid.init();
//增加功能按钮
function trees(treeNode) {
    var htmlStr = '';
    htmlStr += `<button class="default_btn_small green_btn" title="修改" onclick="treegrid.editor_open('${treeNode.menuCode}')"><i class="iconfont icon-bianji"></i>修改</button>`;
    htmlStr += `<button class="default_btn_small red_btn" title="删除" onclick="treegrid.del_btn('${treeNode.menuCode}')"><i class="iconfont icon-shanchu"></i>删除</button>`;
    htmlStr += `<button class="default_btn_small gray_btn" title="增加子菜单" onclick="treegrid.addchildren_btn('${treeNode.menuCode}')"><i class="iconfont icon-guanli"></i>增加子菜单</button>`;
    htmlStr += `<button class="default_btn_small purple_btn" title="增加角色" onclick="treegrid.addrole_btn('${treeNode.menuCode}', '${treeNode.menuName}')"><i class="iconfont icon-guanli"></i>增加角色</button>`;
    htmlStr += `<button class="default_btn_small grayness_btn" title="功能管理" onclick="treegrid.management_href('${treeNode.menuCode}', '${treeNode.menuName}')"><i class="iconfont icon-guanli"></i>功能管理</button>`;
    return htmlStr;
};
