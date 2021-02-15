from rest_framework import serializers
from product.models import (
    Product,
)
from menu.models import Menu

# class CategorySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Menu
#         fields = ('id', "title", 'parent_category')

#     def to_representation(self, obj):
#         if 'categories' not in self.fields:
#             self.fields['categories'] = CategorySerializer(obj, many=True)      
#         return super(CategorySerializer, self).to_representation(obj)

#     def to_internal_value(self, data):
#         try:
#             try:
#                 obj_id = data['id']
#                 return Category.objects.get(id=obj_id)
#             except KeyError:
#                 raise serializers.ValidationError(
#                     'id is a required field.'
#                 )
#             except ValueError:
#                 raise serializers.ValidationError(
#                     'id must be an integer.'
#                 )
#         except Category.DoesNotExist:
#             raise serializers.ValidationError(
#             'Obj does not exist.'
#             )


class ProductSerializer(serializers.ModelSerializer):
    product_images = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    product_details = serializers.StringRelatedField(many=True, read_only=True)
    
    class Meta:
        model = Product
        fields = (
            'id',
            'title',
            'price',
            'sales_count',
            'slug',
            'product_pattern',
            'color',
            'product_code',
            'has_size',
            'category',
            'rel_product',
            'product_images',
            'product_details',
        )

    def to_representation(self, instance):
        data = super(ProductSerializer, self).to_representation(instance)
        # manipulate data here 
        return data


class ProductCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = (
            'id',
            'title',
            'price',
            'sales_count',
            'product_pattern',
            'color',
            'product_code',
            'has_size',
            'category',
            'rel_product',
        )





