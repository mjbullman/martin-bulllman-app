# Disable the Assistant greeting endpoint (OpenAI token drain)

## Problem

`GET /api/v1/assistant/greeting` was public, unauthenticated, and unused by the frontend, but
every request created a new OpenAI assistant + thread and ran `gpt-4o` with `code_interpreter`.
Crawler and scanner traffic was therefore billing the OpenAI account continuously.

Contributing factors:

- Endpoint was a GET, so any bot that probes URLs triggered a paid run.
- `throttle_classes = [UserRateThrottle]` only applies to authenticated users; anonymous traffic
  fell through to `AnonRateThrottle`, set to `100000/hour` in `settings.py`.
- `code_interpreter` was enabled although the prompt needs no code execution (billed per session).
- Assistant objects were never deleted, so they accumulated in the account.

## Todo

- [x] Comment out `Greeting.get` in `backend/martinbullman/assistant/views.py`
- [x] Comment out the now-unused imports (`config`, `OpenAI`, `Response`, `RequestException`)
      and the `extract_ai_message` helper, so Pylint's `unused-import` does not fail CI
- [x] Verify Pylint still scores 10.00/10
- [x] Verify both assistant routes now return 405 with no OpenAI call
- [x] Rotate / remove the OpenAI API key (done by Martin outside the repo)

## Before re-enabling

- Make it a POST behind reCAPTCHA, matching the contact form.
- Create the assistant once and store the ID in `constants.py` or the env; do not create one
  per request.
- Drop `code_interpreter` unless execution is genuinely required.
- Set a realistic anon throttle (e.g. `10/hour`) rather than the current `100000/hour`.
- Catch `openai.APIError`, not `requests.exceptions.RequestException`, and log through the
  configured logger instead of `print`.
- Fix the copy-pasted `"Error fetching Spotify profile"` message.
- Note the Assistants API is on OpenAI's deprecation path; prefer the Responses API.

## Review

Changed one file, `backend/martinbullman/assistant/views.py`. The `Greeting.get` handler, the
`extract_ai_message` helper and the four imports they needed are commented out rather than
deleted, keeping the work recoverable. The `Chat` and `Greeting` classes, their
`throttle_classes`, and the URL routes are untouched, so nothing else in the project moves.

Verification:

- `pylint martinbullman/assistant/views.py` -> 10.00/10
- `/api/v1/assistant/greeting` and `/api/v1/assistant/chat` both return `405 Allow: OPTIONS`,
  so no OpenAI call is reachable.
- `GITHUB_WORKFLOW=1 python manage.py test` -> `Ran 8 tests, FAILED (failures=6)`. All six
  failures are pre-existing `spotify.tests.SpotifyTest` cases that call the live Spotify API
  with an expired refresh token. They are unrelated to this change.

## Follow-ups not done here

- The six failing Spotify tests hit the live API instead of using mocks, so the backend test
  job depends on valid third-party credentials.
- Live Spotify client ID, client secret and refresh token are printed into test output by the
  error handler in the Spotify app. Those credentials should be rotated and the log line
  should stop interpolating the request URL.
