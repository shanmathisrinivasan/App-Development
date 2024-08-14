from rest_framework import serializers
from .models import User
from django.contrib.auth.hashers import make_password

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email', 'phone_number', 'age']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        # Hash the password
        validated_data['password'] = make_password(validated_data['password'])
        
        # Create and return the User object
        user = User.objects.create(**validated_data)
        return user
