from django.contrib import admin
from django.urls import path
from core import views


urlpatterns = [       
    path('tareas/', views.ListaTareas.as_view(), name='tareas'),
    path('agtarea/', views.AgTareas.as_view(), name='agtarea'),
    path('editar_tarea/<int:tarea_id>/', views.EditarTareaClass.as_view(), name='editar_tarea'),
    path('eliminar_tarea/<int:tarea_id>/', views.EliminarTareaClass.as_view(), name='eliminar_tarea'),    
    ]
