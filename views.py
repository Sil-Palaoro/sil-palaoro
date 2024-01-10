from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse, HttpRequest
from django.views import View
from core.models import Tarea
from .forms import AgregarTarea, FormLogin, UsuarioForm, EditarTarea
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.hashers import check_password
from django.contrib.auth.decorators import login_required, permission_required
from django.utils.decorators import method_decorator
from django.contrib.auth.mixins import LoginRequiredMixin, PermissionRequiredMixin
from django.contrib import messages
from rest_framework.views import APIView
from rest_framework.response import Response
from core.serializers import TareaSerializer, UserSerializer, LoginSerializer
from rest_framework import status
from django.http import Http404
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets, permissions
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.decorators import action
from rest_framework_simplejwt.tokens import Token, RefreshToken



#ViewSet para el usuario
class UserViewSet(viewsets.ModelViewSet):    
    serializer_class = UserSerializer  
    queryset = User.objects.all()

    @action(detail=False, methods=['post'])
    def registro(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            id = serializer.validated_data['id']
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']
            first_name = serializer.validated_data['first_name']
            last_name = serializer.validated_data['last_name']
            email = serializer.validated_data['email']

            # Crea un nuevo usuario
            user = User.objects.create_user(
                id=id,
                username=username,
                password=password,
                first_name=first_name,
                last_name=last_name,
                email=email
            )

            return Response({'message': 'Usuario registrado con éxito'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#ViewSet para el inicio de sesión
class InicioSesionViewSet(viewsets.ViewSet):    
    @action(detail=False, methods=['post'])
    def iniciar_sesion(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            
            # Genera el token JWT
            access_token = str(Token.for_user(user).access)
            refresh_token = str(RefreshToken.for_user(user))
            
            print(f"Token JWT recibido: {access_token}")


            # Devuelve el token JWT en la respuesta
            return Response({'access_token': access_token, 'refresh_token': refresh_token,'message': 'Inicio de sesión exitoso'}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'Nombre de usuario o contraseña incorrectos'}, status=status.HTTP_401_UNAUTHORIZED)

        
#ViewSet para las tareas
class TaskViewSet(viewsets.ModelViewSet):        
    serializer_class = TareaSerializer
    authentication_classes = [BasicAuthentication, JWTAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = Tarea.objects.all()

            
    def get_queryset(self):
        print(self.request.user)  

        # Filtrar las tareas por el usuario autenticado
        return Tarea.objects.filter(username=self.request.user)
    
    
    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)


    @action(detail=True, methods=['POST', 'GET'])
    def task_completed(self, request, pk=None):
        tarea = self.get_object()
        tarea.task_completed()
        serializer = self.get_serializer(tarea)
        return Response(serializer.data, status=status.HTTP_200_OK)
