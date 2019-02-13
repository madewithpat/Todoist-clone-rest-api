FROM node:10.15.1

# Create app directory
RUN mkdir -p /usr/src/todoist-clone-rest-api
WORKDIR /usr/src/todoist-clone-rest-api

# Install app dependencies
COPY package.json /usr/src/todoist-clone-rest-api
COPY package-lock.json /usr/src/todoist-clone-rest-api
RUN npm install --quiet

# Bundle app source
COPY . /usr/src/todoist-clone-rest-api

CMD ["npm", "start"]
