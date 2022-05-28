# bind-mount-extension

A sample Docker extension to demonstrate how to bind mount a dir to the extension container, and list the content of the bind-mounted file.

## Getting started

Edit the [docker-compose.yaml](./docker-compose.yaml#L5) file to set the path of the host directory you want to bind-mount to the extension container.

Then, build and install the Docker Extension:

```cli
docker build -t felipecruz/bind-mount-extension:latest .
docker extension install felipecruz/bind-mount-extension:latest
```
