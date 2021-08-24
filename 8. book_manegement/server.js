const path=require('path')
const fs=require('fs')
const data=require('./data.json')

//自动生成图书编号
let maxBookCode=()=>{
    //将data中的数据id都存入arr中
    let arr=[]
    data.forEach((item)=>{
        arr.push(item.id)
    })
    //获取最大的id值，并返回
    return Math.max.apply(null,arr)
}

//数据写入文件,返回响应结果res
let writeDataToFile=(res)=>{
    fs.writeFile(path.join(__dirname,'data.json'),JSON.stringify(data,null,4),(err)=>{
        if(err){
            res.json({
                status:500
            })
        }
        res.json({
            status:200
        })
    })
}
//获取图书列表数据
exports.getAllBooks=(req,res)=>{
    res.json(data)
}
//添加图书
exports.addBook=(req,res)=>{
    //获取表单数据
    let info=req.body
    let book={}
    for(let key in info){
        book[key]=info[key]
    }
    book.date=2525609975000
    book.id=maxBookCode()+1
    data.push(book)
    //将请求数据写入文件
    writeDataToFile(res)
}