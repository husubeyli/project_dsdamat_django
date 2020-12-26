from django import forms
from django.db import models
from django.db.models import fields
from django.forms import widgets

from contact.models import Contact


class ContactForm(forms.ModelForm):
    
    class Meta:
        model = Contact
        fields = [
            "full_name",
            "email",
            "phonenumber",
            "theme_title",
            "message",
        ]

        widgets = {
            'full_name': forms.TextInput(attrs={
                'class': 'input',
                'name': 'full_name',
                'placeholder': 'Ad Soyad*',
                # 'data-msg-required': "Bu alan zorunludur."
            }),
            'email': forms.EmailInput(attrs={
                'class': 'input',
                'name': 'email',
                'placeholder': 'Email *',
                # 'data-msg-required': "Bu alan zorunludur."
            }),
            'phonenumber': forms.TextInput(attrs={
                'class': 'input',
                'name': 'text',
                'placeholder': 'Telefon',
                # 'data-msg-required': "Bu alan zorunludur."
            }),
            'theme_title': forms.Select(attrs={
                'class': 'select custom-select select2-hidden-accessible',
                'name': 'subject',
            }),
            'message': forms.Textarea(attrs={
                'class': 'textarea',
                'name': 'subject',
                'placeholder': 'Mesaj *',
                'data-placeholder': "Konu Başlığı *"
            })

        }
