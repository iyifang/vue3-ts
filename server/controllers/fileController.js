/*
  *  在fileContorller中实现上传的功能，下方代码实现的是单文件上传，其中上传文件是，需要body中有一个字段叫file(可自定义)。
  *  在req.files中的文件是经过express-fileupload处理的，它是一个对象，每一对象都是一个封装了了文件实例，实例中有一个mv方法，用于保存文件。
*/
const fs = require('fs');
const path = require('path')
import { connection } from '../utils/mysql'

const uploadImg = (req, res) => {
    let fileObj = null;
    let filePath = '';

    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send({
            code: 600,
            msg: '上传失败!'
        })
        return
    }

    fileObj = req.files.file;
    console.log(fileObj);
    filePath = './upload/' + fileObj.name;
    fileObj.mv(filePath, (err) => {
        console.log(err);
        if (err) {
            return res.status(500).send({
                code: 600,
                msg: '上传失败!'
            })
        }
        let sql = `INSERT INTO files (name, createdTime, type, path) VALUES ('${fileObj.name}', ${new Date().getTime()}, ${req.body.type}, '/upload/${fileObj.name}');`;
        connection.query(sql, (err, data) => {
            if (data.length == 0) {
                res.json({
                    code: 600,
                    data: [],
                    message: '上传失败!'
                })
            } else {
                res.json({
                    code: 200,
                    data: [],
                    message: '上传成功!'
                })
            }
        })
    })
}

const downloadImg = (req, res) => {
    let sql = `select * from files where id = ${req.body.id}`
    connection.query(sql, (err, data) => {
        if (!data) {
            res.json({
                code: 600,
                data: [],
                message: '获取失败'
            })
        } else {
            // const filePath = data[0].path
            // const dir = path.join(__dirname, '../', filePath)
            // const readStream = fs.readFileSync(dir)  // 文件流
            // const base64 = readStream.toString('base64') // 转 base64
            // 上面两行等价于下面的一行代码
            /*  const base64 = fs.readFileSync(dir, 'base64') // 文件流并转 base64
             res.json({
                 code: 200,
                 data: [base64],
                 message: '获取成功!'
             }) */
            res.send({
                code: 200,
                data: [data[0].path],
                msg: '获取成功'
            })
        }
    })
}


const getfiles = (req, res) => {
    let sql = `select * from files`
    connection.query(sql, (err, data) => {
        if (data) {
            res.json({
                code: 200,
                data: data,
                message: '获取成功!'
            })
        } else {
            res.json({
                code: 600,
                data: [],
                message: '获取失败'
            })
        }
    })
}

module.exports = {
    uploadImg,
    downloadImg,
    getfiles
}