#ここはjsonファイルに変換するファイルとなります。
from rest_framework import serializers
from rest_framework_serializer_extensions.serializers import SerializerExtensionsMixin #逆参照を使うためのパッケージ
from .models import Questions, Answers, Tags


class PostCreateSerializer(serializers.ModelSerializer):
    # tags=serializers.StringRelatedField(many=True)
    class Meta:
        model=Questions
        fields = ("id", "user", "title", "body", "status", "tags",)

# Answerの一覧表示
class AnswerListSerializer(serializers.ModelSerializer):
    class Meta:
        model=Answers
        fields = ("id", "user", "body", "created_at", "updated_at")

class AnswerCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model=Answers
        fields = ("id", "user", "body", "question")

class PostListSerializer(serializers.ModelSerializer):
    tags=serializers.StringRelatedField(many=True)
    created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%H")
    class Meta:
        model=Questions
        fields = ("id", "title", "created_at", "tags") 
    

class PostDetailSerializer(serializers.ModelSerializer):
    answers = serializers.SerializerMethodField()
    tags=serializers.StringRelatedField(many=True)
    created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%H")
    updated_at = serializers.DateTimeField(format="%Y-%m-%d %H:%H")
    class Meta:
        model=Questions
        fields = ("id", "user", "title", "body", "status", "tags", "created_at", "updated_at", "answers")
    def get_answers(self, obj):
        answers = Answers.objects.filter(question=obj)
        answer_bodies = answers.values_list("body", flat=True) 
        return list(answer_bodies)