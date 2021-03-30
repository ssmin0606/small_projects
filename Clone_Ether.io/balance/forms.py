from django.forms import ModelForm
from .models import Vote, Comment


class VoteForm(ModelForm):
    
    class Meta:
        model = Vote
        fields = '__all__'


class CommentForm(ModelForm):
    class Meta:
        model = Comment
        fields = ('content', 'choice',)