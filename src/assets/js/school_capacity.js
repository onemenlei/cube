var data = [
	{
		"id" : "8722051600000016",
		"schoollevel" : "2017级",
        "lesson1" : 92,"lesson2" : 95,"lesson3" : 67,"lesson4" : 74,"lesson5" : 82,"lesson6" : 98,"lesson7" : 68,"lesson8" : 58,"lesson9" : 26
	}
];
//表格生成
var table = $('#datatable_capcity').DataTable({
	"data" : data,
    "autoWidth": false,
	/*"ajax": {
	    "url": "datatable1.json",
	    //"success":function(result){alert("down");console.log(result)},
	    "error":function(error){alert(error)},
	    "dataSrc": "",
	},*/
	"columns" : [
		{
			data : 'id'
		},
		{
			data : "schoollevel"
		},
		{
			data : "lesson1"
		},
		{
			data : "lesson2"
		},
		{
			data : "lesson3"
		},
		{
			data : "lesson4"
		},
		{
			data : "lesson5"
		},
		{
			data : "lesson6"
		},
		{
			data : "lesson7"
		},
		{
			data : "lesson8"
		},
		{
			data : "lesson9"
		}
	],
	"language" : {
		"url" : "datatables_language.json"
	}
});
