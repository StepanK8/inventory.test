const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "~@/style/buttons.scss";
        @import "~@/style/main.scss";
        @import "~@/style/template.scss";`,
      },
    },
  },
})

