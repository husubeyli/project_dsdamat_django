from social_django.middleware import SocialAuthExceptionMiddleware
from social_core import exceptions as social_exceptions     
from django.http import HttpResponse

class MySocialAuthExceptionMiddleware(SocialAuthExceptionMiddleware):
    def process_exception(self, request, exception):
        if hasattr(social_exceptions, exception.__class__.__name__):
            # Here you can handle the exception as you wish
            return HttpResponse("Exception %s while processing your social account." % exception)
        else:
            return super(MySocialAuthExceptionMiddleware, self).process_exception(request, exception)