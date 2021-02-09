import time
from django.conf import settings
from celery import shared_task
from django.core.mail import EmailMessage
from django.template.loader import render_to_string

from index.models import (
    Subscriber,
)
from product.models import Product


@shared_task
def dump_database():
    print('Database dump olunmaga basladi')
    time.sleep(60)
    print('Database dump olundu')


@shared_task
def send_mail_to_subscribers():
    print('Send email notifaction start')
    subscriber_emails = Subscriber.objects.values_list('email', flat=True)
    products = Product.objects.all()

    context = {
        'site_adress': settings.SITE_ADDRESS,
        'products': products
    }

    html_message = render_to_string('email-subscribers.html', context)
    subject = 'News About our site'

    email = EmailMessage(subject=subject, body=html_message, from_email=settings.EMAIL_HOST_USER, to=subscriber_emails)
    email.content_subtype = 'html'
    email.send()
    print('Send email notifaction finished')



# background tasks
# concurrency(eyni vaxtda bir nece taski ise sala bilir)
# periodic tasks

