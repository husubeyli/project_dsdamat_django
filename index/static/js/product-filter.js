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
        console.log(_filterObj);
		// Run Ajax

        
//GET request 
//     const getProductData = async (reverse) => {
//         try {
//             const usersApi = await fetch(`{% url 'product:filter_data' %}`, {
//                 method: 'GET',
//             });
//             let dataBase = await usersApi.json();
            
//             return dataBase

//         } catch (err) {

//             console.log(err)
//         } finally {
//             console.log('finnsh');
//         }

//     }

// getProductData()

		$.ajax({
			url: "http://localhost:8000/az/product/ajax/filter-data/",
			data: _filterObj,
			dataType:'json',
			beforeSend:function(){
                console.log('necesen');
				$(".ajaxLoader").show();
			},
			success:function(res){
                console.log('alaaa');
				console.log(res);
				$("#filteredProducts").html(res.data);
				$(".ajaxLoader").hide();
			},
            error: function(res){
                console.log(res, 'error');
            }
		});
	});
});