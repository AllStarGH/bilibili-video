var pathsArray = [
    '/home/user/001/previous/testing/285256177/1/entry.json',
    '/home/user/001/previous/testing/285256177/1/lua.flv480.bili2api.32/0.blv',
    '/home/user/001/previous/testing/285256177/1/lua.flv480.bili2api.32/0.blv.4m.sum',
    '/home/user/001/previous/testing/285256177/1/lua.flv480.bili2api.32/index.json',
    '/home/user/001/previous/testing/285329289/1/danmaku.xml',
    '/home/user/001/previous/testing/285329289/1/entry.json',
    '/home/user/001/previous/testing/285329289/1/lua.flv480.bili2api.32/0.blv',
    '/home/user/001/previous/testing/285329289/1/lua.flv480.bili2api.32/0.blv.4m.sum',
    '/home/user/001/previous/testing/285329289/1/lua.flv480.bili2api.32/index.json',
    '/home/user/001/previous/testing/285578289/1/danmaku.xml',
    '/home/user/001/previous/testing/285578289/1/entry.json',
    '/home/user/001/previous/testing/285578289/1/lua.flv480.bili2api.32/0.blv',
    '/home/user/001/previous/testing/285578289/1/lua.flv480.bili2api.32/0.blv.4m.sum',
    '/home/user/001/previous/testing/285578289/1/lua.flv480.bili2api.32/index.json'
];

/**
 * Gets the path regex.
 *
 * @param      {<type>}  array   The array
 */
const getPathRegEx = (array) => {
    var resultsArray = [];
    var expression = '/*blv'
    var videoType = 'blv'

    var regExpOfPath = new RegExp(expression);
    for (let i in array) {
        if (regExpOfPath.test(array[i])) {
            let videoLen = array[i].lastIndexOf(videoType) + videoType.length;
            if (videoLen == array[i].length) {
                console.log(array[i]);
                resultsArray.push(array[i]);
            }
        }
    }
    console.log(resultsArray)
}

getPathRegEx(pathsArray)

module.exports = { getPathRegEx }