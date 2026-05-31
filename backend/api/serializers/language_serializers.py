from rest_framework import serializers
from api.models import Language

class GetLanguageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Language
        fields = ["id","language_name","description"]


class CreateLanguageSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Language
        fields = ["language_name","description"]