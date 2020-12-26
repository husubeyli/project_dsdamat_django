from modeltranslation.translator import TranslationOptions, register
from product.models import Product


@register(Product)
class CarTranslation(TranslationOptions):
    fields = ('title', 'color')
