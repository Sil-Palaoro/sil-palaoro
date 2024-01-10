from rest_framework import serializers
from core.models import Tarea 
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout

class TareaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tarea
        fields = ['id', 'creation_date', 'description', 'title', 'completed', 'isEditing']
    
    def create(self, validated_data):
        user = self.context['request'].user  # Obtiene el usuario autenticado desde el contexto
        tarea = Tarea.objects.create(username=user, **validated_data)
        return tarea
        

class CustomJWTSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)  

    class Meta:
        model = User
        fields = fields = [
            'id',
            'username',
            'first_name',
            'last_name',
            'email', 
            'password'                 
        ]
        
    def create(self, validated_data):
        # Extrae la contraseña del campo y aplica el hashing
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)  # Aplica el hashing a la contraseña
        user.save()
        return user
    
       
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        username = data.get('username')
        password = data.get('password')

        if username and password:
            user = authenticate(request=self.context.get('request'), username=username, password=password)

            if not user:
                raise serializers.ValidationError("Nombre de usuario o contraseña incorrectos.")
        else:
            raise serializers.ValidationError("Debe proporcionar un nombre de usuario y contraseña.")

        data['user'] = user
        return data

