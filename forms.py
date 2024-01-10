from django import forms
from .models import Tarea
from django.contrib.auth.models import User
 
class AgregarTarea(forms.ModelForm):
    class Meta:
        model = Tarea
        fields = ['title', 'description']
        
        
class EditarTarea(forms.ModelForm):
    class Meta:
        model = Tarea
        fields = ['title', 'description']
    

class FormLogin(forms.Form):
    username = forms.CharField(max_length=150)
    password = forms.CharField(max_length=200)
    

class UsuarioForm(forms.ModelForm):
    class Meta:
        model = User
        fields = [
            'username',
            'first_name',
            'last_name',
            'email', 
            'password'                 
        ]

    