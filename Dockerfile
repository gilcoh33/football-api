FROM node:carbon
EXPOSE 8000

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

HEALTHCHECK --interval=1m --timeout=12s --retries=3 CMD curl --fail http://localhost:8000/health || exit 1
CMD ["npm", "start"]

