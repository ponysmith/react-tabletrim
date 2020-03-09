module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['./jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest'
  }, 
  "collectCoverage": true,
  "coverageReporters": ["lcov","text-summary"],
  "coverageDirectory": "coverage",
  "moduleDirectories": ["node_modules", "src"]
};