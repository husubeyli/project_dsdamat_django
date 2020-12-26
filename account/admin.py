from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as DjangoUserAdmin
from django.contrib.auth import get_user_model
from django.utils.translation import ugettext_lazy as _



User = get_user_model()

# from .models import User



class UserAdmin(DjangoUserAdmin):

    fieldsets = (
        # ('Relations', {
        #     'fields': ('category', 'tags', 'same_product', 'who_like'),
        # }),
        ('Informations', {
            'fields': (('first_name'), 'last_name', 'email',)
        }),
        ('Media', {
            'fields': (('image'),)
        }),
        ('Moderrations', {
            'fields': (('is_staff'), 'is_active', 'date_joined')
        }),
        ('Notifaction', {
            'fields': (('is_agreement'), 'is_notifaction_email', 'is_notifaction_phone', 'rewardpoints')
        })
    )


admin.site.register(User, UserAdmin)