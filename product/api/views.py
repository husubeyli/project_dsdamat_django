from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED
from rest_framework.generics import ListAPIView
from product.api.serializers import (
    ProductSerializer,

)
from product.models import Product
from menu.models import Menu


@api_view(['GET'])
def all_product(request):
    products = Product.objects.filter(is_published=True)
    serializer = ProductSerializer(products, many=True, context = {'request' : request})
    return Response(data=serializer.data, status=HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_product(request, pk):
    products = Product.objects.get(id=pk)
    serializer = ProductSerializer(products, many=False, context = {'request' : request})
    return Response(data=serializer.data, status=HTTP_200_OK)


@api_view(['POST'])
def create_product(request):
    serializer = ProductSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    message = 'Succesfull update'
    serializer.save()
    return Response(serializer.data, message,  status=HTTP_201_CREATED)


@api_view(['PATCH'])
def update_product(request, pk):
    product = Product.objects.get(id=pk)
    serializer = ProductSerializer(instance=product, data=request.data, context={'request' : request})
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)


@api_view(['DELETE'])
def delete_product(request,pk):
    product = Product.objects.get(id=pk)
    product.delete()
    return Response('Product succsesfully delete!')


class SearchFilterProductsAPI(ListAPIView):
    serializer_class = ProductSerializer
    # permission_classes = [IsAdminUser]

    def get_queryset(self):
        """
        This view should return a list of all the purchases
        for the currently authenticated user.
        """
        menu = get_object_or_404(Menu, slug=self.kwargs['slug'])
        products = Product.objects.all().filter(is_published=True)
        colors=self.request.GET.getlist('color[]')
        categories=self.request.GET.getlist('category[]')
        sezon=self.request.GET.getlist('sezon[]')
        sizes=self.request.GET.getlist('size[]')
        fit=self.request.GET.getlist('fit[]')
        if categories:
            products = products.filter(category__id__in = categories).distinct()   
        if colors:
            products = products.filter(color_name__in = colors).distinct()  
        if sezon:
            products = products.filter(sezon__in = colors).distinct() 
        if sizes:
            products = products.filter(size__in = sizes).distinct()  
        if fit:
            products = products.filter(fit__in = sizes).distinct()
        print(categories,colors,sezon, products)
        # print(products,'[p')
        return products
