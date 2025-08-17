// jest.config.js
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/types/**",
    "!src/index.tsx"
  ],
  coveragePathIgnorePatterns: [
    "node_modules/",
    "src/types/",
    "src/index.tsx"
  ]
};
