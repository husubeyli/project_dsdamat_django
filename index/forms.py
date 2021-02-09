from django import forms
from django.forms import EmailInput
from index.models import Subscriber


class SubscriberForm(forms.ModelForm):
    class Meta:
        model = Subscriber
        fields = (
            'email',
        )

    widgets = {
        'email': EmailInput(attrs={
            'class': 'valid',
            'placeholder': 'E-posta Adresinizi Girin',
        })
    }

# class RegisterCreateView(CreateView):
#     model = User
#     form_class = RegisterForm
#     template_name = "register.html"
#     success_url = reverse_lazy('account:login')
#
#     def form_valid(self, form):
#         user = form.save(commit=False)
#         user.is_active = False
#         user.save()
#         site_adres = self.request.is_secure() and "https://" or "http://" + self.request.META['HTTP_HOST']  # https://stackoverflow.com/
#         send_confirmation_email(user, site_adres)
#
#         return super().form_valid(form)
