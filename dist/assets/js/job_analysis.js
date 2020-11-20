//插入头像 年月日 
$(".header_message").html("");
$.tmpl(ml_today_date).appendTo('.header_message');


$.tmpl(lab_nav_menu, menus_Items).appendTo('#job_menu');
//菜单第一项反白选中，内容显示第一项
$($("#job_menu.indexItems_nav_ul li")[0]).addClass("selected");
//加载页面内容方法
Men.load_content('job_article',menus_Items[0].menuUrl);
//侧菜单切换
$("#job_menu.indexItems_nav_ul").on("click", "li", function () {
    $(this).addClass("selected").siblings().removeClass("selected");
    var n = $(this).index();
    //加载页面内容方法
    Men.load_content('job_article',menus_Items[n].menuUrl);
});


var getSchoolListData = {},getOrgsListData={};

var getSchoolList = function(){
	
	var data1 = {};
	//var curr_data = Men.get_data("../user/currentUser", data1);
    var curr_data = {"code":0,"data":{"showName":"超级管理员","roleId":"00","roleCode":"00","id":"00","user":{"password":"e10adc3949ba59abbe56e057f20f883e","mobile":"13012345670","firstLoginFlag":"","id":"00","userName":"00","userCode":"00"}}};
	var roleid = curr_data.id;
    var data = {roleId : roleid};
    //return Men.get_data("../ume/sys/um/userAuthorization/listSchools", data);
    var code =  {"code":0,"data":[{"schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310107","name":"普陀区","id":"310107","type":3},"schType":{"code":"2","name":"初中","id":"2"},"schCode":112802,"createTime":1576820660562,"schProperty":2,"schAlias":"演示学校初中部","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"schName":"演示学校初中部","endGrade":"9","location":{"code":"111","name":"主城区","id":"111"},"id":"112802","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"7","status":"E"},{"schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310107","name":"普陀区","id":"310107","type":3},"schType":{"code":"2","name":"初中","id":"2"},"schCode":191112,"createTime":1573548825759,"schProperty":2,"schAlias":"上海测试学校","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"schName":"上海测试学校","endGrade":"9","location":{"code":"111","name":"主城区","id":"111"},"id":"191112","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"7","status":"E"},{"schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310107","name":"普陀区","id":"310107","type":3},"schType":{"code":"2","name":"初中","id":"2"},"schCode":191115,"createTime":1573798287232,"schProperty":2,"schAlias":"选课测试学校","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"schName":"选课测试学校","endGrade":"9","location":{"code":"111","name":"主城区","id":"111"},"id":"191115","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"7","status":"E"},{"schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310107","name":"普陀区","id":"310107","type":3},"schType":{"code":"2","name":"初中","id":"2"},"schCode":280301,"createTime":1573804313578,"schProperty":2,"schAlias":"测试学校初中","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"schName":"测试学校初中","endGrade":"9","location":{"code":"111","name":"主城区","id":"111"},"id":"280301","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"7","status":"E"},{"schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310107","name":"普陀区","id":"310107","type":3},"schType":{"code":"3","name":"高中","id":"3"},"schCode":280302,"createTime":1576568124874,"schProperty":2,"schAlias":"测试学校302","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"schName":"测试学校302","endGrade":"12","location":{"code":"111","name":"主城区","id":"111"},"id":"280302","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"10","status":"E"},{"schIdentity":"","city":{"parent":"520000","code":"520100","name":"贵阳市","id":"520100","type":2},"county":{"parent":"520100","code":"520101","name":"市辖区","id":"520101","type":3},"schType":{"code":"3","name":"高中","id":"3"},"schCode":851103,"createTime":1574126662192,"schProperty":2,"schAlias":"贵阳一中新世界国际学校(高中)","provice":{"parent":"0","code":"520000","name":"贵州省","id":"520000","type":1},"schName":"贵阳一中新世界国际学校(高中)","endGrade":"12","location":{"code":"210","name":"乡中心区","id":"210"},"id":"851103","schCategory":{"code":"22","name":"民办","id":"22"},"startGrade":"10","status":"E"},{"schIdentity":"","city":{"parent":"110000","code":"110100","name":"市辖区","id":"110100","type":2},"county":{"parent":"110100","code":"110101","name":"东城区","id":"110101","type":3},"schType":{"code":"3","name":"高中","id":"3"},"schCode":991199,"createTime":1573548448711,"schProperty":2,"schAlias":"南京中学","provice":{"parent":"0","code":"110000","name":"北京市","id":"110000","type":1},"schName":"南京中学","endGrade":"12","location":{"code":"111","name":"主城区","id":"111"},"id":"991199","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"10","status":"E"}],"message":"请求成功"};
    return code.data;
}
var getOrgsList = function(){
    var data = {};
    //return Men.get_data("../biz/sch/org/list4Enabled", data);
    var code = {"code":0,"data":[{"boeName":"演示教育局1","schools":[null,null,null],"boeCode":110901,"id":"110901","boeAlias":"演示教育局1","status":"E"},{"boeName":"演示学校机构","schools":[null,null,null],"boeCode":110903,"id":"110903","boeAlias":"演示机构","status":"E"},{"boeName":"演示学校机构2","schools":[null],"boeCode":110904,"id":"110904","boeAlias":"演示机构2","status":"E"},{"boeName":"测试","schools":[null,null,null],"boeCode":123456,"id":"123456","boeAlias":"测试","status":"E"},{"boeName":"测试机构分析","schools":[null,null,null,null,null,null],"boeCode":180511,"id":"180511","boeAlias":"测试机构分析","status":"E"},{"boeName":"上海市7校联考","schools":[null,null,null,null,null,null,null],"boeCode":210977,"id":"210977","boeAlias":"上海7校","status":"E"},{"boeName":"南京市雨花台区教育局（初中）","schools":[null,null,null,null,null,null,null,null],"boeCode":250905,"id":"250905","boeAlias":"雨花台教育局（初中）","status":"E"},{"boeName":"南京市雨花台区教育局（小学）","schools":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"boeCode":250915,"id":"250915","boeAlias":"雨花台教育局（小学）","status":"E"},{"boeName":"南京市雨花台区（新优质初中）","schools":[null,null,null],"boeCode":250925,"id":"250925","boeAlias":"雨花台（新优质初中）","status":"E"},{"boeName":"成都市武侯区教育局 (初中)","schools":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"boeCode":280905,"id":"280905","boeAlias":"武侯区教育局 (初中)","status":"E"},{"boeName":"成都市高新区八校联考","schools":[null,null,null,null,null,null,null,null,null],"boeCode":280906,"id":"280906","boeAlias":"八校联考","status":"E"},{"boeName":"成都市新都区教育局（初中）","schools":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"boeCode":280911,"id":"280911","boeAlias":"新都教育局初中","status":"E"},{"boeName":"成都市武侯区教育局（高中）","schools":[null,null,null,null,null],"boeCode":280935,"id":"280935","boeAlias":"成都市武侯区教育局（高中）","status":"E"},{"boeName":"树德实验","schools":[null,null],"boeCode":280949,"id":"280949","boeAlias":"树德实验","status":"E"},{"boeName":"成都七中育才 ","schools":[null,null],"boeCode":280951,"id":"280951","boeAlias":"成都七中育才 ","status":"E"},{"boeName":"成都市棕北中学","schools":[null,null],"boeCode":280952,"id":"280952","boeAlias":"棕北中学","status":"E"},{"boeName":"成都市武侯区教育局（小学）","schools":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"boeCode":284905,"id":"284905","boeAlias":"成都市武侯区教育局（小学）","status":"E"},{"boeName":"成都市武侯区教育局公办小学","schools":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"boeCode":284915,"id":"284915","boeAlias":"武侯区公办小学","status":"E"},{"boeName":"成都市武侯区教育局民办优质小学","schools":[null,null,null,null,null,null],"boeCode":284925,"id":"284925","boeAlias":"武侯区民办优质小学","status":"E"},{"boeName":"成都市武侯区教育局民办农民工子女小学","schools":[null,null,null,null,null,null,null,null,null,null,null,null,null,null],"boeCode":284935,"id":"284935","boeAlias":"武侯区民办农民工子女小学","status":"E"},{"boeName":"焦作市温县教育局","schools":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"boeCode":391905,"id":"391905","boeAlias":"温县教育局","status":"E"},{"boeName":"东海县教育局（小学）","schools":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"boeCode":518915,"id":"518915","boeAlias":"东海县教育局","status":"E"},{"boeName":"泰州市姜堰区教育局","schools":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"boeCode":523902,"id":"523902","boeAlias":"姜堰区教育局","status":"E"},{"boeName":"江苏省泰州市医药高新区初中","schools":[null,null,null],"boeCode":523905,"id":"523905","boeAlias":"医药高新区教育局","status":"E"},{"boeName":"泗洪县初中联考","schools":[null,null],"boeCode":527930,"id":"527930","boeAlias":"泗洪初中联考","status":"E"},{"boeName":"测试机构","schools":[null,null,null],"boeCode":555555,"id":"555555","boeAlias":"测试机构","status":"E"},{"boeName":"绍兴市柯桥区教育局","schools":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"boeCode":575902,"id":"575902","boeAlias":"柯桥区教育局","status":"E"},{"boeName":"株洲市教育局","schools":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"boeCode":731950,"id":"731950","boeAlias":"株洲市教育局","status":"E"},{"boeName":"自贡市高新区教育局","schools":[null,null,null,null,null,null],"boeCode":813966,"id":"813966","boeAlias":"自贡市高新区教育局","status":"E"},{"boeName":"资阳市教育局","schools":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"boeCode":832901,"id":"832901","boeAlias":"资阳市教育局","status":"E"},{"boeName":"资阳市雁江区教育局","schools":[null,null,null,null,null,null,null],"boeCode":832902,"id":"832902","boeAlias":"资阳市雁江区教育局","status":"E"},{"boeName":"资阳市安岳县教育局","schools":[null,null,null,null,null,null],"boeCode":832903,"id":"832903","boeAlias":"资阳市安岳县教育局","status":"E"},{"boeName":"资阳市乐至县教育局","schools":[null,null],"boeCode":832904,"id":"832904","boeAlias":"资阳市乐至县教育局","status":"E"},{"boeName":"四川省德阳市旌阳区教育局(初中)","schools":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"boeCode":838901,"id":"838901","boeAlias":"德阳市旌阳区教育局(初中)","status":"E"}],"message":"请求成功"};
    return code.data;
}
getSchoolListData = getSchoolList();
getOrgsListData = getOrgsList();
var SCHOOLANALY = {
    // 初始化关联学校数据
    initAssociationSchool: function(el) {
        document.getElementById('schoolListSelect').innerHTML = $('#schoolListTemplate').html();
        // var data = {};
        // var res = getSchoolList();
       var res = getSchoolListData;
        
        function proviceArr(array) {
            let _array = [];
            array.forEach(_s => {
                if (!_array.includes(_s.provice.name)) {
                    _array.push(_s.provice.name)
                }
            });
            return _array.map(provice => {
                let obj = {
                    provice: provice,
                    data: array.filter(_s => _s.provice.name === provice)
                }
                return obj
            })
        }

        function cityArr(array) {
            let _array = [];
            array.forEach(_s => {
                if (!_array.includes(_s.city.name)) {
                    _array.push(_s.city.name)
                }
            });
            return _array.map(city => {
                let obj = {
                    city: city,
                    data: array.filter(_s => _s.city.name === city)
                }
                return obj
            })
        }
        var province = proviceArr(res);
        var html = '';
        for (var i = 0; i < province.length; i++) {
            var dataCt = cityArr(province[i].data);
            var hcity = '';
            for (var j = 0; j < dataCt.length; j++) {
                var dataSchName = dataCt[j].data;
                var schName = '';
                for (var l = 0; l < dataSchName.length; l++) {
                    schName += `<div class="prov-city-schs" data-mark="0" data-id="${dataSchName[l].id}"><p class="sch_item" data-mark="0" data-id="${dataSchName[l].id}">(${dataSchName[l].id}) ${dataSchName[l].schName}</p></div>`;
                };
                hcity += `<div class="prov-city"><h4>${dataCt[j].city}</h4>${schName}</div>`;
            }
            html += `<li><h3 class="prov-title">${province[i].provice}</h3><div class="prov-schs">${hcity}</div></li>`;
        };
        $(`#${el} .schs-list ul`).html(html);
    }
}

