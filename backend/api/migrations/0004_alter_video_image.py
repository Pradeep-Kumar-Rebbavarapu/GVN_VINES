# Generated by Django 4.0.4 on 2022-05-02 16:59

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_video_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='video',
            name='image',
            field=models.ImageField(default=None, upload_to=api.models.upload),
        ),
    ]
