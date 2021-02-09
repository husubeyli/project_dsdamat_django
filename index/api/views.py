from django.utils.decorators import method_decorator
import json
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from django.views.generic import View
from rest_framework import status
from rest_framework.response import Response
from index.api.serializers import SubscriberSerializer
from django.http import JsonResponse



class SubscriberView(View):
    permission_classes = (AllowAny,)

    def post(self, request):
        mydata = json.loads(request.body)
        serializer = SubscriberSerializer(data=mydata)
        print(mydata)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)