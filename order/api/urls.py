from django.urls import path
from . import views


app_name = 'order_api'

urlpatterns = [
    path('order/', views.apiOverview, name="api-overview"),
    path('orderItem-list/', views.all_order_items, name="orderItem-list"),
    path('orderItem-detail/<str:pk>/', views.get_order_item, name="orderItem-detail"),
    path('orderItem-create/', views.create_order_item, name="orderItem-create"),
    path('orderItem-update/<str:pk>/', views.update_order_item, name="orderItem-update"),
    path('orderItem-patch/<str:pk>/', views.patch_order_item, name="orderItem-patch"),
    path('orderItem-delete/<str:pk>/', views.delete_order_item, name="orderItem-delete"),
]