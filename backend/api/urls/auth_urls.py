from django.urls import path
from api.views.auth import RegisterUserView

urlpatterns = [
    path('register/',RegisterUserView.as_view())
]