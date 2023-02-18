# Labratory-1
## Run app separately from Docker Hub
````
docker run -d -p 80:3000 rpburdin/app
````
Test page http://localhost 
## Build images with docker-compose
````
docker-compose build
````
## Run multiple app instances
The following example will run 2 instances of app:
````
docker-compose up --scale app=2
````
## Shutdown services
````
docker-compose down
````
