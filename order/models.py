from django.db import models


# class CheckoutLine(models.Model):
#     #relations
#     product_variation = models.ForeignKey("ProductVariation", on_delete=models.CASCADE, related_name='checkout_lines')

#     #informations
#     price = models.DecimalField(_("Price"), max_digits=7, decimal_places=2)

#     #moderations
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)


#     class Meta:
#         verbose_name = 'CheckoutLine'
#         verbose_name_plural = 'CheckoutLines'

#     def __str__(self):
#         return self.price

        

# class Checkout(models.Model):
#     #relations
#     checkout_line = models.ForeignKey("CheckoutLine", on_delete=models.CASCADE, related_name='checkouts')
#     user = models.ForeignKey("account.User", on_delete=models.CASCADE, related_name='checkouts')
    
#     #moderations
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)


#     class Meta:
#         verbose_name = 'CheckoutLine'
#         verbose_name_plural = 'CheckoutLines'

#     def __str__(self):
#         return self.price

        
