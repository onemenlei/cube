//模拟数据表 后台不用
var data=[{
        "id":"00001",
        "type":"牧分",
		"account": "doofen",
		"phone": "18782918743",
		"userName": "牧分科技",
		"role": 0,
		"region": "上海",
		"password": "0c8b13faeaca8066450dbae177a66289",
        "mesjg": "某公司",
        "companyCN": "沁源"
	}];
//帐户管理
var zhgl={
    //生成datatables
    create_table:function(){
        table = $('#datatable_zhgl').DataTable({
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
                    data: 'type'
                },
                {
                    data: null
                },
                {
                    data: "account",
                },
                {
                    data: "userName",
                },
                {
                    data: "region",
                },
                {
                    data: "phone"
                },
                {
                    "data": null, //此列不绑定数据源
                    "sWidth" : "180px",
					"orderable": false
                }
            ],
            "columnDefs":[
                {"targets":1,
                 "data":null,
                 "render":function(data,type,row,meta){
                     if(row.role == '0')
                         return "管理员";
                     else
                         return "运维人员";
                 }
                },
                {
                "targets":6,
                "data":null,
                "searchable":false,
                "render":function(data,type,row,meta){
                    var html=`<button class="default_btn_small green_btn" onclick="zhgl.editor_open(${data.id})"><i class="iconfont icon-bianji"></i>修改</button><button class="default_btn_small red_btn" onclick="Men.del_list({id:${data.id}},${meta.row},'../biz/sch/school/delSchool')"><i class="iconfont icon-shanchu"></i>删除</button>`;
                    return html;
                }
            }],
            "language": {
                "url": "datatables_language.json"
            }
        });
    },
    //创建 按钮
    newly_btn: function(){
        //校验
        $("#zhgl1").formValidator();
        var r = $("#zhgl1").validate().form();
        if (r) {
            //从input中传值
            var schoollevel = $("#inputtext_01").val();
            var grade = $("#inputtext_02").val();
            var classs = $("#inputtext_03").val();
            var classalias = $("#inputtext_04").val();
            var section = $("#inputtext_05").val();
            var classtype = $("#inputtext_06").val();
            var role = classs.write_name();
            var datas = {};
        // 保存修改到后台并判断正确与否        
        Men.judge_editor('../biz/sch/school/addSchool', datas);
            zhgl.school_reset();
            document.getElementById("zhgl1").reset();
        }
    },
    //编辑窗口 打开
    editor_open: function(code){
        var html = $("#zhgl_template").html();
        Men.new_window('帐号管理', html, '取消', zhgl.editor_btn);
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">保存</button>');
        //要用ajax找后台数据. 下一条是本地数据,程序员删掉！
        var datas = Men.list_post(code, data, 'id');
        /****ajax找后台数据 
        var data={code: code};    
        var datas=Men.post_data('../biz/sch/school/addSchool',data);    
        ****/
        $("#code").val(datas.id); //放唯一ID号
        $("#inputtext_01").val(datas.type);
        $("#inputtext_02").val(datas.userName);
        $("#inputtext_03").val(datas.companyCN);
        $("#inputtext_04").val(datas.password);
        $("#inputtext_05").val(datas.region);
        $("#inputtext_06").val(datas.phone);
        $("#inputtext_07").val(datas.mesjg);
    },
    //编辑窗口 保存按钮
    editor_btn: function(){
        //校验
        $("#zhgl").formValidator();
        var r = $("#zhgl").validate().form();
        if (r) {
            //从input中传值
            var code = $("#code").val();
            var schoollevel = $("#inputtext_01").val();
            var grade = $("#inputtext_02").val();
            var classs = $("#inputtext_03").val();
            var classalias = $("#inputtext_04").val();
            var section = $("#inputtext_05").val();
            var classtype = $("#inputtext_06").val();
            var role = classs.write_name();
            var datas = {};
        // 保存修改到后台并判断正确与否        
        Men.judge_editor('../biz/sch/school/addSchool', datas);
        };
    
},
    //管理学校窗口 打开
    glxx_open: function(){
        var html = $("#glxx_template").html();
        Men.new_window('管理学校', html, '取消', zhgl.glxx_btn);
        $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">保存</button>');        
        /*检索学校*/
        var defaultData = [
          {
            text: '四川',
            tags: ['4'],
            nodes: [
              {
                text: '成都',
                tags: ['2'],
                nodes: [
                  {
                    text: '七中育才汇源',
                    id: '1',
                    tags: ['0']
                  },
                  {
                    text: '七中育才银杏',
                    id: '2', 
                    tags: ['0']
                  }
                ]
              },
              {
                text: '德阳',
                tags: ['2'],
                nodes:[
                    {
                        text: '德阳第七中学',
                        id: '3',
                        tags: ['0']                    
                    }                      
                ]
              }
            ]
          },
          {
            text: '上海',
            tags: ['4'],
              nodes:[
                  {
                      text: '卢湾区',
                      tags: ['2'],
                      nodes:[
                          {
                              text: '卢湾区第一小学',
                              id: '4',
                              tags: ['0']
                          },
                          {
                              text: '育群小学',
                              id: '5',
                              tags: ['0']
                          }
                      ]
                  },
                  {
                      text: '黄浦区',
                      tags: ['2'],
                      nodes:[
                          {
                              text: '黄浦区中学院',
                              id: '6',
                              tags: ['0']
                          },
                          {
                              text: '黄浦艺术中学',
                              id: '7',
                              tags: ['0']
                          }
                      ]
                  }
              ]
          }
        ];
        var $checkableTree = $('#treeview-checkable').treeview({
          data: defaultData,
          showIcon: false,
          showCheckbox: true,
          enableLinks: true, 
          levels: 1,
          onNodeChecked: function(event, node) {
            $('#input-check-node').val(node.text);
          },
          onNodeUnchecked: function (event, node) {
            $('#checkable-output').prepend('<p>' + node.text + ' was unchecked</p>');
          }
        });
        $('#input-check-node').on('blur', function (e) {
          checkableNodes = findCheckableNodess();
          $('.check-node').prop('disabled', !(checkableNodes.length >= 1));
        });
        var findCheckableNodess = function() {
          return $checkableTree.treeview('search', [ $('#input-check-node').val(), { ignoreCase: false, exactMatch: false } ]);
        };
        var checkableNodes = findCheckableNodess();


        //返回节点测试
        $("#sin").click(function(){
    var nn=$('#treeview-checkable').treeview('getSelected', 1);
    console.table(nn);
});
    },
    //管理学校 保存按钮
    glxx_btn: function(){  
        Men.close_window();
    },
    //第一项反白选中，内容显示第一项
    school_reset: function(){        
        $("#zhgl_ul.label_top_menu_ul li").eq(0).addClass("selected").siblings().removeClass("selected");
        $("#zhgl_ul.label_top_menu_ul+div").children().eq(0).show().siblings().hide();
    },
    //设定页面一加载就运行
    init: function(){
        zhgl.school_reset();
        zhgl.create_table();  
    },
//表格生成
};

//加载即运行
zhgl.init();








