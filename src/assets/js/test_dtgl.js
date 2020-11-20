var ANSWER = {
	init:function(){
		ANSWER.initSelect();
	},
	// 导入试卷
    onClickAnswerUploadOk:function(id){
        Tomd.wait('加载中...');
        $.ajax({
            url: '/path/to/file',
            type: 'POST',
            dataType: 'json',
            data: {param1: 'value1'},
            success:function(data){
                Tomd.waitok();
                Tomd.alert('','导入成功！','确定');
                // 重新加载
                // ANSWER.renderPaperTable();
            },
            error:function(data){
                if (data) {
                    Tomd.waitok();
                    Tomd.alert('','导入失败，请稍候再试！','确定');
                }else if(data){
                    Tomd.waitok();
                    Tomd.alert('','网络不给力，请稍候再试！','确定');
                }
            }
        });
    },
	initSelect:function(){
		$('#btnAnswer').click(function(){
			var answerNumber = $('#answerNumber').val();
			if (answerNumber == '') {
				Tomd.alert('','请输入考试编号','确定');
				return;
			}else{
				Tomd.alert('上传答题文件', '<input type="file" id="input-file-max-fs" class="dropify" data-max-file-size="2M" data-allowed-file-extensions="zip"><p class="text-danger text-left mt-2">该功能用于上传学生考试截图，请上传zip文件。</p>', '取消');
		        $('.T-modal').off('click');
		        $('.T-dialog').addClass('T-dialog-lg');
		        $('.T-foot').prepend(`<a onclick="ANSWER.onClickAnswerUploadOk()">确定</a>`);
                ANSWER.initDropify();
			}
		});
	},
    //初始化上传
    initDropify: function() {
        $('.dropify').dropify({
            messages: {
                'default': '点击或拖拽文件到这里',
                'replace': '点击或拖拽文件到这里来替换文件',
                'remove': '移除文件',
                'error': '对不起，你上传的文件太大了'
            }
        });
    }
}
ANSWER.init();