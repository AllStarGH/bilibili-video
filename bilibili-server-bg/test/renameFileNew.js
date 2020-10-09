var fs = require('fs')

/**
 * { function_description }
 *
 * @param      {<type>}  newName  The new name
 * @param      {<type>}  oldName  The old name
 * @param      {<type>}  srcPath  The source path
 */
function renameTheFile(newName, oldName, srcPath) {
    var oldPath = srcPath + '/' + oldName;
    var newPath = srcPath + '/' + newName;

    fs.rename(oldPath, newPath, function(err) {
        if (!err) {
            console.info('重命名文件成功')
            console.info('新文件路径==' + newPath)
        }
    })
}

var srcPath = '/home/user/001/downloads/public';
var newName = 'bpr.rmvb';
var oldName = 'mvw.txt';

renameTheFile(newName, oldName, srcPath)