from django.urls import path
from api.views.language_views import LanguageView

urlpatterns = [
    path('list-create/',LanguageView.as_view())
]