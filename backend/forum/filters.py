from django_filters import rest_framework as filters
from .models import Questions

class QuestionFilter(filters.FilterSet):

    class Meta:
        model = Questions
        field= ("title", "body")