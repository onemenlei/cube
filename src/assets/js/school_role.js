var data=[{"id":"000001","roleName":"英语17002","accountName":"yy17002","role":"学科教师"}];
//表格生成
var table = $('#datatable_role').DataTable({
	"data" : data,
	/*"ajax": {
	    "url": "datatable1.json",
	    //"success":function(result){alert("down");console.log(result)},
	    "error":function(error){alert(error)},
	    "dataSrc": "",
	},*/
	"columns" : [
		{
			data : 'roleName'
		},
		{
			data : "accountName"
		},
		{
			data : "role"
		},
		{
			"data" : null //此列不绑定数据源
		}
	],
	"columnDefs" : [
		{
			"targets" : 3,
			"data" : null,
			"searchable" : false,
			"render" : function(data, type, row, meta) {
				var html = `<button class="default_btn_small green_btn" onclick="data_btn_edit_open(${data.id},'edit_role_popup')"><i class="iconfont icon-bianji"></i>修改</button><button class="default_btn_small red_btn" onclick="data_btn_del(${data.id},${meta.row})"><i class="iconfont icon-shanchu"></i>删除</button>`;
				return html;
			}
		} ],
	"language" : {
		"url" : "datatables_language.json"
	}
});

var data_btn_edit = function(id){
    //要用ajax找后台数据. 现在是本地数据
     $.each(data,function(index,value){
               if(value.id == id)
                { //弹出窗口绑上数据
                    console.log(value);
                    $("#role_input_01").val(value.roleName);
                    return false;
                }
               });
};