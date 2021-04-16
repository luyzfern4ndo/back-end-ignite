# Imagem
FROM node

# Diretório onde as pastas serão contidas
WORKDIR /usr/app

COPY package.json ./

# Baixar as dependências { npm install -- }
RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]

# DOCKER COMPOSE
