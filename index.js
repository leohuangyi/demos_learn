/**
 * Created by XiTang on 16/3/30.
 */
var koa = require('koa');
var app = koa();

app.use(function *(){
    this.body = 'Hello World';
});

app.listen(80, '0.0.0.0');