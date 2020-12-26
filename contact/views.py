from django.shortcuts import render
from django.urls import reverse_lazy
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse
from contact.models import Contact
from django.views.generic.edit import (
    CreateView,
)
from contact.forms import ContactForm



class ContactCreateView(CreateView):
    model = Contact
    form_class = ContactForm
    template_name = "contact.html"
    success_url = reverse_lazy('index:home')

    # def form_valid(self, form):
    #     subject = "Website Inquiry"
    #     body = {
    #         'full_name': form.cleaned_data['full_name'], 
    #         'Email': form.cleaned_data['email'], 
    #         # 'Phone': form.cleaned_data['phonenumber'],  
    #         'Topic title': form.cleaned_data['theme_title'], 
    #         'message':form.cleaned_data['message']
    #     }

    #     message = '\n'.join(body.values())

    #     send_mail(subject, message, 'husubayli@gmail.com', ['husubayli@gmail.com']) 
            
    #     return super().form_valid(form)








