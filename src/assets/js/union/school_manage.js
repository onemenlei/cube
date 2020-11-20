var SCHOOL_MANAGE = {
    //学校管理数据
    school_data: function(callback){
        var res={code:0,data:[ //code 学校编号，schoolName 学校名称，schoolType  学校类型，schoolFareweel 学校办别，administrative 行政区划， townType 城乡类型
            {code:109121,schoolName:"测试学校1",schoolType:"小学",schoolFarewell:"公办",administrative:"四川成都",townType:"主城区"},
            {code:109122,schoolName:"测试学校2",schoolType:"中学",schoolFarewell:"公办",administrative:"四川成都",townType:"副城区"}
        ]};
        callback(res);
    },
    //生成datatables
    create_table:function(code, data){ //code是筛选的编号
        table = $('#datatable_school').DataTable({
            "data": data,
            "bAutoWidth": false, //是否自适应宽度
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
                    data: 'schoolName'
                },
                {
                    data: 'schoolType'
                },
                {
                    data: 'schoolFarewell'
                },
                {
                    data: 'administrative'
                },
                {
                    data: 'townType'
                },
                {
                    data: null
                }
            ],
            "columnDefs":[
                {
                "targets":6,
                "data":null,
                "searchable":false,
                "render":function(data,type,row,meta){
                    var html=`<button class="default_btn_small purple_btn" onclick="SCHOOL_MANAGE.manageBtn('${data.code}')"><i class="iconfont icon-guanli"></i>管理</button>
                    <button class="default_btn_small red_btn" onclick="Men.del_list({id:${data.code}},${meta.row},'../biz/sch/school/delSchool')"><i class="iconfont icon-shanchu"></i>移除</button>`;
                    return html;
                }
            }],
            "language": {
                "url": "datatables_language.json"
            }
        });
    },
    //生成学校管理表
    create_schoolManageTable: function(){
        var self=this;
        this.school_data(function(res){
            if(res.code==0){
                var code = $("#screen_ul li.hover").data("code");
                if($("#datatable_school tbody tr").length<1){
                    self.create_table(code, res.data);
                }else{
                    table.clear();
                    table.rows.add(res.data);
                    table.draw(false); 
                   };
            }
        });
    },
    //筛选数据
    screen_data: function(callback){
        var res={code:0,data:[
            {code:0,name:"全部"},
            {code:1,name:"小学"},
            {code:2,name:"初中"},
            {code:3,name:"高中"}
        ]};
        callback(res);
    },
    //生成筛选
    create_screen: function(){
        var self=this;
        this.screen_data(function(res){
            if(res.code==0){
                var html="";
                 $.each(res.data,function(index,value){             
                    html+=`<li data-code="${value.code}">${value.name}</li>`;
                 });
                $("#screen_ul").html(html);
                $("#screen_ul li").on("click", function(){
                    $(this).addClass("active").siblings().removeClass("active");
                    self.create_schoolManageTable();
                });
                $("#screen_ul li").eq(0).click();
            }
        })
    },
    //添加学校
    addSchool: function(){
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
        var html=$('#addSchool_template').html();
        Men.new_PIP("添加学校",html,'addSchool','取消','新增',function(){
            var content = $("#pop_schoolSelectResult li"),arr=[];
            $.each(content,function(index,value){
                arr.push($(this).data("id"));
            });
            alert("确定添加学校："+arr);
        });
        //搜索/选择学校   
        selectSchool_model.pop_init(res_data);
    },
    //管理按钮
    manageBtn: function(){
        $("#schoolmanage_menu li").eq(0).click();
    },
    //自动运行
    init: function(){
        this.create_screen();
    },
};
SCHOOL_MANAGE.init();