// 初始化数据库对象
var data = {};
// 插入操作
function insert(year, month, day, type, money, callback) {
	var d = localStorage.getItem("data");
	if(d != null) {
		data = JSON.parse(d);
	}
	
	if(data.count == null) {
		data.count = 0;
	}
	data[year + "_" + month + "_" + day + "_" + type + "_" + data.count] = money;
	data.count++;
	console.log(data.count);
	localStorage.setItem("data", JSON.stringify(data));
}

// 按照月份查询
function selectByMonth(year, month, callback) {
	var result = new Array();
	var d = localStorage.getItem("data");
	if(d != null) {
		data = JSON.parse(d);
	}
	for(var i = 1; i <=31  ; i++) {
		var dayData = getByKey(year + "_" + month + "_" +　("0" + i).substr(-2), data);
		if(dayData.day != null) {
			result.push(dayData);
		}
	}
	if(callback != null) {
		callback(result);
	}
}

function getByKey(day, data) {
	var dayData = {};
	dayData.detail = new Array();
	for(key in data) {
		if(key == "count") {
			continue;
		}
		if(key.indexOf(day) > -1) {
			dayData.day = day;
			// 消费类型
			var type = key.split("_")[3];
			var obj = {};
			obj.type = type;
			obj.money = data[key];
			dayData.detail.push(obj);
		}
	}
	return dayData;
}