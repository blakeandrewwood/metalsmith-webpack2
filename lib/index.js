var webpack = require('webpack');

module.exports = plugin;

function plugin(options){
    return function(files, metalsmith, done) {
        webpack(require('./webpack.config.js'), function(err, stats) {
          if (err || stats.hasErrors()) {
            console.error(err);
          }
          done();
        });
    }
}