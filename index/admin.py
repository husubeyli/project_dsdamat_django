from django.contrib import admin

from index.models import (
    SaleAdvantage,
    Compaign,
    Subscriber
)

admin.site.register([
    SaleAdvantage,
    Compaign,
    Subscriber,
])
