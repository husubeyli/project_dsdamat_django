from django.views.decorators.csrf import csrf_exempt

from index.api.views import SubscriberView
from django.urls import path

app_name = 'index_apis'


subscriber_create = csrf_exempt(SubscriberView.as_view())

urlpatterns = [
    path('subscribe/', subscriber_create, name='subscribe_api'),
]