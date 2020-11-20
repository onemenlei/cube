var QUERYCOUNT = {
    //平安到校信息表数据
    school_data: function(code, data, callback){ //code 是时间代号，data是自定义开始时间和结束时间，如没有则为空        
        var res={code:0,data:[ //grade 年级，clazz 班级，name 学生姓名，contact 家长联系方式，checkinTime 打卡时间，state 打卡状态
            {grade:9,clazz:3,name:"八婆",contact:"微信",checkinTime:"1599026775214",state:"到校"},{grade:5,clazz:6,name:"苹果",contact:"微信",checkinTime:"1599026775225",state:"离校"}
        ]};
        if(code==2)
            res.data=[{grade:7,clazz:2,name:"腾讯",contact:"短信",checkinTime:"15232424775214",state:"离校"}];
        if(code==3)
            res.data=[{grade:2,clazz:1,name:"本",contact:"微信",checkinTime:"1599026772214",state:"离校"}];
        if(code==-1)
            res.data=[{grade:8,clazz:3,name:"有那1",contact:"短信",checkinTime:"1599026772144",state:"离校"},{grade:3,clazz:3,name:"西恩",contact:"微信",checkinTime:"1599026772144",state:"到校"}];
        callback(res);
    },
    //生成datatables
    create_table:function(data){ //code是筛选的编号
        table = $('#datatable_dxsj').DataTable({
            "data": data,
            "bAutoWidth": false, //是否自适应宽度
            "bInfo": true, //开关，是否显示表格的一些信息(当前显示XX-XX条数据，共XX条)
            "bPaginate": true, //开关，是否显示分页器
            "searching": false,
            /*"ajax": {
                "url": "datatable1.json",
                //"success":function(result){alert("down");console.log(result)},
                "error":function(error){alert(error)},
                "dataSrc": "",
            },*/
            "columns": [
                {
                    data: 'grade'
                },
                {
                    data: 'clazz'
                },
                {
                    data: 'name'
                },
                {
                    data: 'contact'
                },
                {
                    data: 'checkinTime'
                },
                {
                    data: 'state'
                }
            ],
            "columnDefs":[
                {
                "targets":4,
                "data":null,
                "render":function(data,type,row,meta){
                    var html=new Date(parseInt(row.checkinTime)).Format("yyyy-M-d h:m:s");
                    return html;
                }
            }],
            "language": {
                "url": "datatables_language.json"
            }
        });
        $("#table_search").off("click").on("click", function(){
            table.search($("#search_value").val().trim()).draw();
        });
    },
    //生成平安到校信息表
    create_dxsjTable: function(){
        var self=this;
        var code = $("#switch_time span.active").data("code"),data={};
        if(code==-1){
            data.startTime=new Date($("#startTime").val()).getTime();
            data.endTime=new Date($("#endTime").val()).getTime();
        }
        this.school_data(code, data, function(res){console.info(data)
            if(res.code==0){
                if($("#datatable_dxsj tbody tr").length<1){
                    self.create_table(res.data);
                }else{
                    table.clear();
                    table.rows.add(res.data);
                    table.draw(false); 
                   };
            }
        });
    },
    //切换时间
    switch_time(){
        var self=this;
        $("#showDIV").show();
        $("#switch_time span").on("click", function(){
            $(this).addClass("active").siblings().removeClass("active");
            if($(this).data("code")==-1){
                $("#customData").removeClass("hidden")
            }                
            else{
                $("#customData").addClass("hidden")
                self.create_dxsjTable();
            }               
        });
        $("#searchTime").on("click", function(){
            if($("#startTime").val()!=""&&$("#endTime").val()!=""){
                self.create_dxsjTable();
            }else{
                Tomd.toast("","error","开始日期与结束日期选了吗？");
            }
        });
        $("#switch_time span:eq(0)").click();
    },
    //查询按钮
    searchDIV(){
        var self=this;
        $("#search_school_button").on("click", function(){
            var text = $("#search_school_input").val().trim();
            if(text==""){
                Tomd.toast("","error","请重新填写，学校编号不能为空！");
            }else{
                self.switch_time();
            };
        });
    },
    init(){
        this.searchDIV();
    },
}
QUERYCOUNT.init();