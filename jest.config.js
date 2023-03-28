module.exports = {
    clearMocks: true,
    testEnvironment: "jsdom",
    setupFilesAfterEnv: [
      "<rootDir>/jest.setup.ts"
    ],
    moduleNameMapper: {
      "\\.(css|less)$": "identity-obj-proxy"
    }
  }
  ​
  // jest.setup.js
  import "@testing-library/jest-dom";