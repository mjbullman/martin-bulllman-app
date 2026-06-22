# base image with python.
FROM python:3.12.2-slim

WORKDIR /app

# install system dependencies for psycopg2.
RUN apt-get update && \
    apt-get install -y libpq-dev gcc && \
    rm -rf /var/lib/apt/lists/*

# install python dependencies first for layer caching.
COPY ./martinbullman/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# copy application source.
COPY ./martinbullman /app

# create logs directory required by Django file handler.
RUN mkdir -p /app/logs

EXPOSE 8000

CMD ["gunicorn", "martinbullman.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "3"]
