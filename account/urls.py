from django.urls import path, include, re_path
from django.contrib.auth.views import LogoutView
from account.views import (
    CustomLoginView,
    logout,
    RegisterCreateView,
    UserActivate,
    CustomPasswordChangeView,
    PasswordChangeDone,
    CustomPasswordResetView,
    CustomPasswordResetDoneView,
    CustomPasswordResetCompleteView,
    CustomPasswordResetConfirmView
)


app_name = 'account'

urlpatterns = [
    path('register/', RegisterCreateView.as_view(), name='register'),
    path('login/', CustomLoginView.as_view(), name='login'),
    path('forget-password/', CustomPasswordResetView.as_view(), name='forget_ password'),
    re_path(r'^activate/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,32})/$',
        UserActivate.as_view(), name='activate'),
    path("logout/", LogoutView.as_view(), name="logout"),
    path("password-change/", CustomPasswordChangeView.as_view(), name="password_change"),
    path("password-reset-done/", PasswordChangeDone.as_view(), name="password_reset_done"),
    path("password-change-done/", CustomPasswordResetDoneView.as_view(), name="password_change_done"),
    path("password_reset_complete/", CustomPasswordResetCompleteView.as_view(), name="password_reset_complete"),
    re_path(r'password-reset-confirm/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,32})/$', CustomPasswordResetConfirmView.as_view(), name="password_reset_confirm"),

]
