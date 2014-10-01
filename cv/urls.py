from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
     url(r'^$', 'cv.views.home', name='home'),
     url(r'^content/$', 'cv.views.content', name='content'),
     url(r'^kunnatta/$', 'cv.views.kunnatta', name='kunnatta'),
     url(r'^menntun/$', 'cv.views.menntun', name='menntun'),
     url(r'^reynsla/$', 'cv.views.reynsla', name='reynsla'),
     url(r'^annad/$', 'cv.views.annad', name='annad'),
     url(r'^medmaeli/$', 'cv.views.medmaeli', name='medmaeli'),
     url(r'^hlekkir/$', 'cv.views.hlekkir', name='hlekkir'),
    # url(r'^/', include('blog.urls')),

    #url(r'^admin/', include(admin.site.urls)),
)
