module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['./jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest'
  } 
};