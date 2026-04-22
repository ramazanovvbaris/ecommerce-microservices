# 1. Hansı əsas image-dən başlayırıq
FROM node:24-alpine

# 2. Konteyner içində işçi qovluq
WORKDIR /app

# 3. Əvvəlcə package.json-u kopyala (cache üçün)
COPY package*.json ./

# 4. Asılılıqları qur
RUN npm install --production

# 5. Qalan bütün faylları kopyala
COPY . .

# 6. Hansı portda işləyir
EXPOSE 3001

# 7. Serveri başlat
CMD ["node", "index.js"]
