# industryhack-service
Simple service example that is demonstrates what it takes to run an application in a docker container with io.js.

## Usage

You need to have Docker installed to run the application.

    docker build -t industryhack .                  # Build application
    docker run --rm -p 9000:3000 industryhack       # Runs application and maps the host port 9000 to container port 3000 that is exposed in Dockerfile

## Note
If you are running on OSX or Windows systems the IP of the container is needed to connect to it.

    echo $(boot2docker ip)
    192.168.59.103                                  # Instead of connecting to localhost:9000 / 127.0.0.1:9000 -> Go to 192.168.59.103 with browser
