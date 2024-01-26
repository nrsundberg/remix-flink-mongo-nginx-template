FROM python:3.11-slim

WORKDIR /server

RUN apt update && \
  apt install -y curl && \
  curl -sSL https://install.python-poetry.org | python3 - --version 1.3.2

ENV PATH="/root/.local/bin:${PATH}"

COPY pyproject.toml .
COPY poetry.lock .

ENV POETRY_VIRTUALENVS_CREATE=false

COPY server ../server
RUN poetry install

CMD FLASK_DEBUG=1 python3 -m flask run --host=0.0.0.0 -p 9091