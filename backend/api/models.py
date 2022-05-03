from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Contact(models.Model):
    email = models.EmailField(default=None,blank=True,null=True)
    desc = models.TextField(default=None,blank=True,null=True)

def upload(instance,filename):
    return f'{instance.title}_{filename}'
class video(models.Model):
    image = models.ImageField(default=None,upload_to=upload)
    url = models.URLField(default=None)
    title = models.CharField(max_length=225,default=None,null=True,blank=True)
class VideoComment(models.Model):
    sno = models.AutoField(primary_key=True)
    comment =  models.TextField(default=None)
    user = models.ForeignKey(User,to_field='username',on_delete=models.CASCADE,default=None,null=True,blank=True)
    Video = models.ForeignKey(video,on_delete=models.CASCADE)
    parent = models.ForeignKey('self',on_delete=models.CASCADE,null=True)
    parent_name = models.CharField(max_length=225,null=True,blank=True,default=None)
    datestamp = models.CharField(max_length=225, default=None,null=True)
    timestamp = models.CharField(max_length=225, default=None,null=True)