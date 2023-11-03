const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  //配置反向代理
  devServer:{
    proxy:{
      '/adminapi':{
        target:"http://localhost:3000",
        changeOrigin:true,
        logLevel:'debug',
      }
    }
  }
})
