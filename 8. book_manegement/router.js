const express=require('express')
const router=express.Router()
const service=require('./server')

//查询图书列表
router.get('/books',service.getAllBooks)

//添加图书
router.post('/books',service.addBook)

//验证图书名称是否已经存在
router.get('/books/book/:name',service.checkName)

//根据id值查找书,编辑图书信息
router.get('/books/:id',service.toEditBook)

//根据id值删除书
router.delete('/books/:id',service.deleteBook)
module.exports=router