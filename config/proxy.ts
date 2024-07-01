/**
 * @name 代理的配置
 * @see 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 *
 * @doc https://umijs.org/docs/guides/proxy
 */
export default {
  dev: {
    // localhost:8000/api/** -> https://preview.pro.ant.design/api/**
    '/api': {
      // 要代理的地址
      //target: 'https://preview.pro.ant.design',
      target: 'http://localhost:8080/',
      //target: 'http://124.221.120.162:19111/api',
      // 配置了这个可以从 http 代理到 https
      // 依赖 origin 的功能可能需要这个，比如 cookie
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  build: {
    // localhost:8000/api/** -> https://preview.pro.ant.design/api/**
    '/api': {
      // 要代理的地址
      //target: 'https://preview.pro.ant.design',
      target: 'http://localhost:8080/',
      //target: 'http://124.221.120.162:19111/api/',
      // 配置了这个可以从 http 代理到 https
      // 依赖 origin 的功能可能需要这个，比如 cookie
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  /**
   * @name 详细的代理配置
   * @doc https://github.com/chimurai/http-proxy-middleware
   */
  test: {
    '/api/': {
      //target: 'https://proapi.azurewebsites.net',
      target: 'http://124.221.120.162:19111/gui-console/',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  pre: {
    '/api/': {
      target: 'your pre url',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
