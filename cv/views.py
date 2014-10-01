
from django.shortcuts import render, render_to_response, RequestContext, redirect
def home(request):
    return render(request, 'home.html')

def content(request):
    return render(request, 'content.html')

def kunnatta(request):
    return render(request, 'kunnatta.html')

def menntun(request):
    return render(request, 'menntun.html')

def reynsla(request):
    return render(request, 'reynsla.html')

def annad(request):
    return render(request, 'annad.html')

def medmaeli(request):
    return render(request, 'medmaeli.html')

def hlekkir(request):
    return render(request, 'hlekkir.html')