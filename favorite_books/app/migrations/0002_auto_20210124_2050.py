# Generated by Django 2.2.4 on 2021-01-25 04:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='books',
            name='description',
            field=models.CharField(max_length=255),
        ),
    ]