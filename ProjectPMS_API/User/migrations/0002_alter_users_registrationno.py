# Generated by Django 3.2 on 2021-07-14 23:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('User', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='users',
            name='RegistrationNo',
            field=models.CharField(max_length=17),
        ),
    ]