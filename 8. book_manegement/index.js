const express=require('express')
const router=require('./router')
const app=express()

//启动静态资源服务
app.use(express.static('public'))

//处理请求参数
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//配置路由
app.use(router)

app.listen(3000,()=>{
    console.log('running');
})