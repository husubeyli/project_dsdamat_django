from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED
from rest_framework.generics import ListAPIView
from product.api.serializers import (
    ProductSerializer,
    ProductImageSerializer,
)
from product.models import Product, ProductImage
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
        products = Product.objects.filter(category = menu).filter(is_published=True)
        colors=self.request.GET.getlist('color[]')
        categories=self.request.GET.getlist('category[]')
        sizes=self.request.GET.getlist('size[]')
        if categories:
            products = products.filter(category__id__in = categories).distinct()   
        if colors:
            products = products.filter(color__in = colors).distinct()  
        if sizes:
            products = products.filter(sizes__all_size__size__in = sizes).distinct()  
        print(categories, products,sizes )
        return products


class ProductImageAPI(ListAPIView):
    serializer_class = ProductImageSerializer
    queryset = ProductImage.objects.all()