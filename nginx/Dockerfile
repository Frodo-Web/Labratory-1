FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY *.crt *.key /etc/ssl/
#ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
