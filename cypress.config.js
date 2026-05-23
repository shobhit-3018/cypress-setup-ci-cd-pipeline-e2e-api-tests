const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://127.0.0.1:8000",
    supportFile: false,
    specPattern: "cypress/{api,e2e}/**/*_spec.js",
  },
});
