from django.db.models.signals import pre_save
from django.utils.timezone import now
from django.dispatch import receiver
from product.models import Product
from slugify import slugify


@receiver(pre_save, sender=Product)
def create_product(sender, instance, **kwargs):
    instance.slug = slugify(instance.title+str(now().strftime('-%Y-%m-%d-%H-%M-%S')))