# account/urls.py
from django.urls import path
from . import views
#ログインやログアウトの便利な機能を詰め込んでくれている
from django.contrib.auth import views as auth_views 

app_name = 'user'

urlpatterns = [
	path('login/', auth_views.LoginView.as_view(template_name='user/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='user/logout.html'), name='login'),
]