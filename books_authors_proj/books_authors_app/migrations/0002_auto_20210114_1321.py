# Generated by Django 2.2.4 on 2021-01-14 21:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books_authors_app', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Book',
            new_name='Books',
        ),
        migrations.AddField(
            model_name='authors',
            name='books',
            field=models.ManyToManyField(related_name='author', to='books_authors_app.Books'),
        ),
    ]
