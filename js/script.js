$(function(){
	// 按条件进行查询
	$("#searchByCon").on("click", function(){
		selectByMonth($("#yearCon").val(), $("#monthCon").val(),  displayall);
	});
	
	// 插入数据
	$("#insert").on("click", function(){
		insert($("#year").val(), $("#month").val(), $("#day").val(), $("#type").val(), $("#money").val(), function(){
			alert("插入成功！");
		});
	});
	
	// 把结果数据显示在指定区域内
	function displayall(result) {
		console.log(result);
		var outHtml = "";
		var len = result.length;
		outHtml += "<dl>";
		for(var i = 0; i < len ;i++) {
			outHtml += "<tr>";
			// result.rows.item(i) 用来取得第i行的数据对象
			for(var key in result) {
				outHtml += "<dt>" + result[key].day + "</dt>";
				var detail = result[key].detail;
				for(var i = 0; i < detail.length; i++) {
					console.log(detail[i]);
					outHtml += "<dd>" + detail[i].type + ":" + detail[i].money + "</dd>";
				}
			}
			outHtml += "</tr>";
		}
		outHtml += "</dl>";
		$("#output_area").html(outHtml);
	}
}); 