# use node.js as the base image.
FROM node:20

WORKDIR /app

# copy and install dependencies.
COPY package*.json ./
RUN npm install

# copy the rest of the app's source code.
COPY . .

# expose the default Vue port.
EXPOSE 3000

# command for hot-reload in development.
CMD ["npm", "run", "dev"]
