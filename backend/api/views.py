from re import L
from django.shortcuts import render
from rest_framework.generics import *
from rest_framework.views import APIView
from .serializers import * 
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from .models import *
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
# Create your views here.
class Signup(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
class getUser(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        print(user)
        payload = {
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name
        }
        return Response({'status': "success", 'payload': payload})
class Login(APIView):
    def post(self,request):
        username = request.data['username']
        password = request.data['password']
        email = request.data['email']

        # checking for errors
        user = User.objects.filter(username=username).first()
        
        print(user)
        if user is None:
                    return Response({'error': 'invalid username or password'}, status=status.HTTP_404_NOT_FOUND)
        if not user.check_password(password):
                    return Response({'error': 'invalid username or password'},status=status.HTTP_404_NOT_FOUND)
        else:
            if email == user.email:
                    refresh = RefreshToken.for_user(user)
                    return Response({
                        'message': 'login successfull',
                        'refresh': str(refresh),
                        'access': str(refresh.access_token)},
                        status=status.HTTP_200_OK)
            else:
                return Response({'errors':'email not matched'},status=status.HTTP_404_NOT_FOUND)
class GetAllVideos(ListAPIView):
    queryset = video.objects.all()
    serializer_class = VideoSerializer
class UGD(RetrieveUpdateDestroyAPIView):
    queryset = video.objects.all()
    serializer_class = VideoSerializer

class PostComment(CreateAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = VideoComment.objects.all()
    serializer_class = VideoCommentSerializer
    

class GetComments(ListAPIView):
    serializer_class = VideoCommentSerializer
    def get_queryset(self,**kwargs):
        pk = self.kwargs['pk']
        print(pk)
        queryset = VideoComment.objects.filter(Video_id = pk)
        return queryset