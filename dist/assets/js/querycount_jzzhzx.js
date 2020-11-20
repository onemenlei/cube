var PATRIARCH = {
    init: function() {
    },
    // 初始化考试接口数据
    requestTable:function() {
        Tomd.wait('加载中...');
        $.ajax({
            url: '/path/to/file',
            type: 'POST',
            dataType: 'json',
            data: {param1: 'value1'},
            success:function(data){
                Tomd.waitok();
                // 重新加载
                PATRIARCH.renderTable(res);
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
    renderTable: function(res) {
        console.log(res)
        $('#scoreContent').DataTable({
            'emptyTable': '没有数据',
            'loadingRecords': '加载中...',
            'ordering': false, //不排序    
            'lengthChange': false, //不显示分页下拉列表
            "bAutoWidth": false, //是否自适应宽度
            "info": false, //不显示信息
            // 'searching': false,  //关闭搜索
            'language': {
                'url': 'datatables_language.json'
            },
            'data': res,
            'columns': [
                { 'data': null },
                { 'data': null },
                { 'data': null },
                { 'data': null },
                { 'data': null },
                { 'data': null }
            ]
        });
    },
    onClockInquireInfo:function(){
		var filterYearIn = $('#filterYearIn').val();
		var filterClass = $('#filterClass').val();
		PATRIARCH.requestTable();
    },
    onClickBatchPayment:function(){
		Tomd.alert('导入缴费的数据', '<input type="file" id="input-file-max-fs" class="dropify" data-max-file-size="2M">', '取消');
        $('.T-modal').off('click');
        $('.T-dialog').addClass('T-dialog-lg');
        $('.T-foot').prepend(`<a onclick="PATRIARCH.onClickBatchPaymentOk()">保存</a>`);
		PATRIARCH.initDropify();
    },
    onClickBatchPaymentOk:function(){
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
    onClickInfoDownload:function(){

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
PATRIARCH.init();