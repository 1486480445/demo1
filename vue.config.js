module.exports = {
    
  publicPath: './',
  outputDir: 'dist',   //build输出目录
  assetsDir: 'assets', //静态资源目录（js, css, img）
  lintOnSave: false, //是否开启eslint
  devServer: {
    open: true, //是否自动弹出浏览器页面
    host: "localhost", 
    port: '8080',
    https: false,
    hotOnly: false, 
    // proxy: {
    //     '/api': {
    //         target: 'http://vps2.seekersoft.cn:9099/', //API服务器的地址
    //         ws: true,  //代理websockets
    //         changeOrigin: true, // 虚拟的站点需要更管origin
    //         pathRewrite: {   //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
    //             '^/api': '/'
    //         }
    //     }
    // },
}
}
// api_root = process.env.NODE_ENV == 'development' ? 'http://localhost:8000' : 'http://vps2.seekersoft.cn:9099';