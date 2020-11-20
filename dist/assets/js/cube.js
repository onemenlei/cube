/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_main_styl__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_main_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_main_styl__);




/*一开始就显示*/
/*顶部菜单+左侧菜单 child里内容为左侧菜单*/
var menus_data = [{ name: '首页', menuUrl: 'index', child: [{
        name: '整体状况',
        classa: 'icon-zhengtigaikuang',
        menuUrl: 'index_ztzk'
    }, {
        name: '局端统计',
        classa: 'icon-juduantongji',
        menuUrl: 'index_jdtj'
    }, {
        name: '校端统计',
        classa: 'icon-xiaoduantongji',
        menuUrl: 'index_xdtj'
    }, {
        name: '学生端统计',
        classa: 'icon-xueshengduantongji',
        menuUrl: 'index_xsdtj'
    }, {
        name: '渠道统计',
        classa: 'icon-qudaotongji',
        menuUrl: 'index_qdtj'
    }] }, { name: '学校与机构管理', menuUrl: 'school', child: [{
        name: '学校管理',
        classa: 'icon-xuexiaoguanli',
        menuUrl: 'school_xxgl'
    }, {
        name: '机构管理',
        classa: 'icon-jigouguanli',
        menuUrl: 'school_jggl'
    }, {
        name: '一人一本',
        classa: 'icon-xuexiaoguanli',
        menuUrl: 'school_yryb'
    }, {
        name: '考试报告',
        classa: 'icon-jigouguanli',
        menuUrl: 'school_ksbg'
    }, {
        name: '菜单管理',
        classa: 'icon-xuexiaoguanli',
        menuUrl: 'menu_new'
    }, {
        name: '同步数据',
        classa: 'icon-xuexiaoguanli',
        menuUrl: 'sync_data'
    }, {
        name: '角色配置',
        classa: 'icon-jigouguanli',
        menuUrl: 'role_configuration'
    }, {
        name: '功能授权',
        classa: 'icon-jigouguanli',
        menuUrl: 'function_authorization'
    }, {
        name: '报表授权',
        classa: 'icon-jigouguanli',
        menuUrl: 'report_authorization'
    }] }, { name: '考试管理', menuUrl: 'test', child: [{
        name: '考试管理',
        classa: 'icon-zhengtigaikuang',
        menuUrl: 'test_ksgl'
    }, {
        name: '试卷管理',
        classa: 'icon-juduantongji',
        menuUrl: 'test_sjgl'
    }, {
        name: '答题管理',
        classa: 'icon-qudaotongji',
        menuUrl: 'test_dtgl'
    }, {
        name: '考试分数导入',
        classa: 'icon-qudaotongji',
        menuUrl: 'test_fsdr'
    }] }, { name: '分析管理', menuUrl: 'analyse', child: [{
        name: '校本分析',
        classa: 'icon-xiaoduantongji',
        menuUrl: 'test_xbfx'
    }, {
        name: '机构分析',
        classa: 'icon-xueshengduantongji',
        menuUrl: 'union/school_jgfx'
    }, {
        name: '分析配置',
        classa: 'icon-qudaotongji',
        menuUrl: 'test_fxpz'
    }] }, { name: '作业分析', menuUrl: 'job_analysis', child: [{
        name: '作业内容',
        classa: 'icon-xiaoduantongji',
        menuUrl: 'job_content'
    }] }, { name: '查询与统计', menuUrl: 'querycount', child: [{
        name: '学生查询',
        classa: 'icon-xuexiaoguanli',
        menuUrl: 'school_xscx'
    }, {
        name: '手机查询',
        classa: 'icon-jigouguanli',
        menuUrl: 'school_sjcx'
    }, {
        name: '平安到校信息',
        classa: 'icon-jigouguanli',
        menuUrl: 'querycount_dxsj'
    }, {
        name: '短信审计',
        classa: 'icon-jigouguanli',
        menuUrl: 'querycount_dxsjs'
    }, {
        name: '登陆查询',
        classa: 'icon-jigouguanli',
        menuUrl: 'querycount_dlcx'
    }, {
        name: '考试报告',
        classa: 'icon-jigouguanli',
        menuUrl: 'querycount_ksbg'
    }, {
        name: '教师帐户中心',
        classa: 'icon-jigouguanli',
        menuUrl: 'querycount_jszhzx'
    }, {
        name: '家长帐户中心',
        classa: 'icon-jigouguanli',
        menuUrl: 'querycount_jzzhzx'
    }, {
        name: '分析统计',
        classa: 'icon-jigouguanli',
        menuUrl: 'querycount_fxtj'
    }] }, { name: '系统管理', menuUrl: 'system', child: [{
        name: '帐户管理',
        classa: 'icon-zhengtigaikuang',
        menuUrl: 'system_zhgl'
    }, {
        name: '审计记录',
        classa: 'icon-juduantongji',
        menuUrl: 'system_sjjl'
    }, {
        name: '系统检测',
        classa: 'icon-xiaoduantongji',
        menuUrl: 'system_xtjc'
    }, {
        name: 'License',
        classa: 'icon-xueshengduantongji',
        menuUrl: 'system_license'
    }] }, { name: '资源管理', menuUrl: 'resource', child: [{
        name: '行政区划',
        classa: 'icon-xuexiaoguanli',
        menuUrl: 'resource_xzqh'
    }, {
        name: '试题类型',
        classa: 'icon-jigouguanli',
        menuUrl: 'resource_stlx'
    }, {
        name: '试题类别',
        classa: 'icon-jigouguanli',
        menuUrl: 'resource_stlb'
    }, {
        name: '知识点体系',
        classa: 'icon-jigouguanli',
        menuUrl: 'resource_zsdtx'
    }] }, { name: '渠道管理', menuUrl: 'channel', child: [{
        name: '渠道用户',
        classa: 'icon-xiaoduantongji',
        menuUrl: 'channel_one'
    }] }, { name: '牧分管理', menuUrl: 'mufeng_management', child: [{
        name: '牧分用户',
        classa: 'icon-xiaoduantongji',
        menuUrl: 'mufeng_user'
    }] }, { name: '教育局管理', menuUrl: 'education_management', child: [{
        name: '教育局用户',
        classa: 'icon-xiaoduantongji',
        menuUrl: 'education_user'
    }] }];
