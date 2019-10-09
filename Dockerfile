FROM Node

WORKDIR /app

#RUN apt-get update && \          Couldn't figure this business out
#    apt-get upgrade -y && \
#    apt-get install -y git

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "service.js"]

