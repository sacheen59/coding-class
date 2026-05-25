from django.urls import path
from api.views.auth import RegisterUserView,LoginUserView

urlpatterns = [
    path('register/',RegisterUserView.as_view()),
    path('login/',LoginUserView.as_view()),
]