// 机构列表
var ORGSLIST = {
    selectOrganizationHandle:function(){
        document.getElementById('schoolListSelect').innerHTML = $('#orgsListTemplate').html();
        var result = getOrgsListData;
        
        let html = '';
        for (let i = 0; i < result.length; i++) {
            html += `<li data-id="${result[i].boeCode}">(${result[i].boeCode})${result[i].boeName}</li>`;
        };
        $('.org-list-side').html(html);
        $('.org-list-side li').on('click', function() {
        	$("#examType li").eq(0).addClass("active").siblings().removeClass("active");
        	$("#gradeType li").eq(0).addClass("active").siblings().removeClass("active");
            $(this).addClass('text-danger').siblings().removeClass('text-danger');
            var boeName = $(this).text();
            var code = $(this).attr('data-id');
            ORGS.orgAnalysis(code);
            ORGS.setOrgsId(code);
            $('#schoolName').html(`${boeName}`);
            $('#schoolName').attr('data-id', code);
        })
    }
};
function isString(o) {
    return (o === "" || o) && (o.constructor === String);
};
// 渲染搜索框
function renderFilter(el) {
    var doc = document.getElementById(el);
    var $filter = $(doc.getElementsByClassName('filter_region')[0]);
    $filter.bind('input propertychange', function() {
        // 获取input内容
        var content = $(this).val();
        // 判断是否是字符串
        if (isString(content)) {
            $(`#${el} .schs-list ul li .prov-city-schs`).hide();
            $(`#${el} .schs-list`).find('ul li .sch_item').each(function() {
                const name = $(this).text();
                if (name.indexOf(content) != -1) {
                    $(this).parents().show();
                }
            });
        } else {
            $(`#${el} .schs-list .prov-city-schs`).hide().show();
        }
    });
};

