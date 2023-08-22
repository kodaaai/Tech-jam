from django.contrib import admin
from . models import Tags, Questions, Answers
# Register your models here.

admin.site.register(Tags)
admin.site.register(Questions)
admin.site.register(Answers)
