
var express = require('express');
var router = express.Router();
import { connection } from '../utils/mysql'

/**
 * @swagger
 * /users:
 *  get:
 *    summary: 创建用户
 *    parameters:
 *      - in: body
 *        name: user
 *        schema:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *    responses:
 *      200:
 *        description: 成功创建用户
 */
router.get('/',function(req, res, next) {
  const { username, password } = req.query;
  console.log(req.query);
  let sql = `select * from users where name = '${username}'`;
  connection.query(sql,function(err,data){
    console.log(data);
      res.json({
        code: 200,
        msg: 'ok',
        data: data
      })
  })
});

router.post('/login',function(req, res, next) {
  const { username, password } = req.body;
  let sql = `select * from users where name = '${username}'`;
  connection.query(sql,function(err,data){
    console.log(data);
    if(data.length == 0){
      res.json({
        code: 600,
        data: null,
        message: '当前用户不存在'
      })
    }else{
      if(password !== data[0].password || username !== data[0].name){
        res.json({
          code: 600,
          data: null,
          message: '账号或密码错误'
        })
      }else{
        res.json({
          code: 200,
          data: data[0],
          message: '登陆成功'
        })
      }
    }
  })
});

module.exports = router;
