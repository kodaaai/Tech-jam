# Generated by Django 4.2.4 on 2023-08-22 10:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('forum', '0004_alter_questions_tags'),
    ]

    operations = [
        migrations.RenameField(
            model_name='answers',
            old_name='questions',
            new_name='question',
        ),
    ]
