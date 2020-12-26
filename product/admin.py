from django.contrib import admin

from .models import (
    ProductDetail,
    AllSize,
    Size,
    Product,
    ProducImage,
)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['title']
    ordering = ('created_at',)
    list_filter = ['title']

    fieldsets = (
        ('Relations', {
            'description': 'This group informations for relations',
            'fields': ('category', 'rel_product', )
        }),
        ('Informations', {
            'description': 'This group for informations',
            'fields': ('title', 'sales_count', 'product_pattern', 'color', 'product_code', 'has_size',)
        }),
        ('Discount price', {
            'description': 'This group for informations for discount price',
            'fields': ('disc_type', 'disc_value',)
        }),
        ('Moderations', {
            'description': 'This group for moderations',
            'fields': ('is_published',),
            'classes': ('collapse',)
        }),
    )


admin.site.register([
    ProductDetail,
    AllSize,
    Size,
    # Product,
    ProducImage,
    ])