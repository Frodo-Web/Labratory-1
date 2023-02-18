FROM node:18.7.0-alpine
RUN mkdir -p /home/node/WebApp/node_modules && chown -R node:node /home/node/WebApp 
WORKDIR /home/node/WebApp
USER node
RUN npm init -y && npm install express
COPY --chown=node:node . .
EXPOSE 3000
CMD [ "node", "app.js" ]
