from modeltranslation.translator import TranslationOptions, register
from product.models import Product


@register(Product)
class ProductTranslation(TranslationOptions):
    fields = ('title', 'product_pattern', 'color')
