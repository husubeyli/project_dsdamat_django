from django.shortcuts import render
from django.views.generic import (
    TemplateView,
)
from menu.models import (
    Menu,
)
from index.models import (
    Compaign
)
# Create your views here.

class HomePageView(TemplateView):
    template_name = "index.html"


    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["up_categories"] = Menu.objects.filter(show_up=True)
        context["slider_contents"] = Compaign.objects.filter(position='slider').order_by('order')
        context["second_contents"] = Compaign.objects.filter(position='second_section').order_by('order')
        context["third_contents"] = Compaign.objects.filter(position='third_section').order_by('order')
        context["banner"] = Compaign.objects.filter(position='baner')
        context["fourth_contents"] = Compaign.objects.filter(position='fourth')

        return context


class CompaignsShowView(TemplateView):
    template_name = 'compaigns.html'

