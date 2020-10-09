const express = require('express');
const router = express.Router();
const service = require('./../services/userService');

/*测试跨域*/
//正确的URL为: http://localhost:2300/users/test
router.get('/test', function(req, res, next) {
    console.log(req);
    res.json({ order: '200', task: '测试跨域之接口', detail: '测试从vue前端发送请求数据至express后台' });
})

/* http://localhost:2300/users/test001?age=11&lastname=bluez&job=cooker */
router.get('/test001', function(req, res, next) {
    console.log(req.query);
    // console.info(req.url);
    console.log(req.query.age + ";;;" + req.query.lastname + ";;;" + req.query.job);
    res.json({ num: req.query.age, mineName: req.query.lastname, favorite: req.query.job })
})

/*会员业务的诸多接口*/
//get: http://localhost:2300/users/userList
router.get('/userList', service.userList); //查看全体用户列表

// router.post('/login',service.login);//账号登录
// router.post('/findByKeyword',service.findByKeyword);//根据关键词搜索
router.post('/userAdd', service.userAdd); //添加一个新账号
// router.post('/userUpdate',service.userUpdate);//修改会员数据
// router.post('/deleteUserByBatch',service.deleteUserByBatch);//批量删除账号
// router.get('/findUserById',service.findUserById);//根据ID查找一个账号
// router.get('/deleteUserById',service.deleteUserById);//根据id删除一位用户

module.exports = router;