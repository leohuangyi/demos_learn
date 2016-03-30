/**
 * Created by XiTang on 16/3/28.
 */
var gulp = require('gulp');
var gutil = require("gulp-util");
var gwatch = require('gulp-watch');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var less = require('gulp-less');
var path = require('path');

// Production build
gulp.task("build", ["less:build","webpack:build"]);
gulp.task('dev', ["less:dev","webpack:dev"]);

gulp.task('less:dev', function(){
    gwatch('./assets/**.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'assets') ]
        }))
        .pipe(gulp.dest('./assets/'));
});
gulp.task('less:build', function(){
    gulp.src('./assets/**.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'assets') ]
        }))
        .pipe(gulp.dest('./assets/'));
});
gulp.task("webpack:build", function(callback) {
        // modify some webpack config options
        var myConfig = Object.create(webpackConfig);
        myConfig.plugins || (myConfig.plugins = []);
        myConfig.plugins = myConfig.plugins.concat(
            new webpack.DefinePlugin({
                "process.env": {
                    // This has effect on the react lib size
                    "NODE_ENV": JSON.stringify("production")
                }
            }),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin()
        );

        // run webpack
        webpack(myConfig, function(err, stats) {
            if(err) throw new gutil.PluginError("webpack:build", err);
            gutil.log("[webpack:build]", stats.toString({
                colors: true
            }));
            console.log('abc');
            callback();
        });
});
gulp.task("webpack:dev", function() {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);
    myConfig.watch = true;
    // run webpack
    webpack(myConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build", err);
        gutil.log("[webpack:build]", stats.toString({
            colors: true
        }));
    });
});