// var domain = 'http://localhost/'
let hiddenInput = document.getElementById("YOUR_ENV_VARIABLE");
let yourEnvVariableValue = hiddenInput.value;
var domain = yourEnvVariableValue
console.log(yourEnvVariableValue);
console.log('salam');
$(document).ready(function(){
	$(".ajaxLoader").hide();

		var _filterObj={};
		
		let category = $('#Category').data('category')
		console.log(category);
		$('.filter-btn').click(function(e) {

			e.preventDefault()
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

			console.log('clocekd');
			function test(id) {
				var image	
				$.ajax({
					url: `${domain}api/v1.0/images/`,
					// data: _filterObj,
					async: false,
					global: false,
					dataType: 'json',
					
					success:function(res){
						// console.log(res);
						for(j of res){
							// console.log(j.id);
							if (j.id == id ) {
								image = j.image
							}
						}
					},
					error: function(res){
						console.log(res, 'error');
					}

				})
				return image

			}
			// Run Ajax
			$.ajax({
				url: `${domain}api/v1.0/filter-api-data/${category}/`,
				data: _filterObj,
				dataType: 'json',
				beforeSend:function(){
					$(".ajaxLoader").show();
				},
				success:function(res){
					$('#colorCount').html(`${res.length} ürün`)
					console.log(res);
					let content =  $("#ListProductWrapper")
					let product_content = ''
					for (let item of res){
							var disc_value
							if (item.dics_value) {
								disc_value =  item.dics_value
							}
							product_content +=
							`
							<div class="col-6 col-sm-3  product-item mb-4">

							<div class="js-product-wrapper" data-sku="8682060800725" data-pk="77818"
								data-url="${item.slug}">
								<a href="${domain}tr/product/${item.slug}" class="d-flex flex-column h-100">
									<div class="position-relative product-image-wrapper">
										<img class="w-100 product-item__img"
											src="${test(item.product_images[0])}"
											alt="${item.title} | D'S Damat">
										<span
											class="product-item__discount-badge d-flex align-items-center">${item.disc_value ?  '%' +item.disc_value  : ''}
											
										</span>
	
	
										<div data-url="/users/login/?next=/erkek-giyim-modelleri/"
											class="js-product-item-favourite-guest product-item-favourite-elem"></div>
	
									</div>
									<div
										class="product-item__content d-flex flex-column justify-content-between text-sm-center">
										<div class="product-item__name color-primary"
											href="${domain}tr/product/${item.slug}">${item.title}</div>
										<div>
											<div class="product-item-price-wrapper">
	
												<div class="d-flex justify-content-sm-center align-items-center">
	
													<div
														class="${item.disc_value ? 'product-item__price--retail' : 'product-item__price--normal color-primary' } font-plain-medium">
														${ item.price }
													</div>
													<div
														class="product-item__price--normal color-primary font-plain-medium">
														${ item.disc_value ? (item.price - item.price*item.disc_value/100).toFixed(2)  : ''}
														</div>
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
					}
					content.html(product_content)
					// console.log(product_content);
					
				},
				error: function(res){
					console.log(res, 'error');
				}
			});
		})


});
