from django.db import models
from django.utils.translation import ugettext as _



class ProducImage(models.Model):
    """Model definition for ProducImage."""
    #relations
    product = models.ForeignKey("product.Product", on_delete=models.CASCADE, related_name='product_images', blank=True, null=True)

    #informations
    image = models.ImageField(_("Image"), upload_to='product_images')

    #moderations
    is_published = models.BooleanField(_("Published"), default=True)
    created_at = models.DateTimeField(auto_now_add=True, )
    updated_at = models.DateTimeField(auto_now=True)



    class Meta:

        verbose_name = 'ProducImage'
        verbose_name_plural = 'ProductImages'

    def __str__(self):
        """Unicode representation of ProducImage."""
        return f'{self.product.title} - Color {self.product.color}'



class ProductDetail(models.Model):
    #relations
    product = models.ForeignKey("product.Product", on_delete=models.CASCADE, related_name='product_details', blank=True, null=True)

    #informations
    title = models.CharField(_("Title"), max_length=50, blank=True, null=True)
    content = models.CharField(_("Content"), max_length=50, blank=True)

    #moderations
    is_published = models.BooleanField(_("Published"), default=True)
    created_at = models.DateTimeField(auto_now_add=True, )
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:

        verbose_name = 'ProductDeatil'
        verbose_name_plural = 'ProductDeatils'

    def __str__(self):
        return f'{self.product.title} - {self.title}'


class AllSize(models.Model):
    title = 'geyim'
    size = models.CharField(_("Size"), max_length=50)


    class Meta:

        verbose_name = 'AllSize'
        verbose_name_plural = 'AllSizes'

    def __str__(self):
        return self.size


class Size(models.Model):
    #informtaions
    stock = models.IntegerField(_("Stock"))

    #relations
    all_size = models.ForeignKey("product.AllSize", on_delete=models.CASCADE, related_name='sizes', blank=True, null=True)
    product = models.ForeignKey("product.Product", on_delete=models.CASCADE,  related_name='sizes', blank=True, null=True)

    #moderations
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    class Meta:
        verbose_name = 'Size'
        verbose_name_plural = 'Sizes'

    def __str__(self):
        return f'{self.product.title} - {str(self.stock)} Count {self.all_size.size} Size'



class Product(models.Model):
    #relations
    category = models.ManyToManyField("menu.Menu", related_name='products')
    rel_product = models.ManyToManyField("product.Product", related_name='products', blank=True)

    #informatuons
    title = models.CharField(_("Title"), max_length=127)
    price = models.DecimalField(_("Price"), max_digits=5, decimal_places=2)
    sales_count = models.IntegerField(_("Sales Count"), blank=True, null=True)
    product_pattern = models.CharField(_("Pattern"), max_length=50, blank=True, null=True)
    color = models.CharField(_("Color"), max_length=50, blank=True, null=True)
    product_code = models.CharField(_("Prodcut code"), max_length=50)
    has_size = models.BooleanField(_("has_size"), default=True)

    #disocunts
    disc_type = models.CharField(_("Discount type"), max_length=50, blank=True, null=True)
    disc_value = models.IntegerField(_("Discount value"), blank=True, null=True)

    #moderations
    slug = models.SlugField(_("Slug"))
    is_published = models.BooleanField(_("Published"), default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'

    def __str__(self):
        return self.title

    def get_discount_price(self):
        if self.disc_type == 'faiz':
            return self.price - ((self.price * self.disc_value) / 100)
        else:
            return self.price - self.disc_value






