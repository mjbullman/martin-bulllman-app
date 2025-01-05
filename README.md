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

[![deploy-frontend](https://github.com/mjbullman/martin-bulllman-app/actions/workflows/deploy-frontend.yml/badge.svg?branch=main)](https://github.com/mjbullman/martin-bulllman-app/actions/workflows/deploy-frontend.yml)
[![deploy-backend](https://github.com/mjbullman/martin-bulllman-app/actions/workflows/deploy-backend.yml/badge.svg)](https://github.com/mjbullman/martin-bulllman-app/actions/workflows/deploy-backend.yml)
[![codecov](https://codecov.io/gh/mjbullman/martin-bulllman-app/branch/main/graph/badge.svg)](https://codecov.io/gh/mjbullman/martin-bulllman-app)
[![Sponsor](https://img.shields.io/badge/sponsor-%E2%9D%A4-red?style=flat-square)](https://github.com/sponsors/mjbullman)


[![License](https://img.shields.io/github/license/mjbullman/martin-bulllman-app.svg)](https://github.com/mjbullman/martin-bulllman-app/blob/readme-updates/LICENSE.md)
![Version](https://img.shields.io/github/v/tag/mjbullman/martin-bulllman-app)
[![Last Commit](https://img.shields.io/github/last-commit/mjbullman/martin-bulllman-app)](https://github.com/mjbullman/martin-bulllman-app/commits/main)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/mjbullman/martin-bulllman-app)


[![Node](https://img.shields.io/badge/NodeJS-v20.10.0-brightgreen.svg)](https://nodejs.org/)
[![Vue](https://img.shields.io/badge/VueJS-v3.x-brightgreen.svg)](https://vuejs.org/)
[![Nuxt](https://img.shields.io/badge/Nuxt-v3.x-brightgreen.svg)](https://nuxt.com/)
[![Vuetify](https://img.shields.io/badge/Vuetify-v3.x-brightgreen.svg)](https://vuetifyjs.com/)
[![Django](https://img.shields.io/badge/Django-v5.x-brightgreen.svg)](https://www.djangoproject.com/)


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


## Key Features

- **Frontend:**
  - Developed using [Vue 3](https://vuejs.org/), [Nuxt 3](https://nuxt.com/), and [Vuetify 3](https://vuetifyjs.com/), offering a responsive and dynamic user interface.
  
- **Backend:**
  - Powered by [Django](https://www.djangoproject.com/), providing a robust backend with RESTful API endpoints for handling data and user interactions.

- **Deployment:**
  - The application is deployed using Docker and Docker Compose for simplified environment setup and scalability.

## Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js** (v20.10.0 or later)
- **NPM** (v10.2.3 or later)
- **Python** (v3.11.10 or later)
- **PIP** (v24.3.1  or later)
- **Docker** & **Docker Compose**

---

## Installation
You can set up the project manually or using Docker Compose for a containerized environment.

The application requires separate .env files for the frontend and backend. Follow the steps below to configure them:

### 1. Clone the Repository
```
git clone https://github.com/your-username/personal-web-app.git
cd personal-web-app
```

### 2. Frontend (`frontend/.env`):

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

### 3. Backend (`backend/martinbullman/.env`):

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

### Docker Compose Setup
You can run the docekr compose command to build the application. We need to pass the backend .env so comose has the correct values  

1. Build and Start the Containers:
```
docker-compose --env-file ./backend/martinbullman/.env up --build
```
The docker-compose.yml file will set up both the frontend and backend services.

2. Access the Application:
```
Frontend: http://localhost:3000
Backend: http://localhost:8000
```

3. Stopping and Removing Containers:
```
docker-compose down
```


### Manual Setup

#### 1. Frontend Setup

Navigate to the `frontend` directory:
```
cd frontend
```

Install dependencies:
```
npm install
```

Run development server:
```
npm run dev
```

Access App at:
```
http://localhost:3000
```

Run Nuxt build:
```
npm run build
```

Return to the project root directory:
```
cd ..
```

### 2. Backend Setup

Navigate to the `backend` directory:
```
cd backend
```

Create virtual environment and activate:
```
python -m venv venv
source venv/bin/activate
```

Install dependencies:
```
pip install -r martinbullman/requirements.txt
```

Run database migrations for the Django backend:
```
python3 martinbullman/manage.py migrate
```

Run development server:
```
python martinbullman/manage.py runserver 
```

Access API at:
```
http://localhost:8000/api/v1
```

Return to the project root directory:
```
cd ..
```

---

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

Run tests for the Django backend using **pytest**:

```
cd backend
pytest
```

```bash
cd frontend
npm run test
```

Run Lint

```bash
cd frontend
npm run lint
```

To check test coverage:

```bash
pytest --cov=.
```

---

## Docker Setup

### 1. Build Docker Images

```bash
docker-compose build
```

### 2. Start the Containers

```bash
docker-compose up
```

The application will be available at:

- **Frontend**: `http://localhost:3000`
- **Backend API**: `http://localhost:8000/api`

### 3. Stop the Containers

To stop and remove containers, networks, and volumes:

```bash
docker-compose down
```

---

## Deployment

- **Frontend**: Use static hosting platforms like Vercel or Netlify for Nuxt 3 apps.
- **Backend**: Deploy the Django application using services like AWS, Heroku, or DigitalOcean with a WSGI/ASGI server (e.g., Gunicorn).
- **Docker**: Use Docker containers for deployment in cloud services or Kubernetes environments.

---

## Contributing

Feel free to fork this repository, raise issues, or submit pull requests.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments


- [Vue.js](https://vuejs.org/)
- [Nuxt 3](https://nuxt.com/)
- [Vuetify](https://vuetifyjs.com/)
- [Django](https://www.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [Docker](https://www.docker.com/)
