var jsonString='{"is_completed":true,"total_bytes":32633185,"downloaded_bytes":32633185,"title":"梦然-《少年》官方版","type_tag":"lua.flv480.bili2api.32","cover":"http:\/\/i1.hdslb.com\/bfs\/archive\/e25120857a6298d1d4b9e64a805c023b5143c8ff.jpg","prefered_video_quality":32,"guessed_total_bytes":0,"total_time_milli":257509,"danmaku_count":1000,"time_update_stamp":1589999044129,"time_create_stamp":1589998968311,"avid":243082173,"spid":0,"seasion_id":0,"page_data":{"cid":186030303,"page":1,"from":"vupload","part":"梦然-《少年》（横屏全分辨率）","vid":"","has_alias":false,"weblink":"","tid":193,"width":1920,"height":1080,"rotate":0}}';

/**
 * { function_description }
 *
 * @param      {<type>}  jsonString  The json string
 */
function trans(jsonString) {
	var jsonObj=JSON.parse(jsonString);
	// console.info(jsonObj);
	console.info(jsonObj.title);
	console.info(jsonObj.avid);
	console.info(jsonObj.page_data.page);
}

trans(jsonString)