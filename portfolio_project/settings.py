import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

# No env vars required - works out of the box
SECRET_KEY = os.getenv('SECRET_KEY', 'portfolio-dev-key-safe-for-demo')
DEBUG = os.getenv('DEBUG', 'True').lower() == 'true'

ALLOWED_HOSTS = [
    'localhost',
    '127.0.0.1',
    '.vercel.app',
    '.onrender.com',
]
if DEBUG:
    ALLOWED_HOSTS.append('*')

INSTALLED_APPS = [
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "portfolio_app",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "portfolio_project.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.messages.context_processors.messages",
                "django.template.context_processors.media",
            ],
        },
    },
]

WSGI_APPLICATION = "portfolio_project.wsgi.application"

# SQLite only - no external DB needed. Projects are hardcoded in portfolio_app/projects_data.py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# File-based sessions (no DB writes) - works on Vercel's read-only filesystem using /tmp
SESSION_ENGINE = 'django.contrib.sessions.backends.file'
SESSION_FILE_PATH = '/tmp'  # Vercel allows writes to /tmp

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_TZ = True

STATIC_URL = "/static/"
STATIC_ROOT = BASE_DIR / 'staticfiles'
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# Use console backend when no email password - messages appear in logs
if os.getenv('EMAIL_HOST_PASSWORD'):
    EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
    EMAIL_HOST = 'smtp.gmail.com'
    EMAIL_PORT = 587
    EMAIL_USE_TLS = True
    EMAIL_HOST_USER = os.getenv('EMAIL_HOST_USER', 'dangerm249@gmail.com')
    EMAIL_HOST_PASSWORD = os.getenv('EMAIL_HOST_PASSWORD')
else:
    EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
DEFAULT_FROM_EMAIL = os.getenv('EMAIL_HOST_USER', 'noreply@localhost')