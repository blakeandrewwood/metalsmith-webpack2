var path = require('path');
var webpack = require('webpack');

module.exports = plugin;

function plugin(options){
    return function(files, metalsmith, done) {
        var webpackOptions;
        if(typeof options === 'string') {
            var configPath = path.resolve(path.dirname(require.main.filename), options);
            webpackOptions = require(configPath);
        } else {
            webpackOptions = options;
        }
        if(webpackOptions) {
            webpack(webpackOptions, function(err, stats) {
              if (err || stats.hasErrors()) {
                console.error(err);
              }
              done();
            });
        } else {
            console.warn('Warning: No webpack configuration provided.');
        }
    }
}