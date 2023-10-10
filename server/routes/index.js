var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//1.get接口
router.get('/get',(req,res) => {
  res.json({
    code:200,
    msg:'ok',
    data:'get数据'
  })
})

module.exports = router;
