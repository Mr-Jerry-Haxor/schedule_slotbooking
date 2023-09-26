from django.db import models

# Create your models here.

    

class Booking(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.EmailField(max_length=100)
    date = models.DateField()
    system = models.CharField(max_length=100)
    slot = models.IntegerField()
    is_accepted = models.BooleanField(default=False)
    accepted_by = models.CharField(max_length=500)
    
    
    
    