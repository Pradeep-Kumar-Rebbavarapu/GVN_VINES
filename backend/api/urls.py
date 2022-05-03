from django.urls import path,include
from .views import *
urlpatterns = [
    path('Signup/',Signup.as_view()),
    path('Login/',Login.as_view()),
    path('GetAllVideos/',GetAllVideos.as_view()),
    path('UGD/<int:pk>/',UGD.as_view()),
    path('PostComment/',PostComment.as_view()),
    path('getuser/',getUser.as_view()),
    path('GetComments/<int:pk>/',GetComments.as_view()),
]