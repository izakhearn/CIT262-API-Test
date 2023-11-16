from node:alpine 

workdir /usr/app

copy package.json /usr/app

copy server.js /usr/app

run npm install

expose 3000

cmd ["node", "server.js"]