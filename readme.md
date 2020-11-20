------------------------------------------------------------------------------------
谷歌浏览器允许跨域访问：
添加启动项： （chrome禁止本地浏览时加载本地其他文件,可以采用添加启动参数的方式来支持）
右键点击chrome的快捷方式选择属性。在“目标”一栏中添加 --allow-file-access-from-files，如图所示，注意与前面的内容要用一空格隔开。(一般谷歌这样就行了，不用下面几个代码)

允许读取本地文件
右键点击chrome的快捷方式选择属性。在目标一栏中添加--allow-file-access-from-files
允许跨域： 
--disable-web-security --user-data-dir 

允许mix-content：
--allow-running-insecure-content



火狐浏览器允许跨域访问：
地址栏中输入about:config
允许跨域功能 
security.fileuri.strict_origin_policy改为false

允许mix-content：
security.mixed_content.block_active_content改为false 

firefox在https页面下访问非ssl的websocket的设置方法：
network.websocket.allowInsecureFromHTTPS，设置为true即可。


------------------------------------------------------------------------------------
webpack版本兼容性问题错误总结

文章中用了webpack命令，所以要全局安装webpack啊，坑来了，别直接  npm i webpack -g 这样会安装最新的webpack版本，后边安装webpack-cli你就哭了。

这样安装：npm i webpack@3.8.1 -g

然后 npm i webpack -D

然后 npm i webpack-cli -D

结束

总结报错内容：

npm WARN webpack-cli@3.0.8 requires a peer of webpack@^4.x.x but none is installed. You must install peer dependencies yourself.

这说明webpack版本太高了。

---------------------------------------------------------------------------------


怎么预览：
webpack.config.js文件中设定：

1 “publicPath”选项需要屏蔽
2 “new HtmlWebpackPlugin” 里的“filename”路径，“pages/”去掉！ 所以页面预览时只能单个查看
3 "devServer"里的“openPage”设为需要预览的页面
4 cmd中输入命令 npm run dev 自动打开浏览器页面


怎么生成：
cmd中输入命令 webpack -p 生成生产环境

---------------------------------------------------------------------------------

运行webpack，直接执行：
$ webpack --display-error-details
后面的参数 “-display-error-details”推荐加上，方便出错时能了解到更详尽的信息。其他主要参数：
$ webpack --config XXX.js //使用另一份配置文件（比如webpack.config2.js）来打包
$ webpack --watch //监听变动并自动打包
$ webpack -p //压缩混淆脚本，这个非常非常重要！
$ webpack -d //生成map映射文件，告知哪些模块被最终打包到哪里了


---------------------------------------------------------------------------------
这个项目中，入口js手动输入；有的js文件夹里的js不能生成，要用CopyWebpackPlugin直接拷贝到dist目录
使用ajax载入子页面，并且延迟加载同名js。主文件是achievement.js


jquery从外部导入！不自动打包！



----------------------------------------------------------------------------------
用node里的anywhere让手机也能预览制作好的网页！
先输入 cnpm install anywhere -g来安装anywhere
用命令行cmd cd方式进入你要打开的文件夹 这个项目的内容放在dist 根目录test 所以进入test
用ipconfig命令查看本机IP地址 本机为192.168.0.67
一定要关闭防火墙！！！
键入anywhere 
            anywhere -p 8000 ## 指定静态服务器的端口号  
            anywhere -s ## 静默执行，不打开浏览器  
            anywhere -f /dist/pages/achievement.html 直接打开achievement.html页
            anywhere -f ./文件名.html 直接打开想要的文件
命令已经整合进package.json中了，cmd输入npm run anywhere 自动打开根目录index.html
自己在index.html里写链接吧 
    <p><a href="dist/pages/achievement.html">总成绩</a></p>
    <p><a href="dist/pages/subjectTable.html">科目分数表</a></p>
    <p><a href="dist/pages/kqbg.html">考情报告</a></p>
    <p><a href="dist/pages/pjhd.html">评教活动</a></p>
    
用手机访问192.168.0.67:8101 就可以预览了    

------------------------------------------------------------------------------------
mock.js 自动生成随机数据
用node mock.js 查看。里面有各种生成数据的格式