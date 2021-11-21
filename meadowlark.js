// 项目入口 程序文件
const express = require('express')

const app = express();
// 设置视图引擎
const handlebars = require('express-handlebars').create({
    defaultLayout:'main'
})
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
app.set('port',process.env.PORT||3000);

// 设置静态资源static中间件
app.use(express.static(__dirname+'/public'))

// 设置路由
app.get('/',function(req,res){
    // res.type('text/plain');
    // res.send('首页')
    res.render('home')
})

// 视图中的动态内容
var arr=[
    '你很棒',
    '今天学的什么',
    '生活总是很美好',
]
app.get('/about',function(req,res){
    // res.type('text/plain');
    // res.send('about 页面')
    var getone = arr[Math.floor(Math.random()*arr['length'])]
    res.render('about',{arr:getone})
})
// 定制404页面
app.use(function(req,res){
    // console.error('500 SERVER ERROR');
    res.status(404);
    // res.type('text/plain');
    // res.send('404 NOT FIND');
    res.render('404')
})
// 定制500页面
app.use(function(err,req,res,next){
    console.error(err.stack);
    res.status(500);
    // res.type('text/plain');
    // res.send('500 SERVER ERROR')
    res.render('500')
})

app.listen(app.get('port'),function(){
    console.log('express started on http://localhost'+app.get('port')+';press ctrl-c to terminate')
})