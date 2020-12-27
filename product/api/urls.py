from django.urls import path

from product.api.views import (
    # product_list,
    # product_detail,
    allProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
)


app_name = 'product_apis'

urlpatterns = [
    path("products/", allProducts, name="products"),
    path("products/<int:pk>", getProduct, name="get_product"),
    path("products-create", createProduct, name="create_product"),
    path("products-update/<int:pk>", updateProduct, name="update_product"),
    path("products-delete/<int:pk>", deleteProduct, name="delete_product"),
]

    # path('products/', product_list),
    # path('products/<int:pk>/', product_detail),
    # path('products/published/', product_list_published),