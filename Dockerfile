FROM node:18
COPY . app/
WORKDIR app
# RUN npm install -g nodemon
RUN npm install
EXPOSE 3000
# ENTRYPOINT ["nodemon", "build/index.js"]  
CMD ["npm", "run", "start"]