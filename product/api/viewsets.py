# from rest_framework.viewsets import ModelViewSet
# from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
# from product.api.serializers import ProductSerializer, ProductCreateSerializer
#
#
# from product.models import Product
#
#
# class PoductViewSet(ModelViewSet):
#     serializer_class = ProductCreateSerializer
#     permission_classes = (IsAuthenticatedOrReadOnly, )
#     # queryset = Product.objects.filter(is_published=True)
#     serializer = {
#         'list': ProductSerializer,
#         'retrieve': ProductSerializer,
#         'partial_update': ProductCreateSerializer,
#         'delete': ProductCreateSerializer,
#         'create': ProductCreateSerializer,
#         'default': ProductCreateSerializer,
#     }
