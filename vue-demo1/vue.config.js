// vue.config.js
module.exports = {
  productionSourceMap: false, // 去掉map
  //   configureWebpack: config => {
  //     if (process.env.NODE_ENV === "production") {
  //       // 为生产环境修改配置...
  //     } else {
  //       // 为开发环境修改配置...
  //     }
  //   },
  configureWebpack: {
    externals: {
      vue: "Vue",
      "vue-router": "VueRouter",
      vuex: "Vuex",
      "view-design": "view-design",
      axios: "axios",
      jsPDF: "jspdf",
      html2canvas: "html2canvas"
      // underscore: {
      //   commonjs: "underscore",
      //   amd: "underscore",
      //   root: "_"
      // },
      // jquery: {
      //   commonjs: "jQuery",
      //   amd: "jQuery",
      //   root: "$"
      // }
    }
  }
};
