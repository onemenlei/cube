var report_authorization = {
    authorization(){
        $("#authorization1").on("keyup", function(){
            if($(this).val().trim()!=''){
                $("#authorization_btn1").attr("disabled",false);
            }else{
                $("#authorization_btn1").attr("disabled",true);
                $("#authorization_btn2").attr("disabled",true);
            };
            if($(this).val().trim()!='' && $("#authorization2").val().trim()!=''){
                $("#authorization_btn2").attr("disabled",false);
            }else{
                $("#authorization_btn2").attr("disabled",true);
            }
        });
        $("#authorization2").on("keyup", function(){
            if($(this).val().trim()!='' && $("#authorization1").val().trim()!=''){
                $("#authorization_btn2").attr("disabled",false);
            }else{
                $("#authorization_btn2").attr("disabled",true);
            }
        });
    },
    href_url(){
        $("#authorization_btn1").off("click").on("click", function(){
            let data = {};
            data.text1 = $("#authorization1").val().trim(); //第一个输入框的值
            Men.post_data("../biz/sch/org/list", data);
        });
        $("#authorization_btn2").off("click").on("click", function(){
            let data = {};
            data.text1 = $("#authorization1").val().trim(); //第一个输入框的值
            data.text2 = $("#authorization2").val().trim(); //第二个输入框的值
            Men.post_data("../biz/sch/org/list", data);
        });
    },
    init(){
        this.authorization();
        this.href_url();
    },
};
report_authorization.init();