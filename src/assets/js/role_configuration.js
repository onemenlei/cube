"use strict";
//数据集
var zNodes = [{
    id: 2,
    ename: "随意勾选 2"
    }, {
    id: 21,
    pId: 2,
    ename: "随意勾选 2-1"
    }, {
    id: 22,
    pId: 2,
    ename: "随意勾选 2-2"
    }, {
    id: 23,
    pId: 2,
    ename: "随意勾选 2-3"
    }, {
    id: 4,
    ename: "随意勾选 3"
    }, {
    id: 42,
    pId: 4,
    ename: "随意勾选 42"
    }];


var role = {
    //计数选中的条数
    count: function (el) {
        var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
        var nodes = treeObj.getChangeCheckedNodes();
        $(el).text("数量：" + nodes.length);        
    },
    //打印选中的数据
    print: function(){
        var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
        var nodes = treeObj.getChangeCheckedNodes();
        console.log(nodes);
    },
    //zTree设置项
    setting: {
        check: {
            enable: true,
            autoCheckTrigger: true
        },
        data: {
            simpleData: {
                enable: true,
                idKey: "id", // id编号命名   
                pIdKey: "pId", // 父id编号命名
                rootPId: null //根节点
            },
            key: {
                name: "ename" // 保存节点名称的属性名称
            }
        },
        callback: {
            onDblClick: zTreeOnDblClick, //双击事件
            onRemove: onRemove, //移除事件
            onRename: zTreeOnDblClick //修改事件
        },
        edit: {
            enable: true, //单独设置为true时，可加载修改、删除图标  
            editNameSelectAll: true,
            showRemoveBtn: true,
            showRenameBtn: true,
            removeTitle:'删除',  
            renameTitle:'重命名'  
        },
    },
    /*删除节点
    removeNodes: function () {
        var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
        //选中节点
        var nodes = treeObj.getSelectedNodes();
        for (var i = 0, l = nodes.length; i < l; i++) {
            //删除选中的节点
            treeObj.removeNode(nodes[i]);
        }
    },*/
    //添加按钮
    add_btn: function(){
        //校验
        $("#add_role").formValidator();
        var r = $("#add_role").validate().form();
        if (r) {
            //从input中传值
            var datas = {};
            datas.id = $("#ztree_Id").val();
            datas.ename = $("#ztree_ename").val();
            datas.pId = $("#ztree_pId").val();
            /***** ajax保存修改到后台并判断正确与否        
            Men.newly_editor('../biz/sch/school/addSchool', datas);
           *****/
            //------------专用前端 == 专用前端，后端请把这段删掉
            zNodes.push(datas);
            //------------专用前端
            role.resetNode();
            role.clearError();
            role.expandAll();
        }
    },
    //展开所有节点
    expandAll: function(){
        var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
            treeObj.expandAll(true);
    },
    //清空错误提示和校验
    clearError: function () {
        document.getElementById("add_role").reset();
        setTimeout(function () {
            $("#add_role input").removeClass("error");
            $("#add_role label.error").remove();
        }, 100);
    },
    //修改按钮
    editor_btn: function () {
        //校验
        $("#role").formValidator();
        var r = $("#role").validate().form();
        if (r) {
            //从input中传值
            var datas = {};
            datas.id = $("#inputtext_01").val();
            datas.ename = $("#inputtext_02").val();
            datas.pId = $("#inputtext_03").val();
            /***** ajax保存修改到后台并判断正确与否        
            Men.judge_editor('../biz/sch/school/addSchool', datas);
           *****/
            //------------专用前端 == 专用前端，后端请把这段删掉
            $.each(zNodes, function (index, value) {
                if (value.id == datas.id) {
                    zNodes.splice(index, 1, datas);
                    Men.close_window();
                    return;
                }
            });
            //------------专用前端
            role.resetNode();
        }
    },
    //刷新节点
    resetNode: function () {
        $.fn.zTree.init($("#treeDemo"), this.setting, zNodes);
    },
    //自动运行
    init: function () {
        this.resetNode();
    },
};
role.init();
//双击显示修改窗口
function zTreeOnDblClick(event, treeId, treeNode) {
    // alert(treeNode ? treeNode.id + ", " + treeNode.ename : "isRoot");
    var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
    var selectedNode = treeObj.getSelectedNodes()[0];
    var html = $("#role_template").html();
    Men.new_window('修改角色配置信息', html, '取消', role.editor_btn);
    $('.center_button_div').prepend('<button class="default_btn edit_row_btn" onclick="Men.alert_ok()">保存</button>');
    $("#inputtext_01").val(selectedNode.id);
    $("#inputtext_02").val(selectedNode.ename);
    $("#inputtext_03").val(selectedNode.pId);
}
//移除事件
function onRemove(event, treeId, treeNode) {
    alert("删除" + treeNode.id);
    //用ajax连通后台
}
