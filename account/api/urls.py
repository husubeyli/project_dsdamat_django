from django.urls import path

from account.api.views import (
    CustomAuthToken, 
    UserRegisterAPIView,
    UpdateProfileView,
)

urlpatterns = [
    path('login/', CustomAuthToken.as_view(), name='auth_login'),
    path('register/', UserRegisterAPIView.as_view(), name='auth_register'),
    path('update-profile/<int:pk>/', UpdateProfileView.as_view(), name='auth_update_profile'),
]