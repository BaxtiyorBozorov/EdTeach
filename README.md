# EdTech API

Bu loyiha o'quv markazlari uchun kurslar va foydalanuvchilarni boshqarish imkonini beruvchi RESTful API hisoblanadi. Loyiha Express.js va TypeScript yordamida ishlab chiqilgan.

## 🚀 Texnologiyalar
- **Express.js** – Backend server
- **TypeScript** – Kodingni xavfsiz va tizimli qilish uchun
- **MongoDB** – Ma'lumotlarni saqlash uchun
- **Mongoose** – MongoDB bilan ishlash uchun ORM
- **Postman** – API hujjatlarini yaratish va test qilish uchun

## 📂 Loyiha Tuzilishi
```
📁 src
 ┣ 📂 common          # Umumiy konfiguratsiyalar
 ┣ 📂 handler         # Controller funksiyalari
 ┣ 📂 models          # Mongoose modellari
 ┣ 📂 routes          # API marshrutlari (Routes)
 ┣ 📜 app.ts         # Asosiy server
```

## ⚙️ O'rnatish

```bash
# Repositoryni klonlash
git clone <repository-url>
cd EdTech-API

# Kerakli paketlarni o'rnatish
yarn install  # yoki npm install
```

## ▶️ Ishga tushirish

```bash
# Development rejimida ishga tushirish
npm run dev

# Production rejimida ishga tushirish
npm run build
npm run start
```

## 🔥 API Endpoints

| Method | Endpoint           | Tavsif |
|--------|--------------------|--------|
| `POST` | `/courses/create`  | Yangi kurs yaratish |
| `GET`  | `/courses/`        | Barcha kurslarni olish |
| `GET`  | `/courses/:id`     | Bitta kursni olish |
| `POST` | `/enrollments`     | O'quvchini kursga yozish |
| `GET`  | `/progress/:id`    | O'quvchining progressini ko'rish |


## 🛠 Muhit O'zgaruvchilari (Environment Variables)

Loyihani ishlatish uchun `.env` faylini yaratib quyidagi qiymatlarni qo'shing:

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/edtech
JWT_SECRET=your_secret_key
```

## 🤝 Hissa Qo'shish
Agar loyiha bo‘yicha takliflaringiz yoki xatolar bo‘lsa, **Pull Request** yoki **Issue** orqali bildiring.



