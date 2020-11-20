var LOGIN = {
    datajson: { "data": [{ "loginTime": "2018-05-17 08:47:11", "userName": "sichuan", "code": -1, "log": "账号不存在" }, { "loginTime": "2018-05-10 09:44:58", "userName": "sichuan", "code": -1, "log": "账号不存在" }, { "loginTime": "2018-05-08 14:47:24", "userName": "sichuan", "code": -1, "log": "账号不存在" }, { "loginTime": "2018-04-04 17:17:05", "userName": "sichuan", "code": -1, "log": "账号不存在" }, { "loginTime": "2018-04-04 17:16:54", "userName": "sichuan", "code": -1, "log": "账号不存在" }, { "loginTime": "2018-04-04 17:16:15", "userName": "sichuan", "code": -1, "log": "账号不存在" }], "success": true },
    init: function() {
    	LOGIN.render(LOGIN.datajson.data);
        LOGIN.search();
    },
    request: function(obj) {
        Tomd.wait('加载中...');
        $.ajax({
            url: '/path/to/file',
            type: 'POST',
            dataType: 'json',
            data: { param1: 'value1' },
            success: function(data) {
                Tomd.waitok();
                // 重新加载
                
            },
            error: function(data) {
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
    render: function(res) {
    	let html = '';
    	for (let i = 0; i < res.length; i++) {
    		html += `<tr>
                    <td>${res[i].code}</td>
                    <td>${res[i].userName}</td>
                    <td>${res[i].loginTime}</td>
                    <td>${res[i].log}</td>
                </tr>`;
    	}
        $('#loginTable tbody').html(html);
    },
    search: function() {
        document.onkeydown = function(evt) {
            let evt = evt ? evt : (window.event ? window.event : null);
            if (evt.keyCode == 13) {
                $('#searchBtn').click();
            }
        }
        $('#searchBtn').click(function() {
            let searchVal = $('#searchValue').val();
            let typeVal = $('#searchType input[name="radio"]:checked').val();
            let obj = {};
            obj.value = searchVal;
            obj.type = typeVal;
            LOGIN.request(obj);
        });
    }
}

LOGIN.init();