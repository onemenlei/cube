var TEACHERACC ={
	datajson:{"data":[{"yearIn":12,"tchRoleEn":"yw12001","status":0,"classId":51874612001,"xkId":1,"tchId":5187464020050005,"postId":2,"postName":"学科教师","tchGid":null,"schId":518746,"_id":"5187464020050005","account":"yw12001@518746","tchRole":"语文12001"},{"yearIn":null,"tchRoleEn":"xz","status":0,"classId":null,"xkId":null,"tchId":5187464020050006,"postId":20,"postName":"校长","tchGid":null,"schId":518746,"_id":"5187464020050006","account":"xz@518746","tchRole":"校长"},{"yearIn":12,"tchRoleEn":"bzr12001","status":0,"classId":51874612001,"xkId":null,"tchId":5187464020050007,"postId":3,"postName":"班主任","tchGid":null,"schId":518746,"_id":"5187464020050007","account":"bzr12001@518746","tchRole":"班主任12001"},{"yearIn":12,"tchRoleEn":"ywzz12","status":0,"classId":null,"xkId":1,"tchId":5187464020050008,"postId":5,"postName":"备课组长","tchGid":null,"schId":518746,"_id":"5187464020050008","account":"ywzz12@518746","tchRole":"语文备课组长"},{"yearIn":12,"tchRoleEn":"sx12001","status":0,"classId":51874612001,"xkId":2,"tchId":5187464020050009,"postId":2,"postName":"学科教师","tchGid":null,"schId":518746,"_id":"5187464020050009","account":"sx12001@518746","tchRole":"数学12001"},{"yearIn":12,"tchRoleEn":"sx12002","status":0,"classId":51874612002,"xkId":2,"tchId":5187464020050001,"postId":2,"postName":"学科教师","tchGid":null,"schId":518746,"_id":"5187464020050001","account":"sx12002@518746","tchRole":"数学12002"},{"yearIn":null,"tchRoleEn":"jw","status":0,"classId":null,"xkId":null,"tchId":5187464020050002,"postId":7,"postName":"教务","tchGid":null,"schId":518746,"_id":"5187464020050002","account":"jw@518746","tchRole":"教务"},{"yearIn":12,"tchRoleEn":"njzz12","status":0,"classId":null,"xkId":null,"tchId":5187464020050003,"postId":4,"postName":"年级组长","tchGid":null,"schId":518746,"_id":"5187464020050003","account":"njzz12@518746","tchRole":"年级组长12"},{"yearIn":12,"tchRoleEn":"bzr12002","status":0,"classId":51874612002,"xkId":null,"tchId":5187464020050010,"postId":3,"postName":"班主任","tchGid":null,"schId":518746,"_id":"5187464020050010","account":"bzr12002@518746","tchRole":"班主任12002"},{"yearIn":12,"tchRoleEn":"sxzz12","status":0,"classId":null,"xkId":2,"tchId":5187464020050011,"postId":5,"postName":"备课组长","tchGid":null,"schId":518746,"_id":"5187464020050011","account":"sxzz12@518746","tchRole":"数学备课组长"},{"yearIn":12,"tchRoleEn":"yw12002","status":0,"classId":51874612002,"xkId":1,"tchId":5187464020050004,"postId":2,"postName":"学科教师","tchGid":null,"schId":518746,"_id":"5187464020050004","account":"yw12002@518746","tchRole":"语文12002"}],"success":true},
	init:function(){
		TEACHERACC.renderTeacher(TEACHERACC.datajson.data);
	},
	requestTeacher:function() {
        Tomd.wait('加载中...');
        $.ajax({
            url: '/path/to/file',
            type: 'POST',
            dataType: 'json',
            data: {param1: 'value1'},
            success:function(data){
                Tomd.waitok();
                // 重新加载
                TEACHERACC.renderTeacher(res);
            },
            error:function(data){
                if (data) {
                    Tomd.waitok();
                    Tomd.alert('', '数据加载失败，请稍候再试！', '确定');
                } else if (data) {
                    Tomd.waitok();
                    Tomd.alert('', '网络不给力，请稍候再试！', '确定');
                }
            }
        });
    },
	renderTeacher:function(res){
		console.log(res);
		$('#teacherTable').DataTable({
            'emptyTable': '没有数据',
            'loadingRecords': '加载中...',
            'ordering': false, //不排序    
            // 'lengthChange': false, //不显示分页下拉列表
            "bAutoWidth": false, //是否自适应宽度
            "info": false, //不显示信息
            'language': {
                'url': 'datatables_language.json'
            },
            'data': res,
            'columns': [
                { 'data': 'tchRole' },
                { 'data': 'account' },
                { 'data': 'postName' },
                { 'data': null }
            ],
            'columnDefs': [
                {
                    'targets': -1,
                    render: function(data) {
                        return `<button onclick="TEACHERACC.onClickResetPassword(${data.tchId},'${data.account}')" type="button" class="edit btn btn-primary btn-xs"><i class="iconfont icon-bianji"></i>重置密码</button>`;
                    }
                }
            ]
        });
	}
	,onClickResetPassword:function(id, acc){
		var html = `确定要重置教师${acc}的密码吗？`
		Tomd.alert('重置密码提示', html, '取消');
            $('.T-modal').off('click');
            $('.T-foot').prepend(`<a onclick="TEACHERACC.onClickResetPasswordOk(${id})">提交</a>`);

	},
	onClickResetPasswordOk:function(id){
		Tomd.delmodal();
		Tomd.wait('加载中...');
        $.ajax({
            url: '/path/to/file',
            type: 'POST',
            dataType: 'json',
            data: {param1: 'value1'},
            success:function(data){
                Tomd.waitok();
                Tomd.alert('','重置密码成功，重置后的密码为 "87654321"','确定');
                // 重新加载
                // ANSWER.renderPaperTable();
            },
            error:function(data){
                if (data) {
                    Tomd.waitok();
                    Tomd.alert('','重置密码，请稍候再试！','确定');
                }else if(data){
                    Tomd.waitok();
                    Tomd.alert('','网络不给力，请稍候再试！','确定');
                }
            }
        });
	}

}
TEACHERACC.init();