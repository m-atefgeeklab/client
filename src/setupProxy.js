const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    ["/api"],
    createProxyMiddleware({
      target: 'https://juice-box-api.onrender.com',
      changeOrigin: true
    })
  );
};