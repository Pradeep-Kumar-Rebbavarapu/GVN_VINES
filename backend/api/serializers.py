from rest_framework import serializers
from django.contrib.auth.models import User

from .models import *
import datetime
from datetime import date
def getdate():
    today = date.today()
    day = today.day
    mydate = datetime.datetime.now()
    month = mydate.strftime("%B")
    year = today.year
    if day == 1 or day == 21 or day == 31:
        current_day = f"{day}st {month} {year}"
    else:
        current_day = f"{day}th {month} {year}"
    return current_day


def gettime():
    now = datetime.datetime.now()
    current_time = now.strftime("%H:%M:%S")
    if int(current_time[0:2]) > 12:
        current_time = str(
            (int(current_time[0:2])-12)) + current_time[2:] + ' pm'
    elif int(current_time[0:2]) == 12:
        current_time = str(current_time[0:2]) + current_time[2:] + ' pm'
    elif int(current_time[0:2]) == 24:
        current_time = str(
            (int(current_time[0:2])-12)) + current_time[2:] + ' am'
    else:
        current_time = str(current_time) + ' am'
    return current_time


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username','email','password')
    def create(self,data):
        user = User.objects.create(username=data.get('username'),password = data.get('password'),email = data.get('email'))
        user.set_password(data.get('password'))
        
        user.save()
        return user
    def validate(self,data):
        user_email = User.objects.filter(email=data.get('email')).exists()
        print(user_email)
        if user_email:
            raise serializers.ValidationError({'error':'User Already Exists with the given Email'})
        else:
            return data
            
        
class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = video
        fields = "__all__"

class VideoCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoComment
        fields = "__all__"

    def create(self, data):
        if data.get('parent'):
            MyComment = VideoComment.objects.create(user=data.get('user'),comment=data.get('comment'),Video=data.get('Video'),datestamp=getdate(),timestamp=gettime(),parent=data.get('parent'),parent_name=data.get('parent').user.username)
        else:
            MyComment = VideoComment.objects.create(user=data.get('user'),comment=data.get('comment'),Video=data.get('Video'),datestamp=getdate(),timestamp=gettime(),parent=data.get('parent'))
        print(data.get('user'))
        print(data)
        MyComment.save()
        return MyComment