//模拟数据库的数据
var data=[{"_id":"0001","code":"021","name":"东方区","type":"2","parent":"110000"}];
///行政区划
var xzqh={
    //生成datatables
    create_table:function(){
         table = $('#datatable_xzqh').DataTable({
            "data":data,
            "bAutoWidth": false, //是否自适应宽度
            "bProcessing": true, //加载时
            /*"ajax": {
                "url": "datatable1.json",
                //"success":function(result){alert("down");console.log(result)},
                "error":function(error){alert(error)},
                "dataSrc": "data",
            },*/
            "columns": [
                {
                    data: "_id"
                },
                {
                    data: "code",
                },
                {
                    data: "name"
                },
                {
                    data: "type"
                },
                {
                    data: "parent"
                },
                {
                    "data": null, //此列不绑定数据源
                    "sWidth" : "180px",
					"orderable": false
                }
            ],
            "columnDefs":[
                {
                "targets":5,
                "data":null,
                "render":function(data, type, row, meta){
                    var html=`<button class="default_btn_small green_btn" onclick="xzqh.editor_open(${data._id})"><i class="iconfont icon-bianji"></i>修改</button> <button class="default_btn_small red_btn" onclick="Men.del_list({id:${data._id}},${meta.row},'../biz/sch/school/delSchool')"><i class="iconfont icon-shanchu"></i>删除</button>`;
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
        $("#xzqh1").formValidator();
        var r = $("#xzqh1").validate().form();
        if (r) {
            var grade = $("#inputvalue_01").val();
            var datas = {};
            // 保存修改到后台并判断正确与否        
            Men.judge_newly('../biz/sch/school/addSchool', datas);
            xzqh.school_reset();
            document.getElementById("xzqh1").reset();
        }
    },
    //编辑窗口 打开
    editor_open: function(code){
        var html = $("#xzqh_template").html();
        Men.new_window('行政区划管理', html, '取消', xzqh.editor_btn);
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">保存</button>');
        //要用ajax找后台数据. 下一条是本地数据,程序员删掉！
        var datas = Men.list_post(code, data, '_id');
        /****ajax找后台数据 
        var data={code: code};    
        var datas=Men.post_data('../biz/sch/school/addSchool',data);    
        ****/
        $("#inputtext_01").val(datas._id);
        $("#inputtext_02").val(datas.name);
        $("#inputtext_03").val(datas.code);
        $("#inputtext_04").val(datas.type);
        $("#inputtext_05").val(datas.parent);
    },
    //编辑窗口 保存按钮
    editor_btn: function(){
        //校验
        $("#xzqh").formValidator();
        var r = $("#xzqh").validate().form();
        if (r) {
            //从input中传值
            var code = $("#code").val();
            var datas = {};
        // 保存修改到后台并判断正确与否        
        Men.judge_editor('../biz/sch/school/addSchool', datas);
        };
    },
    //第一项反白选中，内容显示第一项
    school_reset: function(){        
        $("#xzqh_ul.label_top_menu_ul li").eq(0).addClass("selected").siblings().removeClass("selected");
        $("#xzqh_ul.label_top_menu_ul+div").children().eq(0).show().siblings().hide();
    },
    //设定页面一加载就运行
    init: function(){
      xzqh.school_reset();    
      xzqh.create_table();  
    }
}

//加载即运行
xzqh.init();      