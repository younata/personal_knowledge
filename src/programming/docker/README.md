# Docker

Docker is cool.

## Dockerfiles

`FROM` is needed at the top of the Dockerfile, this specifies the image you're building on.

`RUN` will run a shell command at image-build-time. Use these sparingly, to reduce the amount of layers created.

## Pushing

Need to tag the image in your dockerhub username

e.g. `docker build -t younata/my-image .`

Need to login: `docker login`

And push: `docker push younata/my-image:latest`
