#ここはjsonファイルに変換するファイルとなります。
from rest_framework import serializers
from .models import Questions

class PostSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%H")

    class Meta:
        model=Questions
        fields = ("id", "user", "title", "body", "status", "tags", "created_at", "updated_at")