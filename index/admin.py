from django.contrib import admin

from index.models import (
    SaleAdvantage,
    Compaign,
)

admin.site.register([
    SaleAdvantage,
    Compaign,
])
