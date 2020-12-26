from django.db import models
from django.utils.translation import ugettext as _


class SaleAdvantage(models.Model):
    #informations
    title = models.CharField(_("Title"), max_length=50)
    icon = models.CharField(_("Icons Class"), max_length=50)

    #moderations
    is_published = models.BooleanField(_("Published"), default=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True, null=True)

    class Meta:

        verbose_name = 'SaleAdvantage'
        verbose_name_plural = 'SaleAdvantages'

    def __str__(self):
        return self.title


# class Slide(models.Model):

#     #relations
#     category = models.ManyToManyField("menu.Menu", related_name='slides', blank=True)
#     product = models.ManyToManyField(("product.Product"), related_name='slides', blank=True)

#     #informations
#     image = models.ImageField(_("Image"), upload_to='slide_images')

#     #moderations
#     slug = models.SlugField(_("Slug"))
#     is_published = models.BooleanField(_("Published"), default=True)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)


#     class Meta:
#         verbose_name = 'Slide'
#         verbose_name_plural = 'Slides'

#     def __str__(self):
#         """Unicode representation of Slide."""
#         return str(self.image)





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


    # RELATED_CHOICES = [
    #     ('prod', 'product'),
    #     ('cat', 'category'),
    #     ('url', 'url'),
    #     ('none', 'none'),
    # ]

    # #relations
    # category = models.ManyToManyField("menu.Menu", related_name='compaigns', blank=True)
    # product = models.ManyToManyField(("product.Product"), related_name='compaigns', blank=True)

    # #informations
    # title = models.CharField(_("compaign title"), max_length=50, blank=True, null=True)
    # pos_choice = models.CharField(_("positon choice"), max_length=50, choices=POSITION_CHOICES)
    # rel_choice = models.CharField(_("related choice"), max_length=50, choices=RELATED_CHOICES)
    # is_slide = models.BooleanField(_("Is Slide"), default=False)
    # url = models.URLField(_("url"), max_length=200, blank=True, null=True)
    # up_image = models.ImageField(_("Up image"), upload_to='compaigns_title', blank=True, null=True)
    # small_image = models.ImageField(_("Small image"), upload_to='compaigns_title', blank=True, null=True)
    # big_image = models.ImageField(_("Big image"), upload_to='compaigns_title', blank=True, null=True)
    # slug = models.SlugField(_("Slug"))


    #moderations
    is_published = models.BooleanField(_("Published"), default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    class Meta:
        verbose_name = 'Compaign'
        verbose_name_plural = 'Compaigns'

    def __str__(self):
        """Unicode representation of Slide."""
        return self.position




