from django import template
from menu.models import Menu
from index.models import SaleAdvantage

register = template.Library()


@register.simple_tag()
def get_navbar_content():
    navbar = Menu.objects.order_by('created_at')
    return navbar

@register.simple_tag()
def get_sales_advantage():
    sales_advantage = SaleAdvantage.objects.order_by('created_at')
    return sales_advantage

