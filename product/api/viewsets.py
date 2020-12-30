from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from product.api.serializers import ProductSerializer, ProductCreateSerializer
from stories.models import Recipe



class PoductViewSet(ModelViewSet):
    serializer_class = ProductCreateSerializer