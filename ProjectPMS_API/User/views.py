from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from User.models import User
from User.serializers import UserSerializer
# Create your views here.


@csrf_exempt
def UserApi(request, id=0):
    if request.method=='GET':
        users=User.objects.all()
        userSerializer=UserSerializer(users, many=True)
        return JsonResponse(userSerializer.data, safe=False)
    elif request.method=='POST':
        userData=JSONParser().parse(request)
        userSerializer=UserSerializer(data=userData)
        if userSerializer.is_valid():
            userSerializer.save()
            return JsonResponse('User Added Successfully', safe=False)
        return JsonResponse('User Not Added', safe=False)
    elif request.method=='DELETE':
        user=User.objects.get()
        user.delete(user)
        return JsonResponse('User Delete Successfully', safe=False)
