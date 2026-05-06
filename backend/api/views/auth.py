from rest_framework.generics import CreateAPIView
from api.serializers.auth_serializers import CreateUserSerializer
from django.contrib.auth.models import User

class RegisterUserView(CreateAPIView):
    serializer_class = CreateUserSerializer
    queryset = User.objects.all()