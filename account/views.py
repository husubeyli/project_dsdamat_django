from django.shortcuts import render, redirect
from django.contrib.auth import get_user_model
from django.contrib.auth.views import (LoginView, 
    PasswordChangeView, 
    PasswordChangeDoneView, 
    PasswordResetView, 
    PasswordResetDoneView,
    PasswordResetConfirmView,
    PasswordResetCompleteView,
)
from django.contrib.auth import authenticate, login as django_login
from django.utils.encoding import force_text
from django.utils.http import urlsafe_base64_decode
from django.urls import reverse_lazy
from account.tasks import send_confirmation_email
from django.contrib.messages import success, error

from account.forms import (
    RegisterForm,
    LoginForm,
    CustomPasswordChangeForm,
    CustomPasswordResetForm,
    CustomSetPasswordForm,
)
from django.views.generic import (
    CreateView,
    View,
    TemplateView, 
)

from account.tools.tokens import account_activation_token





User = get_user_model()


class RegisterCreateView(CreateView):
    model = User
    form_class = RegisterForm
    template_name = "register.html"
    success_url = reverse_lazy('account:login') 

    def form_valid(self, form):
        user = form.save(commit=False)
        user.is_active = False
        user.save()
        site_adres = self.request.is_secure() and "https://" or "http://" + self.request.META['HTTP_HOST']  # https://stackoverflow.com/
        send_confirmation_email(user, site_adres)

        return super().form_valid(form)


class UserActivate(View):

    def get(self, *args, **kwargs):
        uidb64 = kwargs.get('uidb64') 
        token = kwargs.get('token') 
        try:
            uid = force_text(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None

        if user is not None and account_activation_token.check_token(user, token):
            user.is_active = True
            user.save()
            success(self.request, 'Email is activeted')
            return redirect(reverse_lazy('account:login'))
        else:
            error(self.request, 'Email is not activeted')
            return redirect(reverse_lazy('account:register'))



class CustomLoginView(LoginView):
    form_class = LoginForm
    template_name = 'login.html'


class CustomPasswordChangeView(PasswordChangeView):
    form_class = CustomPasswordChangeForm
    template_name = 'change_password.html'
    success_url = reverse_lazy('account:password_change_done')


class PasswordChangeDone(PasswordChangeDoneView):
    template_name = "password_change_done.html"


class CustomPasswordResetView(PasswordResetView):
    form_class = CustomPasswordResetForm
    template_name = 'forget_password.html'
    email_template_name ='email/password_reset_email.html'
    success_url = reverse_lazy('account:password_reset_done')


class CustomPasswordResetDoneView(PasswordResetDoneView):
    template_name = 'password_reset_done.html'


class CustomPasswordResetConfirmView(PasswordResetConfirmView):
    template_name = 'reset_password.html'
    form_class = CustomSetPasswordForm
    success_url = reverse_lazy('account:password_reset_complete')


class CustomPasswordResetCompleteView(PasswordResetCompleteView):
    template_name = 'password_reset_completed.html'


# def login(request):
#     form = LoginForm()

#     if request.method == 'POST':
#         form = LoginForm(data=request.POST)
        
#         if form.is_valid():
#             user = authenticate(
#                 request,
#                 username=form.cleaned_data['email'],
#                 password=form.cleaned_data['password']
#             )
            
#             if user:
#                 django_login(request, user)
#                 success(request, f'Xoş geldiniz! {user.get_full_name()}')
#                 return redirect(reverse_lazy('index:home'))
#             else:
#                 print(request, 'salam')
#                 error(request, 'Istifadəçi və ya şifrə yalnışdır')

#     context = {
#         'form': form
#     }

#     return render(request, 'login.html', context)

def logout(request):
    pass
