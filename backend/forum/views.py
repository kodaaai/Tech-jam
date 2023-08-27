from rest_framework import generics
from rest_framework_serializer_extensions.views import SerializerExtensionsAPIViewMixin
from .serializers import PostListSerializer, PostDetailSerializer, PostCreateSerializer, AnswerListSerializer, AnswerCreateSerializer
from .models import Questions, Answers

# class QuestionViewSet(viewsets.ModelViewSet):
#     queryset=Questions.objects.all()
#     serializer_class=PostSerializer

#Questionsの一覧・詳細・作成・編集処理
class QuestionCreateView(generics.CreateAPIView):
    queryset=Questions.objects.all()
    serializer_class=PostCreateSerializer

class QuestionListView(generics.ListAPIView):
    queryset=Questions.objects.all()
    serializer_class=PostListSerializer 

class QuestionDetailView(generics.RetrieveAPIView):
    queryset=Questions.objects.all()
    serializer_class=PostDetailSerializer

class AnswerListView(generics.ListAPIView):
    queryset=Answers.objects.all()
    serializer_class = AnswerListSerializer

class AnswerCreateView(generics.CreateAPIView):
    queryset=Answers.objects.all()
    serializer_class = AnswerCreateSerializer