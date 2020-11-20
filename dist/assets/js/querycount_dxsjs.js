var SMS = {
	datajson:{"data":[{"schId":"280011","count":245506},{"schId":"112801","count":1668},{"schId":"112899","count":97},{"schId":"280010","count":2},{"schId":"336424","count":1},],"success":true},
	init:function(){
		SMS.renderSmsMessages(SMS.datajson.data);
	},
	renderSmsMessages:function(res){
		let h = '';
		for (var i = 0; i < res.length; i++) {
			if (res[i].count < 999) {
				h += `<li class="col-sm-2"><div class="bg-info">
							<p class="title">学校ID</p>
							<p class="info">${res[i].schId}</p>
							<p class="title">历史短信数量</p>
							<p class="info">${res[i].count}</p>
						</div></li>`;
			} else if(res[i].count < 9999 && res[i].count > 999) {
				h += `<li class="col-sm-2"><div class="bg-danger">
							<p class="title">学校ID</p>
							<p class="info">${res[i].schId}</p>
							<p class="title">历史短信数量</p>
							<p class="info">${res[i].count}</p>
						</div></li>`;
			} else if(res[i].count < 99999 && res[i].count > 9999){
				h += `<li class="col-sm-2"><div class="bg-bg-primary">
							<p class="title">学校ID</p>
							<p class="info">${res[i].schId}</p>
							<p class="title">历史短信数量</p>
							<p class="info">${res[i].count}</p>
						</div></li>`;
			} else {
				h += `<li class="col-sm-2"><div class="bg-success">
							<p class="title">学校ID</p>
							<p class="info">${res[i].schId}</p>
							<p class="title">历史短信数量</p>
							<p class="info">${res[i].count}</p>
						</div></li>`;
			}
		}
		$('#smsMessages').html(h);
	}
}
SMS.init();