const { createProxyMiddleware } = require("http-proxy-middleware");

const api_host = process.env.API_HOST || "localhost:3000";
module.exports = function (app) {
  app.use(
      createProxyMiddleware("/api", {
        target: `http://${ api_host }/`,
      })
  );
};
