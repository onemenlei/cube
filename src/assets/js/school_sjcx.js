///school_sjcx 手机查询
var sjcx = {
    //后台数据 家长表data.parents  教师表data.teachers
    pt_data: function(mobile,callback){   
        /*
        var url='../ume/sys/um/user/findByMobile?mobile='+mobile;
        $.get(url,function(res){
        	if(res.code==0)
                callback(res.data);
        });      
        */
        var res={"code":0,"data":{"teachers":[{"schCode":190828,"showName":"三年级1班 班主任","teacher":{"schCode":190828,"teacher":{"tch2ndName":"峰","gender":1,"createTime":1541572620755,"tchName":"沈峰","mobile":"13061681570","tch1stName":"沈峰","tchCode":1215022134640000,"id":"1215022134640000","tchEnName":"qiang"},"tchType":1,"tchAlias":"沈","id":"1908281215022134640000","schTchCode":"1908281215022134640000","status":"E"},"teacherRole":{"code":"31","name":"班主任","id":"31"},"school":{"schIdentity":"","city":{"code":"110100"},"county":{"code":"110101"},"schType":{"code":"1"},"schCode":190828,"createTime":1566985320847,"schProperty":2,"schAlias":"sftest","provice":{"code":"110000"},"schName":"sftest","endGrade":"6","location":{"code":"111"},"id":"190828","schCategory":{"code":"21"},"startGrade":"1","status":"E"},"roleId":"1908281215022134640000311908281719082817001","grade":{"grdAttr":"0","schCode":190828,"grdName":"三年级","yearIn":17,"yearOut":23,"canEdit":"N","grade":3,"subjects":[{"code":"1","name":"语文","id":"1"},{"code":"2","name":"数学","id":"2"},{"code":"3","name":"英语","id":"3"}],"id":"19082817","grdAlias":"三年级","grdCode":19082817,"status":"1"},"roleCode":"34","id":"1908281215022134640000311908281719082817001","clazz":{"clzSerial":1,"schCode":190828,"clzAlias":"1班","clzProperty":"10","clzCode":19082817001,"yearIn":17,"grade":{"grdAttr":"0","schCode":190828,"grdName":"三年级","yearIn":17,"yearOut":23,"canEdit":"N","grade":3,"subjects":[{"code":"1","name":"语文","id":"1"},{"code":"2","name":"数学","id":"2"},{"code":"3","name":"英语","id":"3"}],"id":"19082817","grdAlias":"三年级","grdCode":19082817,"status":"1"},"clzType":"0","clzTags":[],"id":"19082817001","clzName":"1班"},"user":{"password":"e10adc3949ba59abbe56e057f20f883e","identify":"13061681570","userAlias":"sf","mobile":"13061681570","firstLoginFlag":"N","id":"MOBILE_13061681570","userName":"13061681570","email":"","userCode":"MOBILE_13061681570"},"tchRoleCode":"1908281215022134640000311908281719082817001"},{"schCode":201916,"showName":" 教务","teacher":{"schCode":201916,"teacher":{"tch2ndName":"峰","gender":1,"createTime":1541572620755,"tchName":"沈峰","mobile":"13061681570","tch1stName":"沈峰","tchCode":1215022134640000,"id":"1215022134640000","tchEnName":"qiang"},"tchType":1,"tchAlias":"沈峰","id":"2019161215022134640000","schTchCode":"2019161215022134640000","status":"E"},"teacherRole":{"code":"21","name":"教务","id":"21"},"school":{"schIdentity":"","city":{"code":"310100"},"county":{"code":"310107"},"schType":{"code":"2"},"schCode":201916,"createTime":1571195133806,"schProperty":2,"schAlias":"测试学校201916","provice":{"code":"310000"},"schName":"测试学校201916","endGrade":"9","location":{"code":"111"},"id":"201916","schCategory":{"code":"21"},"startGrade":"7","status":"E"},"roleId":"201916121502213464000021","roleCode":"32","id":"201916121502213464000021","user":{"password":"e10adc3949ba59abbe56e057f20f883e","identify":"13061681570","userAlias":"sf","mobile":"13061681570","firstLoginFlag":"N","id":"MOBILE_13061681570","userName":"13061681570","email":"","userCode":"MOBILE_13061681570"},"tchRoleCode":"201916121502213464000021"},{"showName":"八年级6班数学 任课教师","roleId":"28030112150221346400005028030117280301170062","subject":{"code":"2","name":"数学","id":"2"},"schCode":280301,"teacher":{"schCode":280301,"teacher":{"tch2ndName":"峰","gender":1,"createTime":1541572620755,"tchName":"沈峰","mobile":"13061681570","tch1stName":"沈峰","tchCode":1215022134640000,"id":"1215022134640000","tchEnName":"qiang"},"tchType":1,"tchAlias":"沈1","id":"2803011215022134640000","schTchCode":"2803011215022134640000","status":"E"},"teacherRole":{"code":"50","name":"任课教师","id":"50"},"school":{"schIdentity":"","city":{"code":"510100"},"county":{"code":"510101"},"schType":{"code":"2"},"schCode":280301,"createTime":1564377698756,"schProperty":2,"schAlias":"成都市天府第七中学","provice":{"code":"510000"},"schName":"成都市天府第七中学","endGrade":"9","location":{"code":"111"},"id":"280301","schCategory":{"code":"21"},"startGrade":"7","status":"E"},"grade":{"grdAttr":"2","schCode":280301,"grdName":"八年级","yearIn":17,"yearOut":21,"canEdit":"N","grade":8,"subjects":[{"code":"1","name":"语文","id":"1"},{"code":"2","name":"数学","id":"2"},{"code":"3","name":"英语","id":"3"},{"code":"4","name":"物理","id":"4"},{"code":"5","name":"化学","id":"5"},{"code":"6","name":"历史","id":"6"},{"code":"7","name":"地理","id":"7"},{"code":"8","name":"政治","id":"8"},{"code":"9","name":"生物","id":"9"},{"code":"A","name":"信息","id":"A"},{"code":"B","name":"通用","id":"B"},{"code":"C","name":"科学","id":"C"},{"code":"E","name":"技术","id":"E"},{"code":"F","name":"音乐","id":"F"},{"code":"G","name":"体育","id":"G"},{"code":"H","name":"美术","id":"H"},{"code":"I","name":"心理","id":"I"}],"id":"28030117","grdAlias":"八年级","grdCode":28030117,"status":"1"},"roleCode":"37","id":"28030112150221346400005028030117280301170062","clazz":{"clzSerial":6,"schCode":280301,"clzAlias":"6班","clzProperty":"10","clzCode":28030117006,"yearIn":17,"grade":{"grdAttr":"2","schCode":280301,"grdName":"八年级","yearIn":17,"yearOut":21,"canEdit":"N","grade":8,"subjects":[{"code":"1","name":"语文","id":"1"},{"code":"2","name":"数学","id":"2"},{"code":"3","name":"英语","id":"3"},{"code":"4","name":"物理","id":"4"},{"code":"5","name":"化学","id":"5"},{"code":"6","name":"历史","id":"6"},{"code":"7","name":"地理","id":"7"},{"code":"8","name":"政治","id":"8"},{"code":"9","name":"生物","id":"9"},{"code":"A","name":"信息","id":"A"},{"code":"B","name":"通用","id":"B"},{"code":"C","name":"科学","id":"C"},{"code":"E","name":"技术","id":"E"},{"code":"F","name":"音乐","id":"F"},{"code":"G","name":"体育","id":"G"},{"code":"H","name":"美术","id":"H"},{"code":"I","name":"心理","id":"I"}],"id":"28030117","grdAlias":"八年级","grdCode":28030117,"status":"1"},"clzType":"0","clzTags":[],"id":"28030117006","clzName":"行政班"},"user":{"password":"e10adc3949ba59abbe56e057f20f883e","identify":"13061681570","userAlias":"sf","mobile":"13061681570","firstLoginFlag":"N","id":"MOBILE_13061681570","userName":"13061681570","email":"","userCode":"MOBILE_13061681570"},"tchRoleCode":"28030112150221346400005028030117280301170062"}],"mobile":"13061681570","parents":[{"createTime":1556380800000,"par1stName":"q","parName":"qqq","mobile":"13061681570","parCode":1363625845060000,"firstLoginFlag":"Y","students":[{"examNo":"160101","student":{"gender":1,"createTime":1560923340133,"nation":{"code":"01","name":"汉族","id":"01"},"stuEnName":"Eisxd","id":"1408529389700000","stuName":"徐海媛","stuCode":1408529389700000},"stuWay":2,"schCode":255551,"isSpecial":1,"school":{"schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310106","name":"静安区","id":"310106","type":3},"schType":{"code":"2","name":"初中","id":"2"},"schCode":255551,"createTime":1560847217625,"schProperty":2,"schAlias":"测试学校551","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"canLevelup":true,"schName":"测试学校551","endGrade":"9","location":{"code":"111","name":"主城区","id":"111"},"id":"255551","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"7","status":"E"},"stuTags":[],"id":"255551160101","stuAlias":"徐海媛","stuSource":1,"adminClazz":{"clzSerial":1,"schCode":255551,"clzAlias":"1班","clzProperty":"10","clzCode":25555116001,"yearIn":16,"grade":{"grdAttr":"0","schCode":255551,"grdName":"九年级","yearIn":16,"yearOut":19,"canEdit":"N","grade":9,"subjects":[{"code":"1","name":"语文","id":"1"},{"code":"2","name":"数学","id":"2"},{"code":"3","name":"英语","id":"3"},{"code":"4","name":"物理","id":"4"},{"code":"5","name":"化学","id":"5"},{"code":"6","name":"历史","id":"6"},{"code":"7","name":"地理","id":"7"},{"code":"8","name":"政治","id":"8"},{"code":"9","name":"生物","id":"9"}],"id":"25555116","grdCode":25555116,"status":"1"},"clzType":"0","clzTags":[{"tagCode":255551005,"tagName":"理科班"}],"id":"25555116001","clzName":"1班"},"isTransient":0,"schStuCode":"255551160101","stuNo":"160101","status":"E"},{"examNo":"160102","student":{"gender":1,"createTime":1560923340133,"nation":{"code":"01","name":"汉族","id":"01"},"stuEnName":"Eisxd","id":"1408529389910000","stuName":"谢文慧","stuCode":1408529389910000},"stuWay":2,"schCode":255551,"isSpecial":1,"school":{"schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310106","name":"静安区","id":"310106","type":3},"schType":{"code":"2","name":"初中","id":"2"},"schCode":255551,"createTime":1560847217625,"schProperty":2,"schAlias":"测试学校551","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"canLevelup":true,"schName":"测试学校551","endGrade":"9","location":{"code":"111","name":"主城区","id":"111"},"id":"255551","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"7","status":"E"},"stuTags":[],"id":"255551160102","stuAlias":"谢文慧","stuSource":1,"adminClazz":{"clzSerial":1,"schCode":255551,"clzAlias":"1班","clzProperty":"10","clzCode":25555116001,"yearIn":16,"grade":{"grdAttr":"0","schCode":255551,"grdName":"九年级","yearIn":16,"yearOut":19,"canEdit":"N","grade":9,"subjects":[{"code":"1","name":"语文","id":"1"},{"code":"2","name":"数学","id":"2"},{"code":"3","name":"英语","id":"3"},{"code":"4","name":"物理","id":"4"},{"code":"5","name":"化学","id":"5"},{"code":"6","name":"历史","id":"6"},{"code":"7","name":"地理","id":"7"},{"code":"8","name":"政治","id":"8"},{"code":"9","name":"生物","id":"9"}],"id":"25555116","grdCode":25555116,"status":"1"},"clzType":"0","clzTags":[{"tagCode":255551005,"tagName":"理科班"}],"id":"25555116001","clzName":"1班"},"isTransient":0,"schStuCode":"255551160102","stuNo":"160102","status":"E"},{"examNo":"160103","student":{"gender":2,"createTime":1560923340133,"nation":{"code":"01","name":"汉族","id":"01"},"stuEnName":"Eisxd","id":"1408529390120000","stuName":"廖湘婷","stuCode":1408529390120000},"stuWay":2,"schCode":255551,"isSpecial":1,"school":{"schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310106","name":"静安区","id":"310106","type":3},"schType":{"code":"2","name":"初中","id":"2"},"schCode":255551,"createTime":1560847217625,"schProperty":2,"schAlias":"测试学校551","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"canLevelup":true,"schName":"测试学校551","endGrade":"9","location":{"code":"111","name":"主城区","id":"111"},"id":"255551","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"7","status":"E"},"stuTags":[],"id":"255551160103","stuAlias":"廖湘婷","stuSource":1,"adminClazz":{"clzSerial":1,"schCode":255551,"clzAlias":"1班","clzProperty":"10","clzCode":25555116001,"yearIn":16,"grade":{"grdAttr":"0","schCode":255551,"grdName":"九年级","yearIn":16,"yearOut":19,"canEdit":"N","grade":9,"subjects":[{"code":"1","name":"语文","id":"1"},{"code":"2","name":"数学","id":"2"},{"code":"3","name":"英语","id":"3"},{"code":"4","name":"物理","id":"4"},{"code":"5","name":"化学","id":"5"},{"code":"6","name":"历史","id":"6"},{"code":"7","name":"地理","id":"7"},{"code":"8","name":"政治","id":"8"},{"code":"9","name":"生物","id":"9"}],"id":"25555116","grdCode":25555116,"status":"1"},"clzType":"0","clzTags":[{"tagCode":255551005,"tagName":"理科班"}],"id":"25555116001","clzName":"1班"},"isTransient":0,"schStuCode":"255551160103","stuNo":"160103","status":"E"},{"examNo":"20180139","student":{"gender":1,"createTime":1542868630000,"nation":{"code":"01","name":"汉族","id":"01"},"id":"1154286863000088","stuName":"任真","stuCode":1154286863000088},"stuWay":1,"schCode":280150,"isSpecial":0,"school":{"city":{"parent":"510000","code":"510100","name":"成都市","id":"510100","type":2},"county":{"parent":"510100","code":"510101","name":"市辖区","id":"510101","type":3},"schTags":[],"schType":{"code":"2","name":"初中","id":"2"},"schCode":280150,"createTime":1565939907419,"schProperty":1,"schAlias":"西川实验学校(初中)","provice":{"parent":"0","code":"510000","name":"四川省","id":"510000","type":1},"canLevelup":false,"schName":"西川实验学校(初中)","endGrade":"9","location":{"code":"111","name":"主城区","id":"111"},"id":"280150","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"7","status":"E"},"stuTags":[],"id":"2801501800000088","stuAlias":"任真","stuSource":1,"adminClazz":{"clzSerial":1,"schCode":280150,"clzAlias":"1班","clzProperty":"10","clzCode":28015018001,"yearIn":18,"grade":{"grdAttr":"0","schCode":280150,"grdName":"八年级","yearIn":18,"yearOut":21,"canEdit":"N","grade":8,"subjects":[{"code":"1","name":"语文","id":"1"},{"code":"2","name":"数学","id":"2"},{"code":"3","name":"英语","id":"3"},{"code":"4","name":"物理","id":"4"},{"code":"5","name":"化学","id":"5"},{"code":"6","name":"历史","id":"6"},{"code":"7","name":"地理","id":"7"},{"code":"8","name":"政治","id":"8"},{"code":"9","name":"生物","id":"9"},{"code":"A","name":"信息","id":"A"},{"code":"B","name":"通用","id":"B"},{"code":"C","name":"科学","id":"C"},{"code":"E","name":"技术","id":"E"},{"code":"F","name":"音乐","id":"F"},{"code":"G","name":"体育","id":"G"},{"code":"H","name":"美术","id":"H"},{"code":"I","name":"心理","id":"I"}],"id":"28015018","grdAlias":"八年级","grdCode":28015018,"status":"1"},"clzType":"0","clzTags":[],"id":"28015018001","clzName":"1班"},"isTransient":0,"schStuCode":"2801501800000088","stuNo":"1800000088","status":"E"}],"par2ndName":"qq","id":"1363625845060000","relation":"1"}]},"message":"请求成功"};
        if(res.code==0)
            callback(res.data);
    },
    //生成datatables的数据
    create_table: function (mobile,callback){
    	Tomd.wait('数据加载中...');
        var self=this;
        this.pt_data(mobile,function(res){
            var parentsTable=[];
            $.each(res.parents,function(index,value){                
                $.each(value.students,function(i,v){
                	var studentsList={};
                    studentsList.schName = v.school.schName;           //学校 
                    studentsList.yearIn = v.adminClazz.yearIn;        //学级            
                    studentsList.clzAlias = v.adminClazz.clzAlias;   //班级                 
                    studentsList.grdAttr = v.adminClazz.grade.grdAttr;     //文理分科                 
                    studentsList.stuName = v.student.stuName;     //学生               
                    studentsList.parName = value.parName;         //家长               
                    studentsList.mobile = value.mobile;         //手机号码  
                    parentsTable.push(studentsList);
                });                
            });
            self.create_student(parentsTable); //学生表
            self.create_teacher(res.teachers); //教师表
            callback();
            Tomd.waitok();
        });        
    },
    //生成学生表
    create_student: function(data){
        table = $('#datatable_sjcx_stu').DataTable({
            "data":data,
            "bAutoWidth": false, //是否自适应宽度
            dom:'lBrtip',
            "ordering" : false, //禁用排序
			"paging" : false, //本地不分页
			"bLengthChange":false,//去掉每页多少条框体
			"destroy":true, //Cannot reinitialise DataTable,解决重新加载表格内容问题
            "columns": [
                {
                    data: 'schName'
                },
                {
                    data: "yearIn"
                },
                {
                    data: "clzAlias"
                },
                {
                    data: "grdAttr"
                },
                {
                    data: "stuName"
                },
                {
                    "data": "parName"
                },
                {
                    "data": "mobile"
                }
            ],
            "columnDefs":[
                {
                    "targets": 0,
                    "data": null,
                    "render": function (data, type, row, meta) {
                        return row.schName + '(' + row.mobile + ')';
                    }
                },
                {
                    "targets": 3,
                    "data": null,
                    "render": function (data, type, row, meta) {
                        switch(row.grdAttr){
                            case '0':
                            return "全科";
                            break;
                            case '1':
                            return "文科";
                            break;
                            case '2':
                            return "理科";
                            break;
                    }
                    }
                }
            ],
            "language": {
                "url": "datatables_language.json"
            }
        });
    },
    //生成教师表
    create_teacher: function(data){
        table1 = $('#datatable_sjcx_tea').DataTable({
            "data":data,
            "bAutoWidth": false, //是否自适应宽度
            dom:'lBrtip',
            "ordering" : false, //禁用排序
			"paging" : false, //本地不分页
			"bLengthChange":false,//去掉每页多少条框体
			"destroy":true, //Cannot reinitialise DataTable,解决重新加载表格内容问题
            /*"ajax": {
                "url": "datatable1.json",
                //"success":function(result){alert("down");console.log(result)},
                "error":function(error){alert(error)},
                "dataSrc": "",
            },*/
            "columns": [
                {
                    data: 'school.schName'
                },
                {
                    data: "teacher.teacher.tchName"
                },
                {
                    "data": "teacher.teacher.mobile"
                }
            ],
            "columnDefs":[],
            "language": {
                "url": "datatables_language.json"
            }
        });
    },
    //用手机号搜索表内容
    search_phone: function (){
    	var self=this;
       $("#search_phone_button").on("click",function(){
           //由于手机号不在列中，所以对整个表内容搜索
        var arg=$("#search_phone_input").val();
           if(arg=="")
               {
                   Tomd.alert('','对不起，搜索内容为空！');
                   return false;}
           else if(Tomd.check.phone(arg)==false){
               Tomd.alert('','手机号格式不对！');
                   return false;
           }
        self.create_table(arg, function(){
            /*  前端筛选手机号码，学生表第7列，教师表第3列
            table.column(6).search(arg,true,false).draw(false);
            table1.column(2).search(arg,true,false).draw(false);  
            */
        	var con1 = table.page.info().end;
            var con2 = table1.page.info().end;
            if(con1>0)
                $("#stu_table_div").show();
            else
                $("#stu_table_div").hide();
            if(con2>0)
                $("#tea_table_div").show();
            else
                $("#tea_table_div").hide();
            if(con1==0 && con2==0)
                $("#empty_table_div").show();
            else
                $("#empty_table_div").hide();
        });  
           
}) 
    },
    //一开始先隐藏所有表
    hide_tables: function(){
        $("#stu_table_div").hide();
        $("#tea_table_div").hide();
        $("#empty_table_div").hide();
    },
    //设定页面一加载就运行
    init: function () {
        this.search_phone();
        this.hide_tables();
    }
};

//加载即运行
sjcx.init();

