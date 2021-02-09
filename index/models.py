from django.db import models
from django.utils.translation import ugettext as _


class SaleAdvantage(models.Model):
    #informations
    title = models.CharField(_("Title"), max_length=50)
    icon = models.CharField(_("Icons Class"), max_length=50)

    #moderation's
    is_published = models.BooleanField(_("Published"), default=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True, null=True)

    class Meta:

        verbose_name = 'SaleAdvantage'
        verbose_name_plural = 'SaleAdvantages'

    def __str__(self):
        return self.title



class Compaign(models.Model):

    POSITION_CHOICES = (
        ('slider', 'slider'),
        ('second_section', 'second_section'),
        ('third_section', 'third_section'),
        ('baner', 'baner'),
        ('fourth', 'fourth'),
    )


    category = models.ForeignKey("menu.Menu", on_delete=models.CASCADE, related_name='compaigns', blank=True, null=True)
    position = models.CharField(_("position"), max_length=50, choices=POSITION_CHOICES)
    image = models.ImageField(_("image lg"), upload_to='compaigns_images', blank=True, null=True)
    sm_image = models.ImageField(_("Image sm"), upload_to='compaigns_images', blank=True, null=True)
    url = models.URLField(_("URL link"), max_length=200, blank=True, null=True)
    order = models.IntegerField(_("Order"), default=0)


    #moderation's
    is_published = models.BooleanField(_("Published"), default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    class Meta:
        verbose_name = 'Compaign'
        verbose_name_plural = 'Compaigns'

    def __str__(self):
        """Unicode representation of Slide."""
        return self.position

class Subscriber(models.Model):
    email = models.CharField(_('Email'), max_length=40, unique=True)

    #moderation's
    published_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        verbose_name = 'Subscriber'
        verbose_name_plural = 'Subscribers'

    def __str__(self):
        """Unicode representation of Slide."""
        return self.email
