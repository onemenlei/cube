//读取后台的数据表
license_data = {
    "data": {
        "id": null,
        "schIds": null,
        "orgIds": null,
        "pro": {
            "email": "xiajing@doofen.cn",
            "dtype": "1",
            "unionName": "多分科技",
            "stuCount": "10000000",
            "personName": "夏晶"
        },
        "userName": "sichuan",
        "role": 0,
        "password": null,
        "userSlogn": null,
        "actType": null
    },
    "success": true
}; 

//一打开就赋值进input
$("#license_01").val(license_data.data.pro.unionName);
$("#license_02").val(license_data.data.pro.personName);
$("#license_03").val(license_data.data.pro.email);
$("#license_04").val(license_data.data.pro.stuCount);
$("#edition_type_div input[type='radio']").each(function(i){
     if(license_data.data.pro.dtype == i)
      {
         $(this).prop('checked',true);return false;
      }
    });