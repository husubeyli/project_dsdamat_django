
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
		let category = $('#Category').data('category')
		console.log(category);
	document.querySelector('.filter-btn').addEventListener('click', (e)=> {
		e.preventDefault()

			// Run Ajax
			$.ajax({
				url: `http://localhost:8000/api/v1.0/filter-api-data/${category}/`,
				data: _filterObj,
				dataType: 'json',
				beforeSend:function(){
					$(".ajaxLoader").show();
				},
				success:function(res){
					console.log(res);
					let content =  $("#ListProductWrapper")
					console.log(content);
					let product_content = ''
					for (let item of res){
						// console.log(res[i].category[1]);
							console.log('salam');
							// $("#ListProductWrapper").html('')

							product_content +=
							`
							<div class="col-6 col-sm-3  product-item mb-4">

							<div class="js-product-wrapper" data-sku="8682060800725" data-pk="77818"
								data-url="${item.slug}">
								<a href=" ${item.slug} class="d-flex flex-column h-100">
									<div class="position-relative product-image-wrapper">
										<img class="w-100 product-item__img"
											src="{{ product.product_images.all.0.image.url }}"
											alt="${item.title} | D'S Damat">
										{% if ${item.disc_type} == 'faiz' %}
										<span
											class="product-item__discount-badge d-flex align-items-center">${item.disc_value}
											% ${item.disc_value} {% endif %}
										</span>
										{% endif %}
	
	
										<div data-url="/users/login/?next=/erkek-giyim-modelleri/"
											class="js-product-item-favourite-guest product-item-favourite-elem"></div>
	
									</div>
									<div
										class="product-item__content d-flex flex-column justify-content-between text-sm-center">
										<div class="product-item__name color-primary"
											href="{% url 'product:product_detail' product.slug %}">${item.title}</div>
										<div>
											<div class="product-item-price-wrapper">
	
												<div class="d-flex justify-content-sm-center align-items-center">
	
													<div
														class="{% if ${item.disc_value} %} product-item__price--retail {% else %} product-item__price--normal color-primary {% endif %} font-plain-medium">
														{{ product.price }}</div>
													{% if product.disc_value %}
													<div
														class="product-item__price--normal color-primary font-plain-medium">
														{{ product.get_discount_price }}</div>
													{% endif %}
												</div>
	
											</div>
											<div class="product-item__basket-offers">
	
											</div>
										</div>
									</div>
								</a>
							</div>
						</div>
							`
							$(".ajaxLoader").hide();
					}
					content.html(product_content)
					console.log(product_content);
					
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
