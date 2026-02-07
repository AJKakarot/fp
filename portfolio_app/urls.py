from django.urls import path
from .views import home_view, thanks_view

urlpatterns = [
    path('', home_view, name='home'),
    path('thanks/', thanks_view, name='thanks'),
]