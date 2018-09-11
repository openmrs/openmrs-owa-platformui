module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__tests__/__mocks__/fileMock.js'
  },
  testPathIgnorePatterns: ["<rootDir>/__tests__/__mocks__/fileMock.js"],
  testURL: 'http://localhost',
  'setupTestFrameworkScriptFile': './setupTests.js',
  collectCoverageFrom: ['**/app/**/*.js', '**/app/**/*.jsx'],
}
