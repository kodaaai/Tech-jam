from rest_framework import generics
from .serializers import PostSerializer
from .models import Questions

#リストを表示することができる
class PostView(generics.ListAPIView):
    queryset=Questions.objects.all()
    serializer_class= PostSerializer

class PostDetailView(generics.RetrieveAPIView):
    queryset=Questions.objects.all()
    serializer_class=PostSerializer