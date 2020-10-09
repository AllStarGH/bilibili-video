/**
 * { 此函数为单一转换,外部调用还需循环执行,遂废弃 }
 *
 * @param      {<type>}  jsonString  The json string
 * @return     {<type>}  { description_of_the_return_value }
 */
function transParse(jsonString) {
    var jsonObj = JSON.parse(jsonString);
    // console.info(jsonObj);
    console.info('\n')
    console.info('标题:' + jsonObj.title);
    console.info('视频编号:' + jsonObj.avid);
    console.info('分集序号:' + jsonObj.page_data.page);
    return jsonObj;
}

module.exports = { transParse };