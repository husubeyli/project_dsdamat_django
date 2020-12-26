from django.template.loader import render_to_string
from account.tools.tokens import account_activation_token
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode 
from django.core.mail import EmailMessage
from django.conf import settings


def send_confirmation_email(user, site_adress):

    context = {
        'site_adress': site_adress,
        'user': user,
        'uid': urlsafe_base64_encode(force_bytes(user.pk)),
        'token': account_activation_token.make_token(user),
    }

    html_message = render_to_string('email/account_activation_email.html', context)
    subject = 'Confirm you email adress'
    email = EmailMessage(subject=subject, body=html_message, from_email=settings.EMAIL_HOST_USER, to=[user.email])
    email.content_subtype = 'html'
    email.send()
    
