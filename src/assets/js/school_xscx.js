//模拟数据
var data=[{"stuTran":0,"yearIn":12,"stuCode":2840491200000118,"sex":"男","phone":null,"classId":28404912004,"status":0,"foreigner":null,"stuGid":1149904942000118,"_id":"2840491200000118","schId":284049,"stuAlias":"赵锦","email":null,"sexId":0,"stuRollNo":null,"noticeXkIds":null,"stuId":2840491200000118,"stuID":null,"stuName":"赵锦","forSearch":null},{"stuTran":0,"yearIn":12,"stuCode":2840491200000101,"sex":"男","phone":null,"classId":28404912001,"status":0,"foreigner":null,"stuGid":1149904942000101,"_id":"2840491200000101","schId":284049,"stuAlias":"赵梓溪","email":null,"sexId":0,"stuRollNo":null,"noticeXkIds":null,"stuId":2840491200000101,"stuID":null,"stuName":"赵梓溪","forSearch":null},{"stuTran":0,"yearIn":12,"stuCode":2840491200000133,"sex":"男","phone":null,"classId":28404912004,"status":0,"foreigner":null,"stuGid":1149904942000133,"_id":"2840491200000133","schId":284049,"stuAlias":"赵熙麦","email":null,"sexId":0,"stuRollNo":null,"noticeXkIds":null,"stuId":2840491200000133,"stuID":null,"stuName":"赵熙麦","forSearch":null},{"stuTran":0,"yearIn":12,"stuCode":2840491200000033,"sex":"男","phone":null,"classId":28404912003,"status":0,"foreigner":null,"stuGid":1149904942000033,"_id":"2840491200000033","schId":284049,"stuAlias":"赵德星","email":null,"sexId":0,"stuRollNo":null,"noticeXkIds":null,"stuId":2840491200000033,"stuID":null,"stuName":"赵德星","forSearch":null},{"stuTran":0,"yearIn":12,"stuCode":2840491200000027,"sex":"男","phone":null,"classId":28404912003,"status":0,"foreigner":null,"stuGid":1149904942000027,"_id":"2840491200000027","schId":284049,"stuAlias":"赵文扬","email":null,"sexId":0,"stuRollNo":null,"noticeXkIds":null,"stuId":2840491200000027,"stuID":null,"stuName":"赵文扬","forSearch":null}];

///school_xscx 学生查询
var xscx = {
    //生成datatables
    create_table: function (){
        table = $('#datatable_xscx').DataTable({
            "data":data,
            "bAutoWidth": false, //是否自适应宽度
            dom:'lBrtip',
            /*"ajax": {
                "url": "datatable1.json",
                //"success":function(result){alert("down");console.log(result)},
                "error":function(error){alert(error)},
                "dataSrc": "",
            },*/
            "columns": [
                {
                    data: 'stuName'
                },
                {
                    data: "stuAlias"
                },
                {
                    data: "stuGid"
                },
                {
                    data: "yearIn"
                },
                {
                    data: "schId"
                },
                {
                    "data": "classId"
                }
            ],
            "columnDefs":[],
            "language": {
                "url": "datatables_language.json"
            }
        });
    },
    //用学生名搜索表内容
    search_student: function (){
       $("#search_student_button").on("click",function(){
           //由于学生名在列1中，所以对表列1的内容进行搜索
        var arg=$("#search_student_input").val();
        table.columns(0).search(arg).draw(false);
        /* 例子，对第一列进行模糊非智能搜索
        table.columns(0).search($('#search_phone_button').val(),true,false).draw(false); 
        */
}) 
    },
    //设定页面一加载就运行
    init: function () {
        xscx.create_table();
        xscx.search_student();
    }
};

//加载即运行
xscx.init();