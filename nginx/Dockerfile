FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./envtemp.conf.template /etc/nginx/templates/
COPY *.crt *.key /etc/ssl/
CMD [ "nginx", "-g", "daemon off;" ]
