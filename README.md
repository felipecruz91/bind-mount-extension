# bind-mount-extension

A sample Docker extension to demonstrate how to bind mount a dir to the extension container, and list the content of the bind-mounted file.

## Getting started

Edit the [docker-compose.yaml](./docker-compose.yaml#L5) file to set the path of the host directory you want to bind-mount to the extension container.

Then, build and install the Docker Extension:

```cli
docker build -t felipecruz/bind-mount-extension:latest .
docker extension install felipecruz/bind-mount-extension:latest
```

Note that Docker Compose can expand the `~` sign (i.e. home), but in the context of extensions a relative path `./` won't work. That is because the path is relative to where the compose command is executed, which in the case of extensions, is at `~/Containers/com.docker.docker/Data/extensions/<your-extension>/vm` (in MacOS).

Therefore you can bind-mount a directory using the `~` as follows:

```YAML
    volumes:
      - ~/src/tmp/bind-mount-extension/data:/tmp
```
