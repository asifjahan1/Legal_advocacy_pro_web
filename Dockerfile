# ---------------------------------------
# STAGE 1: Build (Node.js)
# ---------------------------------------
FROM node:20-alpine AS builder

WORKDIR /app

# ১. প্যাকেজ ফাইল কপি এবং ইন্সটল
COPY package*.json ./
RUN npm ci

# ২. বাকি সব ফাইল কপি (কোড)
COPY . .

# ৩. Vite বিল্ড (এটি 'dist' ফোল্ডার তৈরি করবে)
RUN npm run build

# ---------------------------------------
# STAGE 2: Serve (Nginx)
# ---------------------------------------
FROM nginx:alpine

# ৪. আমাদের কাস্টম Nginx কনফিগ বসানো
COPY nginx.conf /etc/nginx/conf.d/default.conf

# ৫. বিল্ড ফোল্ডার (dist) Nginx-এ নিয়ে আসা
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]