from django.urls import path
from index.views import (
    HomePageView,
    CompaignsShowView,
)


app_name = 'index'


urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
    path("compaigns/", CompaignsShowView.as_view(), name="compaigns")
]