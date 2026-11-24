export default function () {
  return {
    boot: [],
    css: ['app.css'],
    extras: ['roboto-font', 'material-icons'],
    build: {
      target: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
        node: 'node20'
      },
      vueRouterMode: 'hash'
    },
    devServer: {
      port: 9000
    },
    framework: {
      plugins: []
    }
  }
}
