from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class User(AbstractBaseUser):
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=128)  # Increased length for hashed passwords
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15)
    age = models.IntegerField(null=True, blank=True)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'phone_number']

    def __str__(self):
        return self.username

    # Optionally, you may define additional methods for user management
