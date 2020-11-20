var DATAMANAGEMENT = {
    //生成内容
     create_Main: function(){
         var examData = JSON.parse(sessionStorage.getItem("_examData"));
         var html="",total=0;
         $.each(examData[0].examination.papers,function(index,value){             
             html+=`<li data-papercode="${value.subject.code}" data-totalscore="${value.paper.score/100}">${value.subject.name}</li>`;
             total+=value.paper.score/100;
         });
         $("#structureul").html(html);
         $("#structureul li").on("click", function(){
             $(this).addClass("hover").siblings().removeClass("hover");
             var paperCode = $(this).attr("data-papercode");
             var res=0;
             if(paperCode%2==0){
                 res={"code":0,"message":"请求成功","data":{"categorys":[{"code":"101","id":"101","name":"基础知识","subject":{"code":"1","id":"1","name":"语文"}},{"code":"102","id":"102","name":"文言文阅读","subject":{"code":"1","id":"1","name":"语文"}},{"code":"103","id":"103","name":"古诗歌阅读鉴赏","subject":{"code":"1","id":"1","name":"语文"}},{"code":"104","id":"104","name":"默写","subject":{"code":"1","id":"1","name":"语文"}},{"code":"105","id":"105","name":"现代文阅读","subject":{"code":"1","id":"1","name":"语文"}},{"code":"106","id":"106","name":"名著阅读","subject":{"code":"1","id":"1","name":"语文"}},{"code":"107","id":"107","name":"语言运用","subject":{"code":"1","id":"1","name":"语文"}},{"code":"108","id":"108","name":"作文","subject":{"code":"1","id":"1","name":"语文"}},{"code":"109","id":"109","name":"选择题","subject":{"code":"1","id":"1","name":"语文"}}],"types":[{"code":"C","id":"C","name":"选择题"},{"code":"F","id":"F","name":"填空题"},{"code":"Q","id":"Q","name":"问答题"},{"code":"S","id":"S","name":"综合题"},{"code":"T","id":"T","name":"判断题"},{"code":"W","id":"W","name":"写作题"}],"paper":{"paperType":1,"paperCode":1001593333894514,"year":2020,"subject":{"code":"1","name":"语文","id":"1"},"owners":[{"ownerType":1,"ownerName":"Moofen","ownerCode":"0"},{"ownerType":3,"ownerName":"(112001) 小学测试学校","ownerCode":"112001"}],"publicStatus":false,"questionStatus":false,"schType":{"code":"1","name":"小学"},"difficulty":3,"score":11000,"createTime":1593333894514,"paperName":"五年级_期末考试_20200622_语文","itemStatus":true,"scope":{"grade":{"code":"5","name":"五年级"},"term":{"code":"2","name":"下学期"}},"id":"1001593333894514","items":[{"netExamPicNo":"","aps":[{"apId":"111","apCode":"11","apName":"识记能力"}],"netExamNo":"一","paperCode":1001593333894514,"questionNo":1,"childNo":0,"itemCode":1731771495620000,"apCodes":"11","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"11211","kpId":"111211","kpName":"看拼音写汉字"}],"score":100,"answer":"","isSpecial":0,"id":"1731771495620000","category":{"code":"101","name":"基础知识"},"choices":"","kpCodes":"11211","remarks":"","scoreNo":"一"},{"netExamPicNo":"","aps":[{"apId":"111","apCode":"11","apName":"识记能力"}],"netExamNo":"二","paperCode":1001593333894514,"questionNo":2,"childNo":0,"itemCode":1731771495620001,"apCodes":"11","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"11310","kpId":"111310","kpName":"组词"}],"score":1000,"answer":"","isSpecial":0,"id":"1731771495620001","category":{"code":"101","name":"基础知识"},"choices":"","kpCodes":"11310","remarks":"","scoreNo":"二"},{"netExamPicNo":"","aps":[{"apId":"111","apCode":"11","apName":"识记能力"}],"netExamNo":"三","paperCode":1001593333894514,"questionNo":3,"childNo":0,"itemCode":1731771495620002,"apCodes":"11","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"11108","kpId":"111108","kpName":"拼音拼读"}],"score":800,"answer":"","isSpecial":0,"id":"1731771495620002","category":{"code":"101","name":"基础知识"},"choices":"","kpCodes":"11108","remarks":"","scoreNo":"三"},{"netExamPicNo":"","aps":[{"apId":"111","apCode":"11","apName":"识记能力"}],"netExamNo":"四","paperCode":1001593333894514,"questionNo":4,"childNo":0,"itemCode":1731771495620003,"apCodes":"11","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"11323","kpId":"111323","kpName":"补全词语"}],"score":200,"answer":"","isSpecial":0,"id":"1731771495620003","category":{"code":"101","name":"基础知识"},"choices":"","kpCodes":"11323","remarks":"","scoreNo":"四"},{"netExamPicNo":"","aps":[{"apId":"113","apCode":"13","apName":"分析综合能力"}],"netExamNo":"五","paperCode":1001593333894514,"questionNo":5,"childNo":0,"itemCode":1731771495620004,"apCodes":"13","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"13205","kpId":"113205","kpName":"诗的思想情感"}],"score":100,"answer":"","isSpecial":0,"id":"1731771495620004","category":{"code":"101","name":"基础知识"},"choices":"","kpCodes":"13205","remarks":"","scoreNo":"五"},{"netExamPicNo":"","aps":[{"apId":"111","apCode":"11","apName":"识记能力"}],"netExamNo":"六","paperCode":1001593333894514,"questionNo":6,"childNo":0,"itemCode":1731771495620005,"apCodes":"11","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"11404","kpId":"111404","kpName":"改写句子"}],"score":100,"answer":"","isSpecial":0,"id":"1731771495620005","category":{"code":"101","name":"基础知识"},"choices":"","kpCodes":"11404","remarks":"","scoreNo":"六"},{"netExamPicNo":"","aps":[{"apId":"111","apCode":"11","apName":"识记能力"}],"netExamNo":"七","paperCode":1001593333894514,"questionNo":7,"childNo":0,"itemCode":1731771495620006,"apCodes":"11","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"11309","kpId":"111309","kpName":"词语的理解与辨析"}],"score":550,"answer":"","isSpecial":0,"id":"1731771495620006","category":{"code":"101","name":"基础知识"},"choices":"","kpCodes":"11309","remarks":"","scoreNo":"七"},{"netExamPicNo":"","aps":[{"apId":"111","apCode":"11","apName":"识记能力"}],"netExamNo":"八","paperCode":1001593333894514,"questionNo":8,"childNo":0,"itemCode":1731771495620007,"apCodes":"11","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"11311","kpId":"111311","kpName":"造句"}],"score":300,"answer":"","isSpecial":0,"id":"1731771495620007","category":{"code":"101","name":"基础知识"},"choices":"","kpCodes":"11311","remarks":"","scoreNo":"八"},{"netExamPicNo":"","aps":[{"apId":"111","apCode":"11","apName":"识记能力"}],"netExamNo":"九","paperCode":1001593333894514,"questionNo":9,"childNo":0,"itemCode":1731771495620008,"apCodes":"11","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"11303","kpId":"111303","kpName":"成语"}],"score":200,"answer":"","isSpecial":0,"id":"1731771495620008","category":{"code":"101","name":"基础知识"},"choices":"","kpCodes":"11303","remarks":"","scoreNo":"九"},{"netExamPicNo":"","aps":[{"apId":"111","apCode":"11","apName":"识记能力"}],"netExamNo":"十","paperCode":1001593333894514,"questionNo":10,"childNo":0,"itemCode":1731771495620009,"apCodes":"11","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"11306","kpId":"111306","kpName":"多义词"}],"score":200,"answer":"","isSpecial":0,"id":"1731771495620009","category":{"code":"101","name":"基础知识"},"choices":"","kpCodes":"11306","remarks":"","scoreNo":"十"},{"netExamPicNo":"","aps":[{"apId":"111","apCode":"11","apName":"识记能力"}],"netExamNo":"十一","paperCode":1001593333894514,"questionNo":11,"childNo":0,"itemCode":1731771495620010,"apCodes":"11","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"11412","kpId":"111412","kpName":"标点符号"}],"score":100,"answer":"","isSpecial":0,"id":"1731771495620010","category":{"code":"101","name":"基础知识"},"choices":"","kpCodes":"11412","remarks":"","scoreNo":"十一"},{"netExamPicNo":"","aps":[{"apId":"113","apCode":"13","apName":"分析综合能力"}],"netExamNo":"十二-1","paperCode":1001593333894514,"questionNo":12,"childNo":1,"itemCode":1731771495620011,"apCodes":"13","section":"A","type":{"code":"C","name":"选择题"},"kps":[{"kpCode":"13402","kpId":"113402","kpName":"说明文"}],"score":50,"answer":"A","isSpecial":0,"id":"1731771495620011","category":{"code":"101","name":"基础知识"},"choices":"ABCD","kpCodes":"13402","remarks":"","scoreNo":"十二-1"},{"netExamPicNo":"","aps":[{"apId":"113","apCode":"13","apName":"分析综合能力"}],"netExamNo":"十二-2","paperCode":1001593333894514,"questionNo":12,"childNo":2,"itemCode":1731771495620012,"apCodes":"13","section":"A","type":{"code":"C","name":"选择题"},"kps":[{"kpCode":"13402","kpId":"113402","kpName":"说明文"}],"score":50,"answer":"B","isSpecial":0,"id":"1731771495620012","category":{"code":"101","name":"基础知识"},"choices":"ABCD","kpCodes":"13402","remarks":"","scoreNo":"十二-2"},{"netExamPicNo":"","aps":[{"apId":"113","apCode":"13","apName":"分析综合能力"}],"netExamNo":"十二-3","paperCode":1001593333894514,"questionNo":12,"childNo":3,"itemCode":1731771495620013,"apCodes":"13","section":"A","type":{"code":"C","name":"选择题"},"kps":[{"kpCode":"13402","kpId":"113402","kpName":"说明文"}],"score":50,"answer":"A","isSpecial":0,"id":"1731771495620013","category":{"code":"101","name":"基础知识"},"choices":"ABCD","kpCodes":"13402","remarks":"","scoreNo":"十二-3"},{"netExamPicNo":"","aps":[{"apId":"113","apCode":"13","apName":"分析综合能力"}],"netExamNo":"十二-4","paperCode":1001593333894514,"questionNo":12,"childNo":4,"itemCode":1731771495620014,"apCodes":"13","section":"A","type":{"code":"C","name":"选择题"},"kps":[{"kpCode":"13402","kpId":"113402","kpName":"说明文"}],"score":50,"answer":"B","isSpecial":0,"id":"1731771495620014","category":{"code":"101","name":"基础知识"},"choices":"ABCD","kpCodes":"13402","remarks":"","scoreNo":"十二-4"},{"netExamPicNo":"","aps":[{"apId":"113","apCode":"13","apName":"分析综合能力"}],"netExamNo":"十三","paperCode":1001593333894514,"questionNo":13,"childNo":0,"itemCode":1731771495620015,"apCodes":"13","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"13426","kpId":"113426","kpName":"说明方法"}],"score":750,"answer":"","isSpecial":0,"id":"1731771495620015","category":{"code":"101","name":"基础知识"},"choices":"","kpCodes":"13426","remarks":"","scoreNo":"十三"},{"netExamPicNo":"","aps":[{"apId":"113","apCode":"13","apName":"分析综合能力"}],"netExamNo":"阅读一-1","paperCode":1001593333894514,"questionNo":14,"childNo":1,"itemCode":1731771495620016,"apCodes":"13","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"13412","kpId":"113412","kpName":"概括段意或层意"}],"score":300,"answer":"","isSpecial":0,"id":"1731771495620016","category":{"code":"101","name":"基础知识"},"choices":"","kpCodes":"13412","remarks":"","scoreNo":"阅读一-1"},{"netExamPicNo":"","aps":[{"apId":"113","apCode":"13","apName":"分析综合能力"}],"netExamNo":"阅读一-2-1","paperCode":1001593333894514,"questionNo":14,"childNo":2,"itemCode":1731771495620017,"apCodes":"13","section":"A","type":{"code":"C","name":"选择题"},"kps":[{"kpCode":"13408","kpId":"113408","kpName":"理解文中句子的意思"}],"score":100,"answer":"C","isSpecial":0,"id":"1731771495620017","category":{"code":"101","name":"基础知识"},"choices":"ABCD","kpCodes":"13408","remarks":"","scoreNo":"阅读一-2-1"},{"netExamPicNo":"","aps":[{"apId":"113","apCode":"13","apName":"分析综合能力"}],"netExamNo":"阅读一-2-2","paperCode":1001593333894514,"questionNo":14,"childNo":3,"itemCode":1731771495620018,"apCodes":"13","section":"A","type":{"code":"C","name":"选择题"},"kps":[{"kpCode":"13408","kpId":"113408","kpName":"理解文中句子的意思"}],"score":100,"answer":"D","isSpecial":0,"id":"1731771495620018","category":{"code":"101","name":"基础知识"},"choices":"ABCD","kpCodes":"13408","remarks":"","scoreNo":"阅读一-2-2"},{"netExamPicNo":"","aps":[{"apId":"113","apCode":"13","apName":"分析综合能力"}],"netExamNo":"阅读一-2-3","paperCode":1001593333894514,"questionNo":14,"childNo":4,"itemCode":1731771495620019,"apCodes":"13","section":"A","type":{"code":"C","name":"选择题"},"kps":[{"kpCode":"13408","kpId":"113408","kpName":"理解文中句子的意思"}],"score":100,"answer":"D","isSpecial":0,"id":"1731771495620019","category":{"code":"101","name":"基础知识"},"choices":"ABCD","kpCodes":"13408","remarks":"","scoreNo":"阅读一-2-3"},{"netExamPicNo":"","aps":[{"apId":"113","apCode":"13","apName":"分析综合能力"}],"netExamNo":"阅读一-2-4","paperCode":1001593333894514,"questionNo":14,"childNo":5,"itemCode":1731771495620020,"apCodes":"13","section":"A","type":{"code":"C","name":"选择题"},"kps":[{"kpCode":"13408","kpId":"113408","kpName":"理解文中句子的意思"}],"score":100,"answer":"C","isSpecial":0,"id":"1731771495620020","category":{"code":"101","name":"基础知识"},"choices":"ABCD","kpCodes":"13408","remarks":"","scoreNo":"阅读一-2-4"},{"netExamPicNo":"","aps":[{"apId":"113","apCode":"13","apName":"分析综合能力"}],"netExamNo":"阅读一-3","paperCode":1001593333894514,"questionNo":14,"childNo":6,"itemCode":1731771495620021,"apCodes":"13","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"13407","kpId":"113407","kpName":"理解文中词语的意思"}],"score":300,"answer":"","isSpecial":0,"id":"1731771495620021","category":{"code":"101","name":"基础知识"},"choices":"","kpCodes":"13407","remarks":"","scoreNo":"阅读一-3"},{"netExamPicNo":"","aps":[{"apId":"113","apCode":"13","apName":"分析综合能力"}],"netExamNo":"阅读一-4","paperCode":1001593333894514,"questionNo":14,"childNo":7,"itemCode":1731771495620022,"apCodes":"13","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"13413","kpId":"113413","kpName":"概括文章主要内容"}],"score":300,"answer":"","isSpecial":0,"id":"1731771495620022","category":{"code":"101","name":"基础知识"},"choices":"","kpCodes":"13413","remarks":"","scoreNo":"阅读一-4"},{"netExamPicNo":"","aps":[{"apId":"113","apCode":"13","apName":"分析综合能力"}],"netExamNo":"阅读一-5","paperCode":1001593333894514,"questionNo":14,"childNo":8,"itemCode":1731771495620023,"apCodes":"13","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"13407","kpId":"113407","kpName":"理解文中词语的意思"}],"score":200,"answer":"","isSpecial":0,"id":"1731771495620023","category":{"code":"101","name":"基础知识"},"choices":"","kpCodes":"13407","remarks":"","scoreNo":"阅读一-5"},{"netExamPicNo":"","aps":[{"apId":"114","apCode":"14","apName":"鉴赏评价能力"}],"netExamNo":"阅读一-6","paperCode":1001593333894514,"questionNo":14,"childNo":9,"itemCode":1731771495620024,"apCodes":"14","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"14311","kpId":"114311","kpName":"想象作文"}],"score":200,"answer":"","isSpecial":0,"id":"1731771495620024","category":{"code":"101","name":"基础知识"},"choices":"","kpCodes":"14311","remarks":"","scoreNo":"阅读一-6"},{"netExamPicNo":"","aps":[{"apId":"113","apCode":"13","apName":"分析综合能力"}],"netExamNo":"阅读二-1","paperCode":1001593333894514,"questionNo":15,"childNo":1,"itemCode":1731771495620025,"apCodes":"13","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"13426","kpId":"113426","kpName":"说明方法"}],"score":100,"answer":"","isSpecial":0,"id":"1731771495620025","category":{"code":"101","name":"基础知识"},"choices":"","kpCodes":"13426","remarks":"","scoreNo":"阅读二-1"},{"netExamPicNo":"","aps":[{"apId":"113","apCode":"13","apName":"分析综合能力"}],"netExamNo":"阅读二-2","paperCode":1001593333894514,"questionNo":15,"childNo":2,"itemCode":1731771495620026,"apCodes":"13","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"13412","kpId":"113412","kpName":"概括段意或层意"}],"score":400,"answer":"","isSpecial":0,"id":"1731771495620026","category":{"code":"101","name":"基础知识"},"choices":"","kpCodes":"13412","remarks":"","scoreNo":"阅读二-2"},{"netExamPicNo":"","aps":[{"apId":"113","apCode":"13","apName":"分析综合能力"}],"netExamNo":"阅读二-3","paperCode":1001593333894514,"questionNo":15,"childNo":3,"itemCode":1731771495620027,"apCodes":"13","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"13408","kpId":"113408","kpName":"理解文中句子的意思"}],"score":200,"answer":"","isSpecial":0,"id":"1731771495620027","category":{"code":"101","name":"基础知识"},"choices":"","kpCodes":"13408","remarks":"","scoreNo":"阅读二-3"},{"netExamPicNo":"","aps":[{"apId":"113","apCode":"13","apName":"分析综合能力"}],"netExamNo":"作文","paperCode":1001593333894514,"questionNo":16,"childNo":0,"itemCode":1731771495620028,"apCodes":"13","section":"A","type":{"code":"W","name":"写作题"},"kps":[{"kpCode":"11323","kpId":"111323","kpName":"补全词语"}],"score":3000,"answer":"","isSpecial":0,"id":"1731771495620028","category":{"code":"108","name":"作文"},"choices":"","kpCodes":"11323","remarks":"","scoreNo":"作文"},{"netExamPicNo":"","aps":[{"apId":"111","apCode":"11","apName":"识记能力"}],"netExamNo":"拓展1","paperCode":1001593333894514,"questionNo":17,"childNo":0,"itemCode":1731771495620029,"apCodes":"11","section":"B","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"11605","kpId":"111605","kpName":"课外知识积累与搜集"}],"score":200,"answer":"","isSpecial":0,"id":"1731771495620029","category":{"code":"101","name":"基础知识"},"choices":"","kpCodes":"11605","remarks":"","scoreNo":"拓展1"},{"netExamPicNo":"","aps":[{"apId":"111","apCode":"11","apName":"识记能力"}],"netExamNo":"拓展2","paperCode":1001593333894514,"questionNo":18,"childNo":0,"itemCode":1731771495620030,"apCodes":"11","section":"B","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"13402","kpId":"113402","kpName":"说明文"}],"score":300,"answer":"","isSpecial":0,"id":"1731771495620030","category":{"code":"101","name":"基础知识"},"choices":"","kpCodes":"13402","remarks":"","scoreNo":"拓展2"},{"netExamPicNo":"","aps":[{"apId":"111","apCode":"11","apName":"识记能力"}],"netExamNo":"拓展3","paperCode":1001593333894514,"questionNo":19,"childNo":0,"itemCode":1731771495620031,"apCodes":"11","section":"B","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"11323","kpId":"111323","kpName":"补全词语"}],"score":500,"answer":"","isSpecial":0,"id":"1731771495620031","category":{"code":"101","name":"基础知识"},"choices":"","kpCodes":"11323","remarks":"","scoreNo":"拓展3"}]},"examItem":{"examCode":2001593333894521,"paperCode":1001593333894514,"netExamCode":"","netExamName":"","netPaperName":"","schCode":112001,"examNos":"","clzType":"","netPaperCode":"","itemSource":"2","id":"1731771506920000","netExamCompany":"","selClazzs":[]}}};
             }else{
                 res={"code":0,"message":"请求成功","data":{"categorys":[{"code":"201","id":"201","name":"选择题","subject":{"code":"2","id":"2","name":"数学"}},{"code":"202","id":"202","name":"填空题","subject":{"code":"2","id":"2","name":"数学"}},{"code":"203","id":"203","name":"计算题","subject":{"code":"2","id":"2","name":"数学"}},{"code":"204","id":"204","name":"解答题","subject":{"code":"2","id":"2","name":"数学"}},{"code":"205","id":"205","name":"判断题","subject":{"code":"2","id":"2","name":"数学"}},{"code":"206","id":"206","name":"应用题","subject":{"code":"2","id":"2","name":"数学"}},{"code":"207","id":"207","name":"图表题","subject":{"code":"2","id":"2","name":"数学"}},{"code":"208","id":"208","name":"证明题","subject":{"code":"2","id":"2","name":"数学"}},{"code":"209","id":"209","name":"作图题","subject":{"code":"2","id":"2","name":"数学"}},{"code":"210","id":"210","name":"基础巩固","subject":{"code":"2","id":"2","name":"数学"}},{"code":"211","id":"211","name":"拓展提升","subject":{"code":"2","id":"2","name":"数学"}}],"types":[{"code":"C","id":"C","name":"选择题"},{"code":"F","id":"F","name":"填空题"},{"code":"Q","id":"Q","name":"问答题"},{"code":"S","id":"S","name":"综合题"},{"code":"T","id":"T","name":"判断题"},{"code":"W","id":"W","name":"写作题"}],"paper":{"paperType":1,"paperCode":1001593333894520,"year":2020,"subject":{"code":"2","name":"数学","id":"2"},"owners":[{"ownerType":1,"ownerName":"Moofen","ownerCode":"0"},{"ownerType":3,"ownerName":"(112001) 小学测试学校","ownerCode":"112001"}],"publicStatus":false,"questionStatus":false,"schType":{"code":"1","name":"小学"},"difficulty":3,"score":11000,"createTime":1593333894520,"paperName":"五年级_期末考试_20200622_数学","itemStatus":true,"scope":{"grade":{"code":"5","name":"五年级"},"term":{"code":"2","name":"下学期"}},"id":"1001593333894520","items":[{"netExamPicNo":"","netExamNo":"一-1","paperCode":1001593333894520,"questionNo":1,"childNo":0,"itemCode":1731771880900000,"apCodes":"","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"21412","kpId":"121412","kpName":"面积单位间的进率及单位换算"},{"kpCode":"21403","kpId":"121403","kpName":"时、分、秒及其关系、单位换算与计算"}],"score":200,"answer":"","isSpecial":0,"id":"1731771880900000","category":{"code":"202","name":"填空题"},"choices":"","kpCodes":"21412,21403","remarks":"","scoreNo":"一-1"},{"netExamPicNo":"","netExamNo":"一-2","paperCode":1001593333894520,"questionNo":2,"childNo":0,"itemCode":1731771880900001,"apCodes":"","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"21109","kpId":"121109","kpName":"分数的意义、读写及分类"}],"score":200,"answer":"","isSpecial":0,"id":"1731771880900001","category":{"code":"202","name":"填空题"},"choices":"","kpCodes":"21109","remarks":"","scoreNo":"一-2"},{"netExamPicNo":"","netExamNo":"一-3","paperCode":1001593333894520,"questionNo":3,"childNo":0,"itemCode":1731771880900002,"apCodes":"","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"21109","kpId":"121109","kpName":"分数的意义、读写及分类"},{"kpCode":"21230","kpId":"121230","kpName":"单位“1”的认识及确定"}],"score":200,"answer":"","isSpecial":0,"id":"1731771880900002","category":{"code":"202","name":"填空题"},"choices":"","kpCodes":"21109,21230","remarks":"","scoreNo":"一-3"},{"netExamPicNo":"","netExamNo":"一-4","paperCode":1001593333894520,"questionNo":4,"childNo":0,"itemCode":1731771880900003,"apCodes":"","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"21109","kpId":"121109","kpName":"分数的意义、读写及分类"}],"score":200,"answer":"","isSpecial":0,"id":"1731771880900003","category":{"code":"202","name":"填空题"},"choices":"","kpCodes":"21109","remarks":"","scoreNo":"一-4"},{"netExamPicNo":"","netExamNo":"一-5","paperCode":1001593333894520,"questionNo":5,"childNo":0,"itemCode":1731771880900004,"apCodes":"","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"21101","kpId":"121101","kpName":"2、3、5的倍数特征"}],"score":200,"answer":"","isSpecial":0,"id":"1731771880900004","category":{"code":"202","name":"填空题"},"choices":"","kpCodes":"21101","remarks":"","scoreNo":"一-5"},{"netExamPicNo":"","netExamNo":"一-6","paperCode":1001593333894520,"questionNo":6,"childNo":0,"itemCode":1731771880900005,"apCodes":"","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"21111","kpId":"121111","kpName":"分数的基本性质"}],"score":200,"answer":"","isSpecial":0,"id":"1731771880900005","category":{"code":"202","name":"填空题"},"choices":"","kpCodes":"21111","remarks":"","scoreNo":"一-6"},{"netExamPicNo":"","netExamNo":"一-7","paperCode":1001593333894520,"questionNo":7,"childNo":0,"itemCode":1731771880900006,"apCodes":"","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"21220","kpId":"121220","kpName":"小数乘法"},{"kpCode":"21221","kpId":"121221","kpName":"小数除法"},{"kpCode":"21113","kpId":"121113","kpName":"分数大小的比较"}],"score":200,"answer":"","isSpecial":0,"id":"1731771880900006","category":{"code":"202","name":"填空题"},"choices":"","kpCodes":"21220,21221,21113","remarks":"","scoreNo":"一-7"},{"netExamPicNo":"","netExamNo":"一-8","paperCode":1001593333894520,"questionNo":8,"childNo":0,"itemCode":1731771880900007,"apCodes":"","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"21401","kpId":"121401","kpName":"根据情景选择合适的计量单位"}],"score":200,"answer":"","isSpecial":0,"id":"1731771880900007","category":{"code":"202","name":"填空题"},"choices":"","kpCodes":"21401","remarks":"","scoreNo":"一-8"},{"netExamPicNo":"","netExamNo":"一-9","paperCode":1001593333894520,"questionNo":9,"childNo":0,"itemCode":1731771880900008,"apCodes":"","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"23202","kpId":"123202","kpName":"可能性的大小"}],"score":200,"answer":"","isSpecial":0,"id":"1731771880900008","category":{"code":"202","name":"填空题"},"choices":"","kpCodes":"23202","remarks":"","scoreNo":"一-9"},{"netExamPicNo":"","netExamNo":"一-10","paperCode":1001593333894520,"questionNo":10,"childNo":0,"itemCode":1731771880900009,"apCodes":"","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"22307","kpId":"122307","kpName":"三角形的周长和面积"}],"score":200,"answer":"","isSpecial":0,"id":"1731771880900009","category":{"code":"202","name":"填空题"},"choices":"","kpCodes":"22307","remarks":"","scoreNo":"一-10"},{"netExamPicNo":"","netExamNo":"001","paperCode":1001593333894520,"questionNo":11,"childNo":1,"itemCode":1731771880900010,"apCodes":"","section":"A","type":{"code":"C","name":"选择题"},"kps":[{"kpCode":"21128","kpId":"121128","kpName":"因数和倍数的意义"}],"score":200,"answer":"B","isSpecial":0,"id":"1731771880900010","category":{"code":"205","name":"判断题"},"choices":"ABCD","kpCodes":"21128","remarks":"","scoreNo":"二-1"},{"netExamPicNo":"","netExamNo":"002","paperCode":1001593333894520,"questionNo":11,"childNo":2,"itemCode":1731771880900011,"apCodes":"","section":"A","type":{"code":"C","name":"选择题"},"kps":[{"kpCode":"21135","kpId":"121135","kpName":"合数与质数"}],"score":200,"answer":"B","isSpecial":0,"id":"1731771880900011","category":{"code":"205","name":"判断题"},"choices":"ABCD","kpCodes":"21135","remarks":"","scoreNo":"二-2"},{"netExamPicNo":"","netExamNo":"003","paperCode":1001593333894520,"questionNo":11,"childNo":3,"itemCode":1731771880900012,"apCodes":"","section":"A","type":{"code":"C","name":"选择题"},"kps":[{"kpCode":"21115","kpId":"121115","kpName":"小数的读写、意义及分类"}],"score":200,"answer":"B","isSpecial":0,"id":"1731771880900012","category":{"code":"205","name":"判断题"},"choices":"ABCD","kpCodes":"21115","remarks":"","scoreNo":"二-3"},{"netExamPicNo":"","netExamNo":"004","paperCode":1001593333894520,"questionNo":11,"childNo":4,"itemCode":1731771880900013,"apCodes":"","section":"A","type":{"code":"C","name":"选择题"},"kps":[{"kpCode":"21230","kpId":"121230","kpName":"单位“1”的认识及确定"}],"score":200,"answer":"B","isSpecial":0,"id":"1731771880900013","category":{"code":"205","name":"判断题"},"choices":"ABCD","kpCodes":"21230","remarks":"","scoreNo":"二-4"},{"netExamPicNo":"","netExamNo":"005","paperCode":1001593333894520,"questionNo":11,"childNo":5,"itemCode":1731771880900014,"apCodes":"","section":"A","type":{"code":"C","name":"选择题"},"kps":[{"kpCode":"22212","kpId":"122212","kpName":"作轴对称图形"}],"score":200,"answer":"B","isSpecial":0,"id":"1731771880900014","category":{"code":"205","name":"判断题"},"choices":"ABCD","kpCodes":"22212","remarks":"","scoreNo":"二-5"},{"netExamPicNo":"","netExamNo":"006","paperCode":1001593333894520,"questionNo":12,"childNo":1,"itemCode":1731771880900015,"apCodes":"","section":"A","type":{"code":"C","name":"选择题"},"kps":[{"kpCode":"21221","kpId":"121221","kpName":"小数除法"}],"score":200,"answer":"C","isSpecial":0,"id":"1731771880900015","category":{"code":"201","name":"选择题"},"choices":"ABCD","kpCodes":"21221","remarks":"","scoreNo":"三-1"},{"netExamPicNo":"","netExamNo":"007","paperCode":1001593333894520,"questionNo":12,"childNo":2,"itemCode":1731771880900016,"apCodes":"","section":"A","type":{"code":"C","name":"选择题"},"kps":[{"kpCode":"21119","kpId":"121119","kpName":"小数大小的比较"}],"score":200,"answer":"D","isSpecial":0,"id":"1731771880900016","category":{"code":"201","name":"选择题"},"choices":"ABCD","kpCodes":"21119","remarks":"","scoreNo":"三-2"},{"netExamPicNo":"","netExamNo":"008","paperCode":1001593333894520,"questionNo":12,"childNo":3,"itemCode":1731771880900017,"apCodes":"","section":"A","type":{"code":"C","name":"选择题"},"kps":[{"kpCode":"21230","kpId":"121230","kpName":"单位“1”的认识及确定"}],"score":200,"answer":"D","isSpecial":0,"id":"1731771880900017","category":{"code":"201","name":"选择题"},"choices":"ABCD","kpCodes":"21230","remarks":"","scoreNo":"三-3"},{"netExamPicNo":"","netExamNo":"009","paperCode":1001593333894520,"questionNo":12,"childNo":4,"itemCode":1731771880900018,"apCodes":"","section":"A","type":{"code":"C","name":"选择题"},"kps":[{"kpCode":"21111","kpId":"121111","kpName":"分数的基本性质"}],"score":200,"answer":"B","isSpecial":0,"id":"1731771880900018","category":{"code":"201","name":"选择题"},"choices":"ABCD","kpCodes":"21111","remarks":"","scoreNo":"三-4"},{"netExamPicNo":"","netExamNo":"010","paperCode":1001593333894520,"questionNo":12,"childNo":5,"itemCode":1731771880900019,"apCodes":"","section":"A","type":{"code":"C","name":"选择题"},"kps":[{"kpCode":"22310","kpId":"122310","kpName":"组合图形的面积"}],"score":200,"answer":"C","isSpecial":0,"id":"1731771880900019","category":{"code":"201","name":"选择题"},"choices":"ABCD","kpCodes":"22310","remarks":"","scoreNo":"三-5"},{"netExamPicNo":"","netExamNo":"四-1","paperCode":1001593333894520,"questionNo":13,"childNo":0,"itemCode":1731771880900020,"apCodes":"","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"21220","kpId":"121220","kpName":"小数乘法"},{"kpCode":"21221","kpId":"121221","kpName":"小数除法"},{"kpCode":"21214","kpId":"121214","kpName":"分数的加法和减法"}],"score":500,"answer":"","isSpecial":0,"id":"1731771880900020","category":{"code":"203","name":"计算题"},"choices":"","kpCodes":"21220,21221,21214","remarks":"","scoreNo":"四-1"},{"netExamPicNo":"","netExamNo":"四-2","paperCode":1001593333894520,"questionNo":14,"childNo":0,"itemCode":1731771880900021,"apCodes":"","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"21221","kpId":"121221","kpName":"小数除法"},{"kpCode":"21118","kpId":"121118","kpName":"近似数及其求法"}],"score":600,"answer":"","isSpecial":0,"id":"1731771880900021","category":{"code":"203","name":"计算题"},"choices":"","kpCodes":"21221,21118","remarks":"","scoreNo":"四-2"},{"netExamPicNo":"","netExamNo":"四-3","paperCode":1001593333894520,"questionNo":15,"childNo":0,"itemCode":1731771880900022,"apCodes":"","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"21222","kpId":"121222","kpName":"小数四则混合运算"},{"kpCode":"21213","kpId":"121213","kpName":"运算定律与简便运算"}],"score":1200,"answer":"","isSpecial":0,"id":"1731771880900022","category":{"code":"203","name":"计算题"},"choices":"","kpCodes":"21222,21213","remarks":"","scoreNo":"四-3"},{"netExamPicNo":"","netExamNo":"四-4","paperCode":1001593333894520,"questionNo":16,"childNo":0,"itemCode":1731771880900023,"apCodes":"","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"22310","kpId":"122310","kpName":"组合图形的面积"}],"score":300,"answer":"","isSpecial":0,"id":"1731771880900023","category":{"code":"203","name":"计算题"},"choices":"","kpCodes":"22310","remarks":"","scoreNo":"四-4"},{"netExamPicNo":"","netExamNo":"五","paperCode":1001593333894520,"questionNo":17,"childNo":0,"itemCode":1731771880900024,"apCodes":"","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"22212","kpId":"122212","kpName":"作轴对称图形"},{"kpCode":"22217","kpId":"122217","kpName":"作平移后的图形"}],"score":400,"answer":"","isSpecial":0,"id":"1731771880900024","category":{"code":"209","name":"作图题"},"choices":"","kpCodes":"22212,22217","remarks":"","scoreNo":"五"},{"netExamPicNo":"","netExamNo":"六-1","paperCode":1001593333894520,"questionNo":18,"childNo":0,"itemCode":1731771880900025,"apCodes":"","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"21306","kpId":"121306","kpName":"分数除法应用题"}],"score":600,"answer":"","isSpecial":0,"id":"1731771880900025","category":{"code":"206","name":"应用题"},"choices":"","kpCodes":"21306","remarks":"","scoreNo":"六-1"},{"netExamPicNo":"","netExamNo":"六-2","paperCode":1001593333894520,"questionNo":19,"childNo":0,"itemCode":1731771880900026,"apCodes":"","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"21314","kpId":"121314","kpName":"简单的行程问题"}],"score":600,"answer":"","isSpecial":0,"id":"1731771880900026","category":{"code":"206","name":"应用题"},"choices":"","kpCodes":"21314","remarks":"","scoreNo":"六-2"},{"netExamPicNo":"","netExamNo":"六-3","paperCode":1001593333894520,"questionNo":20,"childNo":0,"itemCode":1731771880900027,"apCodes":"","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"24501","kpId":"124501","kpName":"分数的大小比较"}],"score":600,"answer":"","isSpecial":0,"id":"1731771880900027","category":{"code":"206","name":"应用题"},"choices":"","kpCodes":"24501","remarks":"","scoreNo":"六-3"},{"netExamPicNo":"","netExamNo":"六-4","paperCode":1001593333894520,"questionNo":21,"childNo":0,"itemCode":1731771880900028,"apCodes":"","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"21330","kpId":"121330","kpName":"有余数的除法应用题"}],"score":600,"answer":"","isSpecial":0,"id":"1731771880900028","category":{"code":"206","name":"应用题"},"choices":"","kpCodes":"21330","remarks":"","scoreNo":"六-4"},{"netExamPicNo":"","netExamNo":"六-5","paperCode":1001593333894520,"questionNo":22,"childNo":0,"itemCode":1731771880900029,"apCodes":"","section":"A","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"24708","kpId":"124708","kpName":"鸡兔同笼"}],"score":600,"answer":"","isSpecial":0,"id":"1731771880900029","category":{"code":"206","name":"应用题"},"choices":"","kpCodes":"24708","remarks":"","scoreNo":"六-5"},{"netExamPicNo":"","netExamNo":"附加-12","paperCode":1001593333894520,"questionNo":23,"childNo":0,"itemCode":1731771880900030,"apCodes":"","section":"B","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"21224","kpId":"121224","kpName":"整数、分数、小数、百分数四则混合运算"},{"kpCode":"21507","kpId":"121507","kpName":"方程的解和解方程"}],"score":400,"answer":"","isSpecial":0,"id":"1731771880900030","category":{"code":"211","name":"拓展提升"},"choices":"","kpCodes":"21224,21507","remarks":"","scoreNo":"附加-12"},{"netExamPicNo":"","netExamNo":"附加-3","paperCode":1001593333894520,"questionNo":24,"childNo":0,"itemCode":1731771880900031,"apCodes":"","section":"B","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"21704","kpId":"121704","kpName":"数与形结合的规律"}],"score":200,"answer":"","isSpecial":0,"id":"1731771880900031","category":{"code":"211","name":"拓展提升"},"choices":"","kpCodes":"21704","remarks":"","scoreNo":"附加-3"},{"netExamPicNo":"","netExamNo":"附加-4","paperCode":1001593333894520,"questionNo":25,"childNo":0,"itemCode":1731771880900032,"apCodes":"","section":"B","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"21333","kpId":"121333","kpName":"公因数和公倍数应用题"}],"score":200,"answer":"","isSpecial":0,"id":"1731771880900032","category":{"code":"211","name":"拓展提升"},"choices":"","kpCodes":"21333","remarks":"","scoreNo":"附加-4"},{"netExamPicNo":"","netExamNo":"附加-5","paperCode":1001593333894520,"questionNo":26,"childNo":0,"itemCode":1731771880900033,"apCodes":"","section":"B","type":{"code":"Q","name":"问答题"},"kps":[{"kpCode":"21114","kpId":"121114","kpName":"约分和通分"}],"score":200,"answer":"","isSpecial":0,"id":"1731771880900033","category":{"code":"211","name":"拓展提升"},"choices":"","kpCodes":"21114","remarks":"","scoreNo":"附加-5"}]},"examItem":{"examCode":2001593333894521,"paperCode":1001593333894520,"netExamCode":"","netExamName":"","netPaperName":"","schCode":112001,"examNos":"","clzType":"","netPaperCode":"","itemSource":"2","id":"1731771715220000","netExamCompany":"","selClazzs":[]}}};
             }
             var html = template('paper_item_template', {
						"data" : res.data.paper.items,
						"categorys" : res.data.categorys,
						"types" : res.data.types
					});
					$("#netExamItem").html(html);
             /*
             var paperCode = $(this).attr("data-papercode");
			$.ajax({
				url : '../biz/exam/item/paper/get',
				type : 'GET',
				dataType : 'json',
				data : {
					paperCode : paperCode,
					examCode : $('#currentExamCode').val(),
					schCode : $('#currentSchCode').val()
				},
				success : function(res) {
					Tomd.waitok();
					$("#paperName").html(res.data.paper.paperName);
					$("#paperCode").html(res.data.paper.paperCode);
					$("#paperTotalScore").val(res.data.paper.score / 100);
					$("#paperScore").html(res.data.paper.score / 100);
					$("#currentPaperCode").val(res.data.paper.paperCode);
					$("#currentsubCode").val(res.data.paper.subject.code);
					if (res.data.examItem) {
						if (2 == res.data.examItem.itemSource) {
							$("#examItemId").val(res.data.examItem.id);
							$("#radio_check2").prop("checked",true);
							$("#netExamSection").hide();
							$("#importDataButton").hide();
						} else {
							$("#radio_check1").prop("checked",true);
							$("#netExamSection").show();
							$("#importDataButton").show();
							$("#examItemId").val(res.data.examItem.id);
							$('#netExamServer').val(res.data.examItem.netExamCompany);
							$("#examNos").val(res.data.examItem.examNos);
							$("#netExamSchCode").val(res.data.examItem.netExamSchCode);
							$("#examItemId").val(res.data.examItem.id);
							slef.gain_netexam(res.data.examItem);
							$("#select_class").val(res.data.examItem.clzType);
							$("#select_class").change();
							$.each($("#class_num input[type='checkbox']"), function(index) {
								var el = $(this);
								res.data.examItem.selClazzs.forEach(clzCode => {
									if (clzCode == el.val()) {
										el.prop("checked", true);
									}
								});
							});
						}
					} else {
						$("#examItemId").val("");
						$("#netExamSchCode").val(slef.getSchoolId());
						slef.gain_netexam(null);
					}
					var html = template('paper_item_template', {
						"data" : res.data.paper.items,
						"categorys" : res.data.categorys,
						"types" : res.data.types
					});
					$("#netExamItem").html(html);
				},
				error : function(res) {
					Tomd.waitok();
					alert("获取试卷错误!")
				}
			});
             */
         });
         $("#structureul li")[0].click();
         $("#examName").html(examData[0].examination.examName);
         $("#examcode").html(examData[0].examination.examCode);
         $("#examTotal").html(total);
     },
    //数据管理表中数据
    datatable_data:function(papercode,callback){ //papercode是传来的科目ID
        var res={code:0,data:{
            schoolNumber:11, //学校数量
            studentNumber:8000, //学生人数
            tableData:[{schoolCode:"2900001",schoolName:"西川北区",number:100,dataImport:100,analysisStatus:1}]
        }};
        if(papercode%2==0){
            res.data={schoolNumber:3,studentNumber:2871,tableData:[{schoolCode:"2123001",schoolName:"秦川区",number:123,dataImport:412,analysisStatus:0},{schoolCode:"8771112",schoolName:"浮屠县",number:60,dataImport:121,analysisStatus:1}]};
        }
        callback(res);
    },
    //生成表内容
    create_tableMain: function(){
        var self=this;
        $("#structureul li").on("click", function(index,value){
            var papercode = $(this).data("papercode");
            self.datatable_data(papercode,function(res){
                $("#schoolNumber").html(res.data.schoolNumber+"所");
                $("#studentNumber").html(res.data.studentNumber+"人");
                if($("#datatable_data tbody tr").length<1){
                   self.create_table(res.data.tableData);
                }else{
                    table.clear();
                    table.rows.add(res.data.tableData);
                    table.draw(false); 
                   };
                
            })
        });
        $("#structureul li").eq(0).click();
    },
    //生成datatables
    create_table: function (data) {
        table = $('#datatable_data').DataTable({
            "data": data,
            "bAutoWidth": false, //是否自适应宽度
            "bProcessing": true, //加载时
            "dom": 'frtilp',
            /*"ajax": {
                "url": "datatable1.json",
                //"success":function(result){alert("down");console.log(result)},
                "error":function(error){alert(error)},
                "dataSrc": "",
            },*/
            "columns": [
                {
                    data: 'schoolCode'
                },
                {
                    data: "schoolName"
                },
                {
                    data: "number"
                },
                {
                    data: "dataImport"
                },
                {
                    data:null
                },
                {
                    "data": null, //此列不绑定数据源
                    "sWidth": "360px",
                    "orderable": false
                }
            ],
            "columnDefs": [
                {
                    "targets": 4,
                    "data": null,
                    "render": function (data, type, row, meta) {
                        var html = "";
                        if(row.analysisStatus == "1")
                            html="已分析";
                        else
                            html="未分析";
                        return html;
                    }
            },
                {
                    "targets": 5,
                    "data": null,
                    "searchable": false,
                    "render": function (data, type, row, meta) {
                        var html = ``;
                        html += `<button class="default_btn_small yellow_btn" onclick="DATAMANAGEMENT.score_import('${data.schoolCode}','${data.schoolName}')"><i class="iconfont icon-bianji"></i>分数</button>`;
                        html += `<button class="default_btn_small" onclick="DATAMANAGEMENT.questions_import('${data.schoolCode}','${data.schoolName}')"><i class="iconfont icon-guanli"></i>客观题</button>`;
                        return html;
                    }
            }],
            "language": {
                "url": "datatables_language.json"
            }
        });
    },
    //批量导入
    batchImport: function(){
        var papername=$("#structureul li.hover").text(); //科目名称
        var papercode=$("#structureul li.hover").data("papercode"); //科目编号
        var html=`<div class="col-12 text-right" style="margin-bottom:.5rem"><button class="default_btn" onclick="DATAMANAGEMENT.batchImportTemplate()">下载模板</button></div>
        <div class="col-12">
            <label><input type="radio" name="importCode" value="1" checked />分数</label>
            <label><input type="radio" name="importCode" value="2" />客观题</label>
        </div>
        <div class="col-12" style="padding-top:8px;padding-bottom:8px"><input type="file" name="file" class="dropify-fr"
					data-default-file="" /></div>`;
        Men.new_PIP("【"+papername+"】批量导入",html,"batchImport","取消","导入",function(){ //点导入按钮后运行
            alert($("input[type='file']").val());
        });        
        Men.dropify(); //初始化上传控件
    },
    //批量导入模板下载
    batchImportTemplate: function(){
        window.open('../template/数据分析导入模板.xls', '_blank');
    },
    //分数导入
    score_import: function(code,name){
        var papername=$("#structureul li.hover").text(); //科目名称
        var papercode=$("#structureul li.hover").data("papercode"); //科目编号
        var html=`<div class="col-12 text-right" style="margin-bottom:.5rem"><button class="default_btn" onclick="DATAMANAGEMENT.scoreImportTemplate()">下载模板</button></div>
        <div class="col-12" style="padding-top:8px;padding-bottom:8px"><input type="file" name="file" class="dropify-fr"
					data-default-file="" /></div>`;
        Men.new_PIP("【"+papername+"】分数导入-("+name+")",html,"batchImport","取消","导入",function(){ //点导入按钮后运行
            alert($("input[type='file']").val());
        });        
        Men.dropify(); //初始化上传控件
    },
    //分数导入模板下载
    scoreImportTemplate: function(){
        window.open('../template/数据分析导入模板.xls', '_blank');
    },
    //客观题导入
    questions_import: function(code,name){
        var papername=$("#structureul li.hover").text(); //科目名称
        var papercode=$("#structureul li.hover").data("papercode"); //科目编号
        var html=`<div class="col-12 text-right" style="margin-bottom:.5rem"><button class="default_btn" onclick="DATAMANAGEMENT.questionsImportTemplate()">下载模板</button></div>
        <div class="col-12" style="padding-top:8px;padding-bottom:8px"><input type="file" name="file" class="dropify-fr"
					data-default-file="" /></div>`;
        Men.new_PIP("【"+papername+"】客观题导入-("+name+")",html,"batchImport","取消","导入",function(){ //点导入按钮后运行
            alert($("input[type='file']").val());
        });        
        Men.dropify(); //初始化上传控件
    },
    //分数导入模板下载
    questionsImportTemplate: function(){
        window.open('../template/数据分析导入模板.xls', '_blank');
    },
    //考试分析数据
    examAnalytical_data: function(papercode,callback){ //papercode是传过来的科目编号
        var res={code:0,data:{
            schoolData:[{code:1029,name:"西川实验"},{code:1054,name:"G实验"},{code:1032,name:"F实验"},{code:1078,name:"S实验"}], //学校名
            analyticalData:[{subjectCode:1,subjectName:"语文",title:"七中育才-七年级-期末考试-20200726-语文",state:true},{subjectCode:1,subjectName:"数学",title:"七中育才-七年级-期末考试-20200726-数学",state:false},{subjectCode:1,subjectName:"英语",title:"七中育才-七年级-期末考试-20200726-英语",state:true}]
        }};
        callback(res);
    },
    //弹出考试分析窗口
    open_examAnalytical: function(){
        var papercode=$("#structureul li.hover").data("papercode"); //科目编号
        this.examAnalytical_data(papercode, function(res){
            if(res.code==0){
                var html=template('analyticalTemplate',{model:res.data.schoolData,subjectModel:res.data.analyticalData});
                Men.new_PIP("考试分析",html,"examAnalytical","取消","确定",function(){
                    alert("按确定后内容")
                });
                $("#schoolAnalyticalAllchecked").on("change", function(){
                    if($(this).is(":checked")){
                        $("#schoolAnalytical").find("input[type='checkbox']").prop("checked",true);
                    }else{
                        $("#schoolAnalytical").find("input[type='checkbox']").prop("checked",false);
                    }
                });
                $("#examAnalyticalAllchecked").on("change", function(){
                    if($(this).is(":checked")){
                        $("#examUl").find("input[type='checkbox']").prop("checked",true);
                    }else{
                        $("#examUl").find("input[type='checkbox']").prop("checked",false);
                    }
                });
            }
        });
    },
    //弹出清空分析窗口
    open_clearAnalytical: function(){
        var papercode=$("#structureul li.hover").data("papercode"); //科目编号
        this.examAnalytical_data(papercode, function(res){
            if(res.code==0){
                var html=template('clearTemplate',{model:res.data.schoolData,subjectModel:res.data.analyticalData});
                Men.new_PIP("你确定要清理当前选择的考试数据吗？",html,"clearAnalytical","取消","清空",function(){
                    alert("按清空后内容")
                });
                $("#schoolAnalyticalAllchecked").on("change", function(){
                    if($(this).is(":checked")){
                        $("#schoolAnalytical").find("input[type='checkbox']").prop("checked",true);
                    }else{
                        $("#schoolAnalytical").find("input[type='checkbox']").prop("checked",false);
                    }
                });
                $("#examAnalyticalAllchecked").on("change", function(){
                    if($(this).is(":checked")){
                        $("#examAnalytical").find("input[type='checkbox']").prop("checked",true);
                    }else{
                        $("#examAnalytical").find("input[type='checkbox']").prop("checked",false);
                    }
                });
            }
        });
    },
    //自动运行
    init: function(){
        this.create_Main();
        this.create_tableMain();
    },
};
DATAMANAGEMENT.init();