// 操作学校地区列表
//收缩控制
function handlerSchs(el, el2, boole) {
    //省
    $(`#${el} .schs-list .prov-title`).click(function() {
        $(`#${el} .schs-list .prov-title`).removeClass('active');
        $(`#${el} .schs-list .prov-schs`).show().hide();
        $(this).parent().find('.prov-schs').hide().show();
        $(this).addClass('active');
        $(this).siblings('.prov-schs').find('h4').removeClass('expand');
    });
    //市
    $(`#${el} .schs-list .prov-city h4`).click(function() {
        $(`#${el} .schs-list .prov-city-schs`).show().hide().removeClass('expand');
        if ($(this).hasClass('expand')) {
            $(this).parent().find('.prov-city-schs').show().hide();
            $(this).removeClass('expand');
        } else {
            $(this).parent().find('.prov-city-schs[data-mark="0"]').hide().show();
            $(this).addClass('expand');
        }
    });
    //学校点击控制
    $(`#${el} .schs-list .prov-city-schs`).on('click', function() {
    	$("#examType li").eq(0).addClass("active").siblings().removeClass("active");
    	$("#gradeType li").eq(0).addClass("active").siblings().removeClass("active"); 
        let code = $(this).attr('data-id');
        var name = $($(this).find(".sch_item")).text();
        $(this).find('.sch_item').addClass('active').parent().siblings().find('.sch_item').removeClass('active');
        //$(this).show().hide();
//        $(this).attr("data-mark", "1");
        SCHOOL.schAnalysis(code);
        SCHOOL.setSchoolId(code);
        
        if (boole) {
            // 只搜索选中学校
            currentSchool(el2,name, code);
        }
    });
};
function currentSchool(el2, schName, schCode) {
    //当前学校的信息
    $(`#${el2}`).html(`[${schName}]`);
    $(`#${el2}`).attr('data-id', schCode);
};
function renderSchool(el, el2, boole){
    // 渲染搜索框
    renderFilter(el);
    handlerSchs(el, el2, boole);
}
SCHOOLANALY.initAssociationSchool('schoolListSelectfx');
renderSchool('schoolListSelectfx','schoolName', true);