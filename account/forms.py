from django import forms
from django.db import models
from django.db.models import fields
from django.forms import widgets, TextInput, EmailInput, PasswordInput, CheckboxInput
from django.contrib.auth.forms import (
    UserCreationForm,
    AuthenticationForm,
    UsernameField,
    PasswordChangeForm,
    PasswordResetForm,
    SetPasswordForm,
)

from django.contrib.auth import get_user_model
from django.utils.translation import ugettext as _



User = get_user_model()


class RegisterForm(UserCreationForm):
    password1 = forms.CharField(required=True, widget=forms.PasswordInput(attrs={
        'name': "password",
        'class': "form-control js-password-input",
        'placeholder': "Şifre*"
    }))


    class Meta:

        model = User
        fields = [
            'email',
            'first_name',
            'last_name',
            'phonenumber',
            'is_agreement',
            'is_notifaction_email',
            'is_notifaction_phone'
        ]
        widgets = {
            'email':  EmailInput(
                attrs={
                    'name': 'email',
                    'class': 'form-control',
                    'placeholder': 'E-posta Adresi*'
                }
            ),
            'first_name': TextInput(
                attrs={
                    'name': "first_name",
                    'class': "form-control",
                    'placeholder': "İsim*",
                    'max_length': 50
                }
            ),
            'phonenumber' : TextInput(
                attrs={
                    'placeholder': 'Cep Telefonu Numaranız*',
                    'class': 'form-control js-phone-number', 
                    }),
            'last_name': TextInput(
                attrs={
                    'name': "last_name",
                    'class': "form-control",
                    'placeholder': "Soyisim**",
                    'max_length': 50
                }
            ),
            'is_agreement': CheckboxInput(
                attrs={
                    'name': 'confirm'
                }
            ),
            'is_notifaction_email': CheckboxInput(
                attrs={
                    'name': 'email_allowed'
                }
            ),
            'is_notifaction_phone': CheckboxInput(
                attrs={
                    'name': 'sms_allowed'
                }
            ),
        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        del self.fields['password2']


class LoginForm(AuthenticationForm):
    username = UsernameField(widget=forms.TextInput(attrs={
        'autofocus': True,
        'class': 'form-control',
        'placeholder': 'E-posta Adresi*',
        'name': 'email'
    }))
    password = forms.CharField(
        label=_("Password"),
        strip=False,
        widget=forms.PasswordInput(attrs={
            'autocomplete': 'current-password',
            'class': 'form-control',
            'name': 'password',
            'placeholder': 'Şifre*'
        }),
    )


class CustomPasswordChangeForm(PasswordChangeForm):
    old_password = forms.CharField(
        strip=False,
        widget=forms.PasswordInput(attrs={
            'class': 'input',
            'autocomplete': 'current-password', 
            'autofocus': True,
            'name': 'old_password',
            'placeholder': "Eski Şifre",
        }),
    )
    new_password1 = forms.CharField(
        strip=False,
        widget=forms.PasswordInput(attrs={
            'class': 'input',
            'autocomplete': 'current-password', 
            'placeholder': "Yeni Şifre",
            'name': "new_password1"
        }),
    )
    new_password2 = forms.CharField(
        strip=False,
        widget=forms.PasswordInput(attrs={
            'class': 'input',
            'autocomplete': 'current-password',
            'placeholder': "Yeni Şifre Tekrar",
            'name': "new_password2",
        }),
    )


class CustomPasswordResetForm(PasswordResetForm):
    email = forms.EmailField(
        max_length=254,
        widget=forms.EmailInput(attrs={
            'autocomplete': 'email',
            'class': "form-control",
            'placeholder': "E-posta Adresi*",
            'name': 'email',
            
        })
    )

    


class CustomSetPasswordForm(SetPasswordForm):
    new_password1 = forms.CharField(
        strip=False,
        widget=forms.PasswordInput(attrs={
            'class': 'input',
            'autocomplete': 'current-password', 
            'placeholder': "Yeni Şifre",
            'name': "new_password1"
        }),
    )
    new_password2 = forms.CharField(
        strip=False,
        widget=forms.PasswordInput(attrs={
            'class': 'input',
            'autocomplete': 'current-password',
            'placeholder': "Yeni Şifre Tekrar",
            'name': "new_password2",
        }),
    )







