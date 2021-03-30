from django.urls import path
from . import views

app_name= 'balance'

urlpatterns = [
    path('', views.index, name='index'),
    path('create/', views.create, name='create'),
    path('<int:pk>/', views.detail, name='detail'),
    path('<int:vote_pk>/comment/', views.comment_create, name='comment_create'),
    path('random/', views.random, name='random'),
]
