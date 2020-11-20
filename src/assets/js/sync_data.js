var sync_data = {
    //查询数据
    school_data: function(schCode, callback){ //schCode 是input输入的参数
        var res = {code:0, message:"提示语", data:[ 
            /*
            private Long id;// 关键字
  private String hnSchId;// 导入学校id
  private String hnPeriod;// 学段10：幼儿园，11小学，12，初中，13高中，14大学，15其它。我们只要11~13。河南传数组，每个学段对应我们一个学校
  private Long moofenSchCode;// 导入到牧分的学校id
  private Integer schStatus=0;// 导入学校状态。0-未导入，1-导入成功，-1-导入失败
  private Integer schOrgStatus=0;// 导入年级班级状态。0-未导入，1-导入成功，-1-导入失败
  private Integer tchStatus=0;// 导入教师状态。0-未导入，1-导入成功，-1-导入失败
  private Integer stuStatus=0;// 导入学生状态。0-未导入，1-导入成功，-1-导入失败
  private Integer parStatus=0;// 导入家长状态。0-未导入，1-导入成功，-1-导入失败
  private Long createTime;// 创建时间
            */
            {id:'987789',hnSchId:'109187',hnPeriod:11,moofenSchCode:'1010',schStatus:0,schOrgStatus:1,tchStatus:2,stuStatus:1,parStatus:0,createTime:1533571200000},
            {id:'987790',hnSchId:'109188',hnPeriod:12,moofenSchCode:'1011',schStatus:1,schOrgStatus:2,tchStatus:1,stuStatus:0,parStatus:1,createTime:1540571200210}
        ]};
        if(res.code == 0)
            callback(res.data);
        else
            alert(res.message);
        /*
        var url = "../hn/syn/getStatus";
        $.get(url, schCode, function(res){
            if(res.code == 0)
                callback(res.data);
            else
                alert(res.message);    
        });
        */ 
    },
    //清理数据
    clear_school_data: function(schCode, callback){
        var url = "../hn/syn/clearSchool";
        $.get(url, schCode, function(res){
            if(res.code == 0)
                callback(res.data);
            else
                alert(res.message);
        });
    },
    //同步学校
    synchronization_school_data: function(schCode, callback){
        var url = "../hn/syn/school";
        $.get(url, schCode, function(res){
            if(res.code == 0)
                callback(res.data);
            else
                alert(res.message);
        });
    },
    //同步学校组织
    synchronization_schoolgroup_data: function(schCode, callback){
        var url = "../hn/syn/schoolOrg";
        $.get(url, schCode, function(res){
            if(res.code == 0)
                callback(res.data);
            else
                alert(res.message);
        });
    },
    //同步学生
    synchronization_student_data: function(schCode, callback){
        var url = "../hn/syn/student";
        $.get(url, schCode, function(res){
            if(res.code == 0)
                callback(res.data);
            else
                alert(res.message);
        });
    },
    //同步家长
    synchronization_parent_data: function(schCode, callback){
        var url = "../hn/syn/parent";
        $.get(url, schCode, function(res){
            if(res.code == 0)
                callback(res.data);
            else
                alert(res.message);
        });
    },
    //同步教师
    synchronization_teacher_data: function(schCode, callback){
        var url = "../hn/syn/teacher";
        $.get(url, schCode, function(res){
            if(res.code == 0)
                callback(res.data);
            else
                alert(res.message);
        });
    },
    //创建表
    create_school_table: function(data){
        var html=template('schoolTemp',{model:data});
                $("#school").html(html);
    },
    //查询表
    scan_school_table: function(){
        var schCode = $("#schCode").val().trim(),self=this;
        if(schCode != '')
        this.school_data(schCode, function(res){
            if(res.length>0){
                self.create_school_table(res);
            }else{
                Men.new_window('提示','查询不到内容','关闭');$(".center_popup").addClass("wid20");
            }            
        });
        else{
            Men.new_window('提示','查询编号为空','关闭');$(".center_popup").addClass("wid20");
        };
    },
    //清理已导入学校
    clear_school_table: function(){
        var schCode = $("#schCode").val().trim();
        if(schCode != '')
        this.clear_school_data(schCode, function(res){
            });
        else{
            Men.new_window('提示','查询编号为空','关闭');$(".center_popup").addClass("wid20");
        };
    },
    //同步学校信息
    synchronization_school_table: function(){
        var schCode = $("#schCode").val().trim();
        if(schCode != '')
        this.synchronization_school_data(schCode, function(res){
            });
        else{
            Men.new_window('提示','查询编号为空','关闭');$(".center_popup").addClass("wid20");
        };
    },
    //同步学校组织信息
    synchronization_schoolgroup_table: function(){
        var schCode = $("#schCode").val().trim();
        if(schCode != '')
        this.synchronization_schoolgroup_data(schCode, function(res){
            });
        else{
            Men.new_window('提示','查询编号为空','关闭');$(".center_popup").addClass("wid20");
        };
    },
    //同步学生信息
    synchronization_student_table: function(){
        var schCode = $("#schCode").val().trim();
        if(schCode != '')
        this.synchronization_student_data(schCode, function(res){
            });
        else{
            Men.new_window('提示','查询编号为空','关闭');$(".center_popup").addClass("wid20");
        };
    },
    //同步家长信息
    synchronization_parent_table: function(){
        var schCode = $("#schCode").val().trim();
        if(schCode != '')
        this.synchronization_parent_data(schCode, function(res){
            });
        else{
            Men.new_window('提示','查询编号为空','关闭');$(".center_popup").addClass("wid20");
        };
    },
    //同步教师信息
    synchronization_teacher_table: function(){
        var schCode = $("#schCode").val().trim();
        if(schCode != '')
        this.synchronization_teacher_data(schCode, function(res){
            });
        else{
            Men.new_window('提示','查询编号为空','关闭');$(".center_popup").addClass("wid20");
        };
    },
    init: function(){},
};
sync_data.init();