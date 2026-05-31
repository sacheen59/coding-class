
from rest_framework.generics import ListCreateAPIView
from api.serializers.language_serializers import GetLanguageSerializer,CreateLanguageSerializer
from api.models import Language

class LanguageView(ListCreateAPIView):
    queryset = Language.objects.all()

    def get_serializer_class(self):
        if self.request.method == "GET":
            return GetLanguageSerializer
        return CreateLanguageSerializer