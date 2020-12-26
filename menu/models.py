from django.db import models
from django.utils.translation import ugettext as _



class Menu(models.Model):
    #relations 
    parent_category = models.ForeignKey("menu.Menu", on_delete=models.CASCADE, related_name='parent_categories', blank=True, null=True)
    choices_category = models.ManyToManyField("menu.Menu", related_name='choices_categories', blank=True)

    #informatuons
    title = models.CharField(_("Title"), max_length=50)
    image = models.ImageField(_("Categroy image"), upload_to='category_images', blank=True, null=True)

    #moderations
    slug = models.SlugField(_("Slug"), blank=True, null=True)
    is_products = models.BooleanField(_("is porducts"), default=False)
    is_head = models.BooleanField(_("Is main"), default=False)
    is_new_season = models.BooleanField(_("New Season"), default=False)
    is_published = models.BooleanField(_("Published"), default=True)
    show_up = models.BooleanField(_("Show Up"), default=False)

    #moderations
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.title
        
