from django.urls import path

from product.api.views import (
    # product_list,
    # product_detail,
    all_product,
    get_product,
    create_product,
    update_product,
    delete_product,
    SearchFilterProductsAPI
)


app_name = 'product_apis'

urlpatterns = [
    path("products/", all_product, name="products"),
    path("products/<int:pk>", get_product, name="get_product"),
    path("products-create", create_product, name="create_product"),
    path("products-update/<int:pk>", update_product, name="update_product"),
    path("products-delete/<int:pk>", delete_product, name="delete_product"),
    path("filter-api-data/<slug:slug>/", SearchFilterProductsAPI.as_view(), name="search_api_filter")
    
]

    # path('products/', product_list),
    # path('products/<int:pk>/', product_detail),
    # path('products/published/', product_list_published),