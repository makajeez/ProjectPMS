from rest_framework import serializers
from User.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('UserId', 'FirstName', 'LastName', 'Email', 'Phone', 'RegistrationNo', 'Password')