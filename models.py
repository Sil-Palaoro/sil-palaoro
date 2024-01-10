from django.db import models
from django import forms 
from django.contrib.auth.models import User

class Tarea(models.Model):
    id = models.AutoField(primary_key=True)
    username= models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=255, null=True)
    creation_date = models.DateField(auto_now=True)   
    completed = models.BooleanField(default=False)
    isEditing = models.BooleanField(default=False)
        
    def task_completed(self):
        self.completed = not self.completed
        self.save()
   
    class Meta:
        ordering = ["id"]