from django.contrib import admin
from modeltranslation.admin import TranslationAdmin

from .models import (
    ProductDetail,
    AllSize,
    Size,
    Product,
    ProductImage,
)

class ProductDetailTabularInlineAdmin(admin.TabularInline):
    model = ProductDetail

class ProductImageTabularInlineAdmin(admin.TabularInline):
    model = ProductImage


class SizeTabularInlineAdmin(admin.TabularInline):
    model = Size


@admin.register(Product)
class ProductAdmin(TranslationAdmin):
    inlines = [ProductDetailTabularInlineAdmin, ProductImageTabularInlineAdmin, SizeTabularInlineAdmin, ]
    list_display = ['product_code', 'title', 'color', 'is_published']
    list_filter = ['title']
    ordering = ('created_at',)

    fieldsets = (
        # ('Relations', {
        #     'description': 'This group informations for relations',
        #     'fields': ('category', 'rel_product', )
        # }),
        ('Informations', {
            'description': 'This group for informations',
            'fields': ('title', 'price', 'sales_count', 'product_pattern', 'color', 'product_code', 'has_size',)
        }),
        ('Discount price', {
            'description': 'This group for informations for discount price',
            'fields': ('disc_type', 'disc_value',)
        }),
        ('Moderations', {
            'description': 'This group for moderations',
            'fields': ('is_published', 'category', 'rel_product'),
            'classes': ('collapse', )
        }),
    )


admin.site.register([
    ProductDetail,
    AllSize,
    Size,
    # Product,
    ProductImage,
    ])