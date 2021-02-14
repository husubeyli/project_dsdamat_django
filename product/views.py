from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from django.template.loader import render_to_string
from django.http import JsonResponse

from django.views.generic import (
    ListView,
    DetailView,
)
from product.models import (
    Product,
    Size,
)
from menu.models import (
    Menu
)
from index.tasks import dump_database


class ProductsListView(ListView):
    model = Product
    template_name = "products.html"
    
    # for pagination

    def get_queryset(self):
        queryset = Product.objects.filter(is_published=True)
        return queryset

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # products = Product.objects.all()
        # for parent_product in products:
        #     pass
        #     # if parent_product.category in ['GİYİM', '']
        # context["parent_categroies"] = products
        # context["parent_sizes"] = products
        return context
    


class ProductsFilterListView(ListView):
    model = Product
    template_name = "products.html"


    def get_queryset(self):
        menu = get_object_or_404(Menu, slug=self.kwargs['menu'])
        queryset = Product.objects.filter(category=menu).filter(is_published=True)
        return queryset

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["category"] = get_object_or_404(Menu, slug=self.kwargs['menu'])
        return context


class ProductDetailView(DetailView):
    model = Product
    template_name = "product.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        product = Product.objects.get(slug=self.object.slug)
        size = self.request.GET.get('size')
        rel_products = Product.objects.filter(rel_product=product)

        related_prods_list = []
        related_prod_dict = {}

        if size:
            all_sizes = Size.objects.filter(all_size__size=size).filter(product__in=rel_products)

            for size_ in all_sizes:
                if size_.stock > 0:
                    related_prod_dict = {
                        'product': size_.product,
                        'stock': True
                    }
                else:
                    related_prod_dict = {
                        'product': size_.product,
                        'stock': False
                    }
                related_prods_list.append(related_prod_dict)
            context["related_products"] = related_prods_list
            context['size'] = size
        for parent in product.category.all():
            if parent.is_head:
                context['parent_category'] = parent
            else:
                context['sub_category'] = parent

        return context


# def set_language(request):
#     next = request.REQUEST.get('next', None)
#     if not next:
#         next = request.META.get('HTTP_REFERER', None)
#     if not next:
#         next = '/'
#     response = http.HttpResponseRedirect(next)
#     if request.method == 'GET':
#         lang_code = request.GET.get('language', None)
#         if lang_code and check_for_language(lang_code):
#             if hasattr(request, 'session'):
#                 request.session['django_language'] = lang_code
#             else:
#                 response.set_cookie(settings.LANGUAGE_COOKIE_NAME, lang_code)
#     return response




# Filter Data
def filter_data(request):
	colors=request.GET.getlist('color[]')
	categories=request.GET.getlist('category[]')
	# brands=request.GET.getlist('brand[]')
	# sizes=request.GET.getlist('size[]')
	allProducts=Product.objects.all().order_by('-id').distinct()
	if len(colors)>0:
		allProducts=allProducts.filter(productattribute__color__id__in=colors).distinct()
	if len(categories)>0:
		allProducts=allProducts.filter(category__id__in=categories).distinct()
	# if len(brands)>0:
	# 	allProducts=allProducts.filter(brand__id__in=brands).distinct()
	# if len(sizes)>0:
		# allProducts=allProducts.filter(productattribute__size__id__in=sizes).distinct()
	t=render_to_string('product-list.html',{'data':allProducts})
	return JsonResponse({'data':t})