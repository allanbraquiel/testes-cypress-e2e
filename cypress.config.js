const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost",
    //baseUrl: "http://127.0.0.1:8000",

    viewportHeight: 900,
    viewportWidth: 1440,

    video: false,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
