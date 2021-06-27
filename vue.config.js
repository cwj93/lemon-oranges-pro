/*
 * @Author: chenwenju
 * @Date: 2021-06-22 22:07:33
 * @LastEditTime: 2021-06-27 23:05:38
 * @LastEditors: Please set LastEditors
 * @Description: 项目配置文件
 * @FilePath: \lemon-oranges-pro\vue.config.js
 */
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/lemon/' : '/',
  outputDir: 'lemon',
  // 生产构建时禁用 eslint-loader
  lintOnSave: process.env.NODE_ENV !== 'production',
  // 调整 webpack 配置
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  // 向 CSS 相关的 loader 传递选项  css-loader postcss-loader sass-loader less-loader stylus-loader
  css: {
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
        // plugins: [
        //   // 补全css前缀(解决兼容性)
        //   require("autoprefixer")(),
        //   // 把px单位换算成rem单位
        //   require("postcss-pxtorem")({
        //     rootValue: 32, // 换算的基数(设计图750的根字体为32)
        //     selectorBlackList: [".van", ".my-van"],// 要忽略的选择器并保留为px。
        //     propList: ["*"], //可以从px更改为rem的属性。
        //     minPixelValue: 2 // 设置要替换的最小像素值。
        //   })
        // ]
      }
    }
  }
}