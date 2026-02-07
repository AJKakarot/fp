from django.contrib import admin
from .models import BeginnerProject, IntermediateProject , AdvancedProject

admin.site.register(BeginnerProject)
admin.site.register(IntermediateProject)
admin.site.register(AdvancedProject)