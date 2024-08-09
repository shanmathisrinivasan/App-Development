from django.urls import path
from .views import UserListCreate, UserDetail, user_list
from approj.views import home

urlpatterns = [
    path('users/', UserListCreate.as_view(), name='user-list-create'),
    path('users/<int:pk>/', UserDetail.as_view(), name='user-detail'),
    path('user_list/', user_list, name='user-list'),
    path('', home, name='home'), 
]
