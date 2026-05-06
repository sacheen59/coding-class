from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.authtoken.models import Token

class CreateUserSerializer(serializers.ModelSerializer):
    password= serializers.CharField(write_only=True)
    token = serializers.CharField(read_only=True)

    class Meta:
        model = User
        fields = ['email','username','password','token']

    def validate(self, attrs):
        email = attrs.get('email')
        username = attrs.get('username')
        if User.objects.filter(username=username).exists():
            raise serializers.ValidationError({'message': 'User with this username already exists.'})
        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError({'message': 'User with this email already exists.'})
        return attrs

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data["username"],
            email=validated_data["email"],
            password=validated_data["password"]
        )
        token , _ = Token.objects.get_or_create(user=user)
        user.token = token.key
        return user