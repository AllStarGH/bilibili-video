var jsonArray = [
    { realName: "Cupid", alias: "Nays", age: 15 },
    { realName: "Laura", alias: "Justin", age: 19 },
    { realName: "Vicent", alias: "Barker", age: 22 },
    { realName: "Jane", alias: "Jesse", age: 13 },
    { realName: "Abbas", alias: "Arthur", age: 55 },
    { realName: "Lorens", alias: "Igor", age: 40 },
    { realName: "Ford", alias: "Mondeo", age: 34 },
    { realName: "Dix", alias: "Mira", age: 51 },
    { realName: "Huckel", alias: "Brandon", age: 26 },
];

var jsonStrArray = ['{ realName: "Cupid", alias: "Nays", age: 15 }',
    '{ realName: "Laura", alias: "Justin", age: 19 }',
    '{ realName: "Vicent", alias: "Barker", age: 22 }',
    '{ realName: "Jane", alias: "Jesse", age: 13 }',
    '{ realName: "Abbas", alias: "Arthur", age: 55 }',
    '{ realName: "Lorens", alias: "Igor", age: 40 }',
    '{ realName: "Ford", alias: "Mondeo", age: 34 }',
    '{ realName: "Dix", alias: "Mira", age: 51 }',
    '{ realName: "Huckel", alias: "Brandon", age: 26 }',
];

var arr01 = [{ "is_completed": true, "total_bytes": 26369749, "downloaded_bytes": 26369749, "title": "在线模仿电视购物频道做土味广告？笑疯了！买到就是赚到！", "type_tag": "lua.flv480.bili2api.32", "cover": "http:\/\/i1.hdslb.com\/bfs\/archive\/b61f902d7ebbe01284c8f9d2a7ea4ca62211e9fb.jpg", "prefered_video_quality": 32, "guessed_total_bytes": 0, "total_time_milli": 227669, "danmaku_count": 1000, "time_update_stamp": 1587853222057, "time_create_stamp": 1587853193570, "avid": 285256177, "spid": 0, "seasion_id": 0, "page_data": { "cid": 181842608, "page": 1, "from": "vupload", "part": "荣耀30Pro+", "vid": "", "has_alias": false, "weblink": "", "tid": 21, "width": 1920, "height": 1088, "rotate": 0 } }, { "is_completed": true, "total_bytes": 29836365, "downloaded_bytes": 29836365, "title": "【一勺思想】只要还围着美国转，这个世界就还会更乱", "type_tag": "lua.flv480.bili2api.32", "cover": "http:\/\/i1.hdslb.com\/bfs\/archive\/c627ced61e770e7458cd02c4133148c4c12573cb.jpg", "prefered_video_quality": 32, "guessed_total_bytes": 0, "total_time_milli": 389323, "danmaku_count": 757, "time_update_stamp": 1588365146539, "time_create_stamp": 1588364927805, "avid": 285329289, "spid": 0, "seasion_id": 0, "page_data": { "cid": 179233854, "page": 1, "from": "vupload", "part": "第四集 最终版", "vid": "", "has_alias": false, "weblink": "", "tid": 96, "width": 1440, "height": 1080, "rotate": 0 } }, { "is_completed": true, "total_bytes": 21251654, "downloaded_bytes": 21251654, "title": "《非浪》| 朱一旦献给新员工的演讲", "type_tag": "lua.flv480.bili2api.32", "cover": "http:\/\/i0.hdslb.com\/bfs\/archive\/ffe0550467917924f31d86420fe81447bc0ee67b.jpg", "prefered_video_quality": 32, "guessed_total_bytes": 0, "total_time_milli": 167672, "danmaku_count": 1000, "time_update_stamp": 1588763924560, "time_create_stamp": 1588763881348, "avid": 285578289, "spid": 0, "seasion_id": 0, "page_data": { "cid": 187025127, "page": 1, "from": "vupload", "part": "《非浪》| 朱一旦献给新员工的演讲", "vid": "", "has_alias": false, "weblink": "", "tid": 21, "width": 1080, "height": 1920, "rotate": 0 } }]

var arr02 = [
    '{ "is_completed": true, "total_bytes": 26369749, "downloaded_bytes": 26369749, "title": "在线模仿电视购物频道做土味广告？笑疯了！买到就是赚到！", "type_tag": "lua.flv480.bili2api.32", "cover": "http:\/\/i1.hdslb.com\/bfs\/archive\/b61f902d7ebbe01284c8f9d2a7ea4ca62211e9fb.jpg", "prefered_video_quality": 32, "guessed_total_bytes": 0, "total_time_milli": 227669, "danmaku_count": 1000, "time_update_stamp": 1587853222057, "time_create_stamp": 1587853193570, "avid": 285256177, "spid": 0, "seasion_id": 0, "page_data": { "cid": 181842608, "page": 1, "from": "vupload", "part": "荣耀30Pro+", "vid": "", "has_alias": false, "weblink": "", "tid": 21, "width": 1920, "height": 1088, "rotate": 0 } }',
    '{ "is_completed": true, "total_bytes": 29836365, "downloaded_bytes": 29836365, "title": "【一勺思想】只要还围着美国转，这个世界就还会更乱", "type_tag": "lua.flv480.bili2api.32", "cover": "http:\/\/i1.hdslb.com\/bfs\/archive\/c627ced61e770e7458cd02c4133148c4c12573cb.jpg", "prefered_video_quality": 32, "guessed_total_bytes": 0, "total_time_milli": 389323, "danmaku_count": 757, "time_update_stamp": 1588365146539, "time_create_stamp": 1588364927805, "avid": 285329289, "spid": 0, "seasion_id": 0, "page_data": { "cid": 179233854, "page": 1, "from": "vupload", "part": "第四集 最终版", "vid": "", "has_alias": false, "weblink": "", "tid": 96, "width": 1440, "height": 1080, "rotate": 0 } }',
    '{ "is_completed": true, "total_bytes": 21251654, "downloaded_bytes": 21251654, "title": "《非浪》| 朱一旦献给新员工的演讲", "type_tag": "lua.flv480.bili2api.32", "cover": "http:\/\/i0.hdslb.com\/bfs\/archive\/ffe0550467917924f31d86420fe81447bc0ee67b.jpg", "prefered_video_quality": 32, "guessed_total_bytes": 0, "total_time_milli": 167672, "danmaku_count": 1000, "time_update_stamp": 1588763924560, "time_create_stamp": 1588763881348, "avid": 285578289, "spid": 0, "seasion_id": 0, "page_data": { "cid": 187025127, "page": 1, "from": "vupload", "part": "《非浪》| 朱一旦献给新员工的演讲", "vid": "", "has_alias": false, "weblink": "", "tid": 21, "width": 1080, "height": 1920, "rotate": 0 } }'
]

/**
 * { function_description }
 *
 * @param      {<type>}  jsonArray  The json array
 */
const processJsonArray = (jsonArray) => {
    var objArr = [];
    console.log(jsonArray)

    for (let index in jsonArray) {
        objArr.push(JSON.parse(jsonArray[index]))
    }
    console.log(objArr)
}

processJsonArray(arr02);

module.exports = { processJsonArray };