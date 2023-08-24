from rest_framework import generics
from .serializers import PostSerializer
from .models import Questions

#Questionsの一覧・詳細・作成・編集処理
class QuestionCreateView(generics.CreateAPIView):
    queryset=Questions.objects.all()
    serializer_class=PostSerializer

class QuestionListView(generics.ListAPIView):
    queryset=Questions.objects.all()
    serializer_class= PostSerializer

class QuestionDetailView(generics.RetrieveAPIView):
    queryset=Questions.objects.all()
    serializer_class=PostSerializer