var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CompressionWebpackPlugin = require('compression-webpack-plugin');
var srcDir = path.resolve(process.cwd(), 'src');
var glob = require('glob');
/*var entries = function () {
    var jsDir = path.resolve(srcDir, 'js');
    var entryFiles = glob.sync(jsDir + '/*.{js,jsx}');
    var map = {};
    for (var i = 0; i < entryFiles.length; i++) {
        var filePath = entryFiles[i];
        var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
        map[filename] = filePath;
    }
    return map;
}*/

module.exports = {
    entry: {
        'cube': './src/assets/js/cube.js',
    },
    output: {
        path: path.join(__dirname, './dist'),
        //publicPath: '../', //打包上线后的公共资源目录路径设置，预览时屏蔽
        filename: 'assets/js/[name].js',
        chunkFilename: "assets/js/[name].chunk.js" //打包异步模块
    },
    /*将外部变量或者模块加载进来
    externals: {
        'jquery': 'window.jQuery'
    },*/
    module: {
        loaders: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader"]
                })
                //publicPath:'../'
      },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader", "less-loader"]
                })
      },
            {
                test: /\.styl$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader", "stylus-loader"]
                })
      },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                loader: 'url-loader?limit=8192&name=[name].[ext]&publicPath=../assets/img&outputPath=assets/img', //webpack-dev-server只会找根目录中的图片文件，所以得在根目录下再增加个img文件夹才能预览！
                //loader: 'url-loader?limit=8192&name=../assets/img/[name].[ext]', 
                /* 另一种方法：打包后图片文件名变随机
                loader: 'url-loader',
                options: {
                    limit: 8192
                }*/
},
            {
                // 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
                test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
                //use: 'file-loader'
                loader: 'file-loader?limit=192&name=assets/css/[name].[ext]',
        },
            {
                test: /\.ejs$/,
                loader: "ejs-loader?variable=data"
            },
            {
                test: /\.tpl$/,
                use: 'raw-loader'
            },
            {
                //支持html中图片
                　　　　　　
                test: /\.html$/,
                　　　　　　loader: 'html-withimg-loader'　　　　
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
        },
            //  使用vue-loader 加载 .vue 结尾的文件
            {
                test: /\.vue$/, 
                loader: 'vue-loader',
                exclude: /node_modules/    
            },
       ]
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json', 'css'],
        //alias: { 'vue': 'vue/dist/vue.js' }, //用到vue就必须添加
    },
    plugins: [
        new ExtractTextPlugin("assets/css/style.css"), //提取css,生成单独的css
        /*
        // 提供公共代码
        new webpack.optimize.CommonsChunkPlugin({
            name: ['common', 'load'], //共用内容全放进第一个，加载启动的内容放进最后一个
            //minChunks: 1 //有几个文件共用才提取（如果js中同时引入几个css文件，则一定要设为1）
        }), // 默认会把所有入口节点的公共代码提取出来,生成一个common.js  jquery等插件如单独打包，name里面也要写!
        */
        /*ProvidePlugin的机制是：当webpack加载到某个js模块里，出现了未定义且名称符合（字符串完全匹配）配置中key的变量时，会自动require配置中value所指定的js模块。如上述例子，当某个老式插件使用了jQuery.fn.extend(object)，那么webpack就会自动引入jquery
         new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
            'WOW': 'wowjs',
            'Vue':'vue',
            'Mock':'mockjs',
        }),*/
        /* 提供公共代码
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'js/[name].js',
            minChunks: Infinity,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime',
            filename: 'js/[name].js',
            chunks: ['vendor'],
        }),
        */
        /*
        //压缩js文件
        new webpack.optimize.UglifyJsPlugin({
            comments: false, //去掉注释
            compress: {
                warnings: false //忽略警告,要不然会有一大堆的黄色字体出现……
            },
            except: ['$super', '$', 'exports', 'require']    //排除关键字
        }),
        //gzip 压缩
        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(js|css)$' //压缩 js 与 css
            ),
            threshold: 10240,
            minRatio: 0.8
        }),
        */
        new HtmlWebpackPlugin({
            //favicon:'yourfile.ico',收藏夹图标
            filename: 'pages/cube.html', //生成文件名 
            template: 'src/pages/cube.html', //模板文件名
            //title: '',
            //hash: true, //为静态资源生成hash值
            //inject: 'body', //js加在哪里，head,默认body
            chunks: ['cube'], //需要插入哪些公共js
            //chunksSortMode: "manual", // manual根据chunks的位置手动排序
            /* minify:{    //压缩HTML文件
                removeComments:true,    //移除HTML中的注释
                collapseWhitespace:true,    //删除空白符与换行符
                removeAttributeQuotes: true // 移除属性的引号
            }*/
        }),        
        new CopyWebpackPlugin([{
            //拷贝jquery.min.js到dist目录
            from: __dirname + '/src/assets/lib/jquery.min.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new CopyWebpackPlugin([{
            //拷贝bootstrap.min.js到dist目录
            from: __dirname + '/src/assets/lib/bootstrap.min.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new CopyWebpackPlugin([{
            //拷贝ie9.js到dist目录
            from: __dirname + '/src/assets/lib/ie9.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/pagestyle.html', //页面样式
            template: 'src/pages/pagestyle.html', //模板文件名
            chunks:[''],
        }),
        new HtmlWebpackPlugin({
            filename: 'pages/index.html', //首页内容
            template: 'src/pages/index.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝index.js到dist目录
            from: __dirname + '/src/assets/js/index.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/school.html', //学校管理
            template: 'src/pages/school.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝school.js到dist目录
            from: __dirname + '/src/assets/js/school.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/test.html', //考试管理
            template: 'src/pages/test.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝test.js到dist目录
            from: __dirname + '/src/assets/js/test.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/analyse.html', //分析管理
            template: 'src/pages/analyse.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝analyse.js到dist目录
            from: __dirname + '/src/assets/js/analyse.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/querycount.html', //查询与统计
            template: 'src/pages/querycount.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝querycount.js到dist目录
            from: __dirname + '/src/assets/js/querycount.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/system.html', //系统管理
            template: 'src/pages/system.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝system.js到dist目录
            from: __dirname + '/src/assets/js/system.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/resource.html', //资源管理
            template: 'src/pages/resource.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝resource.js到dist目录
            from: __dirname + '/src/assets/js/resource.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new CopyWebpackPlugin([{
            //拷贝model.js到dist目录
            from: __dirname + '/src/assets/js/model.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/index_ztzk.html', //整体状况
            template: 'src/pages/index_ztzk.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝index_ztzk.js到dist目录
            from: __dirname + '/src/assets/js/index_ztzk.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/index_jdtj.html', //局端统计
            template: 'src/pages/index_jdtj.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝index_jdtj.js到dist目录
            from: __dirname + '/src/assets/js/index_jdtj.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/school_xxgl.html', //学校管理
            template: 'src/pages/school_xxgl.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝school_xxgl.js到dist目录
            from: __dirname + '/src/assets/js/school_xxgl.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/school_jggl.html', //机构管理
            template: 'src/pages/school_jggl.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝school_jggl.js到dist目录
            from: __dirname + '/src/assets/js/school_jggl.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/school_xscx.html', //学生查询
            template: 'src/pages/school_xscx.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝school_xscx.js到dist目录
            from: __dirname + '/src/assets/js/school_xscx.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/school_sjcx.html', //手机查询
            template: 'src/pages/school_sjcx.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝school_sjcx.js到dist目录
            from: __dirname + '/src/assets/js/school_sjcx.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/school_yryb.html', //一人一本
            template: 'src/pages/school_yryb.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝school_yryb.js到dist目录
            from: __dirname + '/src/assets/js/school_yryb.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/school_ksbg.html', //考试报告
            template: 'src/pages/school_ksbg.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝school_ksbg.js到dist目录
            from: __dirname + '/src/assets/js/school_ksbg.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/index_xdtj.html', //校端统计
            template: 'src/pages/index_xdtj.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝index_xdtj.js到dist目录
            from: __dirname + '/src/assets/js/index_xdtj.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/index_xsdtj.html', //学生端统计
            template: 'src/pages/index_xsdtj.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝index_xsdtj.js到dist目录
            from: __dirname + '/src/assets/js/index_xsdtj.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/index_qdtj.html', //渠道统计
            template: 'src/pages/index_qdtj.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝JGGL_school.js到dist目录
            from: __dirname + '/src/assets/js/index_qdtj.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/school_detail.html', //学校详情
            template: 'src/pages/school_detail.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝school_detail.js到dist目录
            from: __dirname + '/src/assets/js/school_detail.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/school_teacher.html', //教师
            template: 'src/pages/school_teacher.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝school_teacher.js到dist目录
            from: __dirname + '/src/assets/js/school_teacher.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/school_student.html', //学生
            template: 'src/pages/school_student.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝school_student.js到dist目录
            from: __dirname + '/src/assets/js/school_student.js',
            to: __dirname + '/dist/assets/js'
        }]),
        /*  new HtmlWebpackPlugin({
            filename: 'pages/school_role.html', //角色
            template: 'src/pages/school_role.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝school_role.js到dist目录
            from: __dirname + '/src/assets/js/school_role.js',
            to: __dirname + '/dist/assets/js'
        }]),  */
        new HtmlWebpackPlugin({
            filename: 'pages/validation.html', //表单验证
            template: 'src/pages/validation.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝datatables_language.json到dist目录 datatables中文化
            from: __dirname + '/src/pages/datatables_language.json',
            to: __dirname + '/dist/pages'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/test_ksgl.html', //考试管理
            template: 'src/pages/test_ksgl.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝test_ksgl.js到dist目录
            from: __dirname + '/src/assets/js/test_ksgl.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/test_sjgl.html', //试卷管理
            template: 'src/pages/test_sjgl.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝test_sjgl.js到dist目录
            from: __dirname + '/src/assets/js/test_sjgl.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/test_xbfx.html', //校本分析
            template: 'src/pages/test_xbfx.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝test_xbfx.js到dist目录
            from: __dirname + '/src/assets/js/test_xbfx.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/test_jgfx.html', //机构分析
            template: 'src/pages/test_jgfx.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝test_jgfx.js到dist目录
            from: __dirname + '/src/assets/js/test_jgfx.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/test_fxpz.html', //分析配置
            template: 'src/pages/test_fxpz.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝test_fxpz.js到dist目录
            from: __dirname + '/src/assets/js/test_fxpz.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/test_dtgl.html', //答题管理
            template: 'src/pages/test_dtgl.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝test_dtgl.js到dist目录
            from: __dirname + '/src/assets/js/test_dtgl.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/test_fsdr.html', //考试分数导入
            template: 'src/pages/test_fsdr.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝test_fsdr.js到dist目录
            from: __dirname + '/src/assets/js/test_fsdr.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/system_zhgl.html', //帐户管理
            template: 'src/pages/system_zhgl.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝system_zhgl.js到dist目录
            from: __dirname + '/src/assets/js/system_zhgl.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/system_sjjl.html', //审计记录
            template: 'src/pages/system_sjjl.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝system_sjjl.js到dist目录
            from: __dirname + '/src/assets/js/system_sjjl.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/system_xtjc.html', //系统检测
            template: 'src/pages/system_xtjc.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝system_xtjc.js到dist目录
            from: __dirname + '/src/assets/js/system_xtjc.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/system_license.html', //License
            template: 'src/pages/system_license.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝system_license.js到dist目录
            from: __dirname + '/src/assets/js/system_license.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/resource_xzqh.html', //行政区划
            template: 'src/pages/resource_xzqh.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝resource_xzqh.js到dist目录
            from: __dirname + '/src/assets/js/resource_xzqh.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/resource_stlx.html', //试题类型
            template: 'src/pages/resource_stlx.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝resource_stlx.js到dist目录
            from: __dirname + '/src/assets/js/resource_stlx.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/resource_stlb.html', //试题类别
            template: 'src/pages/resource_stlb.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝resource_stlb.js到dist目录
            from: __dirname + '/src/assets/js/resource_stlb.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/resource_zsdtx.html', //知识点体系
            template: 'src/pages/resource_zsdtx.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝resource_zsdtx.js到dist目录
            from: __dirname + '/src/assets/js/resource_zsdtx.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/querycount_dxsj.html', //短信审计
            template: 'src/pages/querycount_dxsj.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝querycount_dxsj.js到dist目录
            from: __dirname + '/src/assets/js/querycount_dxsj.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/querycount_dlcx.html', //登陆查询
            template: 'src/pages/querycount_dlcx.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝querycount_dlcx.js到dist目录
            from: __dirname + '/src/assets/js/querycount_dlcx.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/querycount_ksbg.html', //考试报告
            template: 'src/pages/querycount_ksbg.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝querycount_ksbg.js到dist目录
            from: __dirname + '/src/assets/js/querycount_ksbg.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/querycount_jszhzx.html', //教师帐户中心
            template: 'src/pages/querycount_jszhzx.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝querycount_jszhzx.js到dist目录
            from: __dirname + '/src/assets/js/querycount_jszhzx.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/querycount_jzzhzx.html', //家长帐户中心
            template: 'src/pages/querycount_jzzhzx.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝querycount_jzzhzx.js到dist目录
            from: __dirname + '/src/assets/js/querycount_jzzhzx.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/querycount_fxtj.html', //分析统计
            template: 'src/pages/querycount_fxtj.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝querycount_fxtj.js到dist目录
            from: __dirname + '/src/assets/js/querycount_fxtj.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/school_class.html', //班级
            template: 'src/pages/school_class.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝school_class.js到dist目录
            from: __dirname + '/src/assets/js/school_class.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/school_patriarch.html', //家长
            template: 'src/pages/school_patriarch.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝school_patriarch.js到dist目录
            from: __dirname + '/src/assets/js/school_patriarch.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/school_zhgl.html', //机构管理内的帐户管理
            template: 'src/pages/school_zhgl.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝school_zhgl.js到dist目录
            from: __dirname + '/src/assets/js/school_zhgl.js',
            to: __dirname + '/dist/assets/js'
        }]),/*
        new HtmlWebpackPlugin({
            filename: 'pages/school_knowledge.html', //显示当前知识点体系
            template: 'src/pages/school_knowledge.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝school_knowledge.js到dist目录
            from: __dirname + '/src/assets/js/school_knowledge.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/school_capacity.html', //显示当前能力点体系
            template: 'src/pages/school_capacity.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝school_capacity.js到dist目录
            from: __dirname + '/src/assets/js/school_capacity.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/school_import_knowledge.html', //导入知识点体系
            template: 'src/pages/school_import_knowledge.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝school_import_knowledge.js到dist目录
            from: __dirname + '/src/assets/js/school_import_knowledge.js',
            to: __dirname + '/dist/assets/js'
        }]),*/
        new HtmlWebpackPlugin({
            filename: 'pages/school_academiclevel.html', //导入学级/学届
            template: 'src/pages/school_academiclevel.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝school_academiclevel.js到dist目录
            from: __dirname + '/src/assets/js/school_academiclevel.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/school_config.html', //导入学校配置
            template: 'src/pages/school_config.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝school_config.js到dist目录
            from: __dirname + '/src/assets/js/school_config.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/school_basic.html', //导入基础配置
            template: 'src/pages/school_basic.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝school_basic.js到dist目录
            from: __dirname + '/src/assets/js/school_basic.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/menu_new.html', //新建菜单
            template: 'src/pages/menu_new.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝menu_new.js到dist目录
            from: __dirname + '/src/assets/js/menu_new.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new CopyWebpackPlugin([{
            //拷贝jquery.treegrid.extension.js到dist目录
            from: __dirname + '/src/assets/js/jquery.treegrid.extension.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/role_configuration.html', //角色配置
            template: 'src/pages/role_configuration.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝role_configuration.js到dist目录
            from: __dirname + '/src/assets/js/role_configuration.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new CopyWebpackPlugin([{
            //拷贝jquery.treegrid.extension.js到dist目录
            from: __dirname + '/src/assets/js/jquery.treegrid.extension.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/channel.html', //渠道管理
            template: 'src/pages/channel.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝channel.js到dist目录
            from: __dirname + '/src/assets/js/channel.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/channel_one.html', //渠道1
            template: 'src/pages/channel_one.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝channel_one.js到dist目录
            from: __dirname + '/src/assets/js/channel_one.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/channel_admin.html', //渠道角色
            template: 'src/pages/channel_admin.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝channel_admin.js到dist目录
            from: __dirname + '/src/assets/js/channel_admin.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/mufeng_management.html', //牧分管理
            template: 'src/pages/mufeng_management.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝mufeng_management.js到dist目录
            from: __dirname + '/src/assets/js/mufeng_management.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/mufeng_user.html', //牧分角色
            template: 'src/pages/mufeng_user.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝mufeng_user.js到dist目录
            from: __dirname + '/src/assets/js/mufeng_user.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/education_management.html', //教育局管理
            template: 'src/pages/education_management.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝education_management.js到dist目录
            from: __dirname + '/src/assets/js/education_management.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/education_user.html', //教育局角色
            template: 'src/pages/education_user.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝education_user.js到dist目录
            from: __dirname + '/src/assets/js/education_user.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/subject_tab.html', //学科、考试类型、试题类型、试题类别、知识点、能力点
            template: 'src/pages/subject_tab.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝subject_tab.js到dist目录
            from: __dirname + '/src/assets/js/subject_tab.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/functionManagement.html', //功能管理
            template: 'src/pages/functionManagement.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝functionManagement.js到dist目录
            from: __dirname + '/src/assets/js/functionManagement.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/function_authorization.html', //功能授权
            template: 'src/pages/function_authorization.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝function_authorization.js到dist目录
            from: __dirname + '/src/assets/js/function_authorization.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new CopyWebpackPlugin([{
            //拷贝bootstrap-datetimepicker.min.css到dist目录
            from: __dirname + '/src/assets/css/bootstrap-datetimepicker.min.css',
            to: __dirname + '/dist/assets/css'
        }]),
        new CopyWebpackPlugin([{
            //拷贝bootstrap-datetimepicker.min.js到dist目录
            from: __dirname + '/src/assets/js/bootstrap-datetimepicker.min.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new CopyWebpackPlugin([{
            //拷贝bootstrap-datetimepicker.zh-CN.js到dist目录
            from: __dirname + '/src/assets/js/bootstrap-datetimepicker.zh-CN.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/job_analysis.html', //作业分析
            template: 'src/pages/job_analysis.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝job_analysis.js到dist目录
            from: __dirname + '/src/assets/js/job_analysis.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/job_content.html', //作业内容
            template: 'src/pages/job_content.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝job_content.js到dist目录
            from: __dirname + '/src/assets/js/job_content.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/job_create.html', //创建作业
            template: 'src/pages/job_create.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝job_create.js到dist目录
            from: __dirname + '/src/assets/js/job_create.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/job_manage.html', //作业分析管理
            template: 'src/pages/job_manage.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝job_manage.js到dist目录
            from: __dirname + '/src/assets/js/job_manage.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/job_chapters.html', //教辅章节
            template: 'src/pages/job_chapters.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝job_chapters.js到dist目录
            from: __dirname + '/src/assets/js/job_chapters.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/job_structureManagement.html', //结构管理
            template: 'src/pages/job_structureManagement.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝job_structureManagement.js到dist目录
            from: __dirname + '/src/assets/js/job_structureManagement.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/job_operationData.html', //作业数据
            template: 'src/pages/job_operationData.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝job_operationData.js到dist目录
            from: __dirname + '/src/assets/js/job_operationData.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/sync_data.html', //同步数据
            template: 'src/pages/sync_data.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝sync_data.js到dist目录
            from: __dirname + '/src/assets/js/sync_data.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/union/school_detail.html', //同步数据
            template: 'src/pages/union/school_detail.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝union/school_detail.js到dist目录
            from: __dirname + '/src/assets/js/union/school_detail.js',
            to: __dirname + '/dist/assets/js/union'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/union/school_academiclevel.html', //同步数据
            template: 'src/pages/union/school_academiclevel.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝union/school_academiclevel.js到dist目录
            from: __dirname + '/src/assets/js/union/school_academiclevel.js',
            to: __dirname + '/dist/assets/js/union'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/union/school_class.html', //同步数据
            template: 'src/pages/union/school_class.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝union/school_class.js到dist目录
            from: __dirname + '/src/assets/js/union/school_class.js',
            to: __dirname + '/dist/assets/js/union'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/union/school_teacher.html', //同步数据
            template: 'src/pages/union/school_teacher.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝union/school_teacher.js到dist目录
            from: __dirname + '/src/assets/js/union/school_teacher.js',
            to: __dirname + '/dist/assets/js/union'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/union/school_student.html', //同步数据
            template: 'src/pages/union/school_student.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝union/school_student.js到dist目录
            from: __dirname + '/src/assets/js/union/school_student.js',
            to: __dirname + '/dist/assets/js/union'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/union/school_patriarch.html', //同步数据
            template: 'src/pages/union/school_patriarch.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝union/school_patriarch.js到dist目录
            from: __dirname + '/src/assets/js/union/school_patriarch.js',
            to: __dirname + '/dist/assets/js/union'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/union/school_config.html', //同步数据
            template: 'src/pages/union/school_config.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝union/school_config.js到dist目录
            from: __dirname + '/src/assets/js/union/school_config.js',
            to: __dirname + '/dist/assets/js/union'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/union/school_zhgl.html', //同步数据
            template: 'src/pages/union/school_zhgl.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝union/school_zhgl.js到dist目录
            from: __dirname + '/src/assets/js/union/school_zhgl.js',
            to: __dirname + '/dist/assets/js/union'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/union/school_jgfx.html', //同步数据
            template: 'src/pages/union/school_jgfx.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝union/school_jgfx.js到dist目录
            from: __dirname + '/src/assets/js/union/school_jgfx.js',
            to: __dirname + '/dist/assets/js/union'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/union/school_fxgl.html', //同步数据
            template: 'src/pages/union/school_fxgl.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝union/school_fxgl.js到dist目录
            from: __dirname + '/src/assets/js/union/school_fxgl.js',
            to: __dirname + '/dist/assets/js/union'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/union/structureManagement.html', //同步数据
            template: 'src/pages/union/structureManagement.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝union/structureManagement.js到dist目录
            from: __dirname + '/src/assets/js/union/structureManagement.js',
            to: __dirname + '/dist/assets/js/union'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/union/dataManagement.html', //同步数据
            template: 'src/pages/union/dataManagement.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝union/dataManagement.js到dist目录
            from: __dirname + '/src/assets/js/union/dataManagement.js',
            to: __dirname + '/dist/assets/js/union'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/union/analysisConfiguration.html', //同步数据
            template: 'src/pages/union/analysisConfiguration.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝union/analysisConfiguration.js到dist目录
            from: __dirname + '/src/assets/js/union/analysisConfiguration.js',
            to: __dirname + '/dist/assets/js/union'
        }]),
        new CopyWebpackPlugin([{
            //拷贝jquery.multi-select.min.js到dist目录
            from: __dirname + '/src/assets/lib/jquery.multi-select.min.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/union/school_manage.html', //同步数据
            template: 'src/pages/union/school_manage.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝union/school_manage.js到dist目录
            from: __dirname + '/src/assets/js/union/school_manage.js',
            to: __dirname + '/dist/assets/js/union'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/querycount_dxsjs.html', //同步数据
            template: 'src/pages/querycount_dxsjs.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝querycount_dxsjs.js到dist目录
            from: __dirname + '/src/assets/js/querycount_dxsjs.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new CopyWebpackPlugin([{
            //引入popper.js，要在bootstarp之前导入！
            from: __dirname + '/src/assets/lib/popper.js',
            to: __dirname + '/dist/assets/js'
        }]),
        new HtmlWebpackPlugin({
            filename: 'pages/report_authorization.html', //同步数据
            template: 'src/pages/report_authorization.html', //模板文件名
            chunks:[''],
        }),
        new CopyWebpackPlugin([{
            //拷贝report_authorization.js到dist目录
            from: __dirname + '/src/assets/js/report_authorization.js',
            to: __dirname + '/dist/assets/js'
        }]),
    ],
    devServer: { //在内存中生成页面
        contentBase: path.resolve(__dirname, "dist/pages"), //预览时读取放在内存中的路径，重要！
        //compress: true,
        //port: 9080,
        //host: 'localhost',
        //historyApiFallback:true,
        //overlay: true, //在浏览器里提示编译错误
        //hot: true,
        //inline: false,
        //progress: true, //报错无法识别，删除后也能正常刷新
        //openPage: "homepage.html", //打开页面
    }
}

/*

webpack         // 最基本的启动webpack的方法
webpack -w      // 提供watch方法；实时进行打包更新
webpack -p      // 对打包后的文件进行压缩
webpack -d      // 提供source map，方便调式代码
webpack --progress //显示进度条
webpack --color //添加颜色
*/
