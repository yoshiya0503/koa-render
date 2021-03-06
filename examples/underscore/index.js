
var router = require('koa-route');
var views = require('../../');
var koa = require('koa');
var app = koa();

// Underscore.

app.use(views('./examples/underscore', {
  html: 'underscore'
}));

// Routes.

app.use(router.get('/underscore', function *(next) {
  this.body = yield this.render('index', { name: 'koa' });
}));

// Listen

app.listen(3000);
console.log('app running on port 3000');