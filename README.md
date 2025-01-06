<div align="center">
    <img alt="Logo" src="./frontend/public/img/icon.svg" width="100" style="margin-top: 50px" />
</div>

<h1 align="center" style="margin-top: 15px">
    Martin Bullman Portfolio Application <br>
</h1>

<h3 align="center" style="margin-top: -20px;">
    <a href="https://martinbullman.xyz">https://martinbullman.xyz</a>
</h3><br>

<div align="center" style="margin-top: 20px">

[![deploy-frontend](https://github.com/mjbullman/martin-bulllman-app/actions/workflows/deploy-frontend.yml/badge.svg?branch=main&color=blue)](https://github.com/mjbullman/martin-bulllman-app/actions/workflows/deploy-frontend.yml)
[![deploy-backend](https://github.com/mjbullman/martin-bulllman-app/actions/workflows/deploy-backend.yml/badge.svg?branch=main)](https://github.com/mjbullman/martin-bulllman-app/actions/workflows/deploy-backend.yml)
[![codecov](https://codecov.io/gh/mjbullman/martin-bulllman-app/branch/main/graph/badge.svg)](https://codecov.io/gh/mjbullman/martin-bulllman-app)
[![Sponsor](https://img.shields.io/badge/sponsor-%E2%9D%A4-red?style=flat-square)](https://github.com/sponsors/mjbullman)


[![License: CC BY 4.0](https://img.shields.io/badge/license-CC%20BY%204.0-blue.svg)](https://creativecommons.org/licenses/by/4.0/)
![Version](https://img.shields.io/github/v/release/mjbullman/martin-bulllman-app)
[![Last Commit](https://img.shields.io/github/last-commit/mjbullman/martin-bulllman-app?color=blue)](https://github.com/mjbullman/martin-bulllman-app/commits/main)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/mjbullman/martin-bulllman-app)
![Issues](https://img.shields.io/github/issues/mjbullman/martin-bulllman-app?color=blue)
![Pull Requests](https://img.shields.io/github/issues-pr/mjbullman/martin-bulllman-app?color=blue)


[![Vue](https://img.shields.io/badge/VueJS-v3.x-brightgreen.svg)](https://vuejs.org/)
[![Nuxt](https://img.shields.io/badge/Nuxt-v3.x-brightgreen.svg)](https://nuxt.com/)
[![Vuetify](https://img.shields.io/badge/Vuetify-v3.x-brightgreen.svg)](https://vuetifyjs.com/)
[![Django](https://img.shields.io/badge/Django-v5.x-brightgreen.svg)](https://www.djangoproject.com/)
[![Node](https://img.shields.io/badge/NodeJS-v20.x-brightgreen.svg)](https://nodejs.org/)
[![Python](https://img.shields.io/badge/Python-3.11.x-brightgreen.svg)](https://www.python.org/)
[![Pip](https://img.shields.io/badge/Pip-24.x-brightgreen.svg)](https://pypi.org/project/pip/)


[//]: # (![Tech Stack]&#40;https://img.shields.io/badge/Stack-Nuxt%203%20%2B%20Vuetify%203%20%2B%20Django%205-blueviolet?style=flat-square&#41;)
[//]: # (![Twitter]&#40;https://img.shields.io/twitter/follow/<username>?style=social&#41;)
[//]: # (![Stack]&#40;https://img.shields.io/badge/stack-React%20%2B%20Node.js%20%2B%20GraphQL-blue&#41;)
[//]: # (![PRs Welcome]&#40;https://img.shields.io/badge/PRs-welcome-brightgreen&#41;)

</div>

<div align="center">
    <img src="./frontend/public/img/projects/martinbullman_banner.gif" alt="Demo Banner" />
</div>

<h3 align="center">
    A modern portfolio application built with <b>Vue 3</b>, <b>Nuxt 3</b>, <b>Vuetify 3</b>,
    and <b>Django</b> to showcase cutting-edge web development practices. 🚀
</h3>

## Prerequisites
Before running the application, ensure you have the following installed:

- **Node.js** (v20.10.0 or later)
- **NPM** (v10.2.3 or later)
- **Python** (v3.11.10 or later)
- **PIP** (v24.3.1  or later)
- **Docker** & **Docker Compose**

## Installation
Set up the project using either Docker Compose for a seamless, containerized or manually to allow
more control for debugging and testing.


### 1. Clone the Repository
```
git clone https://github.com/your-username/personal-web-app.git
```

### 2. Environment Variables
The application requires separate .env files for both the frontend and backend to ensure proper
management of environment-specific configurations and sensitive data. 

#### Frontend (`frontend/.env`):
1. Navigate to the `frontend` directory:
```
cd frontend
```

2. Create a file named .env:
```
touch .env
```

3. Add the required environment variables:
```
BASE_URL=http://localhost:3000
API_BASE_URL=http://localhost:8000/api/v1

GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
GOOGLE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
``` 

4. Navigate back to root directory:
``` 
cd .. 
```

#### Backend (`backend/martinbullman/.env`):
1. Navigate to the `backend/martinbullman` directory:
```
cd backend/martinbullman
```

2. Create a file named .env:
```
touch .env
```

3. Add the required environment variables:
```
APP_NAME=MartinBullmanApp
APP_ENV=local
APP_DEBUG=True
APP_URL=http://localhost:8000
API_URL=http://localhost:8000/api/v1

SECRET_KEY=your_django_secret_key_here

# Database Configuration (choose one)
# Localhost
#DB_CONNECTION=postgres
#DB_HOST=127.0.0.1
#DB_PORT=5432
#DB_DATABASE=your_database_name_here
#DB_USERNAME=your_database_user_here
#DB_PASSWORD=your_database_password_here

# Docker
DB_CONNECTION=postgres
DB_HOST=db
DB_PORT=5432
DB_DATABASE=your_docker_database_name_here
DB_USERNAME=postgres
DB_PASSWORD=postgres

# Email Configuration
EMAIL_HOST=your_email_host_here
EMAIL_PORT=2525
EMAIL_USERNAME=your_email_username_here
EMAIL_PASSWORD=your_email_password_here
EMAIL_FROM_ADDRESS=info@yourdomain.com
EMAIL_FROM_NAME=Your Name or App Name

# MailJet API
MAILJET_API_KEY=your_mailjet_api_key_here
MAILJET_API_SECRET=your_mailjet_api_secret_here

# Spotify API
SPOTIFY_CLIENT_ID=your_spotify_client_id_here
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret_here
SPOTIFY_REFRESH_TOKEN=your_spotify_refresh_token_here

# Google reCAPTCHA
GOOGLE_RECAPTCHA_SCORE=0.5  # Recommended score threshold
GOOGLE_RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key_here

# API Keys
WEATHER_API_KEY=your_weather_api_key_here
NASA_API_KEY=your_nasa_api_key_here
SLACK_REFRESH_TOKEN=your_slack_refresh_token_here
OPENAI_API_KEY=your_openai_api_key_here
PAGE_SPEED_API_KEY=your_google_page_speed_api_key_here
```

4. Navigate back to root directory:
``` 
cd ../../ 
```

### 3. Application Setup
### Docker Compose
You can use the Docker Compose command to build and run the application seamlessly. The backend 
.env file should be passed as a parameter to ensure the services are correctly configured. The 
docker-compose.yml file orchestrates both the frontend and backend services, setting them up together
for a fully integrated development environment.

1. Build Docker containers:
```
docker-compose --env-file ./backend/martinbullman/.env build
``` 

2. Start Docker containers:
```
docker-compose --env-file ./backend/martinbullman/.env up
```

3. Stop Docker containers:
```
docker-compose down
```

4. Access the Application:
```
Frontend: http://localhost:3000
Backend: http://localhost:8000
```


### Manual Setup
Follow these instructions to manually set up and run the application without Docker. This approach 
allows you to configure and run the frontend and backend services independently for development and
debugging purposes.

#### Frontend Setup
1. Navigate to the `frontend` directory:
```
cd frontend
```

2. Install dependencies:
```
npm install
```

3. Run development server:
```
npm run dev
```

4. Access App at:
```
http://localhost:3000
```

5. Run Nuxt build:
```
npm run build
```

6. Return to the project root directory:
```
cd ..
```

#### Backend Setup
1. Navigate to the `backend` directory:
```
cd backend
```

2. Create virtual environment and activate:
```
python -m venv venv
source venv/bin/activate
```

3. Install dependencies:
```
pip install -r martinbullman/requirements.txt
```

4. Run database migrations for the Django backend:
```
python martinbullman/manage.py migrate
```

5. Run development server:
```
python martinbullman/manage.py runserver 
```

6. Access API at:
```
http://localhost:8000/api/v1
```

7. Return to the project root directory:
```
cd ..
```


## Testing
### Frontend
Run unit tests for the frontend using **Vitest**:

1. Navigate to the `frontend` directory:
```
cd frontend
```

2. Run tests:
```
npm run test
```

### Backend
Run unit tests for the backend using **Django**:

1. Navigate to the `backend/martinbullman` directory:
```
cd backend/martinbullman
```

2. Run tests:
```
python manage.py test
```


## Linting
### Frontend
Run linting for the frontend using **Eslint**:

1. Navigate to the `frontend` directory:
```
cd frontend
```

2. Run lint:
```
npm run lint
```

### Backend
Run linting for the backend using **Pylint**:

1. Navigate to the `backend` directory:
```
cd backend
```

2. Run lint:
```
pylint $(git ls-files '*.py') 
```


## Contributing

Feel free to fork this repository, raise issues, or submit pull requests. Contributions are welcome and encouraged under the terms of the project's license.

Please ensure that your contributions follow the project's coding standards and guidelines. After forking, clone your copy of the repository, create a branch for your work, and submit a pull request for review.

Make sure to include tests, if applicable, and provide a clear description of the changes you've made.

## License
This project is licensed under the Creative Commons Attribution 4.0 International
License. See the [LICENSE](LICENSE.md) file for details.
