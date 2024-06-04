// webpack.config.js
const path = require('path');

module.exports = {
  // other configurations...
  output: {
    path: path.resolve(__dirname, 'dist'), // This specifies the output directory
    filename: 'bundle.js'
  }
};
