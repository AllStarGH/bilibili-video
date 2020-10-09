/*复制文件至其它文件夹,若其它文件夹不存在则创建*/
var fs = require('fs')
var path = require('path');

/**
 * { var_description }
 *
 * @type       {string}
 */
var fileName = 't1.mp4';
var srcFilePath = '/home/user/001/previous';
var targetUrl = '/home/user/001/previous/oop/diy/atm';

/**
 * { function_description }
 *
 * @param      {<type>}  fileName     The file name
 * @param      {<type>}  srcFilePath  The source file path
 * @param      {<type>}  targetUrl    The target url
 */
function moveFileToDest(fileName, srcFilePath, targetUrl) {
    checkDirExist(targetUrl);
    createDirIfNotExist(targetUrl);

    var srcFileNamePath = path.join(srcFilePath, fileName);
    var destFilePath = path.join(targetUrl, fileName);

    console.info('destFilePath==' + destFilePath)

    fs.rename(srcFileNamePath, destFilePath, function(err) {
        if (err) {
            console.error('再试一次')
            throw err;
        }

        fs.stat(destFilePath, function(err, stats) {
            if (err) throw err;
            console.log('stats: ' + JSON.stringify(stats));
            console.info('移动文件至新文件夹完成');
        });
    });
}


/**
 *  判断目录是否存在,返回Promise
 *
 * @param      {<type>}   dirUrl  The dir url
 * @return     {Promise}  { description_of_the_return_value }
 */
const dirExist = (dirUrl) => {
    return new Promise((resolve) => {
        //constants:常量,常数
        fs.access(dirUrl, fs.constants.F_OK, (err) => {
            if (err) {
                resolve(false)
            } else {
                resolve(true)
            }
        })
    })
}

/**
 * { function_description }
 *
 * @param      {<type>}  dirUrl  The dir url
 */
const checkDirExist = (dirUrl) => {
    const fn = (dirUrl) => {
        dirExist(dirUrl).then((exist) => {
            if (exist) {
                console.log(`${dirUrl} 目录存在`)
            } else {
                console.log(`${dirUrl} 目录并不存在`)
            }
        })
    }

    fn(targetUrl)
}

/**
 * Creates a dir if not exist.
 *
 * @param      {<type>}  dirUrl  The dir url
 */
const createDirIfNotExist = (dirUrl) => {
    dirExist(dirUrl).then((exist) => {
        if (!exist) {
            fs.mkdirSync(dirUrl, { recursive: true })
        }
    }).then(() => {
        console.log('创建新文件夹完成')
    })
}

moveFileToDest(fileName, srcFilePath, targetUrl);