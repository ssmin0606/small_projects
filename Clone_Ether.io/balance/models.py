from django.db import models

# Create your models here.
class Vote(models.Model):
    title = models.CharField(max_length=100)
    content_a = models.CharField(max_length=200)
    content_b = models.CharField(max_length=200)


class Comment(models.Model):
    vote = models.ForeignKey(Vote, on_delete=models.CASCADE)
    content = models.CharField(max_length=200)
    CHOICES = (
        ('A' , 'A'),
        ('B', 'B'),
    )
    choice = models.CharField(max_length=2, choices=CHOICES)