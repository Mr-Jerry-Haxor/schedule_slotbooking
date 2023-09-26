# Generated by Django 4.2.5 on 2023-09-25 12:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Booking',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=200)),
                ('last_name', models.CharField(max_length=200)),
                ('email', models.EmailField(max_length=100)),
                ('date', models.DateField()),
                ('system', models.CharField(max_length=100)),
                ('slot', models.IntegerField()),
                ('is_accepted', models.BooleanField(default=False)),
                ('accepted_by', models.CharField(max_length=500)),
            ],
        ),
    ]
