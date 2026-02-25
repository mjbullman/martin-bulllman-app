# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio application for Martin Bullman, built with a **Nuxt 3/Vue 3/Vuetify 3** frontend and a **Django 5** REST API backend. The application integrates with multiple third-party APIs (Spotify, Weather, OpenAI, etc.) to showcase interactive features.

Live site: https://martinbullman.xyz

## Claude Workflow Rules

**CRITICAL: Follow these rules for every task in this repository:**

1. **Plan First**: Think through the problem, read relevant files in the codebase, and write a detailed plan to `tasks/todo.md`

2. **Create Checklist**: The plan should have a list of todo items that can be checked off as you complete them

3. **Get Approval**: Before beginning work, check in with the user to verify the plan is correct

4. **Track Progress**: Work through todo items systematically, marking them as complete as you go

5. **High-Level Updates**: At every step, provide high-level explanations of changes made (not verbose detail)

6. **Simplicity is Key**: Make every task and code change as simple as possible. Changes should impact as little code as possible. Avoid massive or complex changes. Everything is about simplicity and minimal impact.

7. **Document Review**: Add a review section to `tasks/todo.md` with a summary of changes and any relevant information

8. **Never Be Lazy**: Find root causes and fix them properly. NO temporary fixes or workarounds. Think like a senior developer. Debug thoroughly and fix issues at their source.

9. **Minimize Code Impact**: All fixes and changes must be as simple as humanly possible. They should ONLY impact necessary code relevant to the task and nothing else. Goal: avoid introducing bugs through minimal, targeted changes.

## Architecture

### Monorepo Structure

- `frontend/` - Nuxt 3 SSR application
- `backend/martinbullman/` - Django REST API
- Docker Compose configuration at root for local development

### Backend (Django)

The Django backend follows a modular app-based architecture:

