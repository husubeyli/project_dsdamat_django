from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic import (
    TemplateView,
    CreateView,
    View
)

from index.tasks import dump_database
from menu.models import (
    Menu,
)
from index.models import (
    Compaign,
    Subscriber,
)
from index.forms import SubscriberForm


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


class SubscriberCreateView(CreateView):
    # model = Subscriber
    form_class = SubscriberForm
    template_name = 'base.html'

    def form_valid(self, form):
        subscriber = form.save(commit=False)
        subscriber.save()

        return super().form_valid(form)


def dump_database_view(request):
    dump_database.delay()
    return HttpResponse("Database dump olundu")
