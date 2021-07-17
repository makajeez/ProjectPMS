from django.db import models

# Create your models here.
class User(models.Model):
    UserId = models.AutoField(primary_key=True,auto_created=True)
    FirstName = models.CharField(max_length = 15)
    LastName = models.CharField(max_length = 15)
    # ProfileImg = models.FileField(default='default', upload_to='profilePics')
    Email = models.EmailField()
    Phone = models.IntegerField()
    RegistrationNo = models.CharField(max_length= 17)
    Password = models.CharField(max_length = 30)

    def __str__(self):
        return f"{self.FirstName + ' '+ self.LastName} Profile"
