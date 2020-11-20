var SCHOOL_JGFX = {
    //考试类型数据
    examType_data: function(callback){
        var res={code:0,data:[
            {code:0,name:"全部",gradeType:[{code:1000,name:"全部"},{code:1001,name:"一年级"},{code:1002,name:"二年级"},{code:1003,name:"三年级"}]},
            {code:0,name:"期中考试",gradeType:[{code:2000,name:"全部"},{code:2001,name:"八年级"},{code:2002,name:"九年级"},{code:2003,name:"十年级"}]}
            ]};
        callback(res);
    },
    //机构数据
    jgfx_data: function(callback){
        var res={"code":0,"data":[{"examination":{"examCategory":2,"examCode":2001596079292241,"examDate":1595952000000,"bureaus":[{"boeName":"测试初中教育局","boeCode":112899,"boeAlias":"测试初中教育局"}],"examName":"测试区统考_八年级_区统考_20200729","subjects":[{"code":"1","name":"语文"},{"code":"2","name":"数学"},{"code":"3","name":"英语"}],"examType":{"code":"7","name":"区统考"},"papers":[{"paperType":1,"paper":{"score":15000,"paperCode":1001596079292118,"paperName":"测试区统考_八年级_区统考_20200729_语文"},"subject":{"code":"1","name":"语文"}},{"paperType":1,"paper":{"score":15000,"paperCode":1001596079292177,"paperName":"测试区统考_八年级_区统考_20200729_数学"},"subject":{"code":"2","name":"数学"}},{"paperType":1,"paper":{"score":15000,"paperCode":1001596079292207,"paperName":"测试区统考_八年级_区统考_20200729_英语"},"subject":{"code":"3","name":"英语"}}],"schType":{"code":"2","name":"初中"},"createTime":1596079291581,"schools":[{"schCode":112008,"schAlias":"演示学校初中校区（初中部）","schName":"演示学校初中校区（初中部）"},{"schCode":112802,"schAlias":"演示学校初中部","schName":"演示学校初中部"}],"grade":{"code":"8","name":"八年级"},"term":{"code":"2","name":"下学期"},"id":"2001596079292241","netExamCompany":"0","netExamBySchool":0},"examinationStatus":[{"detailScoreStatus":0,"answerStatus":0,"analyzeStatus":0,"exceptionsStatus":0,"paper":{"paperType":1,"paperCode":1001596079292118,"year":2020,"subject":{"code":"1","name":"语文","id":"1"},"owners":[{"ownerType":1,"ownerName":"Moofen","ownerCode":"0"}],"publicStatus":false,"questionStatus":false,"schType":{"code":"2","name":"初中"},"difficulty":3,"score":15000,"createTime":1596079292118,"paperName":"测试区统考_八年级_区统考_20200729_语文","itemStatus":false,"scope":{"grade":{"code":"8","name":"八年级"},"term":{"code":"2","name":"下学期"}},"id":"1001596079292118","items":[]},"examination":{"examCode":2001596079292241},"boeCode":112899,"totalScoreStatus":0,"id":"1759224926720000","errataStatus":0},{"detailScoreStatus":0,"answerStatus":0,"analyzeStatus":0,"exceptionsStatus":0,"paper":{"paperType":1,"paperCode":1001596079292177,"year":2020,"subject":{"code":"2","name":"数学","id":"2"},"owners":[{"ownerType":1,"ownerName":"Moofen","ownerCode":"0"}],"publicStatus":false,"questionStatus":false,"schType":{"code":"2","name":"初中"},"difficulty":3,"score":15000,"createTime":1596079292177,"paperName":"测试区统考_八年级_区统考_20200729_数学","itemStatus":false,"scope":{"grade":{"code":"8","name":"八年级"},"term":{"code":"2","name":"下学期"}},"id":"1001596079292177","items":[]},"examination":{"examCode":2001596079292241},"boeCode":112899,"totalScoreStatus":0,"id":"1759224926710000","errataStatus":0},{"detailScoreStatus":0,"answerStatus":0,"analyzeStatus":0,"exceptionsStatus":0,"paper":{"paperType":1,"paperCode":1001596079292207,"year":2020,"subject":{"code":"3","name":"英语","id":"3"},"owners":[{"ownerType":1,"ownerName":"Moofen","ownerCode":"0"}],"publicStatus":false,"questionStatus":false,"schType":{"code":"2","name":"初中"},"difficulty":3,"score":15000,"createTime":1596079292207,"paperName":"测试区统考_八年级_区统考_20200729_英语","itemStatus":false,"scope":{"grade":{"code":"8","name":"八年级"},"term":{"code":"2","name":"下学期"}},"id":"1001596079292207","items":[]},"examination":{"examCode":2001596079292241},"boeCode":112899,"totalScoreStatus":0,"id":"1759224926740000","errataStatus":0}]}],"message":"请求成功"};
        callback(res);
    },
    //生成考试类型
    create_examType: function(){
        var self=this;
        this.examType_data(function(res){
            $("#examType").html(template('examTypeTemplate',{model:res.data}));
            $("#examType>li").on("click", function(){
                $(this).addClass("active").siblings().removeClass("active");
                self.create_gradeType($(this).data("json"));
            });
            $("#examType>li")[0].click();
        });        
    },
    //生成年级
    create_gradeType: function(JSON){
        var self=this;
        $("#gradeType").html(template('gradeTypeTemplate',{model:JSON}));
            $("#gradeType>li").on("click", function(){
                $(this).addClass("active").siblings().removeClass("active");
                self.search_jgfx();
            });
        $("#gradeType>li")[0].click();
    },
    //机构查询
    search_jgfx: function(){
        console.info("考试类型："+$("#examType li.active").data("code"));
        console.info("年级："+$("#gradeType li.active").data("code"));
    },
    //生成机构内容
    create_jgfx: function(code){console.log("传进来的学校编号："+code);
        this.jgfx_data(function(res){
            $("#orgsAlyExams").html(template('examListTpl',{model:res.data}));
            $("#orgsAlyExams .manage").on("click", function(){
                var code = $(this).data("code");
                //alert("_examCode编号："+code); 
                sessionStorage.setItem('_examCode',code); //考试编号
                sessionStorage.setItem('_examData',JSON.stringify(res.data)); //考试管理数据
  		        Men.load_content('analysemanage_article', 'union/school_fxgl'); //加载页面内容方法
            });
            
        });
    },
    //自动运行
    init: function(){
        this.create_examType();
    },
};
SCHOOL_JGFX.init();