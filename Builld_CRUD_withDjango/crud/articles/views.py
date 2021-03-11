from django.shortcuts import render, redirect 
from .models import Articles


def index(request):
    articles = Articles.objects.all()
    context = {
      'articles' : articles,
    }
    return render(request, 'articles/index.html', context)

def create(request):
    return render(request, 'articles/new.html')

def save(request):
    if request.method == "POST":
      title = request.POST.get('title')
      content = request.POST.get('content')
      article = Articles(title=title, content=content)
      article.save()
    return redirect('articles:detail', article.pk)

    
def detail(request, article_pk):
    article = Articles.objects.get(pk=article_pk)
    context = {
      'article' : article,
    }
    return render(request, 'articles/detail.html', context)
    
def edit(request, article_pk):
    if request.method == "POST":
      article = Articles.objects.get(pk=article_pk)
      context = {
        'article' : article,
      }
    return render(request, 'articles/edit.html', context)

def delete(request, article_pk):
    if request.method == "POST":
      article = Articles.objects.get(pk=article_pk)
      article.delete()
    return redirect('articles:index')

def update(request, article_pk):
    if request.method == "POST":
      article = Articles.objects.get(pk=article_pk)
      title = request.POST.get('title')
      content = request.POST.get('content')
      article.title = title
      article.content = content
      article.save()
      return redirect('articles:detail', article.pk)