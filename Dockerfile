FROM registry.gitlab.aisoftware.com/ops/dockerfiles/aisoftware-base:nodejs-18.18.0

WORKDIR /afn/c3

COPY package*.json ./

RUN npm install

COPY . .

ENTRYPOINT ["npm", "run", "build"]
