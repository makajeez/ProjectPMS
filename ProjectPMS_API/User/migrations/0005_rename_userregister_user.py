# Generated by Django 3.2 on 2021-07-17 09:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('User', '0004_rename_user_userregister'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='UserRegister',
            new_name='User',
        ),
    ]