/*
 * @Description: 
 * @Version: 1.0
 * @Autor: CHENWJ
 * @Date: 2021-05-07 10:28:18
 * @LastEditors: CHENWJ
 * @LastEditTime: 2021-05-07 11:25:21
 */
/**
 *  开发配置
 * */

const env = process.env.NODE_ENV;

const Setting = {
    // 是否使用 Mock 的数据，默认 开发环境为 true，生产环境为 false
    isMock: true,
    // 部署应用包时的基本 URL
    publicPath: env === 'development' ? '/' : '/lemon/',
    // 生产环境构建文件的目录名
    outputDir: 'lemon',
    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: '',
    // 开发环境每次保存时 lint 代码，会将 lint 错误输出为编译警告
    // true || false || error
    lintOnSave: true,
    // iView Loader 的选项
    // 详见 https://www.iviewui.com/docs/guide/iview-loader
    iviewLoaderOptions: {
        prefix: false
    }
};

module.exports = Setting;
