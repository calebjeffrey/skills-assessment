from django.db import models


COLORS = (
          ('away','Away'),
          ('busy','Busy'),
          ('avail','Available'),
          )

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    phone = models.CharField(max_length=100, help_text='555.555.5555')
    address = models.TextField(max_length=200)
    color = models.CharField(max_length=8, choices=COLORS)
    def __unicode__(self):
        return self.name
