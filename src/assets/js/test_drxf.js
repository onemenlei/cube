var DRXF = {
    init: function() {
        Tomd.fixedThead('table-drxf1', 'thead');
        // Tomd.fixedThead('table-drxf2', 'thead');
        DRXF.selectObjective();
    }
    ,selectObjective: function() {
        //标签切换 联动
        $('#navTabs1 li').click(function() {
            var i = $(this).index();
            // var data = $(this).attr('data-id');
            $(this).addClass("active").siblings().removeClass("active");
            $(this).parent().next(".tab-content").html();
            $('#navTabs2 li')[i].click();
        });
        $('#navTabs2 li').click(function() {
            var i = $(this).index();
            var html = '';
            // var data = $(this).attr('data-id');
            $(this).addClass("active").siblings().removeClass("active");
            $(this).parent().next(".tab-content").html(html);
            $('#navTabs1 li')[i].click();
        });


        // 选中表格
        $('.table-drxf tr').on('click',function(event) {
            $(this).toggleClass('active');
        });
    }
    // 试卷结构更新
    ,paperUpdate:function(){
        console.log(1)
    },
    // 上传导入
    onClickPaperUpload: function(id) {
        // Basic
        Tomd.alert('导入结构', '<input type="file" id="input-file-max-fs" class="dropify" data-max-file-size="2M">', '取消');
        $('.T-modal').off('click');
        $('.T-dialog').addClass('T-dialog-lg');
        $('.T-foot').prepend(`<a onclick="DRXF.onClickPaperUploadOk(${id})">确定</a>`);
        DRXF.initDropify();
    }
    // 导入试卷
    ,onClickPaperUploadOk: function(id) {
        Tomd.wait('加载中...');
        $.ajax({
            url: '/path/to/file',
            type: 'POST',
            dataType: 'json',
            data: { param1: 'value1' },
            success: function(data) {
                Tomd.waitok();
                Tomd.alert('', '试卷结构更新成功！', '确定');
            },
            error: function(data) {
                if (data) {
                    Tomd.waitok();
                    Tomd.alert('', '导入失败，请稍候再试！', '确定');
                } else if (data) {
                    Tomd.waitok();
                    Tomd.alert('', '网络不给力，请稍候再试！', '确定');
                }
            }
        });
    }
    // 试卷结构导出
    ,onClickPaperExport:function(){
        console.log('试卷结构导出')
    }
    // 客观题映射
    ,objectiveOrm:function(){
        var html = $('#importPopreModal').html();
        Tomd.alert('导入客观题',html,'取消');
        $('.T-modal').off('click');
        $('.T-dialog').addClass('T-dialog-lg');
        $('.T-foot').prepend(`<a onclick="DRXF.objectiveOrmOk()">确定</a>`);
    }
    ,objectiveOrmOk:function(){
        console.log('客观题映射');
    }
    // 主观题映射
    ,subjectiveOrm:function(){
        console.log('主观题映射')
    }
    // 保存试卷结构
    ,savetestpaper:function(){
        console.log('保存试卷结构')
    }
    // 删除试卷结构
    ,deltestpaper:function(){
        console.log('删除试卷结构')
    }
    // 成绩导入
    ,importtestpaper:function(){
        console.log('成绩导入')
    }
    // 学生作答导入
    ,importStuAnswer:function(){
        console.log('学生作答导入')
    }
    // 图片导入
    ,importImg:function(){
        console.log('图片导入')
    }
    ,initDropify: function() {
        //初始化上传
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
DRXF.init();