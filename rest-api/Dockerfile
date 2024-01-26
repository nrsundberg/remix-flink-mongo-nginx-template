FROM python:3.10-alpine

RUN apk update && apk add git

RUN addgroup -S docker && \
  adduser -S --shell /bin/bash --ingroup docker vscode

# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /

CMD ["python3", "./server/app.py"]
