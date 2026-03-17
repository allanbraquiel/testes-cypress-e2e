const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    // baseUrl: "http://localhost",
    baseUrl: "http://127.0.0.1:8000",

    viewportHeight: 900,
    viewportWidth: 1440,

    video: true,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});
