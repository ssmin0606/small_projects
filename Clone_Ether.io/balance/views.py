from django.shortcuts import render, redirect, get_object_or_404
from .models import Vote, Comment
from .forms import VoteForm, CommentForm
from django.views.decorators.http import require_http_methods, require_safe, require_POST

def index(request):
    votes = Vote.objects.order_by('-pk')
    context = {
        'votes': votes,
    }
    return render(request, 'balance/index.html', context)

@require_http_methods(['GET', 'POST'])
def create(request):
    if request.method == 'POST':
        form = VoteForm(request.POST)
        if form.is_valid():
            vote = form.save()
            return redirect('balance:detail', vote.pk)
    else:
        form = VoteForm()
    context = {
        'form': form,
    }
    return render(request, 'balance/form.html', context)


@require_safe
def detail(request, pk):
    if request.method == 'GET':
        vote = Vote.objects.get(pk=pk)
        form = CommentForm()
        comments = vote.comment_set.all()
        # 전체 댓글(투표) 갯수
        cnt = len(comments)
        # A를 선택한 비율
        if cnt:
            percent_a = int((len(comments.filter(choice='A')) / cnt) * 100)
            print(percent_a)
            # B를 선택한 비율
            percent_b = 100 - percent_a
            print(percent_b)
        else:
            percent_a, percent_b = 50, 50
        context = {
            'vote': vote,
            'form': form,
            'comments': comments,
            'percent_a': percent_a,
            'percent_b': percent_b,
        }
        return render(request, 'balance/detail.html', context)

@require_POST
def comment_create(request, vote_pk):
    form = CommentForm(request.POST)
    if form.is_valid():
        comment = form.save(commit=False)
        comment.vote_id = vote_pk
        comment.save()
    return redirect('balance:detail', vote_pk)
    

def random(request):
    vote_pk = Vote.objects.order_by('?').first().pk
    return redirect('balance:detail', vote_pk)
    