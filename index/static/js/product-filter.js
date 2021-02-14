console.log('salam');
$(document).ready(function(){
	$(".ajaxLoader").hide();
	$(".filter-item-checkbox").on('click',function(){
        console.log($(this));
		var _filterObj={};
		$(".filter-item-checkbox").each(function(index,ele){
			var _filterVal=$(this).val();
            // console.log(_filterVal);
			var _filterKey=$(this).data('filter');
            console.log();

			_filterObj[_filterKey]=Array.from(document.querySelectorAll('input[data-filter='+_filterKey+']:checked')).map(function(el){
			    return el.value;
			});
		});
        console.log(_filterObj, 'obyekt');

	document.querySelector('.filter-btn').addEventListener('click', ()=> {

			// Run Ajax
			$.ajax({
				url: "http://localhost:8000/api/v1.0/products/",
				data: _filterObj,
				dataType: 'json',
				beforeSend:function(){
					console.log('necesen');
					$(".ajaxLoader").show();
				},
				success:function(res){
					console.log(res);
					$("#filteredProducts").html(res.data);
					$(".ajaxLoader").hide();
				},
				error: function(res){
					console.log(res, 'error');
				}
			});
		})


	});

});

// let checked_data = document.querySelectorAll('.filter-item-checkbox')
// let url = 'http://localhost:8000/api/v1.0/products/'
// let checked_body = []

// sendRequest = (data) =>{
// 	// const csrftoken = Cookies.get('csrftoken');
//     fetch(url, {
//         method: "GET",
//         headers: {
//             "Content-type": "application/json",
// 			// 'X-CSRFToken': csrftoken,
//         },
//         body: JSON.stringify(data)
//     }).then(response => response.json())
//     .then(data => {
// 		console.log('success');
// 		console.log(data);
// 	})
// }

// document.querySelector('.filter-btn').addEventListener('click', ()=> {
// 	for (let i = 0; i < checked_data.length; i++){
// 		if (checked_data[i].checked) {
// 			// console.log(checked_data[i].value);
// 			checked_body.push({'title': checked_data[i].value})
// 			// console.log(checked_body);
			
// 		}
// 	}
// 	sendRequest(checked_body)
// })
