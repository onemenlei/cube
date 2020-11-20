//插入头像 年月日 
$(".header_message").html("");
$.tmpl(ml_today_date).appendTo('.header_message');

//左侧菜单
var analyse_nav_Items = [{
    name: '校本分析',
    classa: 'icon-xiaoduantongji',
    href: 'test_xbfx'
}, {
    name: '机构分析',
    classa: 'icon-xueshengduantongji',
    href: 'test_jgfx'
}];
$.tmpl(lab_nav_menu, menus_Items).appendTo('#analysemanage_menu');
//菜单第一项反白选中，内容显示第一项
$($("#analysemanage_menu.indexItems_nav_ul li")[0]).addClass("selected");
//加载页面内容方法
Men.load_content('analysemanage_article', menus_Items[0].menuUrl);
//侧菜单切换
$("#analysemanage_menu.indexItems_nav_ul").on("click", "li", function() {
    $(this).addClass("selected").siblings().removeClass("selected");
    var index = $(this).index();
    //加载页面内容方法
    Men.load_content('analysemanage_article', menus_Items[index].menuUrl);
    if (index == 0) {
        $('#schoolName').empty();
        SCHOOLANALY.initAssociationSchool('schoolListSelectfx');
        renderSchool('schoolListSelectfx','schoolName', true);
    }else if(index == 1) {
        // $('#schoolList').hide();
        // $('#orgsList').show()
        $('#schoolName').empty()
        // $('#schoolListSelect').html()
        ORGSLIST.selectOrganizationHandle();
    }
});

var getSchoolListData = {},getOrgsListData={};

