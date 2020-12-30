from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED

from product.api.serializers import (
    ProductSerializer,

)
from product.models import Product


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


@api_view(['POST'])
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