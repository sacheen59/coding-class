from rest_framework.generics import CreateAPIView
from rest_framework.views import APIView
from api.serializers.auth_serializers import CreateUserSerializer, LoginSerializer
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status

class RegisterUserView(CreateAPIView):
    serializer_class = CreateUserSerializer
    queryset = User.objects.all()

class LoginUserView(APIView):
    serializer_class = LoginSerializer

    def post(self,request):
        serializers = self.serializer_class(data=request.data)
        serializers.is_valid(raise_exception=True)

        user = serializers.validated_data["user"]

        token,created = Token.objects.get_or_create(user=user)

        return Response(
            {
                "message": "Login Successfully",
                "token": token.key
            },
            status=status.HTTP_200_OK
        )