- **martinbullman/** - Main Django project with settings and root URL configuration
- **core/** - Contact form functionality via `/api/v1/contact`
- **spotify/** - Spotify API integration (`/api/v1/spotify/*`)
- **weather/** - Weather API integration (`/api/v1/weather/*`)
- **assistant/** - AI assistant features (`/api/v1/assistant/*`)
- **utils/** - Shared utilities and helper functions
- **ollama/** - Ollama integration (currently commented out in URLs)

**Key Architecture Notes:**
- All API endpoints are prefixed with `/api/v1/`
- Uses PostgreSQL in production/Docker, SQLite in GitHub Actions
- Environment variables managed via `python-decouple` from `backend/martinbullman/.env`
- Email handled via MailJet API (see `core/email.py`)
- Error logging to `backend/martinbullman/logs/errors.log`

### Frontend (Nuxt 3)

**Component Organization:**
- `components/` - Organized by type: `buttons/`, `cards/`, `headings/`, `icons/`, `layout/`, `music/`, `sections/`, `snackbars/`, `timelines/`
- `composables/` - Reusable composition functions (animations, projects, publications, recaptcha, timeUtils, etc.)
- `stores/` - Pinia stores for state management (notifications, settings)
- `middleware/` - Global middleware (mixpanel analytics tracking)
- `plugins/` - Nuxt plugins (fontawesome, mixpanel, recaptcha, vuetify)
- `pages/` - File-based routing: `index.vue`, `About.vue`, `Contact.vue`, `Projects.vue`
- `layouts/` - App layouts

**Key Architecture Notes:**
- Uses Vuetify 3 for UI components with tree-shaking enabled
- Font Awesome icons registered globally via plugin (see `plugins/fontawesome.ts`)
- Environment-aware configuration via `composables/environment.ts`
- SSR enabled by default
- Google Analytics (gtag) and Mixpanel for analytics
- reCAPTCHA v3 for form protection
- TypeScript types for third-party API responses live in `frontend/types/` (e.g. `types/spotify/`)
- API-heavy sections use a dedicated composable (e.g. `composables/spotify.ts`) that owns all `useFetch` calls and derived computed state for that domain

**`useFetch` TypeScript gotcha:**
Passing an options object to `useFetch<T>(url, options)` causes the return type to expose raw Nuxt internal generics (`PickFrom<_ResT, KeysOf<DataT>>`) instead of resolving cleanly to `T | null`. Always prefer the simple `useFetch<T>(url)` form. If options are required, cast `data` explicitly on return: `data as Ref<T | null>`.

## Development Commands

### Frontend

```bash
# From frontend/ directory
npm install                    # Install dependencies
npm run dev                    # Run development server (http://localhost:3000)
npm run build                  # Production build
npm run preview               # Preview production build
npm run generate              # Generate static site
npm run lint                  # Run ESLint
npm run lint:fix              # Fix ESLint issues
npm run test                  # Run Vitest tests
npm run test:coverage         # Run tests with coverage
```

### Backend

```bash
# From backend/ directory
python -m venv venv                              # Create virtual environment
source venv/bin/activate                         # Activate venv (macOS/Linux)

# From backend/martinbullman/ directory
pip install -r requirements.txt                  # Install dependencies
python manage.py migrate                         # Run database migrations
python manage.py runserver                       # Run dev server (http://localhost:8000)
python manage.py test                            # Run Django tests
python manage.py test app_name.tests.TestClass  # Run specific test

# From backend/ directory
pylint $(git ls-files '*.py')                    # Run linting
```

### Docker Compose

```bash
# From root directory
docker-compose --env-file ./backend/martinbullman/.env build   # Build containers
docker-compose --env-file ./backend/martinbullman/.env up      # Start services
docker-compose down                                             # Stop services
```

**Services:**
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- Nginx: http://localhost:8080
- PostgreSQL: localhost:5432

## Environment Configuration

### Frontend `.env` (frontend/.env)

```
BASE_URL=http://localhost:3000
API_BASE_URL=http://localhost:8000/api/v1
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
GOOGLE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
```

### Backend `.env` (backend/martinbullman/.env)

Required variables include:
- Django: `SECRET_KEY`, `APP_DEBUG`, `APP_ENV`
- Database: `DB_CONNECTION`, `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`
- Email: `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_USERNAME`, `EMAIL_PASSWORD`
- MailJet: `MAILJET_API_KEY`, `MAILJET_API_SECRET`
- Spotify: `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REFRESH_TOKEN`
- Weather: `WEATHER_API_KEY`
- Google: `GOOGLE_RECAPTCHA_SECRET_KEY`
- Other APIs: `NASA_API_KEY`, `OPENAI_API_KEY`, `PAGE_SPEED_API_KEY`, etc.

**Important:** When using Docker, set `DB_HOST=db` (not `127.0.0.1`)

### npm Overrides (`frontend/package.json`)

`vue`, `minimatch`, and `citty` are pinned via npm `overrides` to resolve peer dependency conflicts from Nuxt's internal packages. Do not remove these.

## Testing

### Frontend Tests (Vitest)

Tests located in `frontend/tests/unit/`:
- Component tests mirror the component directory structure
- Store and composable tests
- Uses `@vue/test-utils`, `happy-dom`, and `@pinia/testing`

Run from `frontend/` directory:
```bash
npm run test                                          # Run all tests
npm run test:coverage                                 # Generate coverage report
npx vitest run tests/unit/path/to/test.ts             # Run a single test file
```

### Backend Tests (Django)

Each Django app has a `tests.py` file:
- `core/tests.py`
- `spotify/tests.py`
- `weather/tests.py`
- `assistant/tests.py`
- `utils/tests.py`

Run from `backend/martinbullman/` directory:
```bash
python manage.py test                    # Run all tests
python manage.py test app_name           # Run tests for specific app
python manage.py test app_name.tests.TestClassName  # Run specific test class
```

**Note:** Tests use SQLite when `GITHUB_WORKFLOW` environment variable is set (see `settings.py`)

## CI/CD

GitHub Actions workflows in `.github/workflows/`:

### Backend Pipeline (`deploy-backend.yml`)
1. **Lint** - Runs Pylint on all Python files
2. **Test** - Runs Django tests with required secrets
3. **Build** - Archives backend files as tarball
4. **Deploy** - Deploys to AWS Lightsail, runs migrations, restarts Gunicorn

### Frontend Pipeline (`deploy-frontend.yml`)
Similar structure: lint → test → build → deploy to Lightsail with Nginx restart

**Deployment targets:** AWS Lightsail instance at `martinbullman.xyz`

## Code Style

### Frontend
- ESLint with Nuxt configuration (`@nuxt/eslint`)
- Prettier for formatting
- TypeScript enabled
- Vue 3 Composition API pattern

### Backend
- Pylint for linting with Django plugin (`pylint-django`)
- Follow Django conventions for app structure
- Each app has: `models.py`, `views.py`, `urls.py`, `tests.py`, `constants.py`, `admin.py`

## Working with This Codebase

1. **Adding new backend endpoints:**
   - Create view in appropriate app's `views.py` (inherit from DRF `APIView`)
   - Add URL pattern to app's `urls.py`
   - Ensure app is included in main `martinbullman/urls.py`
   - Add tests to app's `tests.py`

2. **Adding new frontend components:**
   - Place in appropriate subdirectory under `components/`
   - Follow naming: PascalCase for files, kebab-case for template usage
   - Create corresponding test in `tests/unit/components/`

3. **Adding Font Awesome icons:**
   - Import icon in `plugins/fontawesome.ts`
   - Add to `library.add()` call
   - Use as `<font-awesome-icon :icon="['fas', 'icon-name']" />`

4. **Database changes:**
   - Modify models in appropriate app
   - Run `python manage.py makemigrations`
   - Run `python manage.py migrate`
   - Commit migration files

5. **API integrations:**
   - Add credentials to `.env` files
   - Create dedicated app if substantial (like `spotify/`, `weather/`)
   - Use `utils/` for small shared helpers
