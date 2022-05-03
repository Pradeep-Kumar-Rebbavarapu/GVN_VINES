from django.contrib import admin
from .models import *
# Register your models here.
@admin.register(video)
class VideAdmin(admin.ModelAdmin):
    list_display = ['title']

admin.site.register(VideoComment)