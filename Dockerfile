FROM node:alpine
COPY . /nest-crud 
WORKDIR /nest-crud
RUN npm install
RUN npm run build
EXPOSE 3000
CMD npm run start:dev