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
## Test Nginx TLS 1.3 support
````
curl -k -I -v --tlsv1.3 --tls-max 1.3 https://localhost
````
- -k: Skip the verification step and proceed without checking. Without this curl verifies the server's TLS certificate before it continues: that the certificate contains the right name which matches the host name used in the URL and that the certificate has been signed by a CA certificate present in the cert store. So, this option is usefull with self-signed certificates.
- -I: Show document header info only
- -v: Verbose outputs
- --tlsv1.3: Use given TLS version
- --tls-max VERSION : Set maximum allowed TLS version
