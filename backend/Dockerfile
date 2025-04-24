# base image with python.
FROM python:3.12.2

WORKDIR /app

# copy the backend/martinbullman directory into the container.
COPY ./martinbullman /app

# install system dependencies for psycopg2.
RUN apt-get update && \
    apt-get install -y libpq-dev gcc && \
    rm -rf /var/lib/apt/lists/*

# install python dependencies.
COPY ./martinbullman/requirements.txt .
RUN pip install -r requirements.txt

# copy application files.
COPY . .

# expose django’s default port.
EXPOSE 8000
