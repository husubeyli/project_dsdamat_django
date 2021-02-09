from django.apps import AppConfig


class ProductConfig(AppConfig):
    name = 'product'
    verbose_name = 'Ürünler'

    def ready(self):
        import product.signals