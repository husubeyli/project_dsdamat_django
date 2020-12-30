from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework.authtoken.models import Token
from django.contrib.auth.password_validation import validate_password

User = get_user_model()



class UserDetailSerializer(serializers.ModelSerializer):
    token = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = (
            'id',
            'first_name',
            'last_name',
            'email',
            'image',
            'phonenumber',
            'is_agreement',
            'is_notifaction_email',
            'is_notifaction_phone',
            'date_joined',
            'last_login',
            'token',
        )
    
    def get_token(self, user):
        token, created = Token.objects.get_or_create(user=user)
        return token.key


class CreateUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, validators=[validate_password,])

    class Meta:
        model = User
        fields = (
            'first_name',
            'last_name',
            'email',
            'password',
            'image',
            'phonenumber',
            'is_agreement',
            'is_notifaction_email',
            'is_notifaction_phone',
            'date_joined',
            'last_login',
        )

    def create(self, validate_data):
        user = super(CreateUserSerializer, self).create(validate_data)
        password = validate_data.get('password')
        user.set_password(password)
        user.save()
        return user


class UpdateUserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)

    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'phonenumber', 'is_agreement', 'is_notifaction_email', 'is_notifaction_phone')
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True},
        }

    # def validate_email(self, value):
    #     user = self.context['request'].user
    #     if User.objects.exclude(pk=user.pk).filter(email=value).exists():
    #         raise serializers.ValidationError({"email": "This email is already in use."})
    #     return value

    # def validate_username(self, value):
    #     user = self.context['request'].user
    #     if User.objects.exclude(pk=user.pk).filter(username=value).exists():
    #         raise serializers.ValidationError({"username": "This username is already in use."})
    #     return value

    def update(self, instance, validated_data):
        instance.first_name = validated_data['first_name']
        instance.last_name = validated_data['last_name']
        # instance.email = validated_data['email']
        # instance.username = validated_data['username']

        instance.save()

        return instance