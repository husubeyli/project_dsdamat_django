from django.db import models
from django.utils.translation import ugettext as _


class Blog(models.Model):

    span = models.CharField(_("Span"), max_length=70)
    title = models.CharField(_("Title"), max_length=70)
    slug = models.SlugField(_("Slug"))
    image = models.ImageField(_("Image"), upload_to='blog_images')
    

    class Meta:
        verbose_name = _("Blog")
        verbose_name_plural = _("Blogs")

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("blog_detail", kwargs={"pk": self.pk})


