const express=require('express')
const router=express.Router()
const service=require('./server')

//查询图书列表
router.get('/books',service.getAllBooks)

//添加图书
router.post('/books',service.addBook)

//验证图书名称是否已经存在
router.get('/books/book/:name',service.checkName)

module.exports=router