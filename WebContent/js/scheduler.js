$(document).ready(function() {
	
	getAllocatedSensors();
	var $post_new_sensor = $('#new_schedule');
	
	$('#submit_schedule').click(function(e) {
		e.preventDefault();
		
		var jsObj = $post_new_sensor.serializeObject()
			, ajaxObj = {};
		
		ajaxObj = {  
			type: "POST",
			url: Constants.getInstance().hostname + "/MobileSensorCloud/computeapi/scheduler/submitschedule", 
			data: JSON.stringify(jsObj), 
			contentType:"application/json",
			error: function(jqXHR, textStatus, errorThrown) {
				console.log("Error " + jqXHR.getAllResponseHeaders() + " " + errorThrown);
			},
			success: function(data) { 
				console.log(data[0].responseData);
					$('#div_ajaxResponse').text(data[0].responseData);
				
			},
			complete: function(XMLHttpRequest) {
			}, 
			dataType: "json"
		};
		
		$.ajax(ajaxObj);
	});

	
});
function getAllocatedSensors()
{
	var userid = sessionStorage.getItem('useridvalue');
	console.log(userid);
	var useridInput = document.getElementById('userid');
	useridInput.value = userid;
	ajaxObj = {
			type : "POST",
			url : Constants.getInstance().hostname + "/MobileSensorCloud/computeapi/scheduler/getAllocatedSensors",
			data: JSON.stringify(userid),
			contentType : "application/json",
			error : function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR.responseText);
			},
			success : function(data) {
				console.log(data);
				var locations = data.split(",");
				var selectlocations = document.getElementById('allocated_sensors');
				for(var i = 0; i < locations.length; i++) {
				    var opt = document.createElement('option');
				    opt.innerHTML = locations[i];
				    opt.value = locations[i];
				    selectlocations.appendChild(opt);
				}
			},
			complete : function(XMLHttpRequest) {
				// console.log( XMLHttpRequest.getAllResponseHeaders() );
			},
			dataType : "json" // request JSON
		};

		return $.ajax(ajaxObj);

}