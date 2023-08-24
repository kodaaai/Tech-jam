from django.urls import path
from . import views

urlpatterns=[
    path("post/", views.QuestionListView.as_view()),
    path("post/<str:pk>/", views.QuestionDetailView.as_view()),
    path("post/<str:pk>/new", views.AnswerListView.as_view()),
    path("post/new", views.QuestionCreateView.as_view())
]