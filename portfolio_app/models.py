from django.db import models


class BeginnerProject(models.Model):
    images = models.ImageField(upload_to='projects/beginner/')
    urls = models.URLField(max_length=255, blank=True)
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=200)

    def __str__(self):
        return self.title


class IntermediateProject(models.Model):
    images = models.ImageField(upload_to='projects/intermediate/')
    urls = models.URLField(max_length=255, blank=True)
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=200)

    def __str__(self):
        return self.title


class AdvancedProject(models.Model):
    images = models.ImageField(upload_to='projects/advanced/')
    urls = models.URLField(max_length=255, blank=True)
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=200)

    def __str__(self):
        return self.title