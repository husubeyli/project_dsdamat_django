from django.urls import path, include
from index.views import (
    HomePageView,
    CompaignsShowView,
    dump_database_view,
)
from product.views import filter_data


app_name = 'index'


urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
    path("compaigns/", CompaignsShowView.as_view(), name="compaigns"),
    path('dump-database/', dump_database_view, name='dump_database_view'),
    path('api/v1.0/', include('index.api.urls')),
]