FROM node:20
WORKDIR /app

# 1. Copiar dependencias primero
COPY package*.json ./
# 2. Instalar
RUN npm install
# 3. Copiar todo lo demás
COPY . .
# 4. Compilar
RUN npm run build

EXPOSE 3000
CMD ["node", "dist/main"]