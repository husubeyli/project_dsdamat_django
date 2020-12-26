from django.db import models
from django.utils.translation import ugettext as _
from phonenumber_field.modelfields import PhoneNumberField



class Contact(models.Model):
    CATEGGORY_CHOICES = (
        (1, 'Online Alışveriş'),
        (2, 'Ürün Bilgisi'),
        (3, 'Sipariş & Ödeme İşlemleri'),
        (4, 'Öneri ve Şikayet'),
        (5, 'Teşekkür')
    )

    #informations
    full_name = models.CharField(_("Name and Surname"), max_length=80)
    email = models.EmailField(_("Email"), max_length=254)
    phonenumber = PhoneNumberField(_("Phone number"), blank=True, null=True)
    theme_title = models.IntegerField(_("Choices Category"), choices=CATEGGORY_CHOICES)
    message = models.TextField(_("Message"))

    #moderations
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        """Meta definition for Contact."""

        verbose_name = 'Contact'
        verbose_name_plural = 'Contacts'

    def __str__(self):
        """Unicode representation of Contact."""
        return self.full_name
