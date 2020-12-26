from django.db.models.signals import pre_save
from django.conf import settings
from django.dispatch import receiver
from django.utils.timezone import now
from django.core.mail import send_mail
from contact.models import Contact


@receiver(pre_save, sender=Contact)
def create_recipe(sender,  instance, **kwargs):
    message = instance.message
    email = instance.email
    full_name = instance.full_name
    phone = instance.phonenumber
    topic_title = instance.theme_title

    users_data = f'''
        Full name: {full_name} \n
        Email: {email} \n 
        Phone: {phone} \n 
        Topic title: {topic_title} \n
        Message: {message} \n
    '''
    print(users_data)
    subject = "Updates"
    your_email = 'husubeyli@gmail.com'
    send_mail(subject, users_data, settings.EMAIL_HOST_USER, ['husubeyli@gmail.com'])





    # fieldsets = (
    #     # ('Relations', {
    #     #     'fields': ('category', 'tags', 'same_product', 'who_like'),
    #     # }),
    #     ('Informations', {
    #         _('fields'): ('first_name', 'last_name', 'email')
    #     }),
    #     ('Media', {
    #         _('fields'): ('image',)
    #     }),
    #     ('Moderrations', {
    #         _('fields'): ('is_staff', 'is_active', 'date_joined')
    #     }),
    #     ('Notifaction', {
    #         _('fields'): ('is_agreement', 'is_notifaction_email', 'is_notifaction_phone', 'rewardpoints')
    #     })
    # )