$.tmpl(top_nav_menu, menus_data).appendTo(".header_nav_ul");
/*默认显示首页*/
var state = 0;
history.pushState(state, "", "");
$($(".cube_article")).load('../pages/' + menus_data[0].menuUrl + '.html', function () {
    menus_Items = menus_data[0].child;
    /* 另一种载入js方式，只载入首次
    $.getScript('../assets/js/' + navItems[0].href + '.js',function(){alert("首次载入");}); */
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = '../assets/js/' + menus_data[0].menuUrl + '.js';
    document.body.appendChild(script);
});
$($(".header_nav_ul li")[0]).addClass("selected");

/*顶菜单切换*/
var refreshvalue = false;
$(".header_nav_ul").on("click", "li", function () {
    $(this).addClass("selected").siblings().removeClass("selected");
    var n = $(this).index();
    menus_Items = menus_data[n].child;
    $($(".cube_article")).load('../pages/' + menus_data[n].menuUrl + '.html', function () {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = '../assets/js/' + menus_data[n].menuUrl + '.js';
        document.body.appendChild(script);
    });
    refreshvalue = false;
    state = n;
    history.pushState(state, "", "");
});

//添加事件监听,回滚
window.addEventListener("popstate", function () {
    var n = history.state;
    $($(".header_nav_ul li")[n]).addClass("selected").siblings().removeClass("selected");
    // $($(".cube_article>article")[n]).show().siblings().hide();
    menus_Items = menus_data[n].child;
    $($(".cube_article")).load('../pages/' + menus_data[n].menuUrl + '.html', function () {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = '../assets/js/' + menus_data[n].menuUrl + '.js';
        document.body.appendChild(script);
    });
});
//点击显示/隐藏左边栏
$("#toggle_nav_btn").on("click", function () {
    $(".cube_article").toggleClass('slide-nav-toggle');
    return false;
});
//点击折叠侧边栏则显示    
$("body").on("click", ".cube_article.slide-nav-toggle .cube_aside", function () {
    $(".cube_article.slide-nav-toggle").removeClass("slide-nav-toggle");
});
//监听屏幕大小
$(window).resize(function () {
    if ($(window).width() < 1200) $(".cube_article").addClass("slide-nav-toggle");else $(".cube_article").removeClass("slide-nav-toggle");
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);