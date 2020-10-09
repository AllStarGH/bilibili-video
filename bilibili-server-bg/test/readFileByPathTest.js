var fs = require('fs')

/**
 * Gets the content by path.
 *
 * @param      {<type>}  fileUrl  The file url
 */
function getContentByPath(fileUrl) {
    // 异步读取文件内容
    fs.readFile(fileUrl, 'utf-8', function(err, data) {
        try {
            if (data != '' || null) {
                console.info(data);
            }
        } catch (err) {
            console.error(err);
        }
    });
}

getContentByPath('/home/user/001/previous/4505LVPH/243082173/1/entry.json')