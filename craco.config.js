// Extend the webpack configuration

const path = require('path')

module.exports = {
  // webpack configuration
  webpack: {
    // Configuring aliases
    alias: {
      // Convention: Use @ to indicate the path where the src file is located
      '@': path.resolve(__dirname, 'src'),
    },
  },
}
