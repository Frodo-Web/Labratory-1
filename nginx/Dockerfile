FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY *.crt *.key /etc/ssl/
CMD [ "nginx", "-g", "daemon off;" ]
