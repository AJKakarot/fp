from django.conf import settings
from django.db import models


class ProjectMixin:
    """Mixin providing image_url and project_url used by templates."""

    @property
    def image_url(self):
        if self.images:
            return self.images.url
        return f"{settings.STATIC_URL}head.jpg"

    @property
    def project_url(self):
        return self.urls or "#"


class BeginnerProject(ProjectMixin, models.Model):
    images = models.ImageField(upload_to='projects/beginner/')
    urls = models.URLField(max_length=255, blank=True)
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=200)

    def __str__(self):
        return self.title


class IntermediateProject(ProjectMixin, models.Model):
    images = models.ImageField(upload_to='projects/intermediate/')
    urls = models.URLField(max_length=255, blank=True)
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=200)

    def __str__(self):
        return self.title


class AdvancedProject(ProjectMixin, models.Model):
    images = models.ImageField(upload_to='projects/advanced/')
    urls = models.URLField(max_length=255, blank=True)
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=200)

    def __str__(self):
        return self.title