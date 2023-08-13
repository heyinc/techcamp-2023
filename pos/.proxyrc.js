const { createProxyMiddleware } = require("http-proxy-middleware");

const api_port = process.env.API_PORT || 3000;
module.exports = function (app) {
  app.use(
      createProxyMiddleware("/api", {
        target: `http://localhost:${ api_port }/`,
      })
  );
};
