# Labratory-1
## Docker Hub
### Run app separately from Nginx using Docker Hub
````
docker run -d -p 80:3000 rpburdin/app
````
Test page http://localhost 
## Docker Compose
### Build images with docker-compose
````
git clone https://github.com/Frodo-Web/Labratory-1.git
cd Labratory-1
docker-compose build
````
### Run multiple app instances
By default docker-compose.yml is configured to run 2 app instances:
````
docker-compose up
````
You can override this and run even more instances, for example 10:
````
docker-compose up --scale app=10
````
This will create 3 containers:
- labratory-1_app_1
- labratory-1_app_2
- labratory-1_nginx_1 <br>

And network with the default driver (bridge):

- labratory-1_default

You can view machine's hostname by refreshing this page https://localhost/hostname
### Shutdown services
````
docker-compose down
````
