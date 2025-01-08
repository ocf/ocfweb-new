from django.urls import path

from login.ocf import login

urlpatterns = [
    path('login/', login, name="login"),
]