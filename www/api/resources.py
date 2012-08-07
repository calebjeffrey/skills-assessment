from tastypie.resources import ModelResource
from www.contact.models import Contact


class ContactResource(ModelResource):
    class Meta:
        queryset = Contact.objects.all()
        allowed_methods = ['get']