//引入MySQL连接base API
const db = require('./../dao/db_config');

/*http://localhost:2300/users/userList*/
exports.userList = (req, res, next) => {
    console.info(req.originalUrl);

    let sentence = "SELECT id,username,email,mobile FROM t_user;"
    db.base(sentence, null, (response) => {
        console.log('response length==' + response.length);
        if (response.length == 0) {
            res.json({
                status: '404',
                msg: '查询失败,无数据',
                result: null
            })
        } else {
            res.json({
                status: '200',
                msg: '查询成功',
                result: response
            })
        }
    })
}


/*新增一名会员*/
exports.userAdd = (req, res, next) => {
    console.info(req.body);

    let regForm = req.body; //前端传送过来的响应正文中的数据
    let sql = 'insert into t_user (username,password,email,mobile) values(?,?,?,?)';
    let data = [regForm.username, regForm.password, regForm.email, regForm.mobile];

    // 检验用户名是否已存在
    // getByUsernameForReg(regForm.username, res);

    validateForReg(res, regForm.email, 0);
    validateForReg(res, regForm.mobile, 1);
    validateForReg(res, regForm.username, 2);

    db.base(sql, data, (response) => {
        console.log(response);
        if (response.length != 0) {
            res.json({
                status: '200',
                msg: '',
                result: 1
            })
        } else {
            res.json({
                status: '555',
                msg: '添加一名新会员失败',
                result: ''
            })
        }
    })
};

/**
 * 校验手机号码或者邮箱是否已经存在于数据库的表中
 *
 * @param      {<type>}  res     res对象
 * @param      {<type>}  param   传入的检索关键数据
 * @param      {<type>}  order   0:邮箱;1:手机号码;缺省:用户名
 */
function validateForReg(res, param, order) {
    console.log('order:' + order + ', orderType:' + typeof(order));

    var col = "";
    var status = new Number();
    var msg = '';

    if (order === 0) {
        col = 'email';
        status = 505;
        msg = "该邮箱已被注册使用,请另行更换";
    } else if (order === 1) {
        col = 'mobile';
        status = 506;
        msg = "该手机号码已被注册使用,请另行更换";
    } else {
        col = 'username';
        status = 507;
        msg = "该用户名已被注册使用,请另行更换";
    }

    var except = new CommonException(status, msg);

    var sentence = "SELECT id,username,email,mobile FROM t_user WHERE " + col + "=?;"
    console.log('sentence==' + sentence);

    db.base(sentence, param, (response) => {
        if (response.length != 0) {
            console.info('该' + col + '已存在');
            console.info('response: ' + JSON.stringify(response));
            console.info('response length==' + response.length);
            console.info('response type==' + typeof(response));
            console.info('response exist==' + (response == null));

            res.json(except);

            throw new CommonException(except);
        }

        console.info('查无此' + col + ',response为空');
    })
}

/*为注册而查询是否有重复的用户名*/
function getByUsernameForReg(username, res) {
    console.info("arg: " + username);

    let sentence = "SELECT id,username,email,mobile FROM t_user WHERE username=?;"

    db.base(sentence, username, (response) => {
        console.info('response: ' + JSON.stringify(response));
        console.info('response length==' + response.length);
        console.info('response type==' + typeof(response));
        console.info('response exist==' + (response == null));

        if (response.length != 0) {
            console.info('该用户名已存在');
            var ex = new CommonException(258, '该用户名已存在,请另行更换用户名');
            res.json(ex);

            throw new CommonException(258, '该用户名已存在,请另行更换用户名');
        }

        console.info('查无此人,response为空');
    });
}

/*自定义通用异常*/
function CommonException(status, msg) {
    this.status = status;
    this.msg = msg;
}