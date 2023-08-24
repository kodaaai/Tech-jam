from django.urls import path
from . import views

urlpatterns=[
    path("post/", views.QuestionListView.as_view(), name="post"),
    path("post/<str:pk>/", views.QuestionDetailView.as_view(), name="post-detail"),
    path("post/new/", views.QuestionCreateView.as_view(), name="post-create")
]