import os
from pathlib import Path
from decouple import config, Csv

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = config('SECRET_KEY')
DEBUG = config('APP_DEBUG', default=False, cast=bool)

ALLOWED_HOSTS = [
    '127.0.0.1',
    'localhost',
    '52.31.195.51',
    'martinbullman.xyz',
    'www.martinbullman.xyz'
]

# Application definition.
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',
    'core',
    'spotify',
    'weather',
    'openai',
    'utils'
]

CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000',
    'https://martinbullman.xyz',
    'https://www.martinbullman.xyz'
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'martinbullman.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'martinbullman.wsgi.application'

# Database settings.
DATABASES = {
    'default': {
        'NAME'     : config('DB_DATABASE'),
        'USER'     : config('DB_USERNAME'),
        'HOST'     : config('DB_HOST'),
        'PORT'     : config('DB_PORT'),
        'ENGINE'   : 'django.db.backends.postgresql',
        'PASSWORD' : config('DB_PASSWORD')
    },
    'test': {
        'NAME': 'test_' + config('DB_DATABASE'),
    }
}

# Database settings GitHub actions.
if os.environ.get('GITHUB_WORKFLOW'):
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
        }
    }

# Email settings.
EMAIL_HOST          = config('EMAIL_HOST')
EMAIL_PORT          = config('EMAIL_PORT')
EMAIL_USE_TLS       = True
EMAIL_USE_SSL       = False
EMAIL_BACKEND       = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST_USER     = config('EMAIL_USERNAME')
EMAIL_HOST_PASSWORD = config('EMAIL_PASSWORD')

# Password validation.
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization.
LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images).
STATIC_ROOT = os.path.join(BASE_DIR,'staticfiles')
STATIC_URL = 'static/'

# Default primary key field type.
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

REST_FRAMEWORK = {
    'DEFAULT_THROTTLE_CLASSES': [
        'rest_framework.throttling.AnonRateThrottle',
        'rest_framework.throttling.UserRateThrottle'
    ],
    'DEFAULT_THROTTLE_RATES': {
        'anon': '100000/hour',
        'user': '100000/day'
    }
}

import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'detailed': {
            'format': '{asctime} {levelname} {name} {message}',
            'style': '{',
        },
    },
    'handlers': {
        'console': {
            'level': 'DEBUG',
            'class': 'logging.StreamHandler',
        },
        'file': {
            'level': 'ERROR',  # Capture only ERROR and CRITICAL logs
            'class': 'logging.FileHandler',
            'filename': os.path.join(BASE_DIR, 'logs/errors.log'),  # Specify the file where errors are logged
            'formatter': 'detailed',  # Use the detailed formatter
        },
    },
    'loggers': {
        'django': {
            'handlers': ['file'],
            'level': 'ERROR',  # Log only errors and critical issues
            'propagate': True,
        },
    },
}