var getSchoolList = function(){
	
	var data1 = {};
	var curr_data = {"code":0,"data":{"showName":"超级管理员","roleId":"00","roleCode":"00","id":"00","user":{"password":"e10adc3949ba59abbe56e057f20f883e","mobile":"13012345670","firstLoginFlag":"N","id":"00","userName":"00","userCode":"00"}}};
	//var curr_data = Men.get_data("../user/currentUser", data1);
	var roleid = curr_data.id;
    var data = {roleId : roleid};
   // return Men.get_data("../ume/sys/um/userAuthorization/listSchools", data);
    var res={"code":0,"data":[{"address":"","schIdentity":"","city":{"parent":"510000","code":"510100","name":"成都市","id":"510100","type":2},"county":{"parent":"510100","code":"510104","name":"锦江区","id":"510104","type":3},"telephone":"","schType":{"code":"1","name":"小学","id":"1"},"schCode":112001,"createTime":1592536761615,"schProperty":2,"schAlias":"小学测试学校","contact":"","provice":{"parent":"0","code":"510000","name":"四川省","id":"510000","type":1},"schName":"小学测试学校","endGrade":"6","location":{"code":"111","name":"主城区","id":"111"},"id":"112001","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"1","status":"E"},{"address":"","schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310107","name":"普陀区","id":"310107","type":3},"telephone":"","schType":{"code":"2","name":"初中","id":"2"},"schCode":112008,"createTime":1592212972337,"schProperty":2,"schAlias":"演示学校初中校区（初中部）","contact":"","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"schName":"演示学校初中校区（初中部）","endGrade":"9","location":{"code":"111","name":"主城区","id":"111"},"id":"112008","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"7","status":"E"},{"address":"","schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310107","name":"普陀区","id":"310107","type":3},"telephone":"","schType":{"code":"2","name":"初中","id":"2"},"schCode":112100,"createTime":1589246557271,"schProperty":2,"schAlias":"分析测试学校100","contact":"","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"schName":"分析测试学校100","endGrade":"9","location":{"code":"111","name":"主城区","id":"111"},"id":"112100","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"7","status":"E"},{"address":"","schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310107","name":"普陀区","id":"310107","type":3},"telephone":"","schType":{"code":"1","name":"小学","id":"1"},"schCode":112233,"createTime":1588235556431,"schProperty":2,"schAlias":"112233","contact":"","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"schName":"112233","endGrade":"6","location":{"code":"111","name":"主城区","id":"111"},"id":"112233","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"1","status":"E"},{"address":"","schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310107","name":"普陀区","id":"310107","type":3},"telephone":"","schType":{"code":"2","name":"初中","id":"2"},"schCode":112802,"createTime":1576820660562,"schProperty":2,"schAlias":"演示学校初中部","contact":"","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"schName":"演示学校初中部","endGrade":"9","location":{"code":"111","name":"主城区","id":"111"},"id":"112802","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"7","status":"E"},{"address":"","schIdentity":"1","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310106","name":"静安区","id":"310106","type":3},"telephone":"","schType":{"code":"2","name":"初中","id":"2"},"schCode":151511,"createTime":1585029890163,"schProperty":2,"schAlias":"11211","contact":"","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"schName":"11211","endGrade":"9","location":{"code":"111","name":"主城区","id":"111"},"id":"151511","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"7","status":"E"},{"address":"","schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310107","name":"普陀区","id":"310107","type":3},"telephone":"","schType":{"code":"2","name":"初中","id":"2"},"schCode":191112,"createTime":1573548825759,"schProperty":2,"schAlias":"上海测试学校","contact":"","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"schName":"上海测试学校","endGrade":"9","location":{"code":"111","name":"主城区","id":"111"},"id":"191112","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"7","status":"E"},{"schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310107","name":"普陀区","id":"310107","type":3},"schType":{"code":"2","name":"初中","id":"2"},"schCode":191115,"createTime":1573798287232,"schProperty":2,"schAlias":"选课测试学校","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"schName":"选课测试学校","endGrade":"9","location":{"code":"111","name":"主城区","id":"111"},"id":"191115","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"7","status":"E"},{"address":"","schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310107","name":"普陀区","id":"310107","type":3},"telephone":"","schType":{"code":"2","name":"初中","id":"2"},"schCode":200521,"createTime":1590027958801,"schProperty":2,"schAlias":"测试学校0521","contact":"","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"schName":"测试学校0521","endGrade":"9","location":{"code":"111","name":"主城区","id":"111"},"id":"200521","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"7","status":"E"},{"address":"windshen@sina.com","schIdentity":"","city":{"parent":"110000","code":"110100","name":"市辖区","id":"110100","type":2},"county":{"parent":"110100","code":"110101","name":"东城区","id":"110101","type":3},"telephone":"13061681570","schType":{"code":"2","name":"初中","id":"2"},"schCode":204011,"createTime":1585721677134,"schProperty":2,"schAlias":"沈峰测试esi接口学校","contact":"沈峰","provice":{"parent":"0","code":"110000","name":"北京市","id":"110000","type":1},"schName":"沈峰测试esi接口学校","endGrade":"9","location":{"code":"111","name":"主城区","id":"111"},"id":"204011","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"7","status":"E"},{"address":"","schIdentity":"","city":{"parent":"510000","code":"510100","name":"成都市","id":"510100","type":2},"county":{"parent":"510100","code":"510101","name":"市辖区","id":"510101","type":3},"telephone":"","schType":{"code":"1","name":"小学","id":"1"},"schCode":280001,"createTime":1591003616016,"schProperty":2,"schAlias":"教学设计测评","contact":"","provice":{"parent":"0","code":"510000","name":"四川省","id":"510000","type":1},"schName":"教学设计测评","endGrade":"6","location":{"code":"111","name":"主城区","id":"111"},"id":"280001","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"1","status":"E"},{"address":"","schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310107","name":"普陀区","id":"310107","type":3},"telephone":"","schType":{"code":"2","name":"初中","id":"2"},"schCode":280049,"createTime":1585101347732,"schProperty":2,"schAlias":"树德实验测试学校","contact":"","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"schName":"树德实验测试学校","endGrade":"9","location":{"code":"111","name":"主城区","id":"111"},"id":"280049","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"7","status":"E"},{"address":"","schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310107","name":"普陀区","id":"310107","type":3},"telephone":"","schType":{"code":"2","name":"初中","id":"2"},"schCode":280090,"createTime":1587364250897,"schProperty":2,"schAlias":"选课测试学校90","contact":"","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"schName":"选课测试学校90","endGrade":"9","location":{"code":"111","name":"主城区","id":"111"},"id":"280090","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"7","status":"E"},{"address":"","schIdentity":"","city":{"parent":"510000","code":"510600","name":"德阳市","id":"510600","type":2},"county":{"parent":"510600","code":"510623","name":"中江县","id":"510623","type":3},"telephone":"","schType":{"code":"3","name":"高中","id":"3"},"schCode":280149,"createTime":1585531948202,"schProperty":2,"schAlias":"树德测试学校高中","contact":"","provice":{"parent":"0","code":"510000","name":"四川省","id":"510000","type":1},"schName":"树德测试学校高中","endGrade":"12","location":{"code":"111","name":"主城区","id":"111"},"id":"280149","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"10","status":"E"},{"address":"","schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310107","name":"普陀区","id":"310107","type":3},"telephone":"","schType":{"code":"2","name":"初中","id":"2"},"schCode":280151,"createTime":1586227665647,"schProperty":2,"schAlias":"测试学校151","contact":"","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"schName":"测试学校151","endGrade":"9","location":{"code":"111","name":"主城区","id":"111"},"id":"280151","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"7","status":"E"},{"address":"","schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310107","name":"普陀区","id":"310107","type":3},"telephone":"","schType":{"code":"2","name":"初中","id":"2"},"schCode":280301,"createTime":1573804313578,"schProperty":2,"schAlias":"测试学校初中","contact":"","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"schName":"测试学校初中","endGrade":"9","location":{"code":"111","name":"主城区","id":"111"},"id":"280301","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"7","status":"E"},{"schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310107","name":"普陀区","id":"310107","type":3},"schType":{"code":"3","name":"高中","id":"3"},"schCode":280302,"createTime":1576568124874,"schProperty":2,"schAlias":"测试学校302","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"schName":"测试学校302","endGrade":"12","location":{"code":"111","name":"主城区","id":"111"},"id":"280302","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"10","status":"E"},{"address":"","schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310107","name":"普陀区","id":"310107","type":3},"telephone":"","schType":{"code":"2","name":"初中","id":"2"},"schCode":280520,"createTime":1588836021898,"schProperty":2,"schAlias":"测试学校520","contact":"","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"schName":"测试学校520","endGrade":"9","location":{"code":"111","name":"主城区","id":"111"},"id":"280520","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"7","status":"E"},{"schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310107","name":"普陀区","id":"310107","type":3},"schType":{"code":"2","name":"初中","id":"2"},"schCode":280998,"createTime":1584088464007,"schProperty":2,"schAlias":"选课测试活动998","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"schName":"选课测试活动998","endGrade":"9","location":{"code":"111","name":"主城区","id":"111"},"id":"280998","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"7","status":"E"},{"address":"","schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310107","name":"普陀区","id":"310107","type":3},"telephone":"","schType":{"code":"2","name":"初中","id":"2"},"schCode":280999,"createTime":1581906970989,"schProperty":2,"schAlias":"上海选课活动测试学校","contact":"","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"schName":"上海选课活动测试学校","endGrade":"9","location":{"code":"111","name":"主城区","id":"111"},"id":"280999","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"7","status":"E"},{"address":"","schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310107","name":"普陀区","id":"310107","type":3},"telephone":"","schType":{"code":"3","name":"高中","id":"3"},"schCode":281149,"createTime":1585532529213,"schProperty":2,"schAlias":"进线测试学校","contact":"","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"schName":"进线测试学校","endGrade":"12","location":{"code":"111","name":"主城区","id":"111"},"id":"281149","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"10","status":"E"},{"address":"","schIdentity":"","city":{"parent":"410000","code":"410100","name":"郑州市","id":"410100","type":2},"county":{"parent":"410100","code":"410101","name":"市辖区","id":"410101","type":3},"telephone":"","schType":{"code":"1","name":"小学","id":"1"},"schCode":370002,"createTime":1586843832129,"schProperty":2,"schAlias":"河南电信精准教学体验学校1","contact":"","provice":{"parent":"0","code":"410000","name":"河南省","id":"410000","type":1},"schName":"河南电信精准教学体验学校1","endGrade":"6","location":{"code":"111","name":"主城区","id":"111"},"id":"370002","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"1","status":"E"},{"city":{"parent":"360900","code":"360982","name":"樟树市","id":"360982","type":3},"schType":{"code":"3","name":"高中","id":"3"},"schCode":370004,"createTime":1589521095305,"schProperty":2,"schAlias":"江西省宜春市樟树市滨江中学","provice":{"parent":"0","code":"360000","name":"江西省","id":"360000","type":1},"schName":"江西省宜春市樟树市滨江中学","endGrade":"12","location":{"code":"111","name":"主城区","id":"111"},"id":"370004","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"10","status":"E"},{"address":"","schIdentity":"","city":{"code":""},"county":{"code":""},"telephone":"","schType":{"code":"2","name":"初中","id":"2"},"schCode":370005,"createTime":1589855768175,"schProperty":2,"schAlias":"江西省九江第一中学","contact":"","provice":{"parent":"0","code":"360000","name":"江西省","id":"360000","type":1},"schName":"江西省九江第一中学-初中部","endGrade":"9","location":{"code":"111","name":"主城区","id":"111"},"id":"370005","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"7","status":"E"},{"address":"","schIdentity":"","city":{"code":""},"county":{"code":""},"telephone":"","schType":{"code":"3","name":"高中","id":"3"},"schCode":370006,"createTime":1589855770846,"schProperty":2,"schAlias":"江西省九江第一中学","contact":"","provice":{"parent":"0","code":"360000","name":"江西省","id":"360000","type":1},"schName":"江西省九江第一中学-高中部","endGrade":"12","location":{"code":"111","name":"主城区","id":"111"},"id":"370006","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"10","status":"E"},{"city":{"parent":"410000","code":"410100","name":"郑州市","id":"410100","type":2},"county":{"parent":"410100","code":"410101","name":"市辖区","id":"410101","type":3},"schType":{"code":"2","name":"初中","id":"2"},"schCode":370007,"createTime":1594954882133,"schProperty":2,"schAlias":"学情分析测试学校","provice":{"parent":"0","code":"410000","name":"河南省","id":"410000","type":1},"schName":"学情分析测试学校","endGrade":"9","location":{"code":"111","name":"主城区","id":"111"},"id":"370007","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"7","status":"E"},{"address":"","schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310107","name":"普陀区","id":"310107","type":3},"telephone":"","schType":{"code":"3","name":"高中","id":"3"},"schCode":618618,"createTime":1592530467039,"schProperty":2,"schAlias":"演示618学校","contact":"","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"schName":"演示618学校","endGrade":"12","location":{"code":"111","name":"主城区","id":"111"},"id":"618618","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"10","status":"E"},{"schIdentity":"","city":{"parent":"510000","code":"510700","name":"绵阳市","id":"510700","type":2},"county":{"parent":"510700","code":"510701","name":"市辖区","id":"510701","type":3},"schType":{"code":"2","name":"初中","id":"2"},"schCode":816201,"createTime":1582767610977,"schProperty":2,"schAlias":"绵阳游仙慈济实验学校","provice":{"parent":"0","code":"510000","name":"四川省","id":"510000","type":1},"schName":"绵阳游仙慈济实验学校","endGrade":"9","location":{"code":"111","name":"主城区","id":"111"},"id":"816201","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"7","status":"E"},{"address":"","schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310107","name":"普陀区","id":"310107","type":3},"telephone":"","schType":{"code":"3","name":"高中","id":"3"},"schCode":832111,"createTime":1589769548776,"schProperty":2,"schAlias":"演示对接学校高中","contact":"","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"schName":"演示对接学校高中","endGrade":"12","location":{"code":"111","name":"主城区","id":"111"},"id":"832111","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"10","status":"E"},{"schIdentity":"","city":{"parent":"520000","code":"520100","name":"贵阳市","id":"520100","type":2},"county":{"parent":"520100","code":"520101","name":"市辖区","id":"520101","type":3},"schType":{"code":"3","name":"高中","id":"3"},"schCode":851103,"createTime":1574126662192,"schProperty":2,"schAlias":"贵阳一中新世界国际学校(高中)","provice":{"parent":"0","code":"520000","name":"贵州省","id":"520000","type":1},"schName":"贵阳一中新世界国际学校(高中)","endGrade":"12","location":{"code":"210","name":"乡中心区","id":"210"},"id":"851103","schCategory":{"code":"22","name":"民办","id":"22"},"startGrade":"10","status":"E"},{"address":"","schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310107","name":"普陀区","id":"310107","type":3},"telephone":"","schType":{"code":"2","name":"初中","id":"2"},"schCode":852220,"createTime":1595214974132,"schProperty":2,"schAlias":"选课测试学校220","contact":"","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"schName":"选课测试学校220","endGrade":"9","location":{"code":"111","name":"主城区","id":"111"},"id":"852220","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"7","status":"E"},{"address":"","schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310107","name":"普陀区","id":"310107","type":3},"telephone":"","schType":{"code":"2","name":"初中","id":"2"},"schCode":852221,"createTime":1592966810398,"schProperty":2,"schAlias":"基础测试学校221","contact":"","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"schName":"基础测试学校221","endGrade":"9","location":{"code":"111","name":"主城区","id":"111"},"id":"852221","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"7","status":"E"},{"address":"","schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310107","name":"普陀区","id":"310107","type":3},"telephone":"","schType":{"code":"3","name":"高中","id":"3"},"schCode":852222,"createTime":1593320967268,"schProperty":2,"schAlias":"基础测试学校222","contact":"","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"schName":"基础测试学校222","endGrade":"12","location":{"code":"111","name":"主城区","id":"111"},"id":"852222","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"10","status":"E"},{"address":"","schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310107","name":"普陀区","id":"310107","type":3},"telephone":"","schType":{"code":"3","name":"高中","id":"3"},"schCode":852223,"createTime":1593678683192,"schProperty":2,"schAlias":"基础测试学校223","contact":"","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"schName":"基础测试学校223","endGrade":"12","location":{"code":"111","name":"主城区","id":"111"},"id":"852223","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"10","status":"E"},{"address":"","schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310107","name":"普陀区","id":"310107","type":3},"telephone":"","schType":{"code":"3","name":"高中","id":"3"},"schCode":852224,"createTime":1594006380350,"schProperty":2,"schAlias":"基础测试学校224","contact":"","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"schName":"基础测试学校224","endGrade":"12","location":{"code":"111","name":"主城区","id":"111"},"id":"852224","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"10","status":"E"},{"address":"","schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310107","name":"普陀区","id":"310107","type":3},"telephone":"","schType":{"code":"2","name":"初中","id":"2"},"schCode":852226,"createTime":1594863975236,"schProperty":2,"schAlias":"测试学校226","contact":"","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"schName":"测试学校226","endGrade":"9","location":{"code":"111","name":"主城区","id":"111"},"id":"852226","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"7","status":"E"},{"address":"","schIdentity":"","city":{"parent":"520000","code":"520100","name":"贵阳市","id":"520100","type":2},"county":{"parent":"520100","code":"520101","name":"市辖区","id":"520101","type":3},"telephone":"","schType":{"code":"2","name":"初中","id":"2"},"schCode":856201,"createTime":1590990581627,"schProperty":2,"schAlias":"官舟二中","contact":"","provice":{"parent":"0","code":"520000","name":"贵州省","id":"520000","type":1},"schName":"官舟二中","endGrade":"9","location":{"code":"111","name":"主城区","id":"111"},"id":"856201","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"7","status":"E"},{"schIdentity":"","city":{"parent":"110000","code":"110100","name":"市辖区","id":"110100","type":2},"county":{"parent":"110100","code":"110101","name":"东城区","id":"110101","type":3},"schType":{"code":"3","name":"高中","id":"3"},"schCode":991199,"createTime":1573548448711,"schProperty":2,"schAlias":"南京中学","provice":{"parent":"0","code":"110000","name":"北京市","id":"110000","type":1},"schName":"南京中学","endGrade":"12","location":{"code":"111","name":"主城区","id":"111"},"id":"991199","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"10","status":"E"},{"address":"","schIdentity":"","city":{"parent":"320000","code":"320100","name":"南京市","id":"320100","type":2},"county":{"parent":"320100","code":"320101","name":"市辖区","id":"320101","type":3},"telephone":"","schType":{"code":"3","name":"高中","id":"3"},"schCode":992099,"createTime":1589939894802,"schProperty":2,"schAlias":"南京学校高中","contact":"","provice":{"parent":"0","code":"320000","name":"江苏省","id":"320000","type":1},"schName":"南京学校高中","endGrade":"12","location":{"code":"111","name":"主城区","id":"111"},"id":"992099","schCategory":{"code":"21","name":"公办","id":"21"},"startGrade":"10","status":"E"},{"address":"","schIdentity":"","city":{"parent":"310000","code":"310100","name":"市辖区","id":"310100","type":2},"county":{"parent":"310100","code":"310116","name":"金山区","id":"310116","type":3},"telephone":"","schType":{"code":"3","name":"高中","id":"3"},"schCode":999001,"createTime":1595898190080,"schProperty":2,"schAlias":"高中测试学校","contact":"","provice":{"parent":"0","code":"310000","name":"上海市","id":"310000","type":1},"schName":"高中测试学校","endGrade":"12","location":{"code":"111","name":"主城区","id":"111"},"id":"999001","schCategory":{"code":"22","name":"民办","id":"22"},"startGrade":"10","status":"E"}],"message":"请求成功"};
    return res.data;
    //return Men.get_data("../biz/sch/school/list", data);
    //return school_data;
}
var getOrgsList = function(){
    var data = {};
    var res={"code":0,"data":[{"boeName":"演示教育局1","schools":[null,null,null],"boeCode":110901,"id":"110901","boeAlias":"演示教育局1","status":"E"},{"boeName":"演示学校机构","schools":[null,null,null],"boeCode":110903,"id":"110903","boeAlias":"演示机构","status":"E"},{"boeName":"演示学校机构2","schools":[null],"boeCode":110904,"id":"110904","boeAlias":"演示机构2","status":"E"},{"boeName":"测试初中教育局","schools":[{"address":"","schIdentity":"","city":{"code":"310100"},"county":{"code":"310107"},"telephone":"","schType":{"code":"2"},"schCode":112008,"createTime":1592212972337,"schProperty":2,"schAlias":"演示学校初中校区（初中部）","contact":"","provice":{"code":"310000"},"schName":"演示学校初中校区（初中部）","endGrade":"9","location":{"code":"111"},"id":"112008","schCategory":{"code":"21"},"startGrade":"7","status":"E"},{"address":"","schIdentity":"","city":{"code":"310100"},"county":{"code":"310107"},"telephone":"","schType":{"code":"2"},"schCode":112802,"createTime":1576820660562,"schProperty":2,"schAlias":"演示学校初中部","contact":"","provice":{"code":"310000"},"schName":"演示学校初中部","endGrade":"9","location":{"code":"111"},"id":"112802","schCategory":{"code":"21"},"startGrade":"7","status":"E"}],"boeCode":112899,"id":"112899","boeAlias":"测试初中教育局","status":"E"},{"boeName":"测试","schools":[null,null,null],"boeCode":123456,"id":"123456","boeAlias":"测试","status":"E"},{"boeName":"测试机构分析","schools":[null,null,null,null,null,null],"boeCode":180511,"id":"180511","boeAlias":"测试机构分析","status":"E"},{"boeName":"上海市7校联考","schools":[null,null,null,null,null,null,null],"boeCode":210977,"id":"210977","boeAlias":"上海7校","status":"E"},{"boeName":"南京市雨花台区教育局（初中）","schools":[null,null,null,null,null,null,null,null],"boeCode":250905,"id":"250905","boeAlias":"雨花台教育局（初中）","status":"E"},{"boeName":"南京市雨花台区教育局（小学）","schools":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"boeCode":250915,"id":"250915","boeAlias":"雨花台教育局（小学）","status":"E"},{"boeName":"南京市雨花台区（新优质初中）","schools":[null,null,null],"boeCode":250925,"id":"250925","boeAlias":"雨花台（新优质初中）","status":"E"},{"boeName":"成都市武侯区教育局 (初中)","schools":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"address":"","schIdentity":"","city":{"code":"310100"},"county":{"code":"310107"},"telephone":"","schType":{"code":"2"},"schCode":280090,"createTime":1587364250897,"schProperty":2,"schAlias":"选课测试学校90","contact":"","provice":{"code":"310000"},"schName":"选课测试学校90","endGrade":"9","location":{"code":"111"},"id":"280090","schCategory":{"code":"21"},"startGrade":"7","status":"E"}],"boeCode":280905,"id":"280905","boeAlias":"武侯区教育局 (初中)","status":"E"},{"boeName":"成都市高新区八校联考","schools":[null,null,null,null,null,null,null,null,null],"boeCode":280906,"id":"280906","boeAlias":"八校联考","status":"E"},{"boeName":"成都市新都区教育局（初中）","schools":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"boeCode":280911,"id":"280911","boeAlias":"新都教育局初中","status":"E"},{"boeName":"成都市武侯区教育局（高中）","schools":[null,null,null,null,null],"boeCode":280935,"id":"280935","boeAlias":"成都市武侯区教育局（高中）","status":"E"},{"boeName":"树德实验","schools":[null,{"address":"","schIdentity":"","city":{"code":"310100"},"county":{"code":"310107"},"telephone":"","schType":{"code":"2"},"schCode":280049,"createTime":1585101347732,"schProperty":2,"schAlias":"树德实验测试学校","contact":"","provice":{"code":"310000"},"schName":"树德实验测试学校","endGrade":"9","location":{"code":"111"},"id":"280049","schCategory":{"code":"21"},"startGrade":"7","status":"E"}],"boeCode":280949,"id":"280949","boeAlias":"树德实验","status":"E"},{"boeName":"成都七中育才 ","schools":[null,null],"boeCode":280951,"id":"280951","boeAlias":"成都七中育才 ","status":"E"},{"boeName":"成都市棕北中学","schools":[null,null],"boeCode":280952,"id":"280952","boeAlias":"棕北中学","status":"E"},{"boeName":"成都市武侯区教育局（小学）","schools":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"boeCode":284905,"id":"284905","boeAlias":"成都市武侯区教育局（小学）","status":"E"},{"boeName":"成都市武侯区教育局公办小学","schools":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"boeCode":284915,"id":"284915","boeAlias":"武侯区公办小学","status":"E"},{"boeName":"成都市武侯区教育局民办优质小学","schools":[null,null,null,null,null,null],"boeCode":284925,"id":"284925","boeAlias":"武侯区民办优质小学","status":"E"},{"boeName":"成都市武侯区教育局民办农民工子女小学","schools":[null,null,null,null,null,null,null,null,null,null,null,null,null,null],"boeCode":284935,"id":"284935","boeAlias":"武侯区民办农民工子女小学","status":"E"},{"boeName":"焦作市温县教育局","schools":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"boeCode":391905,"id":"391905","boeAlias":"温县教育局","status":"E"},{"boeName":"东海县教育局（小学）","schools":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"boeCode":518915,"id":"518915","boeAlias":"东海县教育局","status":"E"},{"boeName":"泰州市姜堰区教育局","schools":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"boeCode":523902,"id":"523902","boeAlias":"姜堰区教育局","status":"E"},{"boeName":"江苏省泰州市医药高新区初中","schools":[null,null,null],"boeCode":523905,"id":"523905","boeAlias":"医药高新区教育局","status":"E"},{"boeName":"泗洪县初中联考","schools":[null,null],"boeCode":527930,"id":"527930","boeAlias":"泗洪初中联考","status":"E"},{"boeName":"测试机构","schools":[null,null,null],"boeCode":555555,"id":"555555","boeAlias":"测试机构","status":"E"},{"boeName":"绍兴市柯桥区教育局","schools":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"boeCode":575902,"id":"575902","boeAlias":"柯桥区教育局","status":"E"},{"boeName":"株洲市教育局","schools":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"boeCode":731950,"id":"731950","boeAlias":"株洲市教育局","status":"E"},{"boeName":"自贡市高新区教育局","schools":[null,null,null,null,null,null],"boeCode":813966,"id":"813966","boeAlias":"自贡市高新区教育局","status":"E"},{"boeName":"资阳市教育局","schools":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"boeCode":832901,"id":"832901","boeAlias":"资阳市教育局","status":"E"},{"boeName":"资阳市雁江区教育局","schools":[null,null,null,null,null,null,null],"boeCode":832902,"id":"832902","boeAlias":"资阳市雁江区教育局","status":"E"},{"boeName":"资阳市安岳县教育局","schools":[null,null,null,null,null,null],"boeCode":832903,"id":"832903","boeAlias":"资阳市安岳县教育局","status":"E"},{"boeName":"资阳市乐至县教育局","schools":[null,null],"boeCode":832904,"id":"832904","boeAlias":"资阳市乐至县教育局","status":"E"},{"boeName":"四川省德阳市旌阳区教育局(初中)","schools":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"boeCode":838901,"id":"838901","boeAlias":"德阳市旌阳区教育局(初中)","status":"E"}],"message":"请求成功"};
    return res.data;
    //return Men.get_data("../biz/sch/org/list4Enabled", data);
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
                if (_s.city != undefined && !_array.includes(_s.city.name)) {
                    _array.push(_s.city.name)
                }
            });
            return _array.map(city => {
                let obj = {
                    city: city,
                    data: array.filter(_s => _s.city != undefined && _s.city.name === city)
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
            /*
            ORGS.orgAnalysis(code);
            ORGS.setOrgsId(code);
            */            
            if($("#orgsAlyExams").length<=0){
                Men.load_content('analysemanage_article','union/school_jgfx');
                setTimeout(function(){
                    SCHOOL_JGFX.create_jgfx(code);
                    $('#schoolName').html(`${boeName}`);
                    $('#schoolName').attr('data-id', code);
                },500);
            }else{
                SCHOOL_JGFX.create_jgfx(code);
                $('#schoolName').html(`${boeName}`);
                $('#schoolName').attr('data-id', code);
            } 
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