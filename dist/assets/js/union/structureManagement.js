 var STRUCTUREMANAGEMENT = {     
     //生成内容
     create_Main: function(){
         var examData = JSON.parse(sessionStorage.getItem("_examData"));
         var html="";
         var content = examData[0].examination.papers;
         $.each(content,function(index,value){             
             html+=`<li data-papercode="${value.subject.code}" data-totalscore="${value.paper.score/100}">${value.subject.name}</li>`;
         });
         $("#structureul").html(html);
         $("#structureul li").on("click", function(){
             var index = $(this).index();
             $("#examName").html(content[index].paper.paperName);
                $("#examcode").html(content[index].paper.paperCode);
            $("#examTotal").html(content[index].paper.score/100);
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
     },
     //保存考试结构
	save_structure : function() {
		var examItemJson = {};
		var fromNetExam = 2;
		if($('#radio_check1').is(':checked')) {
			if (null == $("#examProjectList").val()) {
				Men.new_confirm('提示', '请选择网阅项目');
				return;
			}
			if (null == $("#examPaperList").val()) {
				Men.new_confirm('提示', '请选择网阅试卷');
				return;
			}
			examItemJson.id = $("#examItemId").val();
			examItemJson.examCode = $("#currentExamCode").val();
			examItemJson.paperCode = $("#currentPaperCode").val();
			examItemJson.schCode = $("#currentSchCode").val();
			examItemJson.clzType = $("#select_class").val();
			examItemJson.netExamCompany = $("#netExamServer").val();
			examItemJson.netExamSchCode = $("#netExamSchCode").val();
			examItemJson.netExamCode = $("#examProjectList").val();
			examItemJson.netExamName = $("#examProjectList option:selected").text();
			examItemJson.netPaperCode = $("#examPaperList").val();
			examItemJson.netPaperName = $("#examPaperList option:selected").text();
			examItemJson.examNos = $("#examNos").val();
			examItemJson.itemSource = 1;
			examItemJson.selClazzs = [];
			$.each($("#class_num input[type='checkbox']"), function(index) {
				if (index > 0) {
					if ($(this).prop("checked") && ("0" != $(this).val())) {
						examItemJson.selClazzs.push($(this).val());
					}
				}
			});
		} else {
			examItemJson.id = $("#examItemId").val();
			examItemJson.examCode = $("#currentExamCode").val();
			examItemJson.paperCode = $("#currentPaperCode").val();
			examItemJson.schCode = $("#currentSchCode").val();
			examItemJson.clzType = "";
			examItemJson.netExamCompany = "";
			examItemJson.netExamSchCode = "";
			examItemJson.netExamCode = "";
			examItemJson.netExamName = "";
			examItemJson.netPaperCode = "";
			examItemJson.netPaperName ="";
			examItemJson.examNos = "";
			examItemJson.itemSource = 2;
			examItemJson.selClazzs = [];
		}
		var itemJson = [];
		$.each($("#structure_tbody .itemCode"), function(index) {
			let item = {
				itemCode : $("#structure_tbody .itemCode").eq(index).val(),
				netExamNo : $("#structure_tbody .netExamNo").eq(index).val(),
				netExamPicNo : $("#structure_tbody .netExamPicNo").eq(index).val(),
				questionNo : $("#structure_tbody .questionNo").eq(index).val(),
				scoreNo : $("#structure_tbody .scoreNo").eq(index).val(),
				type : $("#structure_tbody .type").eq(index).val(),
				category : $("#structure_tbody .category").eq(index).val(),
				score : $("#structure_tbody .score").eq(index).val(),
				kps : $("#structure_tbody .kps").eq(index).val(),
				aps : $("#structure_tbody .aps").eq(index).val(),
				sps : "",
				section : $("#structure_tbody .section").eq(index).val(),
				answer : $("#structure_tbody .answer").eq(index).val(),
				choices : $("#structure_tbody .choice").eq(index).val(),
				isSpecial : "0",
				remarks : ""
			};
			if ($("#structure_tbody .isSpecial").eq(index).prop("checked"))
				item.isSpecial = "1";
			else
				item.isSpecial = "0";
			if ("C" == item.type) {
			} else {
				item.answer = "";
				item.choices = "";
			}
			itemJson.push(item);
		});
		if (itemJson.length==0) {
			Men.new_confirm('提示', '无试卷结构');
			return;
		}
		Tomd.wait();
		$.ajax({
			url : '../biz/exam/item/paper/save',
			type : 'POST',
			dataType : 'json',
			data : {
				examItem : JSON.stringify(examItemJson),
				paperItems : JSON.stringify(itemJson),
				paperCode : $("#currentPaperCode").val()
			},
			success : function(res) {
				Tomd.waitok();
				if (0 == res.code) {
					Men.new_confirm('提示', '保存成功', '');
					$("#examItemId").val(res.data.id);
				} else {
					Men.new_confirm('提示', res.data, '');
				}
			},
			error : function(res) {
				Tomd.waitok();
				Men.new_confirm('提示', '保存失败', '');
			}
		});
	},
     //结构导入
	structure_import : function() {
		var html = `<div class="col-12"><div class="col-12 text-right" style="margin-bottom:.5rem"><button class="default_btn" onclick="SCHOOL.downBaseTemplate()">下载模板</button></div><input id="input-file-max-fs" type="file" name="file" class="dropify-fr" data-default-file="" /></div>`;
		Men.confirm('结构导入', html, '导入', function() { //导入按钮
			 var formData = new FormData();  
		     formData.append("file", $("#input-file-max-fs")[0].files[0]);  
		     formData.append("paperCode", $("#currentPaperCode").val());
		     formData.append("subCode", $("#currentsubCode").val());
		     formData.append("paperScore", $("#paperTotalScore").val());
			Tomd.wait('导入中...');
	    	$.ajax({  
	    		url: '../biz/exam/item/item/import',
	            type: 'POST',  
	            cache : false,  
	            data : formData,  
	            processData : false,  
	            contentType : false,  
	            beforeSend : function() {  
	            },  
	            success : function(res) {  
	            	Tomd.waitok();
		            if (0 == res.code) {
		            	if (0==$("#structure_tbody .netExamNo").length) {
			            	var html = template('paper_item_template', {
								"data" : res.data.items,
								"categorys" : res.data.categorys,
								"types" : res.data.types
							});
							$("#netExamItem").html(html);
		            	} else {
		            		$.each($("#structure_tbody .netExamNo"), function(index){
		            			res.data.items.forEach(item=>{
		            				if ($("#structure_tbody .netExamNo").eq(index).val() == item.netExamNo) {
		            					if ((null == item.childNo) || (0 == item.childNo))
		            						$("#structure_tbody .questionNo").eq(index).val(item.questionNo);
		            					else	
		            						$("#structure_tbody .questionNo").eq(index).val(item.questionNo+"-"+item.childNo);
		            					$("#structure_tbody .scoreNo").eq(index).val(item.scoreNo);
		            					$("#structure_tbody .type").eq(index).val(item.type.code);
		            					if ('C' == item.type.code)  {
		            						$("#structure_tbody .answer").eq(index).show();
		            						$("#structure_tbody .choice").eq(index).show();
		            						$("#structure_tbody .answer").eq(index).val(item.answer);
		            						$("#structure_tbody .choice").eq(index).val(item.choices);
		            					} else {
		            						$("#structure_tbody .answer").eq(index).hide();
		            						$("#structure_tbody .choice").eq(index).hide();
		            						$("#structure_tbody .answer").eq(index).val("");
		            						$("#structure_tbody .choice").eq(index).val("");
		            					}
		            					$("#structure_tbody .category").eq(index).val(item.category.code);
		            					$("#structure_tbody .kps").eq(index).val(item.kpCodes);
		            					$("#structure_tbody .aps").eq(index).val(item.apCodes);
		            					$("#structure_tbody .section").eq(index).val(item.section);
		            					if (1==item.isSpecial)
		            						$("#structure_tbody .isSpecial").eq(index).prop("checked", true);
		            					else
		            						$("#structure_tbody .isSpecial").eq(index).prop("checked", false);
		            					return;
		            				}
		            			});
		            		});
		            	}
	            	} else {
	            		Men.new_confirm("提示", res.message, "");
	            	}
	            },
	            error : function(e){
	            	Men.new_confirm("失败提示", "导入失败", "");
	            	Tomd.waitok();
	            }
	        });  
	    	
	    	
		});
		$(".center_popup").removeClass("wid20").addClass("wid30");
		//初始化上传控件
		Men.dropify();
		$(".dropify-wrapper .dropify-message").css("min-width", "auto");
	},
	//下载模板方法
	downBaseTemplate: function(){
		window.open('../template/数据分析导入模板.xls', '_blank');
	},
	//结构导出
	structure_export : function() {
		var itemJson = [];
		$.each($("#structure_tbody .itemCode"), function(index) {
			let item = {
				itemCode : $("#structure_tbody .itemCode").eq(index).val(),
				netExamNo : $("#structure_tbody .netExamNo").eq(index).val(),
				netExamPicNo : $("#structure_tbody .netExamPicNo").eq(index).val(),
				questionNo : $("#structure_tbody .questionNo").eq(index).val(),
				scoreNo : $("#structure_tbody .scoreNo").eq(index).val(),
				type : $("#structure_tbody .type").eq(index).val(),
				category : $("#structure_tbody .category").eq(index).val(),
				score : $("#structure_tbody .score").eq(index).val(),
				kps : $("#structure_tbody .kps").eq(index).val(),
				aps : $("#structure_tbody .aps").eq(index).val(),
				sps : "",
				section : $("#structure_tbody .section").eq(index).val(),
				answer : $("#structure_tbody .answer").eq(index).val(),
				choices : $("#structure_tbody .choice").eq(index).val(),
				isSpecial : "0",
				remarks : ""
			};
			if ($("#structure_tbody .isSpecial").eq(index).prop("checked"))
				item.isSpecial = "1";
			else
				item.isSpecial = "0";
			if ("C" == item.type) {
			} else {
				item.answer = "";
				item.choices = "";
			}
			itemJson.push(item);
		});
		if (itemJson.length==0) {
			Men.new_confirm('提示', '无试卷结构');
			return;
		}
		Tomd.wait();
		var html = "<form id='exportForm' action='../biz/exam/item/item/export' method='post'>";
		html += "<input type='text' name='paperCode' value='" + $("#currentPaperCode").val() + "'/>";
		html += "<input type='text' name='paperItems' value='" + JSON.stringify(itemJson) + "'/>";
		html += "</form>";
		$(document.body).append($(html));
		$("#exportForm").submit();
		$("#exportForm").remove();
		Tomd.waitok();
	},
	//结构清空
	structure_clear : function() {
		var html = `<div class="center_text_div">确定删除结构吗？</div>`;
		Men.confirm('删除试卷结构', html, '删除', function() { //导入按钮
			$.ajax({
				url : '../biz/exam/item/item/delete',
				type : 'POST',
				dataType : 'json',
				data : {
					paperCode : $("#currentPaperCode").val()
				},
				success : function(res) {
					$("#structure_tbody").empty();
					Tomd.waitok();
				},
				error : function(res) {
					Tomd.waitok();
					Men.new_confirm('提示', '删除失败', '');
				}
			});
		});
		return;
		var html=`<div class="center_text_div">确定删除结构吗？</div>`;
        Men.new_window('删除结构', html, '取消');
        $("#newwind .center_popup").addClass("wid20");
        $('#newwind .center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">删除</button>'); 
        $("#newwind .edit_row_btn").on("click",function(){
    		alert('删除')
    		$("#structure_tbody").empty();

    		
//        	var datas = Men.post_data("../biz/exam/exampaper/deleteItem",data);
//            if(datas.code == 0){
//            	Tomd.toast("center","","删除成功！");
//            	PAPER.ajaxPaperPaginator($('.pagination'));
//            }else{
//            	Tomd.alert("错误提示","删除失败！","");
//            }   
        }); 
        
	},     
     //自动运行
     init: function(){         
         this.create_Main();
     },
 };
STRUCTUREMANAGEMENT.init();