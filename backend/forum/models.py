from django.db import models
from django_boost.models.mixins import LogicalDeletionMixin
from django.contrib.auth.models import User

# Create your models here.
"""基底モデルの定義"""
class BaseTimestampsModel(models.Model):
    created_at = models.DateTimeField("作成日時", auto_now_add=True)
    updated_at = models.DateTimeField("更新日時", auto_now=True)

    class Meta:
        abstract = True

class BaseModel(BaseTimestampsModel, LogicalDeletionMixin):
    class Meta:
        abstract = True


"""モデルの定義"""
class Tags(BaseModel):
    user= models.ManyToManyField(
        User,
        verbose_name='作成者',
    )
    name= models.CharField("タグ名", max_length= 20)

    class Meta:
        db_table="tags"
        verbose_name = "タグ"
        verbose_name_plural = "タグ"
    


class Questions(BaseModel):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, verbose_name="投稿者", null=True, blank=True)
    title = models.CharField("タイトル", max_length=50)
    body = models.TextField("質問内容", max_length=1000)
    status_choices=(
        (0, "未解決"),
        (1, "解決しました"),
    )
    status = models.PositiveSmallIntegerField("ステータス", choices=status_choices, default=0)
    tags= models.ManyToManyField(
         Tags,
         verbose_name='担当教員名',
     )

    class Meta:
        db_table="questions"
        verbose_name = "質問記事"
        verbose_name_plural = "質問記事"

class Answers(BaseModel):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, verbose_name="回答者", null=True, blank=True)
    questions = models.ForeignKey(Questions, verbose_name="質問記事", on_delete=models.SET_NULL, null=True, blank=True)
    body = models.TextField("コメント", max_length=1000)

    class Meta:
        db_table="answers"
        verbose_name = "回答コメント"
        verbose_name_plural = "回答コメント"


