from django.conf.urls import patterns, include, url
from django.contrib import admin
from www.views.index import IndexView
from tastypie.api import Api
from www.api.resources import ContactResource

admin.autodiscover()

v1_api = Api(api_name='v1')
v1_api.register(ContactResource())

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'www.views.home', name='home'),
    # url(r'^www/', include('www.foo.urls')),
    (r'^grappelli/', include('grappelli.urls')),
    (r'^resources/(?P<path>.*)$', 'django.views.static.serve', {'document_root': 'public/resources'}),
    url(r'^admin/', include(admin.site.urls)),
    
    url(r'^$', IndexView.as_view(), name='index'),
    (r'^api/', include(v1_api.urls)),
)
